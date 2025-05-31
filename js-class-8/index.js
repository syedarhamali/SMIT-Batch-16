var username = 'ali';


console.log(username.charAt(0))
console.log(username[0])


// rounding numbers
var roundNum = 4.4;
console.log(Math.round(roundNum));

var ceilNum = 2.00000001;
console.log(Math.ceil(ceilNum));

var floorNum = 2.9;
console.log(Math.floor(floorNum));

// random numbers

var randomNum = Math.floor((Math.random() * 6) ); /// 5.9999999999
console.log(randomNum)

// generate opt (4 digits)
console.log(Math.floor((Math.random() * 900)  + 7777))

// converting string into number
console.log(parseInt('500.9'))
console.log(parseFloat('500.9'))

console.log(Number('500'))

var num = 50.45167;
console.log(num.toString())
console.log(num.toFixed(3))

// get date and time
var currentDate = new Date();  // { ...data}
console.log(currentDate.getDate())
console.log(currentDate.getMonth())
console.log(currentDate.getHours())
console.log(currentDate.getMinutes())
console.log(currentDate.getSeconds())
console.log(currentDate.getMilliseconds())
console.log(currentDate.getMilliseconds())
console.log(currentDate.getTime())

console.log(currentDate.getHours()+ " : "+ currentDate.getMinutes()+ " : "+currentDate.getSeconds())

