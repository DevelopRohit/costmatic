// Import the functions you need from the SDKs you need
// Import Firebase core
import { initializeApp } from "firebase/app";
// import { db } from "../src/firebase.js";
import { getAuth, GoogleAuthProvider } from "firebase/auth";

// Import Firestore
import { getFirestore } from "firebase/firestore";// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyD3C4QCsQjltu1-I24Yl-h9H1WdsuaMHFE",
  authDomain: "sugar-cosmetics-972a4.firebaseapp.com",
  projectId: "sugar-cosmetics-972a4",
  storageBucket: "sugar-cosmetics-972a4.firebasestorage.app",
  messagingSenderId: "811058773629",
  appId: "1:811058773629:web:66bb9443f6bc4c1cd0fb14",
  measurementId: "G-1PQH0HX19S"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);
export const db = getFirestore(app);
export const auth = getAuth(app);
export const googleProvider = new GoogleAuthProvider();