// let productId = window.location.search    

let productId = new URLSearchParams(window.location.search)

// let id = productId[productId.length - 1]

let id = productId.get("id")
let myName = productId.get("name")

let data;

window.loca

async function getProductData() {
    try {
        let response = await fetch(`https://dummyjson.com/products/${id}`)
        let productData = await response.json()
        data = productData
    } catch (error) {
        console.log(error, "error")
        let errorContainer = document.getElementById("error")
        let reloadContainer = document.getElementById("reload")
        errorContainer.removeAttribute("hidden")
        reloadContainer.removeAttribute("hidden")
        reloadContainer.setAttribute("style" , "display:block")
    }

    showProductData()
}

getProductData()

function showProductData() {
    console.log("product data wla function chal raha he ")
    let containerDiv = document.getElementById("container")

    let card = `
          <div class="row g-0">
            <div class="col-md-4 text-center p-3">
              <img src="${data.images?.[0] || data.thumbnail}" class="img-fluid rounded" alt="${data.title}">
              <img src="${data.thumbnail}" class="img-thumbnail mt-3" alt="Thumbnail" style="max-width: 100px;">
            </div>
            <div class="col-md-8">
              <div class="card-body">
                <h4 class="card-title">${data.title}</h4>
                <h6 class="text-muted">Brand: <strong>${data.brand}</strong></h6>
                <p class="text-muted">Category: ${data.category}</p>
                <p>
                  <strong class="text-success">$${data.price}</strong>
                  <span class="text-danger ms-2">(-${data.discountPercentage}% off)</span>
                </p>
                <p>⭐ <strong>Rating:</strong> ${data.rating} / 5</p>
                <p><strong>Stock:</strong> ${data.stock} | <span class="text-success">${data.availabilityStatus || "In Stock"}</span></p>
                <p><strong>Description:</strong> ${data.description}</p>
                <p><strong>Tags:</strong> ${(data.tags || []).map(tag => `<span class="badge bg-secondary me-1">${tag}</span>`).join('')}</p>
                <p><strong>SKU:</strong> ${data.sku || "N/A"}</p>
                <p><strong>Warranty:</strong> ${data.warrantyInformation || "No info"}</p>
                <p><strong>Shipping:</strong> ${data.shippingInformation || "Standard shipping"}</p>
                <p><strong>Return Policy:</strong> ${data.returnPolicy || "No return policy"}</p>
              </div>
            </div>
          </div>

          <div class="card-body border-top">
            <h5>Dimensions</h5>
            <ul>
              <li><strong>Weight:</strong> ${data.weight || "N/A"}g</li>
              <li><strong>Width:</strong> ${data.dimensions?.width || "-"} cm</li>
              <li><strong>Height:</strong> ${data.dimensions?.height || "-"} cm</li>
              <li><strong>Depth:</strong> ${data.dimensions?.depth || "-"} cm</li>
            </ul>
          </div>

          <div class="card-body border-top">
            <h5>Barcode & QR Code</h5>
            <p><strong>Barcode:</strong> ${data.meta?.barcode || "N/A"}</p>
            ${data.meta?.qrCode ? `<img src="${data.meta.qrCode}" width="100">` : ""}
          </div>

          <div class="card-body border-top">
            <h5>Customer Reviews</h5>
            ${(data.reviews || []).map(review => `
              <div class="border rounded p-2 mb-2">
                <strong>${review.reviewerName}</strong> (⭐ ${review.rating}/5)
                <p>${review.comment}</p>
              </div>
            `).join('')}
          </div>

          <div class="card-footer text-muted text-end">
            <small>Created: ${new Date(data.meta?.createdAt).toLocaleDateString() || ""} |
            Updated: ${new Date(data.meta?.updatedAt).toLocaleDateString() || ""}</small>
          </div>
        `

    containerDiv.innerHTML = card
}

