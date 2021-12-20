// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCsE_B9jsdTjE1x3bEWhuHQMjLOa-7i0zw",
  authDomain: "szusterpsychiatry.firebaseapp.com",
  projectId: "szusterpsychiatry",
  storageBucket: "szusterpsychiatry.appspot.com",
  messagingSenderId: "834251612548",
  appId: "1:834251612548:web:47a97f6ce4166fd101bdd1",
  measurementId: "G-JXJHWY0JBS"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);