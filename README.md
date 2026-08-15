# SnowDispatcher

## Demarrage rapide apres un redemarrage du PC

1. Demarrer **MySQL** dans XAMPP.
2. Depuis la racine du projet, executer :

```powershell
.\demarrer-snowdispatcher.ps1
```

Le script verifie MariaDB sur le port `3306`, puis demarre l'API sur `5102` et Angular sur `4200`. Pour verifier rapidement l'API, ouvrir `http://localhost:5102/`. Pour verifier la connexion a la base, ouvrir `http://localhost:5102/debug/db`.

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
- associer facultativement ce compte à un membre du staff ;
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

## Prérequis

- .NET SDK 8.0 ;
- Node.js et npm ;
- Angular CLI 17, ou utilisation de la CLI locale avec `npm` ;
- MariaDB 10.4+ ou MySQL 8+ ;
- XAMPP peut être utilisé pour MariaDB et phpMyAdmin.

## 1. Installer la base de données

Le script complet se trouve dans :

```text
database/snowdispatcher.sql
```

Attention : ce script supprime puis recrée entièrement la base `snowdispatcher`. Ne pas l'exécuter sur une base contenant des données à conserver.

### Avec phpMyAdmin

1. Démarrer MySQL depuis XAMPP.
2. Ouvrir `http://localhost/phpmyadmin`.
3. Choisir l'onglet **Importer**.
4. Sélectionner `database/snowdispatcher.sql`.
5. Lancer l'import.

### Avec le client MySQL/MariaDB

Depuis la racine du projet :

```powershell
mysql -u root -p < database/snowdispatcher.sql
```

Si le compte `root` n'a pas de mot de passe :

```powershell
mysql -u root < database/snowdispatcher.sql
```

## 2. Configurer le backend

Par défaut, l'application utilise cette connexion locale :

```text
Server=127.0.0.1;Port=3306;Database=snowdispatcher;User=root;Password=;
```

Pour utiliser d'autres identifiants, ajouter une section `ConnectionStrings` dans `backend/Api/appsettings.Development.json` :

```json
{
  "ConnectionStrings": {
    "SnowDispatcher": "Server=127.0.0.1;Port=3306;Database=snowdispatcher;User=root;Password=votre_mot_de_passe;"
  }
}
```

La clé JWT présente dans `appsettings.json` est une clé de développement. Pour un déploiement réel, elle doit être remplacée par une valeur secrète fournie par variable d'environnement ou gestionnaire de secrets.

## 3. Lancer le backend

Depuis la racine du projet :

```powershell
dotnet restore SnowDispatcher.sln
dotnet run --project backend/Api/Api.csproj --urls http://localhost:5102
```

L'API écoute alors sur :

```text
http://localhost:5102
```

## 4. Lancer le frontend

Dans un second terminal :

```powershell
cd frontend/SnowDispatcher.Frontend
npm install
npm start
```

Ouvrir ensuite l'adresse affichée par Angular, généralement :

```text
http://localhost:4200
```

Le frontend est configuré pour appeler le backend sur `http://localhost:5102`.

## Comptes de démonstration

| Rôle | Identifiant | Mot de passe |
|---|---|---|
| Administrateur | `admin` | `admin123` |
| Agent | `carol` | `agent123` |

L'administrateur peut créer d'autres comptes agents depuis l'onglet **Agents** avec le bouton **Ajouter un agent**. L'identifiant du staff est facultatif. S'il est fourni, il doit correspondre à un membre existant et ne peut être associé qu'à un seul compte utilisateur.

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
5. connexion avec `carol` ;
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
