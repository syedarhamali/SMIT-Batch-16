var currentDate = new Date();
var futureDate = new Date('June 20, 2030 20:15:56');
var diffTime = futureDate.getTime() - currentDate.getTime()

console.log(Math.floor(diffTime/(1000 * 60 * 60 * 24 * 30*12))); // year difference

futureDate.setMonth(2)
console.log(futureDate)

function getCurrentTime(){
    console.log(new Date())
}

/// functions
function greet(names, plan){
    console.log('Welcome!'+ names)
    console.log('Thank for purchasing '+ plan)
}
greet('ali', 'basic');

console.log('some other code.....')

greet('usman', 'pro')

getCurrentTime()
getCurrentTime()

function readArray(array){
    for (var i = 0; i < array.length; i++) {
        console.log(array[i]);        
    }
}
readArray(['a','b','c','d'])

readArray([1,2,3,4,6,7,989,4])





