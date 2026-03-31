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
  apiKey: "AIzaSyDwkJdDBgYxevBLG3M4z8-EhschIBUCvxI",
  authDomain: "ads-cosmetic.firebaseapp.com",
  projectId: "ads-cosmetic",
  storageBucket: "ads-cosmetic.firebasestorage.app",
  messagingSenderId: "797912649904",
  appId: "1:797912649904:web:388605bbe6c19190202b75",
  measurementId: "G-L59PZ6K2V7"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);
export const db = getFirestore(app);
export const auth = getAuth(app);
export const provider = new GoogleAuthProvider();
provider.setCustomParameters({prompt:"select_account",})
