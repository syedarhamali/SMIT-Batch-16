import { addDoc, auth, collection, db, doc, getDocs, onAuthStateChanged, query, signOut, where } from "./firebaseConfig.js";

let usersElement = document.getElementById("users")
let userId = null

function getCurrentUser() {
    onAuthStateChanged(auth, (user) => {
        if (user) {
            // User is signed in, see docs for a list of available properties
            // https://firebase.google.com/docs/reference/js/auth.user
            const uid = user.uid;
            userId = uid
            getAllUsers()

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
async function getAllUsers() {
    const querySnapshot = await getDocs(collection(db, "users"));
    console.log("userId ====>", userId)
    querySnapshot.forEach((doc) => {
        // doc.data() is never undefined for query doc snapshots
        // console.log(doc.id, " => ", doc.data());
        let { userName, email } = doc.data();
        if (usersElement) {
            if (userId === doc.id) {
                return
            }
            usersElement.innerHTML += `
        <div class="user-card">
        <h2>${userName}</h2>
        <div >${email}</div>
        <button onclick="checkRoom(event)" id="roomButton" data-id=${doc.id}> chat </button> 
    </div>
        `
        }

    });
}

getCurrentUser()

window.checkRoom = async (event) => {
    var friendId = event.target.dataset.id
    var bothUsers = { [userId]: true, [friendId]: true }

    const q = query(collection(db, "chatrooms"), where(`bothUsers.${userId}`, "==", true), where(`bothUsers.${friendId}`, "==", true))
    let roomId = ''
    const rooms = await getDocs(q)
    rooms.forEach((room) => {
        roomId = room.id
    })
    if(!roomId){
        const docRef = await addDoc(collection(db, "chatrooms"), { bothUsers, createdAt: new Date().toISOString(), createdBy: userId });
        roomId = docRef.id
    }

    if(roomId){
        window.location.href = `./messages.html?roomId=${roomId}`
    }
}

window.signOutUser = () => {
    signOut(auth).then(() => {
        // Sign-out successful.
        alert("User log out ho chuka he")
    }).catch((error) => {
        // An error happened.
        console.log("log out nh hua ")
    });
}