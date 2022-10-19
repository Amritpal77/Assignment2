// Find largest number fromm given four number 

const ind=require("readline-sync")
var num1, num2, num3, num4
num1=ind.questionInt("Enter first number: ")
num2=ind.questionInt("Enter second number: ")
num3=ind.questionInt("Enter third number: ")
num4=ind.questionInt("Enter fourth number: ")
if(num1>num2 && num1>num3 && num1>num4){
    console.log("num1 is greatest number")
}
else if(num2>num1 && num2>num3 && num>num4){
    console.log("num2 is greatest number")
}
else if(num3>num1&& num3>num2 && num3>num4){
    console.log("num3 is greatset number")
}
else if(num4>num1 && num4>num2 && num4>num3){
    console.log("num4 is greatest number")
}
else{
    console.log("They all are equal")
}