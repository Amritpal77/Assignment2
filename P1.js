const gsp=require('readline-sync')
var math, english, hindi, science, social, total, percentage
math=gsp.questionInt("Enter math's marks: ")
english=gsp.questionInt("Enter english's marks: ")
hindi=gsp.questionInt("Enter hindi's marks: ")
science=gsp.questionInt("Enter science's marks: ")
social=gsp.questionInt("Enter social's marks: ")
if(math>=0 && math<=100){
    if(math>=33){
        console.log("passed in math")
    }
    else(
        console.log("reappear in math")
    )
}
else{
    console.log("Invalid math's marks")
}
if(english>=0 && english<=100){
    if(english>=33){
        console.log("passed in english")
    }
    else(
        console.log("reappear in english")
    )
}
else{
    console.log("Invalid english's marks")
}
if(hindi>=0 && hindi<=100){
    if(hindi>=33){
        console.log("passed in hindi")
    }
    else(
        console.log("reappear in hindi")
    )
}
else{
    console.log("Invalid hindi's marks")
}
if(science>=0 && science<=100){
    if(science>=33){
        console.log("passed in science")
    }
    else(
        console.log("reappear in science")
    )
}
else{
    console.log("Invalid science's marks")
}
if(social>=0 && social<=100){
    if(social>=33){
        console.log("passed in social")
    }
    else(
        console.log("reappear in social")
    )
}
else{
    console.log("Invalid social's marks")
}
total=math+english+hindi+science+social
console.log("Total marks of student: ",total)
percentage=(total/500)*100
console.log("Percentage of students is: ",percentage)

if(math>=33 && english>=33 && hindi>=33 && science>=33 && social>=33){
    if(percentage>=33 && percentage<=60){
        console.log("PASS")
    }
    else if(percentage>60){
        console.log("MERIT")
    }
    else{
        console.log("FAIL")
    }
}
else if(math<33 && english<33 && hindi<33 && science<33 && social<33){
    console.log("REAPPEAR")
}
else{
    console.log("FAIL")
}