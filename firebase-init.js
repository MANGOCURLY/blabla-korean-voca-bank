import { initializeApp } from "https://www.gstatic.com/firebasejs/12.15.0/firebase-app.js";
import {
  getAuth, GoogleAuthProvider, signInWithPopup, signOut, onAuthStateChanged
} from "https://www.gstatic.com/firebasejs/12.15.0/firebase-auth.js";
import {
  getFirestore, doc, getDoc, setDoc, updateDoc, serverTimestamp, arrayUnion
} from "https://www.gstatic.com/firebasejs/12.15.0/firebase-firestore.js";

const firebaseConfig = {
  apiKey: "AIzaSyAhknYwDtKysAjLAELmBAZU94mlbh9hGvI",
  authDomain: "vocabank-db55a.firebaseapp.com",
  projectId: "vocabank-db55a",
  storageBucket: "vocabank-db55a.firebasestorage.app",
  messagingSenderId: "761192490518",
  appId: "1:761192490518:web:1e5e242482646be8ce3737",
  measurementId: "G-93K3SB0XP3"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);
const googleProvider = new GoogleAuthProvider();

window.fb = {
  auth, db, googleProvider,
  signInWithPopup, signOut, onAuthStateChanged,
  doc, getDoc, setDoc, updateDoc, serverTimestamp, arrayUnion
};
window.dispatchEvent(new Event('fb-ready'));
