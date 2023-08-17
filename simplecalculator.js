let buffer = null;
let runningTotal = null;
let symbol = null;
let leftOperand = null;
let rightOperand = null;






function buttonClickEvent(event) {
    // Get innerText of button and store in variable    
    let buttonClicked = event.target.innerText;
    checkButton(buttonClicked);
}


/**
 * @param {Element} button
 */
const applyEventToButton = (button) => {
    button.addEventListener("click", buttonClickEvent);
}

function calculate() {
    switch(symbol) { 
        case "+":
           runningTotal = (parseInt(leftOperand)) + (parseInt(rightOperand));
        break;


    }
}

function displayTotal() {
    let screenr2 = document.querySelector('.screen-r2');
    if (runningTotal === null) {
        if(symbol === null) {
            if(leftOperand === null) {
                screenr2.innerHTML = 0;
            }

            else {
        screenr2.innerHTML = leftOperand;
        }}
        else {
            screenr2.innerHTML = rightOperand;
        }
    }
    else {
        screenr2.innerHTML = runningTotal;
    }
}


function checkButton(value) {
    if(value === 'C') {
        buffer = null;
        runningTotal = null;
        symbol = null;
        leftOperand = null;
        rightOperand = null;
        displayTotal();
    }

    else if (!isNaN(parseInt(value))) {
        if (leftOperand === null || symbol === null) {
            if(leftOperand !== null) {
                leftOperand = leftOperand + value;
            }
            else {

                leftOperand = value; 
            }
        
        }
        else if (leftOperand !== null) {
            if(rightOperand !== null) {
                rightOperand = rightOperand + value;
            }
            
            else {rightOperand = value;
        }}
        console.log(leftOperand,rightOperand);
        displayTotal();
    }

    else if (value === '←') {
        console.log(value);
    }
    else if (value === '=') {
        calculate();
        console.log(runningTotal);
        displayTotal();
    }

    else if (value === '.') {
        console.log(value);
    }
    else {
        console.log(value);
        symbol = value;
    }
}

function init() {
    // Select all buttons
    const listOfButtons = document.querySelectorAll('.calc-button')
    
    // Add click event listener to all buttons
    listOfButtons.forEach(applyEventToButton);
}

init();



// Create an empty array       or object to store operands and operator
// create a function that checks if the variable is a operand or operator
// if input is an operand, as long as operator is not defined, append operand to wherever you are storing left hand side of expression
// if input is an operator and not the '=' button, store it
// If input is an operand and operator has been defined, append the operand to wherever you are storing right hand side of expression
// If input is the '=' button, pass the object/array/variables to an 'evaluate' function which uses switch case to perform different operations based on the operator
// Create a updateUI function that gets called whenever any operator or operand changes which updates the UI with the new values for the variables 