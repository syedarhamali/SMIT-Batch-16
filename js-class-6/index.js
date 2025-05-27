var cities = ["Karachi", "Peshawar", "Islamabad", "Rawalpindi", "Skardu", "Lahore"]

// cities.push("Skardu") // added from the end

// console.log(cities)

// cities.pop() // remove from the end
// cities.pop()


// cities.unshift("Lahore")
// cities.shift()

// cities[2] = "Lahore"

// cities.splice(6, 0 , "Multan")

// var specifiCities = cities.slice(1, 3)

// console.log(specifiCities) //it will copy from index 0 and before the 2nd index

// console.log(cities)

// console.log(cities[0])

for (var i = 0; i <= 6; i++) {
    if (cities[i] === "Islamabad") {
        console.log(cities[i])
        // alert("yehi he saaf suthra sheher")
    }
}

// console.log(cities[0])
// console.log(cities[1])
// console.log(cities[2])
// console.log(cities[3])


for(var i = 10; i>0; i--){
    console.log(i);
}





// var isMatch = false;
// for(var i=0; i< cities.length; i++){
//     console.log(cities[i])
//     if("Islamabad" === cities[i]){
//         isMatch = true;
//         console.log('found at index: ' + i);
//         break;
//     }
// }
// if(isMatch == true){
//     console.log('found!')
// }
// else{
//     console.log('not found!')
// }



var firstNames = ["BlueRay ", "Upchuck ", "Lojack ", "Gizmo ", "Do-Rag "];
var lastNames = ["Zzz", "Burp", "Dogbone", "Droop"];

for(var i=0; i<firstNames.length; i++){ 
    // console.log('outer loop: ',firstNames[i]) // 1

    for(var j=0; j< lastNames.length; j++){ //
        // console.log('nested loop: ',lastNames[j])
        console.log(firstNames[i] + lastNames[j])


    }

}


for(var i=1; i<=5; i++){ // n
    console.log(i) // n
    for(var j=1; j<=3; j++){ // n * n
        console.log(i, j) // 3 * 5
        
    }

}






