import { initializeApp } from 'firebase/app';

import { getFirestore } from "firebase/firestore";

import AsyncStorage from '@react-native-async-storage/async-storage';
import {
  initializeAuth,
  getReactNativePersistence
} from 'firebase/auth/react-native';
import { getFirestore } from "firebase/firestore";

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
const auth = initializeAuth(app, {
  persistence: getReactNativePersistence(AsyncStorage)
});

export { auth };

export const firestore = getFirestore(app);