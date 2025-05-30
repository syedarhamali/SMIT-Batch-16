

// var city = prompt('enter name');

// console.log(city.toLowerCase())
// console.log(city.toUpperCase())

// var firstChr = city.slice(0,1).toUpperCase(); // 
// var remainChr = city.slice(1).toLowerCase(); // 
// var totalString = firstChr+remainChr
// console.log(totalString)



var text = 'enter some   text';
for(var i =0 ; i< text.length; i++){
    // console.log(text.slice(i, i+2)) // (3,4)

    if(text.slice(i, i+2) === '  ')
    {
        // console.log('double space!')
    }
}




var string = "the New Yorker magazine doesn't allow the phrase World War II. some text";

// for(var i=0; i<string.length; i++){
//     if(string.slice(i, i+12) === 'World War II'){
//         string = string.slice(0,i) + "the Second World War" + string.slice(i+12)
//     }
// }


var findIndex = string.indexOf('World War II');
if(findIndex != -1){
    string = string.slice(0, findIndex) + "the Second World War" + string.slice(findIndex+12)
}

console.log(string)


// console.log(string.lastIndexOf('abc'));



var txt = "the New Yorker magazine doesn't allow the phrase";
console.log(txt.replace("the", 'abc')) // replace 1st found word only

console.log(txt.replace(/the/g, 'abc')) // global replace



