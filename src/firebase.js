// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyABJqYV3jfRXQeDAd_cYLAJXjwY4zPwMiw",
  authDomain: "clone-d9ff9.firebaseapp.com",
  projectId: "clone-d9ff9",
  storageBucket: "clone-d9ff9.appspot.com",
  messagingSenderId: "313365573631",
  appId: "1:313365573631:web:1c523b87a0a580bbc4c1ca",
  measurementId: "G-1BLDC8F90H"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);