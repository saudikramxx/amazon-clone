// v9 compat packages are API compatible with v8 code
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';
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
const app = firebase.initializeApp(firebaseConfig);
const db = app.firestore();
const auth = firebase.auth();
export {db,auth};