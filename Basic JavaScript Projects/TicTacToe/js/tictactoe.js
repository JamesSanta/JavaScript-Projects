let activePlayer = 'X'; //Keeps track of whos turn it is
let selectedSquares = []; //Stores an array of moves.Used to determine win condition.

function placeXorO(squareNumber) { //For placing an X or O
    //This condition ensures a square hasn't already been selected.
    if (!selectedSquares.some(element => element.includes(squareNumber))) { //Retrieves the HTML element id that was clicked
        let select = document.getElementById(squareNumber);
        if (activePlayer === 'X') { // Condition checks whos turn it is
            select.style.backgroundImage = 'url("images/x.png")'; // If active player is X the x.png is placed in in HTML
        } else { // Active player may only be X or O, so if not O then X
            select.style.backgroundImage = 'url("images/o.jfif")'; // If active HTMLplayer is o the o.png is placed in 
        }

        selectedSquares.push(squareNumber + activePlayer); // Squarenumber and activeplayer are combined  and added to array
        checkWinConditions(); // Calls a function to check for win conditions
        if (activePlayer === 'X') { // Condition for changing active player
            activePlayer = 'O'; // If active player is X change to O
        } else { // If active player is anything other than X
            activePlayer = 'X'; // Change the active player to X
        }

        audio('./Media/place.wav'); //Plays placement sounds

        if (activePlayer === 'O') { // Checks to see if it is the computers turn
            disableClick(); // Dasables click for computers turn
            setTimeout(function () {
                computersTurn();
            }, 1000); // Waits 1 sec before computer places image and enables click
        }
        return true; // Needed for computersturn function
    }

    function computersTurn() { //Function for a randon square to be picked by computer
        let success = false;
        let pickAsquare; // Variable stores a random # 0-8
        while (!success) { // Allows the loop to keep selecting until open squre is picked
            pickAsquare = String(Math.floor(Math.random() * 9)); //Random number between 0-8 is selected
            if (placeXorO(pickAsquare)) {
                placeXorO(pickAsquare); //Calls the function
                success = true;
            }
        }
    }
}
 //This functionchecks the selectedSquares array to look for win conditions.
        //drawline() function is called to draw a lineon the screen if condition is met.
function checkWinConditions() {
    if (arrayIncludes('0X', '1X', '2X')) {drawWinLine(50, 100,558, 100) } 
    else if (arrayIncludes('3X', '4X', '5X')) {drawWinLine(50, 304, 558, 304) }
    else if (arrayIncludes('6X', '7X', '8X')) {drawWinLine(50, 508, 558, 508) }
    else if (arrayIncludes('0X', '3X', '6X')) {drawWinLine(100, 50, 100, 558) }
    else if (arrayIncludes('1X', '4X', '7X')) {drawWinLine(304, 50, 304, 558) }
    else if (arrayIncludes('2X', '5X', '8X')) {drawWinLine(508, 50, 508, 558 ) }
    else if (arrayIncludes('6X', '4X', '2X')) {drawWinLine(100, 508, 510, 90) }
    else if (arrayIncludes('0X', '4X', '8X')) {drawWinLine(100, 100, 520, 520) }
    else if (arrayIncludes('0O', '1O', '2O')) {drawWinLine(50, 100, 558, 100) }
    else if (arrayIncludes('3O', '4O', '5O')) {drawWinLine(50, 304, 558, 304) }
    else if (arrayIncludes('6O', '7O', '8O')) {drawWinLine(50, 508, 558, 508) }
    else if (arrayIncludes('0O', '3O', '6O')) {drawWinLine(100, 50, 100, 558) }
    else if (arrayIncludes('1O', '4O', '7O')) {drawWinLine(304, 50, 304, 558) }
    else if (arrayIncludes('2O', '5O', '8O')) {drawWinLine(508, 50, 508, 558) }
    else if (arrayIncludes('6O', '4O', '2O')) {drawWinLine(100, 508, 510, 90) }
    else if (arrayIncludes('0O', '4O', '8O')) {drawWinLine(100, 100, 520, 520) }
    //This condition checks for a tie. If none of the above conditions are met and
    //9 squares are selected the code will execute.
    else if (selectedSquares.length >= 9) {
        audio('./Media/tie.wav'); //Plays tie game sound
        setTimeout(function () {resetGame(); }, 500); //This function sets a .3 second before the resetgame is called.
            }
            
            //Functionto check if array includes 3 strings,checks for each win condition.
            function arrayIncludes(squareA, squareB, squareC) {
                const a = selectedSquares.includes(squareA); // These 3 variables check for 3 in a row
                const b = selectedSquares.includes(squareB);
                const c = selectedSquares.includes(squareC);
                // If the 3 variables are all included in our array, true is returned and else if condition executes the drawline function.
                if (a === true && b === true && c === true) {return true; }
            }
        }

        function disableClick() { // Makes body element temporarily unclickable
            body.style.pointerEvents = 'none';
            setTimeout(function () {body.style.pointerEvents = 'auto'; }, 1000);  //This makes body clickable after 1 sec.
        }

        function audio(audioURL) { // Takes a string parameter of the path set earlier for sound.
            let audio = new Audio(audioURL); // New audio object and pass the path as a parameter.
            audio.play(); // Plays our audio sound.
        }

        function drawWinLine(coordX1, coordY1, coordX2, coordY2) { // Uses canvas to draw lines.
            const canvas = document.getElementById('win-lines'); // Accesses canvas element.
            const c = canvas.getContext('2d'); //gives access to methods and properties on canvas.
            let x1 = coordX1, // Indicates where the start of lines x axis is.
                y1 = coordY1, // Indicates where the start of lines y axis is.
                x2 = coordX2, // Indicates where the end of lines x axis is.
                y2 = coordY2, // Indicates where the end of lines y axis is.
                x = x1, // Stores temp data from x axis we updated in animation loop.
                y = y1; // Stores temp data from y axis we updated in animation loop.
        
            function animateLineDrawing() { // Interacts with canvas.
                const animationLoop = requestAnimationFrame(animateLineDrawing); // Creates a loop
                c.clearRect(0, 0, 608, 608); // Clears content from last loop iteration
                c.beginPath(); // Starts a new path.
                c.moveTo(x1, y1); // Moves to a starting point in the line.
                c.lineTo(x, y); // Indicates the end point in the line.
                c.lineWidth = 10; // Sets the width of the line.
                c.strokeStyle = 'rgba(70, 255, 33, .8)'; // Color of the line.
                c.stroke(); // Draws the elements from above.
                if (x1 <= x2 && y1 <= y2) { //Checks if endpoints are reached.
                    if (x < x2) { x += 10; } // Adds 10 to the previous x point end.
                    if (y < y2) { y += 10; } // Adds 10 to the previous y point end.
                    if (x >= x2 && y >= y2) { cancelAnimationFrame(animationLoop); }
                }

                if (x1 <= x2 && y1 >= y2) { // Similar function as above-needed for 6,4,2 win.
                    if (x < x2) { x += 10; }
                    if (y > y2) { y -= 10; }
                    if ( x >= x2 && y <= y2) { cancelAnimationFrame(animationLoop); }
                }
            }

                function clear() { // This function clears canvas after line is drawn.
                    const animationLoop = requestAnimationFrame(clear); // Starts the animation loop.
                    c.clearRect(0, 0, 608, 608); // Clears canvas.
                    cancelAnimationFrame(animationLoop); // Stops teh animation loop.
                }

                disableClick(); // Does not allow clicking while win sound plays.
                audio('./Media/winGame.wav'); //Plays win sound.
                animateLineDrawing(); // Calls main animation loop.
                setTimeout(function () { clear(); resetGame(); }, 1000); // Waits 1 sec then clears canvas, resets game, allows clicking again.
            }
        
        function resetGame() { // Resets game after tie or win
            for (let i = 0; i < 9; i++) { // Iterates through each HTML square element.
                let square = document.getElementById(String(i)); // Gets element i.
                square.style.backgroundImage = ''; // Removes elements background image.
                }
                selectedSquares = []; // Resets the array so we can strart over.
        }
    