import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyABC4_Mr0veXk_3L3DEat5Fk_X_6d6sG_Q",
  authDomain: "krish-project-6eaba.firebaseapp.com",
  projectId: "krish-project-6eaba",
  storageBucket: "krish-project-6eaba.firebasestorage.app",
  messagingSenderId: "241544705021",
  appId: "1:241544705021:web:08216dcb98234454015f94"
};

 const app = initializeApp(firebaseConfig);
  export const db = getFirestore(app);
   export const auth = getAuth(app);
