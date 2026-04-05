const admin = require('firebase-admin');

let serviceAccount;

try {
    // Try local file first (Development)
    serviceAccount = require('./firebase-service-account.json');
} catch (error) {
    // Try environment variable if local file is missing (Production)
    if (process.env.FIREBASE_SERVICE_ACCOUNT) {
        try {
            serviceAccount = JSON.parse(process.env.FIREBASE_SERVICE_ACCOUNT);
        } catch (parseError) {
            console.error('Error parsing FIREBASE_SERVICE_ACCOUNT env variable:', parseError.message);
        }
    }
}

if (serviceAccount) {
    admin.initializeApp({
        credential: admin.credential.cert(serviceAccount)
    });
} else {
    console.warn('Firebase service account credentials not found. Authentication sync might be disabled.');
}

module.exports = admin;
