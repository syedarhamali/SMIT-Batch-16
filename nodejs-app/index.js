const express = require('express')
const cors = require('cors');
const app = express()

app.use(cors()); // This enables CORS for all origins and all routes

app.use(express.json())

const users = [{
    id: 1,
    name: 'Arham Ali',
    email: "arhamali63@gmail.com",
    createdAt: new Date()
},
{
    id: 2,
    name: 'Taha Khan',
    email: "taha@gmail.com",
    createdAt: new Date()
}
]

app.get("/", (req, res) => {
    res.send("my backend is running!")
})


app.get("/users", (req, res) => {
    res.json(users)
})


app.post('/users/create', (req, res) => {
    console.log(req.body)
    const { name, email } = req.body

    const newUserData = {
        id: users.length + 1,
        name: name,
        email: email,
        createdAt: new Date()
    }

    users.push(newUserData)

    res.json(newUserData)

})


app.delete("/users/delete/:id", (req, res) => {
    const id = req.params.id

    users.splice(id, 1)

    res.send("user Deleted successfully!")

})


app.listen(3000)