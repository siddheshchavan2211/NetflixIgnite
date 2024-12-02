// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDkmSkCPHxXuwYcbu5ZArETs1h_1iZXSN8",
  authDomain: "netflix-ignite-f6b58.firebaseapp.com",
  projectId: "netflix-ignite-f6b58",
  storageBucket: "netflix-ignite-f6b58.firebasestorage.app",
  messagingSenderId: "1037906358606",
  appId: "1:1037906358606:web:433cf20605247975e86e1f",
  measurementId: "G-ZER29HGNTR",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth = getAuth();
