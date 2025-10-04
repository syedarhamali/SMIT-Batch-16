import { useEffect, useState } from "react"

function TodoList() {
    const [onlineStatus, setOnlineStatus] = useState(navigator.onLine)
    // const [counter , setCounter] = useState({firstName: 'Arham' , lastName: 'Ali'})
    // const lastName = "Ali"
    // var counter = 10
    // function increaseCounter(){
    //     setCounter(counter + lastName)
    // }
    const [data, setData] = useState([{
        "id": 1,
        "title": "Essence Mascara Lash Princess",
        "description": "The Essence Mascara Lash Princess is a popular mascara known for its volumizing and lengthening effects. Achieve dramatic lashes with this long-lasting and cruelty-free formula.",
        "category": "beauty",
        "price": 9.99
    }])


    const getProducts = async () => {
        const data = await fetch("https://dummyjson.com/products")
        const response = await data.json()
        setData(response.products)
    }

    useEffect(() => {
        getProducts()
    }, [])

    // getProducts()

    return (
        <div>
            {/* {data.map((element) => {
                const { id, title, description, price } = element
                return (
                    <div id={id}>
                        <h1>{title}</h1>
                        <p>{description}</p>
                        <p>{price}</p>
                    </div>
                )
            })} */}

            {onlineStatus ? <h1 id="online">Online</h1> : <h1 id="offline">Offline</h1>} // conditional rendering





            {/* <h1>Todo List</h1>

            <p>Counter is <span>{counter}</span> </p>
            <button onClick={increaseCounter}>Increase Counter</button> */}
        </div>
    )
}

export default TodoList