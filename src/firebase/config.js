import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
  apiKey: "AIzaSyC33z7Jf2UWd8MtJTcomOSCNp-ejPRMSdw",
  authDomain: "mytask2-b4a9e.firebaseapp.com",
  projectId: "mytask2-b4a9e",
  storageBucket: "mytask2-b4a9e.appspot.com",
  messagingSenderId: "588946240220",
  appId: "1:588946240220:web:1e4524a81a34ea5046fa19",
  measurementId: "G-X6QKT5SDTE"
};

// app => objeto com todas as configurações do firebase
export const app = initializeApp(firebaseConfig);
// auth => objeto com as configurações de Authentication
export const auth = getAuth(app);
// db => objeto com as configurações do Firestore
export const db = getFirestore(app);
export const analytics = getAnalytics(app);