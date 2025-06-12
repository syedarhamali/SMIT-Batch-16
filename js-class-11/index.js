// function hello(){
//     var element = document.getElementById("heading")
//     element.textContent = "New Content"
//     element.style.backgroundColor = "blue"
//     console.log(element)
//     // document.write("Hello there! Nice to meet you!")
// }



function start() {
    var numOne = +prompt("Enter your first Number")
    var numTwo = +prompt("Enter your second Number")
    var operator = prompt("Enter your Operator")


    if (isNaN(numOne)) {
        alert("provided number is not a number")
    } else {
        if (operator === "+") {
            sumOfTwoNumbers(numOne, numTwo)
            // console.log(numOne + numTwo)
        } else if (operator === "-") {
            SubOfTwoNumbers(numOne, numTwo)
        }
        else if (operator === "*") {
            MulOfTwoNumbers(numOne, numTwo)
        }
        else if (operator === "/") {
            DivOfTwoNumbers(numOne, numTwo)
        }
    }
}


var result = sumOfTwoNumbers(20, 10)
console.log(result)


function sumOfTwoNumbers(numberOne, numberTwo) { // arguments
    return numberOne + numberTwo
   
}

function SubOfTwoNumbers(numberOne, numberTwo) { // arguments
    console.log(numberOne - numberTwo)
}

function MulOfTwoNumbers(numberOne, numberTwo) { // arguments
    console.log(numberOne * numberTwo)
}

function DivOfTwoNumbers(numberOne, numberTwo) { // arguments
    console.log(numberOne / numberTwo)
}



