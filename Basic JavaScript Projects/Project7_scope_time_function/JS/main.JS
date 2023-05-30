function Age_Function() {
    Age = document.getElementById("Age").value;
    if (Age >= 18) { // If age is 18 or above
        Vote = "You are old enough to vote.";
    }
    else { // If under 18
        Vote = "You are not old enough to vote.";
    }
    document.getElementById("How_old_are_you?").innerHTML = Vote;
}

function time_function() {
    var Time = new Date().getHours();
    var Reply;
    if (Time < 12 == Time > 0) { // If time is between 12 am and 12 pm
        Reply = "It is morning time!";
    }
    else if (Time >= 12 == Time < 18) { // If time is between 12pm and 6pm
        Reply = "It is afternoon.";
    }
    else {
        Reply = "It is evening time."; // If time is 6pm and 12am
    }
    document.getElementById("Time_of_day").innerHTML = Reply;
}

var x = 87; // global variable
function addition_function() {
   var y = 21; // local variable
   console.log (x + z);
}