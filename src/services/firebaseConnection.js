// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";

import { getAuth } from "firebase/auth";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCUNYaToef7bOpT0o6lhl41wIfADUp4OA0",
  authDomain: "project-33f7a.firebaseapp.com",
  databaseURL: "https://project-33f7a-default-rtdb.firebaseio.com",
  projectId: "project-33f7a",
  storageBucket: "project-33f7a.appspot.com",
  messagingSenderId: "327475840246",
  appId: "1:327475840246:web:e017e3c90b132382b898d7"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);