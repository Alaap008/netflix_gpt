// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDk6iVkfpqhmVwXaOwq-xYCcEnvh4HqPZA",
  authDomain: "netflix-gpt-8995f.firebaseapp.com",
  projectId: "netflix-gpt-8995f",
  storageBucket: "netflix-gpt-8995f.firebasestorage.app",
  messagingSenderId: "844081148194",
  appId: "1:844081148194:web:1c165fef849cd64b25b57b",
  measurementId: "G-P4Q5CLX20Y"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
const analytics = getAnalytics(app);