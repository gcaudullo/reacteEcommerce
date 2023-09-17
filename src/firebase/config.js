
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAtJJrtsjX39YEx941DudeqeEXMkSqgkl0",
  authDomain: "okcomputers-12a2c.firebaseapp.com",
  databaseURL: "https://okcomputers-12a2c-default-rtdb.firebaseio.com",
  projectId: "okcomputers-12a2c",
  storageBucket: "okcomputers-12a2c.appspot.com",
  messagingSenderId: "679894645882",
  appId: "1:679894645882:web:2cf44fae8f771b19698fc3"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app)