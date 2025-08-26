import { addUserToDb } from "./db.js";
import { auth, createUserWithEmailAndPassword, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from "./firebase-config.js";

function signUp(fullName, nationality, email, password) {
    createUserWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
            // Signed up 
            const user = userCredential.user;
            console.log("user jo signup hua he", user)
            addUserToDb(user.uid, { fullName, nationality, email, userId: user.uid })
            // ...
        })
        .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            // ..
        });

}

function signIn(email, password) {
    signInWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
            // Signed up 
            const user = userCredential.user;
            console.log("user jo signup hua he", user)
            // ...
        })
        .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            // ..
        });

}



function signInWithGoogle() {
    const provider = new GoogleAuthProvider();
    signInWithPopup(auth, provider)
        .then((result) => {
            // This gives you a Google Access Token. You can use it to access the Google API.
            const credential = GoogleAuthProvider.credentialFromResult(result);
            const token = credential.accessToken;
            // The signed-in user info.
            const user = result.user;
            // IdP data available using getAdditionalUserInfo(result)
            // ...
        }).catch((error) => {
            // Handle Errors here.
            const errorCode = error.code;
            const errorMessage = error.message;
            // The email of the user's account used.
            const email = error.customData.email;
            // The AuthCredential type that was used.
            const credential = GoogleAuthProvider.credentialFromError(error);
            // ...
        });
}

function checkCurrentUser() {
    onAuthStateChanged(auth, (user) => {
        if (user) {
            // User is signed in, see docs for a list of available properties
            // https://firebase.google.com/docs/reference/js/auth.user
            const uid = user.uid;
            console.log("user jo login he", user)
            // ...
        } else {
            // User is signed out
            // ...
        }
    });

}

checkCurrentUser()

function logUserOut() {
    signOut(auth).then(() => {
        // Sign-out successful.
        alert("User log out ho chuka he")
    }).catch((error) => {
        // An error happened.
        console.log("log out nh hua ")
    });
}

window.signUp = () => {
    let email = document.getElementById("email")
    let password = document.getElementById("password")
    let fullName = document.getElementById("fullName")
    let nationality = document.getElementById("nationality")


    signUp(fullName.value, nationality.value, email.value, password.value)
}

window.login = () => {
    let email = document.getElementById("user-email")
    let password = document.getElementById("user-password")
    signIn(email.value, password.value)
}

window.signInGoogle = () => {
    signInWithGoogle()
}
// document.getElementById("submit-btn").addEventListener("click" , dummyFunc)