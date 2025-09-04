import { auth, createUserWithEmailAndPassword, doc, setDoc, db } from "./firebaseConfig.js";

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

async function addUserToDb(email, userName, userId) {
    await setDoc(doc(db, "users", userId), {
        email,
        userName,
        userId,
        image: 'https://images.pexels.com/photos/2486168/pexels-photo-2486168.jpeg'
    });

}

document.getElementById("registerForm")?.addEventListener("click", registerForm)