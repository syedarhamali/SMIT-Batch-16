// const mubashir = {
//     personName: "Mubashir",
//     age: 24,
//     walking: function () {
//         const objectNewOne = {
//             eating:  () => {
//                 console.log(this.personName)
//             }
//         }
//         objectNewOne.eating()
//     }
// }


// mubashir.walking()

class Person {
    fullName
    email
    password
    constructor(fullName, email, password) {
        this.fullName = fullName,
            this.email = email,
            this.password = password
    }
}


// function calculate(numberOne , numberTwo){
//     console.log(numberOne + numberTwo)
// }


// calculate(10,4)
let users = JSON.parse(localStorage.getItem("users")) || []
let userName = document.getElementById("username")
let userEmail = document.getElementById("useremail")

function registerUser(event) {
    event.preventDefault()
    let fullName = document.getElementById("fullName")
    let email = document.getElementById("email")
    let password = document.getElementById("password")

    let usersFromStorage = JSON.parse(localStorage.getItem("users"))
    let savedUser = usersFromStorage.find((element) => element.email === email.value)

    if (savedUser?.email) {
        alert("user already register he ")
    } else {
        let newUser = new Person(fullName.value, email.value, password.value)
        users.push(newUser)
        localStorage.setItem("users", JSON.stringify(users))
    }

    fullName.value = ""
    email.value = ""
    password.value = ""
}


function loginUser(event) {
    event.preventDefault()
    let email = document.getElementById("loginEmail")
    let password = document.getElementById("loginPassword")
    let usersFromStorage = JSON.parse(localStorage.getItem("users"))
    let savedUser = usersFromStorage.find((element) => element.email === email.value)

    if (savedUser?.email === email.value && savedUser?.password === password.value) {
        alert("you have logged in successfully!")
        localStorage.setItem("loggedinUser", JSON.stringify(savedUser))
        userName.innerHTML = savedUser.fullName
        userEmail.innerHTML = savedUser.email
        checkLoggedInUser()
    } else {
        alert("Invalid credientials")
    }

}

function logoutUser() {
    localStorage.removeItem("loggedinUser")
    userName.innerHTML = ''
    userEmail.innerHTML = ''
    checkLoggedInUser()
}

function checkLoggedInUser() {
    const loggedUser = JSON.parse(localStorage.getItem("loggedinUser"));
    const userDetails = document.getElementById("userDetails")

    if (loggedUser) {
        userDetails.style.display = "block";
        userName.innerHTML = loggedUser.fullName
        userEmail.innerHTML = loggedUser.email

    } else {
        userDetails.style.display = "none";
    }
};

checkLoggedInUser()


async function getData() {
    let response = await fetch("https://dummyjson.com/products");
    let data = await response.json();
    // let products = data.products
    let { products } = data
    let cardContainer = document.getElementById("cards")
    products.map((product) => {
        let {title , description , price , images , id} = product 
        cardContainer.innerHTML += `<div class="product-card">
            <div class="badge">Hot</div>
            <div class="product-tumb">
                <img src=${images[0]} alt="">
            </div>
            <div class="product-details">
                <span class="product-catagory">Women,bag</span>
                <h4><a href="./product-detail/index.html?id=${id}" target="_blank">${title}</a></h4>
                <p>${description}</p>
                <div class="product-bottom-details">
                    <div class="product-price"><small>$96.00</small>$${price}</div>
                    <div class="product-links">
                        <a href=""><i class="fa fa-heart"></i></a>
                        <a href=""><i class="fa fa-shopping-cart"></i></a>
                    </div>
                </div>
            </div>
        </div>`

    })
}
getData()