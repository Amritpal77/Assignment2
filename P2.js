// Find odd and even

const ind=require("readline-sync")
var num
num=ind.questionInt("Enter a Number: ")
if(num%2==0){
    console.log("Given number is Even")
}
else{
    console.log("Given number is odd")
}