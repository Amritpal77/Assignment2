// vowels and constant check
// First way
const ind=require("readline-sync")
var ch
ch=ind.question("Enter a character: ")
if(ch=="a" || ch=='e' || ch=='i' || ch=='o' || ch=='u' || ch=='A' || ch=='E' || ch=='I' || ch=='O'||ch=='U'){
    console.log("Given character is Vowel")
}
else{
    console.log("Given character is constant")
}


//Second Way
var cha 
cha=ind.question("Enter a character: ")
if((cha>='a' && cha<='z')||(cha>='A' && cha<='Z')){
    if(ch=="a" || ch=='e' || ch=='i' || ch=='o' || ch=='u'){
        console.log("Given character" +cha+ "is vowel")
    }
    else if(ch=='A' || ch=='E' || ch=='I' || ch=='O'||ch=='U'){
        console.log("Given character " +cha+" is vowel")
    }
    else{
        console.log("Given character " +cha+" is constant")
    }
}
else{
    console.log("Given " +cha+" is niether vowel nor constant")
}