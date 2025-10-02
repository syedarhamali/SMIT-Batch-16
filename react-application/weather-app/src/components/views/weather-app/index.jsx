import { useState } from "react"

function TodoList() {
    const [inputValue, setInputValue] = useState('')
    const [todo, setTodo] = useState([])

    function addTodo() {
        const tempTodo = [...todo] // []
        tempTodo.push(inputValue) // [jo value input me hogi wo yahan ajayegi]
        setTodo(tempTodo)
        setInputValue('')
    }

    return (
        <div>
            <h1>{inputValue}</h1>
            <input type="text" value={inputValue} onChange={(event) => setInputValue(event.target.value)} />
            <button onClick={addTodo}>Add Todo</button>

            {todo.map((todoItem, index) => {
                return (<div key={index}> {todoItem} </div>)
            })}
        </div>
    )
}

export default TodoList