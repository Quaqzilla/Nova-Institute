// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCDvletZmwzHgEKeUZ8h966575ttrvljnw",
  authDomain: "nova-institute-3555f.firebaseapp.com",
  projectId: "nova-institute-3555f",
  storageBucket: "nova-institute-3555f.firebasestorage.app",
  messagingSenderId: "400811272346",
  appId: "1:400811272346:web:0cde6c1b5c81009cbb9723",
  measurementId: "G-ZZYENF9QQB"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
