// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBy_X1vs4mEKPH2FQ7nnQ4y53iPBBeWyzA",
  authDomain: "real-estate-ff01f.firebaseapp.com",
  projectId: "real-estate-ff01f",
  storageBucket: "real-estate-ff01f.firebasestorage.app",
  messagingSenderId: "913377597204",
  appId: "1:913377597204:web:b13e4a963616882827d401"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

export { app, auth };