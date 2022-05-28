// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDOafnhBljV_sEX0gA421V3WZvRLxzYen8",
  authDomain: "solemates-ca99e.firebaseapp.com",
  projectId: "solemates-ca99e",
  storageBucket: "solemates-ca99e.appspot.com",
  messagingSenderId: "18759067192",
  appId: "1:18759067192:web:08bde1a7bd782a4ba368cd",
  measurementId: "G-LRY5SPCNZX"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
