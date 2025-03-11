import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore';
import {getAuth, GoogleAuthProvider} from 'firebase/auth';

const firebaseConfig = {
  apiKey: "AIzaSyDjj29k4qzV5XrGOXypxrFq-VDv9O5LJ7k",
  authDomain: "trendoria-bea0b.firebaseapp.com",
  projectId: "trendoria-bea0b",
  storageBucket: "trendoria-bea0b.firebasestorage.app",
  messagingSenderId: "322374169184",
  appId: "1:322374169184:web:9416a6b2f08ef9d0310905",
  measurementId: "G-LXTLQ9FL8F"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth();
export const db= getFirestore(app);
export const googleProvider = new GoogleAuthProvider();
export default app;