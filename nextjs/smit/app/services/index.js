import axios from "axios"

const getProductData = async () => {
    const response = await axios.get('https://smit-backend-crud.vercel.app/api/items')
    const { data: itemData } = response
    const { data } = itemData
    return data
}

const deleteProductData = async (id) => {
    const response = await axios.delete(`https://smit-backend-crud.vercel.app/api/items/${id}`)
    return response.data
}


const updateProductData =  async (id, data)=>{
    const response = await axios.patch(`https://smit-backend-crud.vercel.app/api/items/${id}`,data)
    console.log(response)
}
export {
    getProductData,
    deleteProductData,
    updateProductData
}