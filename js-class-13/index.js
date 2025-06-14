function start() {
    var numOne = +prompt("Enter your first Number")
    var numTwo = +prompt("Enter your second Number")
    var operator = prompt("Enter your Operator")


    if (isNaN(numOne)) {
        alert("provided number is not a number")
    } else {
        // if (operator === "+") {
        //     sumOfTwoNumbers(numOne, numTwo)
        //     // console.log(numOne + numTwo)
        // } else if (operator === "-") {
        //     SubOfTwoNumbers(numOne, numTwo)
        // }
        // else if (operator === "*") {
        //     MulOfTwoNumbers(numOne, numTwo)
        // }
        // else if (operator === "/") {
        //     DivOfTwoNumbers(numOne, numTwo)
        // }

        switch (operator) {
            case "+":
                sumOfTwoNumbers(numOne, numTwo);
                break;
            case "-":
                SubOfTwoNumbers(numOne, numTwo);
                break;
            case "*":
                MulOfTwoNumbers(numOne, numTwo);
                break;
            case "/":
                DivOfTwoNumbers(numOne, numTwo);
                break;
            default:
                console.log("operator not found")
        }
    }
}


function sumOfTwoNumbers(numberOne, numberTwo) { // arguments
    console.log(numberOne + numberTwo)

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

// debugger
// var i = 0
// while(i < 2){
//     console.log("running" + i)
//     i++
// }

// var i = 0
var isRestart = "no";
do{
    start()
   isRestart =  prompt("Do you want to restart the calculation ??")
} while(isRestart === "yes")