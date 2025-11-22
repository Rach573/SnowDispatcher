# SnowDispatcher

Application de gestion de tickets et de dispatch de mails avec synchronisation Gmail.

## 📋 Table des matières

- [Installation](#-installation)
- [Configuration Gmail](#-configuration-gmail)
- [Démarrage](#-démarrage)
- [Scripts disponibles](#-scripts-disponibles)
- [Architecture](#-architecture)
- [Documentation](#-documentation)

## 🚀 Installation

```bash
# Installer les dépendances
npm install

# Générer le client Prisma
npm run prisma:generate

# (Optionnel) Pousser le schéma vers la base de données
npm run prisma:push
```

## 📧 Configuration Gmail

L'application peut se connecter à Gmail pour synchroniser automatiquement vos emails.

### Configuration rapide

1. **Exécuter le script de configuration:**
   ```bash
   npm run setup:gmail
   ```

2. **Suivre les instructions à l'écran**

3. **Tester la connexion:**
   ```bash
   npm run test:gmail
   ```

### Guide détaillé

Pour un guide complet de configuration Gmail, consultez [GMAIL_SETUP.md](GMAIL_SETUP.md).

Ce guide couvre:
- Comment créer un projet Google Cloud
- Comment activer l'API Gmail
- Comment obtenir les identifiants OAuth
- Configuration avancée
- Dépannage

### Fichier .env

Le script de configuration créera automatiquement un fichier `.env` avec vos identifiants.

Exemple de configuration minimale:
```env
GMAIL_CLIENT_ID=your_client_id
GMAIL_CLIENT_SECRET=your_client_secret
GMAIL_REDIRECT_URI=urn:ietf:wg:oauth:2.0:oob
GMAIL_REFRESH_TOKEN=your_refresh_token
GMAIL_USER_EMAIL=your@email.com
```

Un fichier `.env.example` est fourni comme référence.

## ▶️ Démarrage

### Mode développement

```bash
npm start
```

ou avec le serveur de développement Vite:

```bash
npm run dev
```

### Mode production

```bash
npm run start:prod
```

## 📜 Scripts disponibles

### Développement
- `npm start` - Démarre l'application en mode développement
- `npm run dev` - Démarre avec le serveur de développement Vite
- `npm run lint` - Vérifie le code avec ESLint

### Build
- `npm run build:renderer` - Build le renderer avec Vite
- `npm run package` - Package l'application
- `npm run make` - Crée les installeurs

### Base de données (Prisma)
- `npm run prisma:generate` - Génère le client Prisma
- `npm run prisma:push` - Pousse le schéma vers la base de données
- `npm run prisma:studio` - Ouvre Prisma Studio (interface graphique)

### Utilitaires
- `npm run seed:mail` - Remplit la base avec des mails de test
- `npm run reset:admin` - Réinitialise le mot de passe admin

### Gmail
- `npm run setup:gmail` - Configure l'authentification OAuth Gmail
- `npm run test:gmail` - Teste la connexion à Gmail

## 🏗️ Architecture

```
src/
├── main/               # Processus principal Electron
│   ├── index.ts       # Point d'entrée
│   ├── ipc/           # Handlers IPC
│   ├── services/      # Services métier (Gmail, Mail, Tache, etc.)
│   ├── repositories/  # Accès base de données (Prisma)
│   └── utils/         # Utilitaires (logger, errors)
├── preload/           # Bridge sécurisé
│   ├── index.ts       # Expose l'API via contextBridge
│   └── *Services.ts   # APIs typées
├── renderer/          # Interface Vue 3
│   ├── renderer.ts    # Point d'entrée
│   ├── App.vue        # Composant principal
│   ├── composables/   # Logique réutilisable
│   └── pages/         # Pages de l'application
└── shared/            # Types partagés
    └── types/
```

Pour plus de détails, consultez [ARCHITECTURE.md](ARCHITECTURE.md).

## 📚 Documentation

- [ARCHITECTURE.md](ARCHITECTURE.md) - Architecture détaillée du projet
- [GMAIL_SETUP.md](GMAIL_SETUP.md) - Guide de configuration Gmail
- [SUMMARY.md](SUMMARY.md) - Résumé de la refactorisation
- [PRISMA_INTEGRATION.md](PRISMA_INTEGRATION.md) - Intégration Prisma
- [DATABASE_SCHEMA.md](DATABASE_SCHEMA.md) - Schéma de la base de données

## 🔧 Technologies

- **Electron** - Framework pour applications de bureau
- **Vue 3** - Framework JavaScript progressif
- **TypeScript** - Superset typé de JavaScript
- **Prisma** - ORM type-safe
- **Vite** - Build tool rapide
- **Gmail API** - Synchronisation d'emails

## 📝 Fonctionnalités

- ✅ Synchronisation automatique des emails Gmail
- ✅ Gestion des tickets/mails
- ✅ Assignation automatique aux agents
- ✅ Interface utilisateur réactive (Vue 3)
- ✅ Base de données avec Prisma
- ✅ Architecture propre et évolutive
- ✅ Système d'authentification
- ✅ Gestion des tâches

## 🔒 Sécurité

- Les identifiants OAuth sont stockés localement dans `.env`
- Le fichier `.env` est automatiquement exclu de Git
- Communication sécurisée via contextBridge
- Permissions Gmail minimales (lecture et modification des labels uniquement)

## 🆘 Support

Si vous rencontrez des problèmes:

1. **Problème de connexion Gmail:** Consultez [GMAIL_SETUP.md](GMAIL_SETUP.md) section Dépannage
2. **Erreur de build:** Assurez-vous d'avoir exécuté `npm run prisma:generate`
3. **Problème de base de données:** Vérifiez votre configuration Prisma

## 📄 Licence

MIT

## 👥 Auteur

Rachid Zerga (Rachidzerga@yahoo.fr)

---

**Version:** 1.0.0  
**Dernière mise à jour:** 2025-11-16
