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

const getUsersData = async () => {
    const response = await axios.get('http://localhost:3000/users')
    console.log(response , "response arha he custom backend se")
    // const { data: itemData } = response
    // const { data } = itemData
    // return data
}

const createNewUser = async () =>{
    const response = await axios.post("http://localhost:3000/users/create" , {name: 'Affan' , email: 'affan@gmail.com'})
    console.log(response , "response aya he post ki request krny k baad")
}




const deleteUserData = async () => {
    const response = await axios.delete(`http://localhost:3000/users/delete/3`)
}

export {
    getProductData,
    deleteProductData,
    updateProductData,
    getUsersData,
    createNewUser,
    deleteUserData
}