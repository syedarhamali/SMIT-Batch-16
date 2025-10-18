// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCB2E2hrfgzsWpPjNO1sXMv_vdH4aaLZPc",
  authDomain: "saylani-facebook.firebaseapp.com",
  projectId: "saylani-facebook",
  storageBucket: "saylani-facebook.firebasestorage.app",
  messagingSenderId: "472653520993",
  appId: "1:472653520993:web:254c6754cd5387b6b0ca20",
  measurementId: "G-7DQHFEELH8"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const auth = getAuth(app);

export{
    auth
}