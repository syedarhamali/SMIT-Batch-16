import { auth, collection, db, doc, onAuthStateChanged, onSnapshot, query, setDoc } from "./firebaseConfig.js";

const params = new URLSearchParams(window.location.search)

const roomId = params.get('roomId')

let userId = null

console.log(roomId, "roomId")
let messagesContainer = document.getElementById("messages")

function getRealTimeData() {
    const q = query(collection(db, "chatrooms", roomId, "messages"));
    const unsubscribe = onSnapshot(q, (querySnapshot) => {
        const messages = [];
        querySnapshot.forEach((doc) => {
            messages.push(doc.data());
        });
        messagesContainer.innerHTML = ''
        messages.map((message) => {
            const { message: userMessage , userId:senderId } = message
            messagesContainer.innerHTML += `
              <div class="chat-msg ${userId === senderId ? 'owner' : ''}">
            <div class="chat-msg-profile">
                <img class="chat-msg-img"
                    src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/3364143/download+%282%29.png" alt="">
                <div class="chat-msg-date">Message seen 2.45pm</div>
            </div>
            <div class="chat-msg-content">
                <div class="chat-msg-text">${userMessage}</div>
            </div>
        </div>`
        })
    });
}

async function getCurrentUser() {
    onAuthStateChanged(auth, (user) => {
        if (user) {
            // User is signed in, see docs for a list of available properties
            // https://firebase.google.com/docs/reference/js/auth.user
            const uid = user.uid;

            if (uid) {
                userId = uid
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

getCurrentUser()

window.sendMessage = async () => {
    let messageId = roomId + new Date()
    let message = document.getElementById("message-input")
    console.log(message.value, "message he ye")
    const getLoginUser = null
    await getCurrentUser((user) => {
        getLoginUser = user
    })


    const messageRef = doc(db, 'chatrooms', roomId, "messages", messageId);
    setDoc(messageRef, { createdAt: new Date().toISOString(), message: message.value, userId: userId });
}

getRealTimeData()