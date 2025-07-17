async function getData() {
    let response = await fetch("https://dummyjson.com/products");
    let data = await response.json();
    // let products = data.products
    let { products } = data
    let cardContainer = document.getElementById("cards")
    products.map((product) => {
        let {title , description , price , images} = product 
        cardContainer.innerHTML += `<div class="product-card">
            <div class="badge">Hot</div>
            <div class="product-tumb">
                <img src=${images[0]} alt="">
            </div>
            <div class="product-details">
                <span class="product-catagory">Women,bag</span>
                <h4><a href="">${title}</a></h4>
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


function main() {
    console.log("chal raha he ")
    getData()
    console.log("chal chuka he he ")
}

// let person = {
//     name: "Arham",
//     age: 24,
//     nationality: "Pakistani"
// }
// let { age , nationality , name} = person // destructuring
// console.log(age , nationality)
// console.log(nationality)



// sync js
// async 