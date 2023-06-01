function full_sentence() { // Function to concatenate 3 strings
    var short_1 ="I have created ";
    var short_2 ="this sentence ";
    var short_3 ="from 3 strings.";
    var whole_sentence = short_1.concat(short_2, short_3);
    document.getElementById("concatenate").innerHTML = whole_sentence;
}

function slice_method() { // Function to slice out a section from a string
    var sentence = "Happy Memorial Day Weekend to all!";
    var sentence = sentence.toUpperCase();
    var section = sentence.search("DAY");
    //var section = sentence.slice(5, 18) ;
    document.getElementById("slice").innerHTML = section;
}

function string_method() { // A function that converts numbers to a string
    var x = 199;
    document.getElementById("numbers_to_string").innerHTML = x.toString();
}

function precision_method() { // A function that will give the number to a precise decimal point
    var num = 123.1234567890;
    //var new_num = num.toFixed(8);
    //var n = num.valueOf();
    document.getElementById("precision").innerHTML = num.toPrecision(8);
    //document.getElementById("precision").innerHTML = new_num;
    //document.getElementById("precision").innerHTML = n ;
}

