// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
  authDomain: "tshirty-mern.firebaseapp.com",
  projectId: "tshirty-mern",
  storageBucket: "tshirty-mern.firebasestorage.app",
  messagingSenderId: "807490786445",
  appId: "1:807490786445:web:ae0cf741277a46c8a7fec4",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
