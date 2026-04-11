import { initializeApp, getApps, getApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyC-3CA2nAgIMt5mZfpFDpwW5nZijkYUqPY",
  authDomain: "genec-firebase.firebaseapp.com",
  projectId: "genec-firebase",
  storageBucket: "genec-firebase.firebasestorage.app",
  messagingSenderId: "574435619715",
  appId: "1:574435619715:web:4aafc03db8c4ceb5687cb6",
  measurementId: "G-JFT0XBH7EP",
};

// Prevent re-initialization in Next.js hot reload / SSR
const app = getApps().length ? getApp() : initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const db = getFirestore(app);
export const storage = getStorage(app);
export default app;
