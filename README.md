# SnowDispatcher

## Prérequis

- .NET SDK 8.0.416 pour Windows x64 : [télécharger l'installateur officiel](https://dotnet.microsoft.com/en-us/download/dotnet/thank-you/sdk-8.0.416-windows-x64-installer) ;
- Node.js et npm ;
- XAMPP avec MySQL et phpMyAdmin.

## Installation et lancement

Respecter l'ordre des étapes suivantes.

### 1. Initialiser la base de données

1. Ouvrir **XAMPP** et démarrer le serveur **MySQL**.
2. Ouvrir `http://localhost/phpmyadmin`.
3. Choisir l'onglet **Importer**.
4. Sélectionner le script `database/snowdispatcher.sql`.
5. Lancer l'import du script.

Le script supprime puis recrée entièrement la base `snowdispatcher`. Il ne faut pas l'exécuter sur une base contenant des données à conserver.

Avec une installation XAMPP standard utilisant le compte `root` sans mot de passe, aucune configuration supplémentaire n'est nécessaire. La connexion utilisée est :

```text
Server=127.0.0.1;Port=3306;Database=snowdispatcher;User=root;Password=;
```

Si le compte MySQL possède un mot de passe personnalisé, modifier la chaîne `SnowDispatcher` dans `backend/Api/appsettings.Development.json`.

### 2. Lancer le backend

Dans VS Code, ouvrir un terminal intégré à la racine du dossier `backend/Api`, puis exécuter :

```powershell
dotnet run
```

L'API démarre sur `http://localhost:5102`.

### 3. Lancer le frontend

Après le backend, ouvrir un deuxième terminal intégré à la racine du dossier `frontend/SnowDispatcher.Frontend`, puis exécuter :

```powershell
npm install
npm start
```

`npm install` est nécessaire uniquement lors de la première installation. Pour les démarrages suivants, exécuter directement `npm start`.

L'application est ensuite accessible sur `http://localhost:4200`.

SnowDispatcher est une application web de gestion et de répartition de mails entre des agents. Un administrateur peut consulter les mails reçus, les attribuer à un agent, gérer les comptes agents et visualiser des statistiques. Un agent peut consulter les mails qui lui sont assignés et les marquer comme traités.

## Fonctionnalités

### Administrateur

- se connecter avec un compte administrateur ;
- consulter tous les mails, attribués ou non ;
- rechercher et filtrer les mails ;
- attribuer, réattribuer ou désattribuer un mail ;
- consulter la charge de chaque agent ;
- consulter les mails attribués à un agent ;
- **ajouter un compte agent traitant les mails** ;
- modifier le mot de passe d'un agent ;
- supprimer un agent et désattribuer automatiquement ses mails ;
- consulter les statistiques par priorité, statut et nombre d'enfants.

### Agent

- se connecter avec un compte agent ;
- consulter uniquement les mails qui lui sont attribués ;
- marquer une tâche comme traitée.

### Gestion du staff

- consulter les membres du personnel ;
- afficher les membres regroupés selon leur niveau hiérarchique.

## Technologies

- frontend : Angular 17, TypeScript, RxJS et Angular Router ;
- backend : ASP.NET Core 8 Minimal APIs et C# ;
- accès aux données : Dapper et MySql.Data ;
- base de données : MariaDB/MySQL ;
- sécurité : authentification JWT et autorisations par rôles `admin`/`agent`.

## Architecture

Le backend est séparé en trois projets :

```text
backend/Api             endpoints HTTP, JWT et configuration
backend/Core            modèles métier, interfaces et cas d'utilisation
backend/Infrastructure  Dapper, repositories, gateways et accès MySQL
```

Chemin simplifié d'une fonctionnalité :

```text
Composant Angular
  -> service Angular / HttpClient
  -> endpoint ASP.NET Core
  -> use case du Core
  -> gateway
  -> repository Dapper
  -> MariaDB/MySQL
```

## Comptes de démonstration

| Rôle | Identifiant | Mot de passe |
|---|---|---|
| Administrateur | `admin` | `admin123` |
| Agent | `carole` | `agent123` |

L'administrateur peut créer d'autres comptes agents depuis l'onglet **Agents** avec le bouton **Ajouter un agent**. Les comptes utilisateurs servent à l'authentification et au traitement des mails. Les membres du staff sont enregistrés séparément et ne sont pas des comptes utilisateurs.

## Routes principales de l'API

### Authentification

```text
POST /api/login
```

### Administration

```text
GET    /api/admin/agents
POST   /api/admin/agents
GET    /api/admin/agents/{id}/mails
PUT    /api/admin/agents/{id}/password
DELETE /api/admin/agents/{id}
GET    /api/admin/mail-assignments
PUT    /api/admin/mails/{mailId}/assign
GET    /api/admin/stats/by-priority
GET    /api/admin/stats/by-status
GET    /api/admin/stats/by-children
```

### Staff et agents

Les autres routes sont regroupées dans les fichiers `StaffRoutes`, `AgentRoutes`, `MailRoutes`, `TaskRoutes` et `DispatchRoutes` du projet `backend/Api`.

## Vérifier le projet avant livraison

Compiler le backend :

```powershell
dotnet build SnowDispatcher.sln
```

Compiler le frontend :

```powershell
cd frontend/SnowDispatcher.Frontend
npm run build
```

Parcours manuels à vérifier :

1. connexion avec `admin` ;
2. ajout d'un nouvel agent ;
3. attribution puis réattribution d'un mail ;
4. consultation des statistiques ;
5. connexion avec `carole` ;
6. consultation et traitement d'une tâche ;
7. contrôle des restrictions de rôle.

## Problèmes fréquents

### MySQL ne démarre pas dans XAMPP

Si le journal affiche une erreur `10048` ou indique que le port `3306` est déjà utilisé, une autre instance de `mysqld.exe` fonctionne déjà. Arrêter l'instance concurrente ou utiliser un autre port avant de relancer MySQL depuis XAMPP.

### Le backend ne se connecte pas à la base

Vérifier :

- que MariaDB/MySQL est démarré ;
- que la base `snowdispatcher` a bien été importée ;
- le port, l'utilisateur et le mot de passe de la chaîne de connexion ;
- qu'une seule instance MySQL utilise le port configuré.

### Le SDK .NET demandé est introuvable

Le fichier `Global.json` impose le SDK .NET `8.0.416`. Si le terminal affiche `A compatible .NET SDK was not found` ou signale que `Microsoft.AspNetCore.App` est introuvable, installer le [SDK .NET 8.0.416 pour Windows x64](https://dotnet.microsoft.com/en-us/download/dotnet/thank-you/sdk-8.0.416-windows-x64-installer), puis relancer `dotnet run`.

### La commande `ng` n'est pas reconnue

Dans un terminal ouvert à la racine de `frontend/SnowDispatcher.Frontend`, exécuter d'abord :

```powershell
npm install
```

Relancer ensuite l'application avec `npm start`.

### Le frontend ne communique pas avec l'API

Vérifier que le backend écoute bien sur `http://localhost:5102` et que cette même adresse apparaît dans les fichiers `src/environnement/environnement*.ts`.

## Structure utile du dépôt

```text
SnowDispatcher/
├── backend/
│   ├── Api/
│   ├── Core/
│   └── Infrastructure/
├── database/
│   └── snowdispatcher.sql
├── frontend/
│   └── SnowDispatcher.Frontend/
├── README.md
└── SnowDispatcher.sln
```
