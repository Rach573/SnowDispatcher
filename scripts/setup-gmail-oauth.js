/**
 * Script pour configurer l'authentification OAuth Gmail
 * 
 * Ce script aide à obtenir le refresh token nécessaire pour l'API Gmail.
 * 
 * Prérequis:
 * 1. Créer un projet dans Google Cloud Console (https://console.cloud.google.com)
 * 2. Activer l'API Gmail
 * 3. Créer des identifiants OAuth 2.0 (Client ID de type "Application de bureau")
 * 4. Télécharger le fichier JSON des identifiants
 * 
 * Usage:
 *   node scripts/setup-gmail-oauth.js
 */

const { google } = require('googleapis');
const readline = require('readline');
const fs = require('fs');
const path = require('path');

// Portées nécessaires pour Gmail
const SCOPES = [
  'https://www.googleapis.com/auth/gmail.readonly',
  'https://www.googleapis.com/auth/gmail.modify'
];

// URI de redirection pour application de bureau
const REDIRECT_URI = 'urn:ietf:wg:oauth:2.0:oob';

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

function question(query) {
  return new Promise(resolve => rl.question(query, resolve));
}

async function main() {
  console.log('\n=== Configuration OAuth Gmail ===\n');
  
  console.log('Ce script va vous guider pour obtenir un refresh token Gmail.\n');
  
  console.log('Étapes préalables:');
  console.log('1. Aller sur https://console.cloud.google.com');
  console.log('2. Créer un projet ou sélectionner un projet existant');
  console.log('3. Activer l\'API Gmail (APIs & Services > Enable APIs and Services)');
  console.log('4. Créer des identifiants OAuth 2.0:');
  console.log('   - Aller dans "Credentials"');
  console.log('   - Cliquer "Create Credentials" > "OAuth client ID"');
  console.log('   - Type: "Desktop app"');
  console.log('   - Télécharger le JSON des identifiants\n');
  
  const useExisting = await question('Avez-vous déjà un Client ID et Client Secret? (o/n): ');
  
  let clientId, clientSecret;
  
  if (useExisting.toLowerCase() === 'o' || useExisting.toLowerCase() === 'y') {
    clientId = await question('Client ID: ');
    clientSecret = await question('Client Secret: ');
  } else {
    console.log('\n❌ Veuillez d\'abord créer des identifiants OAuth 2.0 dans Google Cloud Console.');
    console.log('Documentation: https://developers.google.com/gmail/api/quickstart/nodejs\n');
    rl.close();
    return;
  }
  
  // Créer le client OAuth2
  const oauth2Client = new google.auth.OAuth2(
    clientId.trim(),
    clientSecret.trim(),
    REDIRECT_URI
  );
  
  // Générer l'URL d'autorisation
  const authUrl = oauth2Client.generateAuthUrl({
    access_type: 'offline',
    scope: SCOPES,
    prompt: 'consent' // Force à toujours demander le refresh token
  });
  
  console.log('\n=== Étape d\'autorisation ===\n');
  console.log('1. Ouvrez cette URL dans votre navigateur:');
  console.log('\n' + authUrl + '\n');
  console.log('2. Connectez-vous avec votre compte Gmail');
  console.log('3. Autorisez l\'accès');
  console.log('4. Copiez le code d\'autorisation affiché\n');
  
  const code = await question('Entrez le code d\'autorisation: ');
  
  try {
    // Échanger le code contre les tokens
    const { tokens } = await oauth2Client.getToken(code.trim());
    
    if (!tokens.refresh_token) {
      console.log('\n⚠️  Aucun refresh token reçu.');
      console.log('Cela peut arriver si vous avez déjà autorisé cette application.');
      console.log('Solutions:');
      console.log('1. Révoquer l\'accès sur https://myaccount.google.com/permissions');
      console.log('2. Re-exécuter ce script\n');
      rl.close();
      return;
    }
    
    console.log('\n✅ Tokens obtenus avec succès!\n');
    
    // Demander l'email de l'utilisateur
    const userEmail = await question('Adresse email Gmail à surveiller: ');
    
    // Créer le contenu du fichier .env
    const envContent = `# Configuration Gmail OAuth
GMAIL_CLIENT_ID="${clientId.trim()}"
GMAIL_CLIENT_SECRET="${clientSecret.trim()}"
GMAIL_REDIRECT_URI="${REDIRECT_URI}"
GMAIL_REFRESH_TOKEN="${tokens.refresh_token}"
GMAIL_USER_EMAIL="${userEmail.trim()}"

# Configuration optionnelle
# GMAIL_LABEL_ID=INBOX
# GMAIL_QUERY=in:inbox is:unread
# GMAIL_MAX_RESULTS=10
`;
    
    const envPath = path.join(__dirname, '..', '.env');
    
    // Vérifier si le fichier .env existe
    if (fs.existsSync(envPath)) {
      const overwrite = await question('\n⚠️  Le fichier .env existe déjà. L\'écraser? (o/n): ');
      if (overwrite.toLowerCase() !== 'o' && overwrite.toLowerCase() !== 'y') {
        console.log('\n📋 Copiez manuellement ces valeurs dans votre fichier .env:');
        console.log('\n' + envContent);
        rl.close();
        return;
      }
    }
    
    // Écrire le fichier .env
    fs.writeFileSync(envPath, envContent);
    
    console.log('\n✅ Fichier .env créé avec succès!');
    console.log(`📁 Emplacement: ${envPath}\n`);
    
    console.log('=== Configuration terminée ===\n');
    console.log('Votre application peut maintenant se connecter à l\'API Gmail.');
    console.log('Redémarrez l\'application pour appliquer les changements.\n');
    
  } catch (error) {
    console.error('\n❌ Erreur lors de l\'obtention des tokens:', error.message);
    console.log('\nVérifiez que:');
    console.log('1. Le code d\'autorisation est correct');
    console.log('2. Le Client ID et Client Secret sont valides');
    console.log('3. Vous avez bien autorisé l\'application\n');
  }
  
  rl.close();
}

main().catch(console.error);
