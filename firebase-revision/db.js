import { addDoc, collection, db, doc, setDoc } from "./firebase-config.js";


async function addDataToDb() {
    try {
        const docRef = await addDoc(collection(db, "users"), {
            firstName: "Arham",
            lastName: "Ali",
            dateOfBirth: 2001
        });
        console.log("Document written with ID: ", docRef.id);
    } catch (e) {
        console.error("Error adding document: ", e);
    }

}


async function addUserToDb(userId , data) {
    // Add a new document in collection "cities"
    await setDoc(doc(db, "users", userId), data);
}

window.addData = () => {
    addDataToDb()
}

export {
    addUserToDb
}