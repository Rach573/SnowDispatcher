# Documentation des flux de l'application SnowDispatcher

Ce document explique le chemin suivi par les donnees entre Angular, l'API .NET, le Core, l'Infrastructure et MySQL.

## 1. Architecture a respecter

```text
[Frontend Angular]
       |  Requete HTTP
       v
[SnowDispatcher.Api]
   Program.cs branche les fichiers EndPoints
       |
       v
[Api/EndPoints]
   Recoit la requete HTTP et appelle un Use Case du Core
       |
       v
[SnowDispatcher.Core]
   UseCases + IGateways
   Contient les regles metier et les contrats
       |
       v
[SnowDispatcher.Infrastructure]
   Gateways + Repositories + SQL/Dapper
   Implemente les contrats du Core
       |
       v
[Base de donnees MySQL]
```

`Program.cs` ne contient plus les routes une par une. Il configure les services puis branche les routes :

```csharp
builder.Services.AddCoreServices();
builder.Services.AddInfrastructureServices(builder.Configuration);

app.MapUserRoutes();
app.MapStaffRoutes();
app.MapMailRoutes();
app.MapTaskRoutes();
app.MapDispatchRoutes();
app.MapAgentRoutes();
app.MapAdminRoutes();
```

Fichiers de routes :

```text
backend/Api/EndPoints/UserRoutes.cs
backend/Api/EndPoints/StaffRoutes.cs
backend/Api/EndPoints/MailRoutes.cs
backend/Api/EndPoints/TaskRoutes.cs
backend/Api/EndPoints/DispatchRoutes.Cs
backend/Api/EndPoints/AgentRoutes.cs
backend/Api/EndPoints/AdminRoutes.cs
```

## 2. Connexion a la base de donnees

La connexion DB est centralisee dans l'Infrastructure :

```text
backend/Infrastructure/Data/IDbConnectionFactory.cs
backend/Infrastructure/Data/MySqlConnectionFactory.cs
```

`MySqlConnectionFactory` lit :

```csharp
configuration.GetConnectionString("SnowDispatcher")
```

Si aucune chaine n'est configuree, elle utilise le fallback local :

```text
Server=localhost;Database=snowdispatcher;User=root;Password=;
```

Point important : l'API ne cree plus directement de connexion MySQL et n'appelle plus `DapperRepository` depuis `Program.cs`.

## 3. Tables importantes

```text
users
staff
mail
taches
category
departements
privacy
```

Relations principales :

```text
taches.mail_id             -> mail.id
taches.agent_user_id       -> users.id
users.staff_id             -> staff.id
mail.expediteur_staff_id   -> staff.id
```

## 4. Flux de connexion

Frontend :

```text
frontend/SnowDispatcher.Frontend/src/app/services/auth.service.ts
POST /api/login
Body JSON: { "username": "...", "password": "..." }
```

Backend :

```text
[UserRoutes.cs]
       | appelle IAccountUseCases.LoginAsync
       v
[Core/UseCases/Account/AccountUseCases.cs]
       | valide les champs, hash le mot de passe
       v
[Core/IGateways/IUserGateway.cs]
       |
       v
[Infrastructure/Gateways/UserGateway.cs]
       |
       v
[Infrastructure/Repositories/UserRepository.cs]
       |
       v
[MySQL/users]
```

## 5. Flux attribution des mails

Frontend :

```text
frontend/SnowDispatcher.Frontend/src/app/services/admin.service.ts
PUT /api/admin/mails/{mailId}/assign?agentUserId={agentUserId}
```

Backend :

```text
[AdminRoutes.cs]
       | appelle IAssignMailUseCases.AssignMailToAgentAsync
       v
[Core/UseCases/Assignment/AssignMailUseCases.cs]
       |
       v
[Core/IGateways/ITacheGateway.cs]
       |
       v
[Infrastructure/Gateways/TacheGateway.cs]
       |
       v
[Infrastructure/Repositories/TacheRepository.cs]
       |
       v
[MySQL/taches]
```

## 6. Flux mise a jour mot de passe agent

Frontend :

```text
PUT /api/admin/agents/{agentUserId}/password
Body JSON: { "password": "nouveauMotDePasse" }
```

Backend :

```text
[AdminRoutes.cs]
       | appelle IAccountUseCases.UpdateAgentPasswordAsync
       v
[Core/UseCases/Account/AccountUseCases.cs]
       | valide et hash le mot de passe
       v
[Core/IGateways/IUserGateway.cs]
       |
       v
[Infrastructure/Gateways/UserGateway.cs]
       |
       v
[Infrastructure/Repositories/UserRepository.cs]
       |
       v
[MySQL/users.password_hash]
```

## 7. Flux dashboard agent

Frontend :

```text
GET /api/agent/mails?userId={id}
PUT /api/agent/tasks/{taskId}/treated?userId={id}
```

Backend :

```text
[AgentRoutes.cs]
       | appelle IAgentUseCases
       v
[Core/UseCases/Agent/AgentUseCases.cs]
       |
       v
[Core/IGateways/ITacheGateway.cs]
       |
       v
[Infrastructure/Gateways/TacheGateway.cs]
       |
       v
[Infrastructure/Repositories/TacheRepository.cs]
       |
       v
[MySQL/taches + mail]
```

## 8. Reponse type au jury

Si le jury demande pourquoi il y a un dossier `EndPoints` :

```text
Program.cs configure l'application.
Les fichiers EndPoints exposent les routes HTTP.
Les EndPoints appellent les Use Cases du Core.
Le Core ne connait pas Dapper ni MySQL.
L'Infrastructure implemente les interfaces du Core avec Dapper.
```

Si le jury demande ou modifier une regle metier :

```text
Dans le Core, dans le Use Case concerne.
```

Si le jury demande ou modifier le SQL :

```text
Dans Infrastructure/Repositories, pas dans Program.cs ni dans les EndPoints.
```
