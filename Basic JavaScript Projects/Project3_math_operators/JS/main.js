function addition_function() { //Addition operation function
    var addition = 2 + 2;
    document.getElementById("Add").innerHTML = "2 + 2 = " + addition;
}

function subtraction_function() { //Subtraction operation function
    var Subtraction = 5 - 2;
    document.getElementById("Math").innerHTML = "5 - 2 = " + Subtraction;
}

function multiplication_function() { //Multiplication operation function
    var Multiplication = 6 * 8;
    document.getElementById("Multiply").innerHTML = "6 x 8 = " + Multiplication;
}

function division_function() { // Division operation function
    var Division = 48 / 6;
    document.getElementById("Division").innerHTML = "48 / 6 = " + Division;
}

function modulus_Operator() { // Division with remainder operation function
    var simple_Math = 39 % 12;
    document.getElementById("Write").innerHTML = "When you divide 39 by 12 you have a remainder of: " + simple_Math;
}

function negation_Operator() { //Negation operation function
    var x = 20;
    document.getElementById("Negate").innerHTML = -x;
}

var num1 = 12; //Decreasing number by negative 1
num1--;
document.write(num1);


var num2 = 207; //Incrementing number adding 1
num2++;
document.write(num2);

// window.alert(Math.random());
window.alert(Math.random() * 100); // Random number between 0 and 100


