import { getDocs, collection, db, addDoc } from "./firebaseConfig.js";

// CRUD

let users = []

let readData = async () => {
    try {
        const querySnapshot = await getDocs(collection(db, "users"));
        querySnapshot.forEach((doc) => {
            users.push({ id: doc.id, ...doc.data() });
        });
    } catch (error) {
        console.error(error)
    }
}

readData().then(() => {
    console.log(`users: `, users)
})

// user form input
let addData = async () => {
    try {
        let nameValue = document.getElementById('name').value
        let ageValue = document.getElementById('age').value

        // validate inputs
        const docRef = await addDoc(collection(db, "users"), {
            name: nameValue,
            age: parseInt(ageValue),
        });
        console.log("Document written with ID: ", docRef.id);
    } catch (e) {
        console.error("Error adding document: ", e);
    }
}
document.getElementById('add_btn').addEventListener('click', addData)