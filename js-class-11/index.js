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

    console.log(numOne , numTwo)

    if (isNaN(numOne)) {
        alert("provided number is not a number")
    } else{
        if(operator === "+"){
            console.log(numOne + numTwo)
        }
    }
}