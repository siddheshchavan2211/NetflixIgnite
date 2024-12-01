// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAO9IMGkLPN3dQ9iRMGTdP8n4-o965LdkE",
  authDomain: "netflix-ignite.firebaseapp.com",
  projectId: "netflix-ignite",
  storageBucket: "netflix-ignite.firebasestorage.app",
  messagingSenderId: "433316439987",
  appId: "1:433316439987:web:a7bfce1f4de99c2d854dc6",
  measurementId: "G-TJP11Y6YXH",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
