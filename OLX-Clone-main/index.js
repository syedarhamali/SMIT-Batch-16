let cardElement = document.getElementById("cards");
let loader = document.getElementById("main-div");


async function getData() {


  loader.style.display = "block";
  cardElement.style.display = "none";


  let response = await fetch('https://dummyjson.com/products');
  let data = await response.json();
  console.log(data)
  let { products } = data


  loader.style.display = "none";
  cardElement.style.display = "flex";


  products.map((product) => {
    let { title, description, category, images, price, availabilityStatus, stock } = product;
    let { width, height, depth } = product.dimensions;
    console.log(width)
    cardElement.innerHTML += ` <div class="card">
  <div class="badge">Stock ${stock}</div>
  <div class="tilt">
    <div class="img"><img src="${images}" alt="Premium Laptop"></div>
  </div>
  <div class="info">
    <div class="cat">${category}</div>
    <h2 class="title">${title}</h2>
    <p class="desc">${description}}</p>
    <div class="feats">
      <span class="feat">Width ${width}</span>
      <span class="feat">Height ${height}</span>
      <span class="feat">Depth ${depth}</span>
    </div>
    <div class="bottom">
      <div class="price">
        <span class="new">$${price}</span>
          <div class="stock">${availabilityStatus}</div>
      </div>
      <button class="btn">
        <span>Add to Cart</span>
        <svg class="icon" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
          <path d="M6 2L3 6v14a2 2 0 002 2h14a2 2 0 002-2V6l-3-4" />
          <line x1="3" y1="6" x2="21" y2="6" />
          <path d="M16 10a4 4 0 01-8 0" />
        </svg>
      </button>
    </div>
    </div>
  </div>
</div>
`

  })

}

getData();

