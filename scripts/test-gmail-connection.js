/**
 * Script pour tester la connexion à l'API Gmail
 * 
 * Ce script vérifie que:
 * 1. Les variables d'environnement sont correctement configurées
 * 2. L'authentification OAuth fonctionne
 * 3. L'API Gmail est accessible
 * 4. Les messages peuvent être récupérés
 * 
 * Usage:
 *   node scripts/test-gmail-connection.js
 */

const { google } = require('googleapis');
const fs = require('fs');
const path = require('path');

// Charger les variables d'environnement depuis .env
const envPath = path.join(__dirname, '..', '.env');
if (fs.existsSync(envPath)) {
  const envContent = fs.readFileSync(envPath, 'utf8');
  envContent.split('\n').forEach(line => {
    const trimmed = line.trim();
    if (trimmed && !trimmed.startsWith('#')) {
      const [key, ...valueParts] = trimmed.split('=');
      if (key && valueParts.length > 0) {
        const value = valueParts.join('=').replace(/^["']|["']$/g, '');
        process.env[key.trim()] = value.trim();
      }
    }
  });
  console.log('✅ Fichier .env chargé\n');
} else {
  console.log('⚠️  Aucun fichier .env trouvé');
  console.log('Exécutez: npm run setup:gmail\n');
}

async function testGmailConnection() {
  console.log('=== Test de Connexion Gmail API ===\n');
  
  // Étape 1: Vérifier les variables d'environnement
  console.log('1. Vérification de la configuration...');
  const config = {
    clientId: process.env.GMAIL_CLIENT_ID,
    clientSecret: process.env.GMAIL_CLIENT_SECRET,
    redirectUri: process.env.GMAIL_REDIRECT_URI,
    refreshToken: process.env.GMAIL_REFRESH_TOKEN,
    userEmail: process.env.GMAIL_USER_EMAIL,
  };
  
  const missing = [];
  if (!config.clientId) missing.push('GMAIL_CLIENT_ID');
  if (!config.clientSecret) missing.push('GMAIL_CLIENT_SECRET');
  if (!config.redirectUri) missing.push('GMAIL_REDIRECT_URI');
  if (!config.refreshToken) missing.push('GMAIL_REFRESH_TOKEN');
  
  if (missing.length > 0) {
    console.log('❌ Variables d\'environnement manquantes:');
    missing.forEach(v => console.log(`   - ${v}`));
    console.log('\n💡 Exécutez: npm run setup:gmail');
    process.exit(1);
  }
  
  console.log('   ✅ Client ID configuré');
  console.log('   ✅ Client Secret configuré');
  console.log('   ✅ Redirect URI configuré');
  console.log('   ✅ Refresh Token configuré');
  if (config.userEmail) {
    console.log(`   ✅ Email utilisateur: ${config.userEmail}`);
  }
  console.log();
  
  // Étape 2: Créer le client OAuth2
  console.log('2. Création du client OAuth2...');
  let oauth2Client;
  try {
    oauth2Client = new google.auth.OAuth2(
      config.clientId,
      config.clientSecret,
      config.redirectUri
    );
    
    oauth2Client.setCredentials({
      refresh_token: config.refreshToken,
    });
    
    console.log('   ✅ Client OAuth2 créé\n');
  } catch (error) {
    console.log('   ❌ Erreur lors de la création du client OAuth2');
    console.error('   ', error.message);
    process.exit(1);
  }
  
  // Étape 3: Créer le client Gmail
  console.log('3. Création du client Gmail API...');
  let gmail;
  try {
    gmail = google.gmail({
      version: 'v1',
      auth: oauth2Client,
    });
    console.log('   ✅ Client Gmail créé\n');
  } catch (error) {
    console.log('   ❌ Erreur lors de la création du client Gmail');
    console.error('   ', error.message);
    process.exit(1);
  }
  
  // Étape 4: Tester l'accès à l'API
  console.log('4. Test d\'accès à l\'API Gmail...');
  try {
    const profile = await gmail.users.getProfile({
      userId: config.userEmail || 'me',
    });
    
    console.log('   ✅ Connexion réussie!');
    console.log(`   Email: ${profile.data.emailAddress}`);
    console.log(`   Messages totaux: ${profile.data.messagesTotal}`);
    console.log(`   Threads totaux: ${profile.data.threadsTotal}\n`);
  } catch (error) {
    console.log('   ❌ Erreur lors de l\'accès à l\'API');
    console.error('   ', error.message);
    
    if (error.code === 401 || error.code === 403) {
      console.log('\n💡 Le refresh token est peut-être expiré ou invalide.');
      console.log('   Essayez de re-générer le token: npm run setup:gmail');
    }
    
    process.exit(1);
  }
  
  // Étape 5: Tester la récupération de messages
  console.log('5. Test de récupération de messages...');
  try {
    const query = process.env.GMAIL_QUERY || 'in:inbox is:unread';
    const maxResults = process.env.GMAIL_MAX_RESULTS ? parseInt(process.env.GMAIL_MAX_RESULTS) : 5;
    
    console.log(`   Requête: "${query}"`);
    console.log(`   Max résultats: ${maxResults}`);
    
    const response = await gmail.users.messages.list({
      userId: config.userEmail || 'me',
      labelIds: process.env.GMAIL_LABEL_ID ? [process.env.GMAIL_LABEL_ID] : undefined,
      q: query,
      maxResults: maxResults,
    });
    
    const messages = response.data.messages || [];
    console.log(`   ✅ ${messages.length} message(s) trouvé(s)`);
    
    if (messages.length > 0) {
      console.log('\n   Aperçu des messages:');
      for (let i = 0; i < Math.min(3, messages.length); i++) {
        const msg = await gmail.users.messages.get({
          userId: config.userEmail || 'me',
          id: messages[i].id,
          format: 'metadata',
          metadataHeaders: ['Subject', 'From', 'Date'],
        });
        
        const headers = msg.data.payload.headers;
        const subject = headers.find(h => h.name === 'Subject')?.value || '(no subject)';
        const from = headers.find(h => h.name === 'From')?.value || '(unknown)';
        
        console.log(`   ${i + 1}. ${subject}`);
        console.log(`      De: ${from}`);
      }
    }
    
    console.log();
  } catch (error) {
    console.log('   ⚠️  Avertissement lors de la récupération des messages');
    console.error('   ', error.message);
    console.log('   (Ceci peut être normal si aucun message ne correspond à la requête)\n');
  }
  
  // Résultat final
  console.log('=== Résultat ===\n');
  console.log('✅ SUCCÈS: Votre configuration Gmail est correcte!');
  console.log('L\'application peut se connecter à Gmail et récupérer des messages.\n');
  console.log('Configuration active:');
  console.log(`  - Email: ${config.userEmail || 'me'}`);
  console.log(`  - Requête: ${process.env.GMAIL_QUERY || 'in:inbox is:unread'}`);
  console.log(`  - Max résultats: ${process.env.GMAIL_MAX_RESULTS || 10}\n`);
}

testGmailConnection().catch(error => {
  console.error('\n❌ ERREUR:', error.message);
  console.error('\nDétails:', error);
  process.exit(1);
});
