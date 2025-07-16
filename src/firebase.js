// firebase.js
// -----------------------------------------------------------------------------
// Central Firebase setup for the whole app.
// 1. Replace the placeholder strings below with the values from your Firebase
//    console (Project Settings ▸ General ▸ “Your apps” ▸ SDK setup).
// 2. Keep this file small: export only what the rest of the app needs.
// -----------------------------------------------------------------------------

import { initializeApp } from 'firebase/app';
import {
  getFirestore,
  initializeFirestore,
  persistentLocalCache,     // optional, but faster offline
  persistentMultipleTabManager,
} from 'firebase/firestore';
import { getAuth } from 'firebase/auth';
import { getStorage } from 'firebase/storage';

// ──────────────────────────────────────────────────────────────────────────────
// 1️⃣  CONFIG
// ──────────────────────────────────────────────────────────────────────────────
const firebaseConfig = {
  apiKey:             'YOUR_API_KEY',
  authDomain:         'YOUR_PROJECT_ID.firebaseapp.com',
  projectId:          'YOUR_PROJECT_ID',
  storageBucket:      'YOUR_PROJECT_ID.appspot.com',
  messagingSenderId:  'YOUR_SENDER_ID',
  appId:              'YOUR_APP_ID',
  measurementId:      'YOUR_MEASUREMENT_ID', // optional
};

// ──────────────────────────────────────────────────────────────────────────────
// 2️⃣  INIT APP
// ──────────────────────────────────────────────────────────────────────────────
const app = initializeApp(firebaseConfig);

// ──────────────────────────────────────────────────────────────────────────────
// 3️⃣  INIT SERVICES
//    • Firestore with persistent cache
//    • Auth
//    • Storage (optional; remove if unused)
// ──────────────────────────────────────────────────────────────────────────────
initializeFirestore(app, {
  localCache: persistentLocalCache({ tabManager: persistentMultipleTabManager() }),
});
const db     = getFirestore(app);
const auth   = getAuth(app);
const bucket = getStorage(app);

// ──────────────────────────────────────────────────────────────────────────────
// 4️⃣  EXPORT
// ──────────────────────────────────────────────────────────────────────────────
export { app, db, auth, bucket };
