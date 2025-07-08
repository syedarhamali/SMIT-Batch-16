// console.log(userName)

// const userName = "arham"

// function hello(){
//     console.log("running")
// }
// hello()

// console.log(userName)



var person = {
    name: "Arham",
    age: 24,
    nationality: "Pakistan"
}


const questions = [
    {
        id: 1,
        question: "What is your name",
        options: ["Arham", "Taha", "Hamza", "Affan"],
        correctAnswer: "Arham"
    },
    {
        id: 2,
        question: "What is your age",
        options: [21, 22, 23, 24],
        correctAnswer: 21
    },
    {
        id: 3,
        question: "What is your nationality",
        options: ["Afghani", "Pakistani", "Bangali", "British"],
        correctAnswer: "Pakistani"
    },
    {
        id: 4,
        question: "What is your qualification",
        options: ["Jahil", "Matric", "Inter", "Graduate"],
        correctAnswer: "Graduate"
    },
]
let currentQuestion = 0
let score = 0


function showQuestions() {
    let questionElement = document.getElementById("question");
    questionElement.innerHTML = questions[currentQuestion].question

    let optionsElement = document.getElementById("options")


    optionsElement.innerHTML = ''

    questions[currentQuestion].options

    for (var i = 0; i < questions[currentQuestion].options.length; i++) {
        optionsElement.innerHTML += `<div onClick="saveAnswer(event)" class="option">${questions[currentQuestion].options[i]}</div>`
    }
}

showQuestions()
let scoreElement = document.getElementById("score")
let userAnswer = null
let nextQuestionButton = document.getElementById("nextBtn")
let finishQuizButton = document.getElementById("finishQuiz")
let quizContainer = document.getElementById("quiz-container")
let restartQuizButton = document.getElementById("restartQuiz")
let resultContainer = document.getElementById("result-container")

function saveAnswer(event) {

    nextQuestionButton.disabled = false
    event.target.classList.add("active")

    let options = document.querySelectorAll(".option");
    options.forEach((element) => {
        if (event.target !== element) {
            element.classList.remove("active")
        }
    })

    // for(var i = 0 ; i < options.length ; i++){
    //     if(event.target !== options[i]){
    //        options[i].classList.remove("active")
    //     }
    // }

    console.log(options)

    // console.log(options)
    // console.log(event.target.classList)
    userAnswer = event.target.innerHTML
}

function incrementQuestion() {

    console.log(userAnswer)
    if (userAnswer == questions[currentQuestion].correctAnswer) {
        score = score + 10
    }
    currentQuestion++
    if (currentQuestion === questions.length - 1) {
        nextQuestionButton.disabled = true
        nextQuestionButton.style.display = "none"
        finishQuizButton.style.display = "block"
    }
    scoreElement.textContent = score
    showQuestions()
    nextQuestionButton.disabled = true
}


function finishQuiz() {
    if (userAnswer == questions[currentQuestion].correctAnswer) {
        score = score + 10
    }
    scoreElement.textContent = score
    quizContainer.style.display = 'none'
    restartQuizButton.style.display = "block"
    resultContainer.style.display = "block"
}

function restartQuiz() {
    quizContainer.style.display = 'block'
    currentQuestion = 0
    showQuestions()
    score = 0
    scoreElement.textContent = score
    nextQuestionButton.style.display = "block"
    nextQuestionButton.disabled = true
    restartQuizButton.style.display = "none"
    finishQuizButton.style.display = "none"

}

// var testing = ["Arham", "Taha", "Hamza", "Affan"]


// testing.map((arham) => {
//     console.log(arham)
// })