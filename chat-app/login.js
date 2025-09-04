import { auth, doc, onAuthStateChanged, signInWithEmailAndPassword, signOut } from "./firebaseConfig.js";

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


async function getCurrentUser() {
    onAuthStateChanged(auth, (user) => {
        if (user) {
            // User is signed in, see docs for a list of available properties
            // https://firebase.google.com/docs/reference/js/auth.user
            const uid = user.uid;


            if (uid) {
                window.location.replace('./users.html')
            }
            console.log(uid)
            // ...
        } else {
            // window.location.replace("./login.html")
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

document.getElementById("loginForm")?.addEventListener("click", loginUser)
getCurrentUser()

export {
    getCurrentUser,

}