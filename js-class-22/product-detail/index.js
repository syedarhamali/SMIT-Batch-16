// let productId = window.location.search

let productId = new URLSearchParams(window.location.search)
productId
let id = productId[productId.length - 1]

let productData;

async function getProductData() {
    let response = await fetch(`https://dummyjson.com/products/${id}`)
    let data = await response.json()
    productData = data
    showProductData()
    Swal.fire({
        title: "Data achuka he!",
        icon: "success",
        draggable: true
    });
}

getProductData()

function showProductData() {
    let headingOne = document.createElement('h1')
    headingOne.textContent = productData.title
    let priceElement = document.createElement('h6')
    priceElement.textContent = productData.price
    let containerDiv = document.getElementById("container")
    containerDiv.appendChild(headingOne)
    containerDiv.appendChild(priceElement)
}

