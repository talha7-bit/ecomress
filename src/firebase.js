// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from 'firebase/auth';
import {getFirestore} from 'firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyCcvpvowzxsNTiXUbCAkWgu-jW2C3O-KM4",
  authDomain: "ecomress-site.firebaseapp.com",
  projectId: "ecomress-site",
  storageBucket: "ecomress-site.firebasestorage.app",
  messagingSenderId: "859249232320",
  appId: "1:859249232320:web:633888e2f0870910dee025"
};

const app = initializeApp(firebaseConfig);
export const auth=getAuth(app);
export const db=getFirestore(app);