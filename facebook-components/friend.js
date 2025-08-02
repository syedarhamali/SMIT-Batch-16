document.addEventListener('DOMContentLoaded', function () {
    const currentUser = JSON.parse(localStorage.getItem('currentUser'));

    if (currentUser) {
        // Update user avatars and names
        const userInitial = currentUser.firstName.charAt(0);
        const userName = `${currentUser.firstName} ${currentUser.lastName}`;

        // Update all user avatars
        document.getElementById('userAvatar').textContent = userInitial;
        document.getElementById('sidebarUserAvatar').textContent = userInitial;
        //   document.getElementById('createPostAvatar').textContent = userInitial;

        // Update user names
        document.getElementById('sidebarUserName').textContent = userName;

        // Update post input placeholder
        // document.querySelector('.post-input-field').placeholder = `What's on your mind, ${currentUser.firstName}?`;
    } else {
        // Redirect to login if no user is logged in
        window.location.href = 'index.html';
    }
});
const users = JSON.parse(localStorage.getItem("users")) || []
const loggedInUser = JSON.parse(localStorage.getItem("currentUser")) || {}

function showFriends() {


    const dost = users.filter((user) => user.id !== loggedInUser.id)
    dost.map((element) => {
        const kiyaYeMeraDostHe = loggedInUser.friends.includes(element.id)
        document.getElementById("friends-container").innerHTML += `<div id="fb" style="margin-bottom: 10px;">
             <div id="fb-top">
   
  </div>
  <img src="https://5.imimg.com/data5/SELLER/Default/2024/9/450937057/QO/MA/WM/90162095/new-project-8-500x500.jpg" height="100" width="100" alt="Image of woman">
  <p id="info"><b>${element.firstName} ${element.lastName} </b> <br> <span>14 mutual friends</p>
  <div id="button-block">
  ${kiyaYeMeraDostHe ? `<p style='color: white; background-color: green;'> Already Added</p>` : `
    <div id="confirm" onClick="addFriend(${element.id} , ${loggedInUser.id})">Confirm</div>
    <div id="delete">Delete Request</div>
  ` }
  </div>
  
</div>`
    })
}

console.log(loggedInUser)

function addFriend(friendId, userId) {
    if (loggedInUser.friends?.length !== 0) {
        loggedInUser.friends = []
        loggedInUser.friends.push(friendId)
    } else {
        loggedInUser.friends.push(friendId)
    }
    localStorage.setItem('currentUser', JSON.stringify(loggedInUser))

    users[userId - 1] = loggedInUser
    console.log(users)

    localStorage.setItem("users", JSON.stringify(users))

}

showFriends()