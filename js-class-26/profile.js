import { db } from "./config.js"
import { collection, doc, getDoc, onSnapshot , query} from "./firestore-db.js"

const uid = new URLSearchParams(window.location.search)
const id = uid.get("uid")

let profileElement = document.getElementById("profile")

async function getUser() {
    const docRef = doc(db, "users", id);
    const docSnap = await getDoc(docRef);
    if (docSnap.exists()) {
        // console.log("Document data:", docSnap.data());
        let { userName, email } = docSnap.data()
        profileElement.innerHTML = `
        <h2>${userName}</h2>
        <div>${email}</div>
        `
    }
}
getUser()
