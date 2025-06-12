var numberOne = +prompt("Enter your first Number")
var numberTwo = +prompt("Enter your second Number")

var sumResult = sumOfTwoNumbers(numberOne ,numberTwo )
console.log(sumResult)


function sumOfTwoNumbers(numberOne , numberTwo){ // argument
    // var numberOne = 100
    // var numberTwo = 1
    var result = numberOne + numberTwo
    return result
}
