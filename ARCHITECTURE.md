# Architecture du Projet - SnowDispatcher

## 📁 Structure des dossiers

```
my-new-app/
├── src/
│   ├── main/                   # Processus principal Electron
│   │   ├── index.ts            # Point d'entrée minimal (création fenêtre, IPC)
│   │   ├── ipc/                # Handlers IPC
│   │   │   ├── mail.ipc.ts     # Handlers pour mails
│   │   │   └── tache.ipc.ts    # Handlers pour tâches
│   │   ├── services/           # Logique métier
│   │   │   ├── MailService.ts  # Service métier mails
│   │   │   ├── TacheService.ts # Service métier tâches
│   │   │   ├── DispatchService.ts # Service dispatch
│   │   │   ├── Database.ts     # DEPRECATED (ancien connecteur mysql2)
│   │   │   └── index.ts        # Exports centralisés
│   │   ├── repositories/       # Accès base Prisma
│   │   │   ├── MailRepository.ts   # CRUD opérations pour Mail
│   │   │   ├── TacheRepository.ts  # CRUD opérations pour Tache
│   │   │   ├── index.ts            # Exports centralisés
│   │   │   └── prisma/
│   │   │       ├── client.ts       # Instance unique Prisma
│   │   │       ├── schema.prisma   # Schéma de base
│   │   │       └── generated/      # Code généré Prisma
│   │   └── utils/              # Utilitaires
│   │       ├── logger.ts       # Logger simple
│   │       └── errors.ts       # Gestion erreurs
│   ├── preload/                # Scripts preload (bridge sécurisé)
│   │   ├── index.ts            # Point d'entrée preload (contextBridge)
│   │   ├── mailServices.ts     # API exposée pour mails
│   │   └── tacheServices.ts    # API exposée pour tâches
│   ├── renderer/               # Interface utilisateur Vue 3
│   │   ├── renderer.ts         # Point d'entrée renderer
│   │   ├── App.vue             # Composant principal
│   │   └── composables/        # Composables Vue
│   │       ├── useMail.ts      # Logique IPC front pour mails
│   │       └── useTache.ts     # Logique IPC front pour tâches
│   └── shared/                 # Types partagés
│       └── types/
│           ├── DatabaseModels.ts  # Modèles DB (interfaces TypeScript)
│           └── global.d.ts        # Déclarations globales (window.api)
├── index.html                  # Template HTML
├── forge.config.ts             # Configuration Electron Forge
├── vite.main.config.ts         # Config Vite pour main
├── vite.preload.config.ts      # Config Vite pour preload
└── vite.renderer.config.mts    # Config Vite pour renderer (avec Vue)
```

## 🏗️ Architecture en Couches (inspirée de todos-app-electron)

### 1. **Main Process** (`src/main/index.ts`)
- Point d'entrée minimal
- Création de la fenêtre BrowserWindow
- Enregistrement des handlers IPC

### 2. **Repositories** (`src/main/repositories/`)
- **Responsabilité**: Accès aux données via Prisma
- **MailRepository**: Opérations CRUD pour les mails
- **TacheRepository**: Opérations CRUD pour les tâches
- **prisma/client.ts**: Instance unique du client Prisma
- Aucune logique métier, seulement des opérations de base de données

### 3. **Services** (`src/main/services/`)
- **Responsabilité**: Logique métier et validations
- **MailService**: Gestion des mails non assignés
- **TacheService**: Gestion des tâches, calcul de priorité
- **DispatchService**: Service de dispatch (existant)
- Utilisent les repositories pour accéder aux données

### 4. **IPC Handlers** (`src/main/ipc/`)
- **Responsabilité**: Enregistrement des canaux IPC
- **mail.ipc.ts**: Handlers pour `mails:getAll`, `mails:assign`
- **tache.ipc.ts**: Handlers pour `taches:getAll`, `taches:create`
- Appellent uniquement les méthodes des services

### 5. **Preload** (`src/preload/`)
- **Responsabilité**: Bridge sécurisé entre main et renderer
- **index.ts**: Expose `window.api.mail` et `window.api.tache` via `contextBridge`
- **mailServices.ts**: API typée pour les opérations mail
- **tacheServices.ts**: API typée pour les opérations tâche

### 6. **Renderer** (`src/renderer/`)
- **Responsabilité**: Interface utilisateur Vue 3
- **App.vue**: Composant principal
- **composables/**: Logique réutilisable (useMail, useTache)
- Utilise `window.api` pour communiquer avec le main process

### 7. **Shared Types** (`src/shared/types/`)
- **DatabaseModels.ts**: Interfaces TypeScript pour les tables DB
- **global.d.ts**: Déclaration globale de `window.api`
- Types partagés entre main et renderer

## 🔄 Flux de communication

### Renderer → Preload → IPC → Service → Repository → Prisma

```
┌──────────────────┐
│   Renderer       │  window.api.mail.getAllMails()
│   (Vue 3)        │  window.api.tache.createTache()
│                  │
│  useMail()       │ ← Composable qui appelle window.api
│  useTache()      │
└────────┬─────────┘
         │
         ▼
┌──────────────────┐
│   Preload        │  contextBridge.exposeInMainWorld('api', ...)
│                  │
│  mailServices    │ ← Expose l'API via contextBridge
│  tacheServices   │
└────────┬─────────┘
         │
         ▼
┌──────────────────┐
│   Main/IPC       │  ipcMain.handle('mails:getAll', ...)
│                  │  ipcMain.handle('taches:create', ...)
│  mail.ipc.ts     │ ← Handlers IPC
│  tache.ipc.ts    │
└────────┬─────────┘
         │
         ▼
┌──────────────────┐
│   Services       │  MailService.getAllMails()
│                  │  TacheService.createTache()
│  MailService     │ ← Logique métier + validations
│  TacheService    │
└────────┬─────────┘
         │
         ▼
┌──────────────────┐
│   Repositories   │  MailRepository.findUnassignedMails()
│                  │  TacheRepository.create()
│  MailRepository  │ ← Accès base de données Prisma
│  TacheRepository │
└────────┬─────────┘
         │
         ▼
┌──────────────────┐
│   Prisma         │  prisma.mail.findMany()
│                  │  prisma.taches.create()
│  client.ts       │ ← Instance unique Prisma Client
└──────────────────┘
```

## 🎯 Principes d'architecture

### 1. Séparation des responsabilités (Clean Architecture)

- **main/index.ts**: Minimal, uniquement création de fenêtre et initialisation
- **main/ipc/**: Handlers IPC isolés, appellent les services
- **main/services/**: Logique métier pure (calculs, validations)
- **main/repositories/**: Accès base de données Prisma uniquement
- **main/utils/**: Utilitaires réutilisables (logger, errors)

### 2. Communication sécurisée

- Utilisation de `contextBridge` dans preload (pas d'accès direct à Electron)
- Pas d'accès direct à Node.js ou Electron depuis le renderer
- Types TypeScript partagés pour la sécurité de type

### 3. Architecture Vue 3

- **Composables** pour la logique réutilisable (useMail, useTache)
- **Composition API** pour une meilleure organisation
- **Gestion d'état local** avec refs
- Types fortement typés pour `window.api`

### 4. Prisma comme unique source d'accès aux données

- **Database.ts** (mysql2) est déprécié et commenté
- Toutes les opérations DB passent par Prisma
- Instance unique du client Prisma dans `repositories/prisma/client.ts`
- Repositories encapsulent les opérations Prisma

## 🚀 Commandes

```bash
# Développement
npm start

# Build
npm run package

# Lint
npm run lint

# Prisma
npm run prisma:generate  # Générer le client Prisma
npm run prisma:push      # Pousser le schéma vers la DB
npm run prisma:studio    # Ouvrir Prisma Studio
```

## 📝 Notes techniques

- **TypeScript**: Tout est typé, aucun `any`
- **Vue 3**: Composition API avec `<script setup>` possible
- **Vite**: Build rapide avec Hot Module Replacement
- **Prisma**: ORM type-safe pour MariaDB
- **IPC**: Handlers nommés avec préfixe `mails:` et `taches:`

## 🔧 Ajout de nouvelles fonctionnalités

### Ajouter un nouveau handler IPC

1. **Repository**: Ajouter la méthode dans `repositories/XRepository.ts`
2. **Service**: Ajouter la logique métier dans `services/XService.ts`
3. **IPC Handler**: Créer le handler dans `ipc/x.ipc.ts`
4. **Preload**: Ajouter la méthode dans `preload/xServices.ts`
5. **Renderer**: Utiliser dans `renderer/composables/useX.ts`
6. **Types**: Mettre à jour les types dans `shared/types/`

### Ajouter une nouvelle entité

1. Mettre à jour le schéma Prisma (`repositories/prisma/schema.prisma`)
2. Régénérer le client Prisma (`npm run prisma:generate`)
3. Créer un nouveau Repository
4. Créer un nouveau Service
5. Créer les handlers IPC
6. Exposer via preload
7. Utiliser dans le renderer

## 🏗️ Inspiré de

Cette architecture suit les bonnes pratiques de **oldzy/todos-app-electron**:
- Main process minimal
- Couche Repository pour l'accès aux données
- Couche Service pour la logique métier
- IPC handlers isolés
- Preload sécurisé avec contextBridge
- Renderer propre avec Vue 3
- Types partagés et fortement typés
