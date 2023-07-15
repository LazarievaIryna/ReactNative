import { initializeApp } from 'firebase/app';
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyBgJ0Ad1Djh4p_l8XpFzlnuKIt2qkn5o4E",
  authDomain: "reactnativehomework.firebaseapp.com",
  projectId: "reactnativehomework",
  storageBucket: "reactnativehomework.appspot.com",
  messagingSenderId: "792422131881",
  appId: "1:792422131881:web:724540616a8e898ff7e1b8",
  measurementId: "G-YFED7C7GNS"
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const db = getFirestore(app);
export const storage = getStorage(app);