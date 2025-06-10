function sum(num1, num2){
    var res = num1 + num2;
    return res;
}

function subtract(num1,num2){
    return num1 - num2; 
}

var result = sum(10,5)
console.log(result)
console.log(sum(20,100))

var subRes = subtract(50,20);
var subRes2 = subtract(150,30);
console.log(subRes)
console.log(subRes2)

function percentage(obtMarks, totalMarks){
    
    var per = (obtMarks/totalMarks)*100; // local variable
    return per
}
// console.log(per)

var calPer = percentage(490,500);
console.log(calPer)

var a = 20;
function someFun(){
    var a = 200;
}
someFun()
a = 10;
console.log(a)
