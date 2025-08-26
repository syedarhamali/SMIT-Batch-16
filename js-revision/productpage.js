const parameters = new URLSearchParams(window.location.search)
const id = parameters.get('id')


const titleElement = document.getElementById("title")
const descriptionElement = document.getElementById("description")
const priceElement = document.getElementById("price")

async function getData() {
    const response = await fetch(`https://dummyjson.com/products/${id}`)
    const result = await response.json()
    const {title , description , price} = result

    titleElement.innerHTML = title
    descriptionElement.innerHTML = description
    priceElement.innerHTML = price

    console.log("Result " , result)
    // const { products } = result

    // products.map((item) =>{
    //     const {title  , description , price , id} = item
    //     containerElement.innerHTML += `<div id="card">
    //         <h2>${title}</h2>
    //         <p>${description}</p>
    //         <span>${price}$</span>
    //         <a href="./productpage.html?id=${id}">View Details</a>
    //     </div>`
    // })
    // console.log(products, "data ==>")
}

getData()