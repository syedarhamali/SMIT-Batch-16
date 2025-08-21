import { auth, db } from "./config.js";
import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signOut } from "./auth.js";
import { setDoc, collection, doc, getDocs, query, onSnapshot } from "./firestore-db.js";

let currentUser = null;
let isLoading = true;
let allUsers = []
let usersElement = document.getElementById("users")

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
            alert("user signup successfully")
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
            currentUser = user
            // console.log("ye wo user he jo is waqt login he ", user)
            isLoading = false

            // console.log(isLoading)
            // ...
        } else {
            // User is signed out
            // ...
            console.log("user logged out ho chuka he ")
            isLoading = true
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
    
}

async function getAllUsers() {
    const querySnapshot = await getDocs(collection(db, "users"));
    querySnapshot.forEach((doc) => {
        // doc.data() is never undefined for query doc snapshots
        // console.log(doc.id, " => ", doc.data());
        let { userName, email } = doc.data();
        if (usersElement) {
            usersElement.innerHTML += `
        <div class="user-card">
        <h2>${userName}</h2>
        <div >${email}</div>
        <a href="./profile.html?uid=${doc.id}" id="viewProfile">View Profile</a>        
    </div>
        `
        }

    });
}

async function getUser() {
    if (currentUser) {
        console.log("currentUser", currentUser)
        const docRef = doc(db, "users", "SF");

    }
}



function getRealTimeData() {
    const q = query(collection(db, "users"));
    const unsubscribe = onSnapshot(q, (querySnapshot) => {
        const users = [];
        usersElement.innerHTML = ''
        querySnapshot.forEach((doc) => {
            let { userName, email } = doc.data();
            if (usersElement) {
                usersElement.innerHTML += `
        <div class="user-card">
        <h2>${userName}</h2>
        <div >${email}</div>
        <a href="./profile.html?uid=${doc.id}" id="viewProfile">View Profile</a>        
    </div>
        `}
        }
        );
        console.log("users ka array he ye0", users)
    });
}

getRealTimeData()

getCurrentUser()
getAllUsers()
getUser()

document.getElementById('registerForm')?.addEventListener('click', registerForm)
document.getElementById('loginForm')?.addEventListener('click', loginUser)
document.getElementById('logout-user')?.addEventListener('click', logUserOut)

export { currentUser, isLoading, getCurrentUser }