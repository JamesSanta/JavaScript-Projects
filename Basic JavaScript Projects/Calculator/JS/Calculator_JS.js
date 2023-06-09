const Calculator = { // Creates an object to track values
    Display_Value: '0', // Will display on screen
    First_Operand: null, // Holds first operand for expressions, set to null.
    Wait_Second_Operand: false, // Checks if second operand has been inputted.
    operator:null, // Will hold for operator, set to null.
};

function Input_Digit(digit) { // Modifies values each time a button is clicked
    const {Display_Value, Wait_Second_Operand } = Calculator;

    if (Wait_Second_Operand === true) { // Checks if the wait_second_operand is true and sets display_value to key that was clicked
        Calculator.Display_Value = digit;
        Calculator.Wait_Second_Operand = false;
    }
    else { // Overwrites display_value if the current value is 0 otherwise it adds onto it
        Calculator.Display_Value = Display_Value === '0' ? digit : Display_Value + digit;
        }
}

function Input_Decimal(dot) { // This section handles decimal points

    if (Calculator.Wait_Second_Operand === true) return; // Ensures accidental clicking of decimal point doesnt cause bugs in operation
    if (!Calculator.Display_Value.includes(dot)) {
        Calculator.Display_Value += dot; // Adds a decimal to display_value if there isn't one already
    }
}

function Handle_Operator(Next_Operator) { // Handles operators
    const {First_Operand, Display_Value, operator} = Calculator;
    // When operator key is pressed, converts the current number displayed on the screen to a number and stores result
    //calculator.first_operand if it doesnt exist.

    const Value_Of_Input = parseFloat(Display_Value); //Checks if an operator exists and if  wait_second_operand is true,
    //then updates  the operator and exits from the function
    if (operator && Calculator.Wait_Second_Operand) {
        Calculator.operator = Next_Operator;
        return;
    }
    if (First_Operand == null) {
        Calculator.First_Operand = Value_Of_Input;
    } else if (operator) { // Checks if an operator exists
        const Value_Now = First_Operand || 0; // If operator exists, property lookup is performed for the operator in the
        //perform _calculation object and the function that matches the operator is performed
        let result = Perform_Calculation[operator](Value_Now, Value_Of_Input);
        result = Number(result).toFixed (9); // Adds a fixed amount of numbers after the decimal
        result = (result *1).toString(); // Will remove trailing 0's
        Calculator.Display_Value = parseFloat(result);
        Calculator.First_Operand = parseFloat(result);
    }

    Calculator.Wait_Second_Operand = true;
    Calculator.operator = Next_Operator;
}

const Perform_Calculation = {
    '/': (First_Operand, Second_Operand) => First_Operand / Second_Operand,
    '*': (First_Operand, Second_Operand) => First_Operand * Second_Operand,
    '+': (First_Operand, Second_Operand) => First_Operand + Second_Operand,
    '-': (First_Operand, Second_Operand) => First_Operand - Second_Operand,
    '=': (First_Operand, Second_Operand) => Second_Operand
};

function Calculator_Reset () {
    Calculator.Display_Value = '0';
    Calculator.First_Operand = null;
    Calculator.Wait_Second_Operand = false;
    Calculator.operator = Calculator.Display_Value;
}

function Update_Display() { // Updates calculator screen with display_value
    const display = document.querySelector('.calculator-screen'); // Uses calculator-screen class to target HTML input tag.
    display.value = Calculator.Display_Value;
}

Update_Display(); // Monitors button clicks
const keys = document.querySelector('.calculator-keys');
keys.addEventListener('click', (event) => {
    const { target } = event; // Target variable that represents the element that was clicked
    if (!target.matches('button')) { // Exits the function if the element clicked is not a button
        return;
    }

    if (target.classList.contains('operator')) {
        Handle_Operator(target.value);
        Update_Display();
        return
    }

    if (target.classList.contains('decimal')) {
        Input_Decimal(target.value);
        Update_Display();
        return;
    }
    if (target.classList.contains('all-clear')) { // Clears all input from the calculator screen
        Calculator_Reset();
        Update_Display();
        return;
    }
    Input_Digit(target.value);
    Update_Display();
})
