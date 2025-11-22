# Configuration de l'API Gmail

Ce guide explique comment configurer correctement l'intégration Gmail pour SnowDispatcher.

## 📋 Prérequis

- Un compte Google/Gmail
- Node.js installé sur votre machine
- Accès à [Google Cloud Console](https://console.cloud.google.com)

## 🚀 Configuration rapide

### Étape 1: Créer un projet Google Cloud

1. Aller sur [Google Cloud Console](https://console.cloud.google.com)
2. Cliquer sur "Sélectionner un projet" en haut
3. Cliquer sur "Nouveau projet"
4. Donner un nom à votre projet (ex: "SnowDispatcher")
5. Cliquer sur "Créer"

### Étape 2: Activer l'API Gmail

1. Dans votre projet, aller dans "APIs & Services" > "Library"
2. Rechercher "Gmail API"
3. Cliquer sur "Gmail API"
4. Cliquer sur "Activer"

### Étape 3: Créer des identifiants OAuth 2.0

1. Aller dans "APIs & Services" > "Credentials"
2. Cliquer sur "Create Credentials" > "OAuth client ID"
3. Si demandé, configurer l'écran de consentement OAuth:
   - Type: "External" (ou "Internal" si vous avez Google Workspace)
   - Nom de l'application: "SnowDispatcher"
   - Email d'assistance: votre email
   - Ajouter les scopes: `gmail.readonly` et `gmail.modify`
   - Sauvegarder
4. Revenir à "Credentials" > "Create Credentials" > "OAuth client ID"
5. Type d'application: **"Desktop app"**
6. Nom: "SnowDispatcher Desktop"
7. Cliquer sur "Créer"
8. **Noter votre Client ID et Client Secret** (vous en aurez besoin)

### Étape 4: Obtenir le Refresh Token

Utilisez le script automatisé fourni:

```bash
node scripts/setup-gmail-oauth.js
```

Le script va:
1. Vous demander votre Client ID et Client Secret
2. Générer une URL d'autorisation
3. Vous guider pour obtenir le code d'autorisation
4. Échanger ce code contre un refresh token
5. Créer automatiquement le fichier `.env` avec toutes les configurations

**Suivez simplement les instructions à l'écran!**

### Étape 5: Vérifier la configuration

Après avoir exécuté le script, vous devriez avoir un fichier `.env` à la racine du projet avec ce contenu:

```env
GMAIL_CLIENT_ID="votre_client_id"
GMAIL_CLIENT_SECRET="votre_client_secret"
GMAIL_REDIRECT_URI="urn:ietf:wg:oauth:2.0:oob"
GMAIL_REFRESH_TOKEN="votre_refresh_token"
GMAIL_USER_EMAIL="votre@email.com"
```

### Étape 6: Redémarrer l'application

```bash
npm start
```

L'application devrait maintenant se connecter à Gmail et synchroniser vos emails automatiquement!

## 🔧 Configuration avancée

### Variables d'environnement optionnelles

Vous pouvez personnaliser le comportement de la synchronisation en ajoutant ces variables dans votre fichier `.env`:

#### `GMAIL_LABEL_ID`
ID du label Gmail à surveiller. Par défaut, tous les messages sont récupérés.

```env
GMAIL_LABEL_ID=INBOX
```

Labels courants:
- `INBOX` - Boîte de réception
- `UNREAD` - Non lus
- `SPAM` - Spam
- `TRASH` - Corbeille

#### `GMAIL_QUERY`
Requête de recherche Gmail pour filtrer les messages. Par défaut: `in:inbox is:unread`

```env
GMAIL_QUERY=in:inbox is:unread
```

Exemples de requêtes:
- `is:unread` - Tous les messages non lus
- `from:client@example.com` - Messages d'un expéditeur spécifique
- `subject:urgent` - Messages avec "urgent" dans l'objet
- `has:attachment` - Messages avec pièces jointes
- `in:inbox is:unread -from:noreply@` - Messages non lus sauf ceux de noreply

[Syntaxe complète des requêtes Gmail](https://support.google.com/mail/answer/7190)

#### `GMAIL_MAX_RESULTS`
Nombre maximum de messages à récupérer par synchronisation. Par défaut: `10`

```env
GMAIL_MAX_RESULTS=20
```

## 🔄 Fréquence de synchronisation

Par défaut, l'application synchronise les emails Gmail toutes les **15 secondes**. Les nouveaux emails sont automatiquement:
1. Récupérés de Gmail
2. Insérés dans la base de données
3. Marqués comme lus dans Gmail
4. Assignés automatiquement aux agents (si configuré)

## ⚠️ Dépannage

### Problème: "Configuration incomplete, skipping Gmail sync"

**Cause:** Une ou plusieurs variables d'environnement obligatoires manquent.

**Solution:** 
1. Vérifiez que votre fichier `.env` contient toutes les variables obligatoires
2. Vérifiez qu'il n'y a pas d'espaces ou de guillemets supplémentaires
3. Redémarrez l'application

### Problème: "Failed to build Gmail client"

**Cause:** Les identifiants OAuth sont invalides.

**Solution:**
1. Vérifiez que votre Client ID et Client Secret sont corrects
2. Assurez-vous que le Refresh Token n'a pas expiré
3. Re-exécutez `node scripts/setup-gmail-oauth.js`

### Problème: "Aucun refresh token reçu"

**Cause:** Vous avez déjà autorisé cette application précédemment.

**Solution:**
1. Aller sur [https://myaccount.google.com/permissions](https://myaccount.google.com/permissions)
2. Révoquer l'accès à votre application
3. Re-exécuter le script `setup-gmail-oauth.js`

### Problème: "Invalid grant" ou "Token has been expired or revoked"

**Cause:** Le refresh token a été révoqué ou a expiré.

**Solution:**
1. Re-exécuter `node scripts/setup-gmail-oauth.js` pour obtenir un nouveau token
2. Vérifier que vous n'avez pas changé le mot de passe de votre compte Google récemment

### Problème: Messages non synchronisés

**Vérifications:**
1. Les messages correspondent-ils à votre requête `GMAIL_QUERY`?
2. Avez-vous atteint la limite `GMAIL_MAX_RESULTS`?
3. Les messages ont-ils déjà été synchronisés (vérifier la base de données)?
4. Regarder les logs de l'application pour plus de détails

## 🔒 Sécurité

### Bonnes pratiques

1. **Ne jamais commiter le fichier `.env`** dans Git (déjà configuré dans `.gitignore`)
2. **Garder vos identifiants secrets** - ne les partagez jamais
3. **Révoquer l'accès** si vous n'utilisez plus l'application
4. **Utiliser un compte de service** pour un environnement de production

### Permissions minimales

L'application demande uniquement les permissions nécessaires:
- `gmail.readonly` - Lire les emails
- `gmail.modify` - Modifier les labels (pour marquer comme lu)

Elle n'a **PAS** accès à:
- Envoyer des emails
- Supprimer définitivement des emails
- Accéder à d'autres services Google

## 📚 Ressources

- [Documentation Gmail API](https://developers.google.com/gmail/api)
- [Guide OAuth 2.0 Google](https://developers.google.com/identity/protocols/oauth2)
- [Syntaxe des requêtes Gmail](https://support.google.com/mail/answer/7190)
- [Google Cloud Console](https://console.cloud.google.com)

## 💡 Conseils

### Pour le développement

Utilisez une requête plus large pour tester:
```env
GMAIL_QUERY=in:inbox
GMAIL_MAX_RESULTS=5
```

### Pour la production

Utilisez une requête plus stricte:
```env
GMAIL_QUERY=in:inbox is:unread from:support@
GMAIL_MAX_RESULTS=50
```

### Pour éviter les doublons

L'application vérifie automatiquement les doublons en comparant:
- L'objet du message
- La date de réception

Les messages déjà synchronisés ne seront pas réinsérés.

## 🆘 Support

Si vous rencontrez des problèmes:

1. Vérifiez les logs de l'application (DevTools > Console)
2. Consultez la section [Dépannage](#️-dépannage)
3. Vérifiez que toutes les étapes ont été suivies correctement
4. Assurez-vous que l'API Gmail est bien activée dans Google Cloud Console

---

**Configuration mise à jour:** 2025-11-16  
**Version:** 1.0.0
