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
  apiKey: "AIzaSyBEAYrUIIKMopAKbGG0RJLP_hLTqApSni8",
  authDomain: "food-319c3.firebaseapp.com",
  projectId: "food-319c3",
  storageBucket: "food-319c3.firebasestorage.app",
  messagingSenderId: "758063583800",
  appId: "1:758063583800:web:b2891f84f3032150628ccd",
  measurementId: "G-B6XMK4L3TN"
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
// for web purpose
// initializeFirestore(app, {
//   localCache: persistentLocalCache({ tabManager: persistentMultipleTabManager() }),
// });
const db     = getFirestore(app);
const auth   = getAuth(app);
const bucket = getStorage(app);

// ──────────────────────────────────────────────────────────────────────────────
// 4️⃣  EXPORT
// ──────────────────────────────────────────────────────────────────────────────
export { app, db, auth, bucket };
