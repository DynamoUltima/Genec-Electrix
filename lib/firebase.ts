import { initializeApp, getApps, getApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyCOdyhDdRwa_vdMcD019aRMQNdWjiH_eT8",
  authDomain: "electrix-50593.firebaseapp.com",
  projectId: "electrix-50593",
  storageBucket: "electrix-50593.firebasestorage.app",
  messagingSenderId: "547871034450",
  appId: "1:547871034450:web:41458337eb9547a8eba38b",
  measurementId: "G-HHN2XH35EC",
};

// Prevent re-initialization in Next.js hot reload / SSR
const app = getApps().length ? getApp() : initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const db = getFirestore(app);
export const storage = getStorage(app);
export default app;
