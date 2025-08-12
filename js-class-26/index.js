import { auth, db } from "./config.js";
import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signOut } from "./auth.js";
import { setDoc, collection, doc, getDocs } from "./firestore-db.js";



function registerForm() {
    let email = document.getElementById("email")
    let userName = document.getElementById("userName")
    let password = document.getElementById("password")
    createUserWithEmailAndPassword(auth, email.value, password.value)
        .then((userCredential) => {
            // Signed up 
            const user = userCredential.user;
            addUserToDb(email.value, userName.value, user.uid)
            console.log(user, "register hua wa user agaya ")
        })
        .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            console.log(errorMessage)
        });
}

function loginUser() {
    let email = document.getElementById("login-email")
    let password = document.getElementById("login-password")
    signInWithEmailAndPassword(auth, email.value, password.value)
        .then((userCredential) => {
            // Signed in 
            const user = userCredential.user;
            console.log(user, "ye wo user he jo login hua he")
            // ...
        })
        .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            console.log(errorMessage)
        });
}


function getCurrentUser() {
    onAuthStateChanged(auth, (user) => {
        if (user) {
            // User is signed in, see docs for a list of available properties
            // https://firebase.google.com/docs/reference/js/auth.user
            const uid = user.uid;
            console.log("ye wo user he jo is waqt login he ", user)
            // ...
        } else {
            // User is signed out
            // ...
            console.log("user logged out ho chuka he ")
        }
    });
}

function logUserOut() {
    signOut(auth).then(() => {
        // Sign-out successful.
        alert("User log out ho chuka he")
    }).catch((error) => {
        // An error happened.
        console.log("log out nh hua ")
    });
}


async function addUserToDb(email, userName, userId) {
    const docRef = await setDoc(doc(db, "users", userId), {
        email,
        userName,
        userId,
        image: 'https://images.pexels.com/photos/2486168/pexels-photo-2486168.jpeg'
    });
    console.log("Document written with ID: ", docRef.id);
}

async function getAllUsers() {
    const querySnapshot = await getDocs(collection(db, "users"));
    querySnapshot.forEach((doc) => {
        // doc.data() is never undefined for query doc snapshots
        console.log(doc.id, " => ", doc.data());
    });
}

getCurrentUser()
getAllUsers()

document.getElementById('registerForm').addEventListener('click', registerForm)
document.getElementById('loginForm').addEventListener('click', loginUser)
document.getElementById('logout-user').addEventListener('click', logUserOut)