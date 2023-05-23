function my_Dictionary() { //Dictionary
    var Animal = { //Dictionary elements
        Species:"Hamster",
        Color:"Brown",
        Age:1,
        Sound:"Squeak",
        };
        delete Animal.Sound; // Deleting a dictionary element
        document.getElementById("Dictionary").innerHTML = Animal.Sound; //Calling deleted dictionary element
        document.getElementById("my_Dictionary").innerHTML = Animal.Species; //Calling dictionary element
}