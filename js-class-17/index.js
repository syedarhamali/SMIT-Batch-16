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


function showQuestions() {
    let questionElement = document.getElementById("question");
    questionElement.innerHTML = questions[currentQuestion].question

    let optionsElement = document.getElementById("options")


    optionsElement.innerHTML = ''

    questions[currentQuestion].options

    for (var i = 0; i < questions[currentQuestion].options.length; i++) {
        optionsElement.innerHTML += `<div id="option" class="option">${questions[currentQuestion].options[i]}</div>`
    }
}

showQuestions()


function incrementQuestion() {
    let nextQuestionButton = document.getElementById("nextBtn")
    if (currentQuestion === questions.length - 2) {
        nextQuestionButton.disabled = true
    }
    currentQuestion++
    showQuestions()
}

var testing = ["Arham", "Taha", "Hamza", "Affan"]


testing.map((arham) => {
    console.log(arham)
})