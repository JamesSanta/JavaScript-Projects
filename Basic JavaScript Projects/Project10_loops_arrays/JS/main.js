function Call_Loop() { // While loop
var myNum = "";
var x = 1;
while (x < 20) {
    myNum += "<br>" + x;
    x++;
}
document.getElementById("Loop").innerHTML = myNum;
}

function str_length() { // Function that counts the length of a string
    var text = "This is my string.";
    var length = text.length;
    document.getElementById("length").innerHTML = length;
}

var instruments = ["Guitar", "Drums", "Piano", "Bass", "Violin", "Trumpet", "Flute"];
var content = "";
var Y;
function for_Loop() { // For loop printing each element in the array
    for (Y = 0; Y < instruments.length; Y++) {
        content += instruments[Y] + "<br>";
        }
        document.getElementById("List_of_instruments").innerHTML = content;
}

function array_functions() { // Array function
    var cat_picture = [];
    cat_picture[0] = "playing";
    cat_picture[1] = "napping";
    cat_picture[2] = "eating";
    
    document.getElementById("Array").innerHTML = "In this picture, the cat is " + 
    cat_picture[1] + ".";
    
}

function constant_function() { // Constant function
    const musical_instument = {type:"Guitar", brand:"Fender", color:"red"};
    musical_instument.color = "blue";
    musical_instument.price = "$1.50";
    document.getElementById("Constant").innerHTML = "The cost of the " +
    musical_instument.type + " was " + musical_instument.price;
}

function my_function() { // Function using return
    
    let x = 2;
    let c = 5;
return c*x;
}
document.getElementById("enter").innerHTML = my_function();

let dog = { // Function using "this" operator
    breed: "Labrador",
    color: "black ",
    age: "1",
    description : function() {
        return "The dog is a " + this.color + this.breed + " that is " +
        this.age + ".";
    }
};
document.getElementById("dog_object").innerHTML = dog.description();

let text = "";
for ( let i = 1; i < 10; i++) { // for loop using break
    if (i === 4) {break; }
    text += "The number is " + i + "<br>";
}
document.getElementById("breaker").innerHTML = text;

let letters = "";
for ( let i = 1; i < 10; i++) { // for loop using break
    if (i === 4) {continue; }
    letters += "The number is " + i + "<br>";
}
document.getElementById("con_tinue").innerHTML = letters;