const { default: axios } = require("axios")

const getProductData = async () => {
    const response = await axios.get(API_URL)
    return response.data.products
}

export{
    getProductData
}