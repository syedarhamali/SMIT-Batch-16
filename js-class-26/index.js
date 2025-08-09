import { auth } from "./config.js";
import { createUserWithEmailAndPassword , onAuthStateChanged } from "./auth.js";


function registerForm() {
    let email = document.getElementById("email")
    let password = document.getElementById("password")
    createUserWithEmailAndPassword(auth, email.value, password.value)
        .then((userCredential) => {
            // Signed up 
            const user = userCredential.user;
            console.log(user, "register hua wa user agaya ")
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
            console.log("ye wo user he jo is waqt login he " , user)
            // ...
        } else {
            // User is signed out
            // ...
        }
    });
}

getCurrentUser()

document.getElementById('registerForm').addEventListener('click', registerForm)