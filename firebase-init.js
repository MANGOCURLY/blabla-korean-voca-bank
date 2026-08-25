import { initializeApp } from "https://www.gstatic.com/firebasejs/12.15.0/firebase-app.js";
import {
  getAuth, GoogleAuthProvider, signInWithPopup, signOut, onAuthStateChanged
} from "https://www.gstatic.com/firebasejs/12.15.0/firebase-auth.js";
import {
  getFirestore, initializeFirestore, persistentLocalCache, persistentMultipleTabManager,
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

/* 이 파일은 모듈이다. 최상단에서 예외가 나면 window.fb 가 영영 안 생기고,
   app.js 는 'fb-ready' 를 기다리며 아무것도 그리지 않는다 = 흰 화면.
   그래서 전부 try 로 감싸고, 실패하면 app.js 가 안내를 띄우도록 알린다. */
try {
  const app = initializeApp(firebaseConfig);
  const auth = getAuth(app);

  // 오프라인 지속성은 Firestore SDK에 내장돼 있고 이미 IndexedDB를 쓴다.
  // 캐시를 직접 만들지 않는다 — 켜기만 하면 로컬 캐시·오프라인 읽기·재연결 동기화가 자동이다.
  // 다만 IndexedDB를 못 쓰는 환경(사생활 보호 모드, 저장공간 부족, 남아 있는 구버전 DB)에서는
  // initializeFirestore 가 그대로 던진다. 캐시 하나 때문에 앱 전체가 안 뜨면 안 되므로 내려간다.
  let db;
  try {
    db = initializeFirestore(app, {
      localCache: persistentLocalCache({ tabManager: persistentMultipleTabManager() })
    });
  } catch (e) {
    console.warn('오프라인 캐시를 켤 수 없어 메모리 캐시로 시작합니다:', e);
    db = getFirestore(app);
  }

  const googleProvider = new GoogleAuthProvider();

  window.fb = {
    auth, db, googleProvider,
    signInWithPopup, signOut, onAuthStateChanged,
    doc, collection, getDoc, getDocs, setDoc, updateDoc, deleteDoc,
    writeBatch, serverTimestamp, arrayUnion, arrayRemove
  };
  window.dispatchEvent(new Event('fb-ready'));
} catch (e) {
  console.error('Firebase 초기화 실패:', e);
  window.dispatchEvent(new CustomEvent('fb-failed', { detail: String((e && e.message) || e) }));
}
