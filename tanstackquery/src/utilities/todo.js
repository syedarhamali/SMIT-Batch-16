let todos = ['task 1', "task 2"];


export let getTodos = ()=> new Promise((res, rej)=>{
    setTimeout(()=>{
        res(todos)
    },2000)
})

export let addTodos = (todo)=> new Promise((res, rej)=>{
    todos.push(todo)
    setTimeout(()=>{
        res(todos)
    },2000)
})



