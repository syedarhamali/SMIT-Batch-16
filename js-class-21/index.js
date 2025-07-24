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
        localStorage.setItem("loggedinUser" , JSON.stringify(savedUser))
        userName.innerHTML = savedUser.fullName
        userEmail.innerHTML = savedUser.email
    } else {
        alert("Invalid credientials")
    }

}

function logoutUser(){
    localStorage.removeItem("loggedinUser")
     userName.innerHTML = ''
        userEmail.innerHTML = ''
}