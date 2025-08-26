// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/12.1.0/firebase-app.js";
import { getAuth, createUserWithEmailAndPassword, signOut, signInWithEmailAndPassword, signInWithPopup, GoogleAuthProvider, onAuthStateChanged } from "https://www.gstatic.com/firebasejs/12.1.0/firebase-auth.js";
import { getFirestore , addDoc , collection , setDoc , doc} from "https://www.gstatic.com/firebasejs/12.1.0/firebase-firestore.js";
//   import { getAnalytics } from "https://www.gstatic.com/firebasejs/12.1.0/firebase-analytics.js";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyDE4HuWxCTueKlYFWf-5iT1x9F4aVtrwRY",
    authDomain: "practice-firebase-be771.firebaseapp.com",
    projectId: "practice-firebase-be771",
    storageBucket: "practice-firebase-be771.firebasestorage.app",
    messagingSenderId: "266488509546",
    appId: "1:266488509546:web:f236d2978fbbf830674613",
    measurementId: "G-ZE5462L8C8"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase Authentication and get a reference to the service
const auth = getAuth(app);

// Initialize Cloud Firestore and get a reference to the service
const db = getFirestore(app);

//   const analytics = getAnalytics(app);


export {
    auth,
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword,
    signInWithPopup,
    GoogleAuthProvider,
    onAuthStateChanged,
    signOut,
    db,
    addDoc,
    collection,
    doc,
    setDoc
}