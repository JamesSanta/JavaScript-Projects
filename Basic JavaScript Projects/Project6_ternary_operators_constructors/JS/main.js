function Vote_Function() {
    var Age, Can_vote; // Declaring variables
    Age = document.getElementById("Age").value; // Input from HTML
    Can_vote = (Age < 18) ? "You are too young to vote. ":"You can vote! "; // Ternary operator
    document.getElementById("Vote").innerHTML = Can_vote;
}

function Pet(Type, Breed, Age, Color) { //Constructor function
    this.Pet_Type = Type;
    this.Pet_Breed = Breed;
    this.Pet_Age = Age;
    this.Pet_Color = Color;
}
var Sam = new Pet("Mouse", "Wild", 1, "White");
var Shirley = new Pet("Cat", "Siamese", 4, "White and Black");
var Hank = new Pet("Dog", "Labrador", 2, "Brown");
function myFunction() { // Function that uses and displays "this" and "new" keywords
    document.getElementById("Keywords").innerHTML = 
    "Sam has bought a " + Sam.Pet_Color + "-colored " + Sam.Pet_Breed + " " +
    Sam.Pet_Type + " that is  " + Sam.Pet_Age + ".";
}


function count_Function() { // Counting function
    document.getElementById("Nested_Function").innerHTML = Count();
    function Count() { // Nested function
        var Starting_point = 9;
        function Plus_one() {Starting_point += 1;}
        Plus_one();
        return Starting_point
    }
}