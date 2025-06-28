// console.log(userName)

// const userName = "arham"

// function hello(){
//     console.log("running")
// }
// hello()

// console.log(userName)

const questions = [
    {
        id: 1,
        question: "What is your name",
        options: ["Arham", "Taha"],
        correctAnswer: "Arham"
    },
    {
        id: 2,
        question: "What is your age",
        options: [21, 22],
        correctAnswer: 21
    },
    {
        id: 3,
        question: "What is your nationality",
        options: [21, 22],
        correctAnswer: 21
    },
    {
        id: 4,
        question: "What is your qualification",
        options: [21, 22],
        correctAnswer: 21
    },
]
let currentQuestion = 0


function showQuestions() {
    let questionElement = document.getElementById("question");
    questionElement.innerHTML = questions[currentQuestion].question
}

showQuestions()


function incrementQuestion() {
    currentQuestion++
    showQuestions()
}

// const myInfo = {
//     myName : "Arham Ali",
//     age: 23,
//     nationality: "Pakistan"
// }

// console.log(myInfo.myName)
// console.log(myInfo["nationality"])