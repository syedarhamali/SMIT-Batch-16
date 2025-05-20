// var fullName = prompt("Enter your name??")


// if (fullName == "Arham") {
//     alert("You're a teacher!")
//     document.write("You're a teacher!")
// } else {
//     alert("You're a student!")
// }


// var numberToCheck = 0

// if (numberToCheck >= 1) {
//     document.write("Number is equal")
// } else{
//     document.write("Number is not equal")
// }

// var score = 0;

// var question1 = prompt("The sum of 1 + 2 ?")

// if(question1 == 3){
//     alert("Correct he apke jawab , apke lea Qmobile!")
//     score++
// } else{
//     alert("Wrong he apke jawab , correct answer is 3!")
// }

// var question2 = prompt("The sum of 2 * 10 ?")

// if(question2 == 20){
//     alert("Correct he apke jawab , apke lea Qmobile!")
//     score++
// } else{
//     alert("Wrong he apke jawab , correct answer is 20!")
// }



// document.write("apka score hua he " + score * 10)


// == . it can only be check your value 
// === . it can check your value as well as data type


var subOne = +prompt("Enter your English marks")
var subTwo = +prompt("Enter your Urdu marks")
var subThree = +prompt("Enter your Maths marks")
var subFour = +prompt("Enter your Science marks")
var subFive = +prompt("Enter your Pst marks")


var sum = subOne + subTwo + subThree + subFour + subFive
var totalMarks = 500
var percentage = sum * 100 / totalMarks

if (percentage >= 80) {
    document.write("Your Total marks is " + sum + " <br />")
    document.write("Your percentage is " + percentage + "%" + " <br />")
    document.write("you've got A-one grade" + " <br />")
} else if (percentage >= 70) {
    document.write("Your Total marks is " + sum + " <br />" )

    document.write("you've got A grade" + " <br />")
    document.write("Your percentage is " + percentage + "%" + " <br />")


} else if (percentage >= 60) {
    document.write("Your Total marks is " + sum + " <br />") 

    document.write("you've got B grade" + " <br />")
    document.write("Your percentage is " + percentage + "%" + " <br />" )


} else if (percentage >= 50) {
    document.write("Your Total marks is " + sum + " <br />")

    document.write("you've got C grade" + " <br />")
    document.write("Your percentage is " + percentage + "%" + " <br />")

} else if (percentage >= 40) {
    document.write("Your Total marks is " + sum + " <br />")

    document.write("you've got D grade" + " <br />")
    document.write("Your percentage is " + percentage + "%" + " <br />")

} else {
    document.write("Your Total marks is " + sum + " <br />")

    document.write("Sorry :/ you are failed!" + " <br />")
    document.write("Your percentage is " + percentage + "%" + " <br />")

}

