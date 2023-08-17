"use strict";
let upperScreenValue = null;
let lowerScreenValue = null;
let leftOperand = null;
let rightOperand = null;
let operator = null;


const init = () => {
    const buttons = document.querySelectorAll('.calc-button');

    buttons.forEach(clickEvent);
}

const clickEvent = (button) => {
    button.addEventListener("click", clickedButton); 
}

const clickedButton =(event) => {
    let buttonText = event.target.innerHTML;
    checkButton(buttonText);
    logApplicationState();
}

const displayScreen = () => {
    let lowerScreenDisplayValue = document.querySelector('.screen-r2');
    let upperScreenDisplayValue = document.querySelector('.screen-r1');
    lowerScreenDisplayValue.innerHTML = lowerScreenValue;
    upperScreenDisplayValue.innerHTML = upperScreenValue;
}


const checkButton = (value) => {
    if(!isNaN(parseInt(value))) {
        if(leftOperand === null) {
            leftOperand = value;
            lowerScreenValue = leftOperand;
            upperScreenValue = leftOperand;
            
        }
        else {
            if(operator === null) {
                leftOperand = leftOperand + value;
                lowerScreenValue = leftOperand;
                upperScreenValue = leftOperand;
                
            }
            else {
                if(rightOperand === null) {
                    rightOperand = value; 
                    lowerScreenValue = rightOperand;
                    upperScreenValue = leftOperand + operator + rightOperand;
                    
                }
                else {

                    rightOperand = rightOperand + value;
                    lowerScreenValue = rightOperand;
                    upperScreenValue = leftOperand + operator + rightOperand;
                    
                }
            }
        } 
      
    }

    else if(value === 'C') {
        lowerScreenValue = 0;
        upperScreenValue = 0;
        leftOperand = null;
        rightOperand = null;
        operator = null;
        
    }

    else if(value === '←') {
    }

    else if(value === '=') {
        upperScreenValue = upperScreenValue + '=';
        switch (operator) {
            case '+': {
               lowerScreenValue = (parseInt(leftOperand)) + (parseInt(rightOperand));
        
               break;
            }

            case '-': {
                lowerScreenValue = (parseInt(leftOperand)) - (parseInt(rightOperand));
        
                break;
            }


            case 'X': {
                lowerScreenValue = (parseInt(leftOperand)) * (parseInt(rightOperand));
            
                break;
            }

            case '/': {
                lowerScreenValue = (parseInt(leftOperand))/(parseInt(rightOperand));
             
                break;
            }

    
        }
        
    }

    else {
        operator = value;
        if(leftOperand === null) {
            leftOperand = 0;
           
        upperScreenValue = operator;
        }
        else {
            upperScreenValue = leftOperand + operator;
        }
        
    }
    displayScreen();
}



const logApplicationState = () => {
    console.table({
        upperScreenValue,
        lowerScreenValue,
        leftOperand,
        rightOperand,
        operator,
    })
}


init();

