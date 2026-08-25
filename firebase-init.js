import { initializeApp } from "https://www.gstatic.com/firebasejs/12.15.0/firebase-app.js";
import {
  getAuth, GoogleAuthProvider, signInWithPopup, signOut, onAuthStateChanged
} from "https://www.gstatic.com/firebasejs/12.15.0/firebase-auth.js";
import {
  initializeFirestore, persistentLocalCache, persistentMultipleTabManager,
  doc, collection, getDoc, getDocs, setDoc, updateDoc, deleteDoc,
  writeBatch, serverTimestamp, arrayUnion, arrayRemove
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

// 오프라인 지속성은 Firestore SDK에 내장돼 있고 이미 IndexedDB를 쓴다.
// 캐시를 직접 만들지 않는다 — 켜기만 하면 로컬 캐시·오프라인 읽기·재연결 동기화가 자동이다.
const db = initializeFirestore(app, {
  localCache: persistentLocalCache({ tabManager: persistentMultipleTabManager() })
});

const googleProvider = new GoogleAuthProvider();

window.fb = {
  auth, db, googleProvider,
  signInWithPopup, signOut, onAuthStateChanged,
  doc, collection, getDoc, getDocs, setDoc, updateDoc, deleteDoc,
  writeBatch, serverTimestamp, arrayUnion, arrayRemove
};
window.dispatchEvent(new Event('fb-ready'));
