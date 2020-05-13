`use strict`

var ans1,
    ans2,
    ans3,
    ans4,
    ans5,
    yourGrade = 0;

var yourName = prompt("what is your name?");
console.log ("your name is " + yourName)
alert("welcom....." + yourName + " please answer the following qustion with (yes/y) or (no/n)");

function qus1(){
var qustion1 = prompt("Is my name mohammad?");
qustion1 = qustion1.toLowerCase();
if (qustion1 == "yes" || qustion1 == "y") {
    ans1 = "true answer";
    yourGrade = yourGrade + 1;
}
else if (qustion1 == "no" || qustion1 == "n") {
    ans1 = "wrong answer";
}
else {
    ans1 = "you dont insert (yes/y) or (no/n) try again";
}
console.log (" qustion1 have a " + ans1);
alert(" qustion1 have a " + ans1);
}
qus1();

function qus2(){
var qustion2 = prompt("Is my old 24?");
qustion2 = qustion2.toLowerCase();
if (qustion2 == "no" || qustion2 == "n") {
    ans2 = "true answer";
    yourGrade = yourGrade + 1;
}
else if (qustion2 == "yes" || qustion2 == "y") {
    ans2 = "wrong answer";
}
else {
    ans2 = "you dont insert (yes/y) or (no/n) try again";
}
console.log (" qustion2 have a " + ans2);
alert(" qustion2 have a " + ans2);
}
qus2();


function qus3(){
var qustion3 = prompt("Im from saudi arabia thats right?");
qustion3 = qustion3.toLowerCase();
if (qustion3 == "no" || qustion3 == "n") {
    ans3 = "true answer";
    yourGrade = yourGrade + 1;
}
else if (qustion3 == "yes" || qustion3 == "y") {
    ans3 = "wrong answer";
}
else {
    ans3 = "you dont insert (yes/y) or (no/n) try again";
}
console.log (" qustion3 have a " + ans3);
alert(" qustion3 have a " + ans3);
}
qus3();

function qus4(){
var qustion4 = prompt("Is my first major is Mechanical Engineering?");
qustion4 = qustion4.toLowerCase();
if (qustion4 == "yes" || qustion4 == "y") {
    ans4 = "true answer";
    yourGrade = yourGrade + 1;
}
else if (qustion4 == "no" || qustion4 == "n") {
    ans4 = "wrong answer";
}
else {
    ans4 = "you dont insert (yes/y) or (no/n) try again";
}
console.log (" qustion4 have a " + ans4);
alert(" qustion4 have a " + ans4);
}
qus4();

function qus5(){
var qustion5 = prompt("Is my second major is programmer?");
qustion5 = qustion5.toLowerCase();
if (qustion5 == "yes" || qustion5 == "y") {
    ans5 = "true answer";
    yourGrade = yourGrade + 1;
}
else if (qustion5 == "no" || qustion5 == "n") {
    ans5 = "wrong answer";
}
else {
    ans5 = "you dont insert (yes/y) or (no/n) try again";
}
console.log(" qustion5 have a " + ans5);
alert(" qustion5 have a " + ans5);
}

qus5();
alert ("Now you can make many attempte in these qustions .... lets go.")

function qus6(){
for (var i = 1; i <= 4; i++) {

    var qustion6 = prompt("Guess how many members of my family? ...." + "(attempt " + i + " of 4)");
    if (qustion6 == 5) {
        alert("true answer");
console.log ("true answer")
        yourGrade = yourGrade + 1;
        break;
    }
    else if (qustion6 < 5 && i < 4) {
        alert("Your answer too low ... try again")
    }
    else if (qustion6 > 5 && i < 4) {
        alert("Your answer too high ... try again")

    }
    else if (i == 4) {
        alert("Your attempts have been consumed .... the aswer is 5")

    }

}
}
qus6();
function qus7(){
var myAnimes = ["attack on titan" , "death note" , "naruto", "one piece" , "bleach"];

mainLoop:
for (var y = 1 ; y <=6 ; y++){
    var qustion7 = prompt("Guess what is the best anime for me?" + "(attempt " + y + " of 6)");

    
    for (var x = 0 ; x < myAnimes.length; x++){
    
        if (qustion7 === myAnimes[x].toLowerCase()){ 
            alert("true answer");
            console.log ("true answer")
            yourGrade = yourGrade + 1;
            break mainLoop ; 
        }
       
    }
    if (y == 6){
        alert("Your attempts have been consumed .... the aswers is " + myAnimes.toString())
    }
    else {
        alert ("wrong answer .... try again")
    }

}
}
qus7();
alert("Now your Grade is " + yourGrade + " out of 7")
alert("Thank you for your time " + yourName);










