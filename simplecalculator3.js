let leftOperand = 0;



const init = () => {
 const buttons = document.querySelectorAll('.calc-button');
 buttons.forEach(clickEvent);
}


const clickEvent = (button) => {
    button.addEventListener('click', clickedButton);
}


const clickedButton = (event) => {
    let buttonText = event.target.innerHTML;
    checkButton(buttonText);
    logApplicationState();
}



const checkButton = (value) => {
    if(!isNaN(parseInt(value))) {
        leftOperand = value;
    }
}

const logApplicationState = () => {
    console.table({
        leftOperand,
    })
}



init();