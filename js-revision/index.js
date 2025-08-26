// const containerElement = document.getElementById("container")

// async function getData() {
//     const response = await fetch("https://dummyjson.com/products")
//     const result = await response.json()
//     const { products } = result

//     products.map((item) =>{
//         const {title  , description , price , id} = item
//         containerElement.innerHTML += `<div id="card">
//             <h2>${title}</h2>
//             <p>${description}</p>
//             <span>${price}$</span>
//             <a href="./productpage.html?id=${id}">View Details</a>
//         </div>`
//     })
//     console.log(products, "data ==>")
// }

// getData()

var loginButton = document.getElementById("auth")
var userButton = document.getElementById("user")
var sellButton = document.getElementById("sell")

function loginUser(){
    var isLogin = true
    if(isLogin === true){
        loginButton.style.display = "none"
        userButton.style.display = "inline-block"
        sellButton.disabled = false
    }
}