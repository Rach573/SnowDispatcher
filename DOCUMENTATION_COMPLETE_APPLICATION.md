# SnowDispatcher - Documentation complete de l'application

Ce document decrit l'etat actuel de l'application SnowDispatcher, son architecture, ses flux principaux, sa securite, ses routes API, son frontend Angular, et une methode pratique pour ajouter de nouvelles fonctionnalites.

Il sert a deux choses :

- faire l'etat de l'application pour expliquer le projet ;
- guider les futures modifications sans casser l'architecture.

## 1. Objectif de l'application

SnowDispatcher est une application de dispatching de mails.

Elle permet :

- a un administrateur de consulter les mails a traiter ;
- d'attribuer ou desattribuer des mails a des agents ;
- de consulter la charge de travail des agents ;
- de changer le mot de passe d'un agent ;
- de supprimer un compte agent ;
- de consulter le staff de l'entreprise ;
- a un agent connecte de consulter ses mails attribues ;
- a un agent de marquer un mail comme traite.

L'application est separee en deux parties :

```text
frontend/SnowDispatcher.Frontend  -> Angular
backend                           -> API .NET + Core + Infrastructure
```

## 2. Architecture generale

L'application suit une architecture en couches.

```text
[Frontend Angular]
       |
       | Requetes HTTP
       v
[Api .NET]
       |
       | EndPoints Minimal API
       v
[Core]
       |
       | UseCases + interfaces Gateway
       v
[Infrastructure]
       |
       | Gateways + Repositories + Dapper
       v
[MySQL]
```

Chaque couche a une responsabilite precise.

```text
Frontend
= affichage, formulaires, navigation, appel HTTP

Api
= expose les routes HTTP, applique l'authentification et l'autorisation

Core
= logique metier, use cases, contrats

Infrastructure
= acces SQL, mapping, Dapper, connexion MySQL

MySQL
= stockage des donnees
```

Le principe important :

```text
L'API ne doit pas contenir de SQL.
Le Core ne doit pas connaitre MySQL ni Dapper.
L'Infrastructure implemente les acces techniques.
```

## 3. Structure backend

### 3.1 Projet Api

Chemin :

```text
backend/Api
```

Role : exposer les routes HTTP.

Fichiers importants :

```text
backend/Api/Program.cs
backend/Api/EndPoints/UserRoutes.cs
backend/Api/EndPoints/AdminRoutes.cs
backend/Api/EndPoints/AgentRoutes.cs
backend/Api/EndPoints/StaffRoutes.cs
backend/Api/EndPoints/MailRoutes.cs
backend/Api/EndPoints/TaskRoutes.cs
backend/Api/EndPoints/DispatchRoutes.Cs
backend/Api/Models/*.cs
```

`Program.cs` configure :

- CORS ;
- les services Core ;
- les services Infrastructure ;
- l'authentification JWT ;
- les policies d'autorisation ;
- le branchement des routes.

Les routes sont branchees ici :

```csharp
app.MapUserRoutes();
app.MapStaffRoutes();
app.MapMailRoutes();
app.MapTaskRoutes();
app.MapDispatchRoutes();
app.MapAgentRoutes();
app.MapAdminRoutes();
```

### 3.2 Projet Core

Chemin :

```text
backend/Core
```

Role : contenir la logique metier.

Fichiers importants :

```text
backend/Core/UseCases/Account
backend/Core/UseCases/Admin
backend/Core/UseCases/Agent
backend/Core/UseCases/Assignment
backend/Core/UseCases/Dispatch
backend/Core/UseCases/Mail
backend/Core/UseCases/Staff
backend/Core/UseCases/Tache
backend/Core/IGateways
backend/Core/Models
```

Exemple :

```text
AdminRoutes.cs
  appelle IAdminUseCases

AdminUseCases.cs
  appelle IUserGateway et ITacheGateway

UserGateway.cs / TacheGateway.cs
  passent vers Infrastructure
```

Les services Core sont enregistres dans :

```text
backend/Core/Extensions/ServiceCollectionExtension.cs
```

### 3.3 Projet Infrastructure

Chemin :

```text
backend/Infrastructure
```

Role : acceder aux donnees et implementer les contrats du Core.

Fichiers importants :

```text
backend/Infrastructure/Data/MySqlConnectionFactory.cs
backend/Infrastructure/Gateways/*.cs
backend/Infrastructure/Repositories/*.cs
backend/Infrastructure/Models/*.cs
backend/Infrastructure/Mappers/*.cs
```

La connexion MySQL est centralisee dans :

```text
backend/Infrastructure/Data/MySqlConnectionFactory.cs
```

Elle lit la connection string :

```csharp
configuration.GetConnectionString("SnowDispatcher")
```

Si elle n'existe pas, elle utilise :

```text
Server=localhost;Database=snowdispatcher;User=root;Password=;
```

## 4. Structure frontend

Chemin :

```text
frontend/SnowDispatcher.Frontend
```

Fichiers importants :

```text
src/app/app-routing.module.ts
src/app/guards/auth.guard.ts
src/app/services/auth.service.ts
src/app/services/admin.service.ts
src/app/services/agent-dashboard.service.ts
src/app/services/staff.service.ts
src/app/components/login
src/app/components/admin-panel
src/app/components/email-dashboard
src/app/components/staff-management
src/environnement/environnement.ts
src/environnement/environnement.developpement.ts
```

### 4.1 Routes Angular

Routes principales :

```text
/login      -> page de connexion
/dashboard  -> dashboard agent
/admin      -> panneau admin
/staff      -> gestion / consultation staff
```

Protection frontend :

```ts
data: { requireAgent: true }
data: { requireAdmin: true }
```

Le guard Angular se trouve dans :

```text
src/app/guards/auth.guard.ts
```

Important : le guard frontend ameliore l'experience utilisateur, mais la vraie securite est cote backend.

## 5. Securite et authentification

### 5.1 JWT

Le backend utilise JWT.

Lors du login, l'API genere un token dans :

```text
backend/Api/EndPoints/UserRoutes.cs
```

Le token contient :

```text
Name           -> username
NameIdentifier -> userId
Role           -> admin ou agent
Expiration     -> configurable
```

Configuration dans :

```text
backend/Api/appsettings.json
```

```json
"Jwt": {
  "Issuer": "SnowDispatcher.Api",
  "Audience": "SnowDispatcher.Frontend",
  "Key": "...",
  "ExpireTimeInMinutes": "120"
}
```

### 5.2 Policies backend

Dans `Program.cs` :

```csharp
options.AddPolicy("AdminOnly", policy => policy.RequireRole("admin"));
options.AddPolicy("AgentOnly", policy => policy.RequireRole("agent"));
options.AddPolicy("AuthenticatedUser", policy => policy.RequireRole("admin", "agent"));
```

Signification :

```text
AdminOnly
= seuls les users avec role admin passent

AgentOnly
= seuls les users avec role agent passent

AuthenticatedUser
= admin ou agent connecte
```

### 5.3 Routes securisees

```text
/api/admin/* -> AdminOnly
/api/agent/* -> AgentOnly
/api/staff/* -> AdminOnly
/api/mails/* -> AuthenticatedUser
```

Routes encore a surveiller :

```text
/api/tasks/*
/api/dispatches/*
```

Elles existent encore comme routes generales. Si elles sont utilisees dans l'application finale, il faudra leur appliquer une policy adaptee.

### 5.4 Frontend et token

Le frontend stocke le user connecte dans `localStorage` sous la cle :

```text
user
```

L'objet stocke ressemble a :

```json
{
  "username": "admin",
  "role": "admin",
  "userId": 1,
  "token": "eyJ..."
}
```

Le service central est :

```text
src/app/services/auth.service.ts
```

Il fournit :

```ts
isLoggedIn()
isAdmin()
isAgent()
getCurrentUser()
getAuthHeaders()
logout()
```

Les autres services appellent :

```ts
this.authService.getAuthHeaders()
```

pour envoyer :

```http
Authorization: Bearer <token>
```

## 6. Roles : admin, agent, staff

Il faut bien separer ces notions.

```text
admin
= compte utilisateur avec role admin dans users
= peut utiliser les routes /api/admin et /api/staff

agent
= compte utilisateur avec role agent dans users
= peut utiliser les routes /api/agent

staff
= personne de la table staff
= fiche d'une personne, pas forcement un compte de connexion
```

Un agent peut etre lie a un membre du staff via :

```text
users.staff_id -> staff.id
```

## 7. Routes API principales

### 7.1 UserRoutes

Fichier :

```text
backend/Api/EndPoints/UserRoutes.cs
```

Route :

```text
POST /api/login
```

Body :

```json
{
  "username": "admin",
  "password": "admin123"
}
```

Reponse :

```json
{
  "token": "...",
  "role": "admin",
  "userId": 1,
  "username": "admin"
}
```

### 7.2 AdminRoutes

Fichier :

```text
backend/Api/EndPoints/AdminRoutes.cs
```

Protection :

```csharp
.RequireAuthorization("AdminOnly")
```

Routes :

```text
GET    /api/admin/agents
GET    /api/admin/agents/{id}/mails
GET    /api/admin/mail-assignments
PUT    /api/admin/mails/{mailId}/assign?agentUserId={id}
PUT    /api/admin/agents/{id}/password
DELETE /api/admin/agents/{id}
```

Role : gerer les comptes agents et les attributions de mails.

### 7.3 AgentRoutes

Fichier :

```text
backend/Api/EndPoints/AgentRoutes.cs
```

Protection :

```csharp
.RequireAuthorization("AgentOnly")
```

Routes :

```text
GET /api/agent/mails?userId={id}
PUT /api/agent/tasks/{taskId}/treated?userId={id}
```

Role : permettre a un agent de voir ses mails et de les marquer comme traites.

Point d'amelioration important :

```text
Actuellement le userId est encore passe en query string.
Plus propre : lire le userId depuis le JWT avec ClaimTypes.NameIdentifier.
```

### 7.4 StaffRoutes

Fichier :

```text
backend/Api/EndPoints/StaffRoutes.cs
```

Protection :

```csharp
.RequireAuthorization("AdminOnly")
```

Routes :

```text
GET    /api/staff
POST   /api/staff
DELETE /api/staff/{id}
```

Role : gerer les personnes de la table staff.

### 7.5 MailRoutes

Fichier :

```text
backend/Api/EndPoints/MailRoutes.cs
```

Protection :

```csharp
.RequireAuthorization("AuthenticatedUser")
```

Routes :

```text
GET /api/mails
GET /api/mails/{id}
```

Role : consulter les mails.

### 7.6 TaskRoutes et DispatchRoutes

Fichiers :

```text
backend/Api/EndPoints/TaskRoutes.cs
backend/Api/EndPoints/DispatchRoutes.Cs
```

Routes :

```text
GET    /api/tasks
POST   /api/tasks/create?mailId={id}
PUT    /api/tasks/{id}/assign?agentId={id}
DELETE /api/tasks/{id}

POST /api/dispatches/from-mail/{mailId}
```

Ces routes semblent etre des routes metier plus generales ou historiques. Si elles restent accessibles dans l'application finale, il faut definir leur niveau d'autorisation.

## 8. Flux principaux

### 8.1 Login

```text
LoginComponent
  -> AuthService.login(username, password)
  -> POST /api/login
  -> UserRoutes
  -> AccountUseCases.LoginAsync
  -> UserGateway
  -> UserRepository.AuthenticateAsync
  -> MySQL users
  -> JWT retourne au frontend
  -> localStorage user
```

### 8.2 Admin attribue un mail

```text
AdminPanelComponent.assignMail
  -> AdminService.assignMail
  -> PUT /api/admin/mails/{mailId}/assign?agentUserId={id}
  -> AdminRoutes
  -> AssignMailUseCases
  -> TacheGateway
  -> TacheRepository
  -> UPDATE taches
```

### 8.3 Agent consulte ses mails

```text
EmailDashboardComponent.loadMails
  -> AgentDashboardService.getAssignedMails
  -> GET /api/agent/mails?userId={id}
  -> AgentRoutes
  -> AgentUseCases
  -> TacheGateway
  -> TacheRepository
  -> SELECT taches + mail
```

### 8.4 Agent marque un mail comme traite

```text
EmailDashboardComponent.markAsTreated
  -> AgentDashboardService.markAsTreated
  -> PUT /api/agent/tasks/{taskId}/treated?userId={id}
  -> AgentRoutes
  -> AgentUseCases
  -> TacheGateway
  -> TacheRepository
  -> UPDATE taches
```

### 8.5 Admin change un mot de passe agent

```text
AdminPanelComponent.updatePassword
  -> AdminService.updateAgentPassword
  -> PUT /api/admin/agents/{id}/password
  -> AdminRoutes
  -> AccountUseCases.UpdateAgentPasswordAsync
  -> HashPassword
  -> UserGateway
  -> UserRepository.UpdateAgentPasswordHashAsync
  -> UPDATE users SET password_hash = ... WHERE role = 'agent'
```

## 9. Mot de passe et hash

Les mots de passe ne sont pas determines dans le frontend.

Le frontend envoie seulement :

```json
{
  "username": "...",
  "password": "..."
}
```

Le backend hash le mot de passe dans :

```text
backend/Core/UseCases/Account/AccountUseCases.cs
```

Methode :

```csharp
SHA256(password)
```

La DB stocke le hash dans :

```text
users.password_hash
```

Pour reinitialiser les mots de passe en MySQL :

```sql
UPDATE users
SET password_hash = SHA2('admin123', 256)
WHERE role = 'admin';

UPDATE users
SET password_hash = SHA2('agent123', 256)
WHERE role = 'agent';
```

Exemples actuels testes :

```text
admin / admin123
carol / agent123
jean_dupont / agent123
marie_lefevre / agent123
```

## 10. Configuration locale

### 10.1 Backend

URL locale :

```text
http://localhost:5102
```

Commande :

```bash
dotnet run --project backend/Api/Api.csproj --launch-profile http
```

### 10.2 Frontend

URL locale :

```text
http://localhost:4200
```

Commande :

```bash
npm run start -- --host localhost --port 4200 --configuration development
```

Le fichier de dev est :

```text
src/environnement/environnement.developpement.ts
```

Il doit pointer vers :

```ts
backendUrl: 'http://localhost:5102'
```

Le remplacement est configure dans `angular.json` via `fileReplacements`.

## 11. Ajouter une fonctionnalite : methode generale

Pour ajouter une fonctionnalite, suivre toujours cette logique :

```text
1. Identifier l'ecran frontend concerne.
2. Identifier le service Angular concerne.
3. Identifier la route API a appeler ou a creer.
4. Identifier le UseCase Core concerne ou a creer.
5. Identifier le Gateway Core concerne ou a creer.
6. Modifier ou creer le Repository Infrastructure.
7. Verifier la securite de la route.
8. Tester backend et frontend.
```

Questions a poser avant de coder :

```text
Qui a le droit de faire l'action ? admin, agent, ou les deux ?
La fonctionnalite modifie-t-elle la DB ?
Est-ce une logique d'affichage frontend uniquement ?
Faut-il ajouter une route API ?
Faut-il ajouter une colonne ou table SQL ?
```

## 12. Exemple : ajouter un filtre mails du plus recent au plus ancien

Objectif : ajouter un bouton dans l'interface admin pour trier les mails.

### 12.1 Si les donnees sont deja chargees

Dans ce cas, pas besoin de modifier le backend.

Le composant `AdminPanelComponent` a deja :

```ts
mailAssignments: any[] = [];
visibleMails: any[]
```

On peut ajouter un etat :

```ts
mailSortDirection: 'newest' | 'oldest' = 'newest';
```

Puis dans `visibleMails`, ajouter un tri sur une date, par exemple `receivedAt` :

```ts
.sort((a, b) => {
  const dateA = new Date(a.receivedAt).getTime();
  const dateB = new Date(b.receivedAt).getTime();

  return this.mailSortDirection === 'newest'
    ? dateB - dateA
    : dateA - dateB;
});
```

Ajouter une methode :

```ts
toggleMailSortDirection(): void {
  this.mailSortDirection = this.mailSortDirection === 'newest' ? 'oldest' : 'newest';
}
```

Ajouter un bouton dans le HTML :

```html
<button type="button" class="btn btn-secondary" (click)="toggleMailSortDirection()">
  {{ mailSortDirection === 'newest' ? 'Plus recents' : 'Plus anciens' }}
</button>
```

### 12.2 Quand modifier le backend ?

Modifier le backend si :

- il y a beaucoup de mails ;
- on veut paginer ;
- le tri doit etre fait par SQL ;
- on veut filtrer avant de transferer les donnees au frontend.

Dans ce cas, ajouter des query params :

```text
GET /api/admin/mail-assignments?sort=newest
```

Puis faire circuler le parametre :

```text
AdminRoutes
  -> IAdminUseCases.GetMailAssignmentsAsync(sort)
  -> AdminUseCases
  -> ITacheGateway
  -> TacheRepository
  -> ORDER BY m.received_at DESC ou ASC
```

## 13. Exemple : ajouter une fonctionnalite "ajouter un user"

Objectif : permettre a un admin de creer un compte utilisateur agent.

### 13.1 Decision metier

Il faut definir :

```text
username
password initial
role
staff_id optionnel
```

Dans ton application, il faut probablement limiter la creation a des agents :

```text
role = 'agent'
```

La creation d'un admin doit rester manuelle ou fortement controlee.

### 13.2 Backend : model API

Creer un fichier :

```text
backend/Api/Models/CreateAgentUserRequest.cs
```

Exemple :

```csharp
namespace SnowDispatcher.Api.Models;

public class CreateAgentUserRequest
{
    public string Username { get; set; } = string.Empty;
    public string Password { get; set; } = string.Empty;
    public int? StaffId { get; set; }
}
```

### 13.3 Backend : route admin

Dans `AdminRoutes.cs`, ajouter :

```csharp
group.MapPost("/agents", async (IAdminUseCases useCases, [FromBody] CreateAgentUserRequest request) =>
{
    var id = await useCases.CreateAgentAsync(request.Username, request.Password, request.StaffId);
    return Results.Ok(new { id });
});
```

Cette route sera automatiquement protegee par :

```csharp
.RequireAuthorization("AdminOnly")
```

### 13.4 Core : interface use case

Dans `IAdminUseCases.cs` :

```csharp
Task<int> CreateAgentAsync(string username, string password, int? staffId);
```

Dans `AdminUseCases.cs` :

```csharp
public Task<int> CreateAgentAsync(string username, string password, int? staffId)
{
    // Valider username/password ici ou dans AccountUseCases.
    // Hasher le password avant stockage.
}
```

Comme le hash est deja dans `AccountUseCases`, une solution propre serait de creer une methode dans `IAccountUseCases` ou un service dedie au hash de mot de passe pour eviter la duplication.

### 13.5 Infrastructure : repository

Dans `IUserRepository.cs` :

```csharp
Task<int> CreateAgentAsync(string username, string passwordHash, int? staffId);
```

Dans `UserRepository.cs` :

```sql
INSERT INTO users (username, password_hash, role, staff_id)
VALUES (@username, @passwordHash, 'agent', @staffId);
SELECT LAST_INSERT_ID();
```

### 13.6 Frontend : service admin

Dans `admin.service.ts` :

```ts
createAgent(username: string, password: string, staffId: number | null): Observable<any> {
  return this.http.post<any>(`${this.apiUrl}/agents`, {
    username,
    password,
    staffId
  }, { headers: this.authService.getAuthHeaders() });
}
```

### 13.7 Frontend : composant admin

Dans `AdminPanelComponent`, ajouter :

- un formulaire ;
- une methode `createAgent()` ;
- un appel a `loadAgents()` apres creation.

Exemple :

```ts
createAgent(): void {
  this.adminService.createAgent(this.newUsername, this.newPassword, this.newStaffId).subscribe(() => {
    this.loadAgents();
  });
}
```

## 14. Checklist pour ajouter une route securisee

Avant d'ajouter une route, verifier :

```text
La route appartient-elle a admin, agent, ou les deux ?
Le groupe a-t-il RequireAuthorization ?
Le service Angular envoie-t-il getAuthHeaders() ?
Le backend verifie-t-il aussi la cible de l'action ?
```

Exemple : supprimer un agent.

```text
Qui fait l'action ? admin -> AdminOnly
Qui est la cible ? role agent -> WHERE role = 'agent'
```

Les deux protections sont utiles.

## 15. Tests rapides

### 15.1 Tester le backend

```bash
dotnet build backend/Api/Api.csproj
```

### 15.2 Tester le frontend

```bash
cd frontend/SnowDispatcher.Frontend
npm run build
```

### 15.3 Tester un login API

```bash
POST http://localhost:5102/api/login
Content-Type: application/json

{
  "username": "admin",
  "password": "admin123"
}
```

Reponse attendue :

```text
200 OK + token JWT
```

### 15.4 Tester une route admin

Appeler une route admin sans token doit echouer :

```text
GET /api/admin/agents -> 401
```

Avec un token agent, elle doit echouer :

```text
GET /api/admin/agents -> 403
```

Avec un token admin, elle doit passer :

```text
GET /api/admin/agents -> 200
```

## 16. Points d'amelioration identifies

### 16.1 Lire le userId agent depuis le JWT

Aujourd'hui :

```text
GET /api/agent/mails?userId={id}
```

Mieux :

```text
GET /api/agent/mails
```

Et dans le backend :

```csharp
var userId = httpContext.User.FindFirst(ClaimTypes.NameIdentifier)?.Value;
```

Cela evite qu'un agent change le `userId` dans l'URL pour voir les mails d'un autre agent.

### 16.2 Remplacer les `any` TypeScript par des interfaces

Actuellement, beaucoup de services Angular utilisent `any`.

Mieux : creer des interfaces :

```text
AdminAgent
MailAssignment
CurrentUser
StaffMember
```

### 16.3 Ameliorer le hash des mots de passe

Le backend utilise SHA-256 simple.

Pour une vraie application production, il faudrait utiliser :

```text
BCrypt
PBKDF2
Argon2
```

avec salt et facteur de cout.

### 16.4 Centraliser les erreurs HTTP frontend

Aujourd'hui, les composants gerent eux-memes les erreurs.

Mieux : ajouter un interceptor Angular pour :

- ajouter automatiquement le token ;
- rediriger vers login en cas de 401 ;
- afficher une erreur propre.

### 16.5 Nettoyer les routes historiques

Verifier si `TaskRoutes` et `DispatchRoutes` sont encore utiles dans le flux final. Si oui, les securiser. Sinon, les retirer ou les documenter comme routes techniques.

## 17. Reponse courte pour presenter l'application

SnowDispatcher est une application Angular + .NET permettant a un administrateur de dispatcher des mails vers des agents. L'API est structuree en couches : les endpoints recoivent les requetes, le Core contient les use cases, et l'Infrastructure gere les acces MySQL avec Dapper. L'authentification se fait par JWT. Les routes admin sont protegees par le role `admin`, les routes agent par le role `agent`, et le frontend envoie le JWT dans le header `Authorization`. Les agents consultent leurs mails assignes et peuvent les marquer comme traites, tandis que l'admin gere les attributions, les comptes agents et le staff.
