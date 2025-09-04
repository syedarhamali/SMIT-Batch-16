// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/12.1.0/firebase-app.js";
import { getAuth, createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signOut } from "https://www.gstatic.com/firebasejs/12.1.0/firebase-auth.js";
import { collection, addDoc, setDoc, doc, getDocs, getDoc, onSnapshot, query , getFirestore , where } from "https://www.gstatic.com/firebasejs/12.1.0/firebase-firestore.js";
// import { getAnalytics } from "firebase/analytics";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyBc6WPp9y5Qhf3cR3_A20uiduwe5Ycsaec",
    authDomain: "saylani-chat-app-d7535.firebaseapp.com",
    projectId: "saylani-chat-app-d7535",
    storageBucket: "saylani-chat-app-d7535.firebasestorage.app",
    messagingSenderId: "1051440212991",
    appId: "1:1051440212991:web:0f965f5993dd66b7ae15ca",
    measurementId: "G-6H9P5YM3YV"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app)
const db = getFirestore(app);

export {
    auth,
    db,
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword,
    signOut,
    onAuthStateChanged,
    collection,
    addDoc,
    setDoc,
    doc,
    getDocs,
    getDoc,
    onSnapshot,
    query,
    where
}