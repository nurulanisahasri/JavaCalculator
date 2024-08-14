//script.js

const resultInput = document.getElementById('result');
//console.log("Result Input Field:", resultInput);

let currentInput = '';
let firstOperand = null;
let operator = null;
let shouldResetDisplay = false;

document.querySelectorAll('button').forEach(button => {
    button.addEventListener('click', () => {
        const buttonText = button.textContent;
        //console.log("Button clicked:", buttonText);

        if (buttonText === 'AC') {
            resetCalculator();
        } else if (buttonText === '+/-') {
            toggleSign();
        } else if (buttonText === '%') {
            calculatePercentage();
        } else if (buttonText === '=') {
            calculateResult();
        } else if (['+','-','*','/']) {
            chooseOperator(buttonText);
        } else if (buttonText === '.') {
            appendDecimal();
        } else {
            appendNumber(buttonText);  //if not doing any operation, just display the number that user append 
        }
    });
});

function resetCalculator() {
    currentInput = '';
    firstOperand = null;
    operator = null;
    shouldResetDisplay = false;
    resultInput.value = '0';
}

function appendNumber() {
    if (shouldResetDisplay) {
        currentInput = number;
        shouldResetDisplay = false;
    } else {
        currentInput = currentInput === '0' ? number : currentInput + number;
    }
    console.log('current input:', currentInput);
    resultInput.value = currentInput;
}

function appendDecimal() {
    if (shouldResetDisplay) {
        currentInput = '0.';
        shouldResetDisplay = false;
    } else if (!currentInput.includes('.')) {
        currentInput += '.';
    }
    resultInput.value = currentInput;
}

function chooseOperator(selectedOperator) {
    if (operator !== null) calculateResult();
    firstOperand = parseFloat(currentInput);
    operator = selectedOperator;
    shouldResetDisplay = false;
}

function calculateResult() {
    if (operator === null || shouldResetDisplay) return;
    const secondOperand = parseFloat(currentInput);
    switch (operator) {
        case '+': 
        currentInput = firstOperand + secondOperand;
        break;

        case '-':
        currentInput = firstOperand - secondOperand;
        break;

        case '*':
        currentInput = firstOperand * secondOperand;
        break;

        case '/':
        if (secondOperand !== 0) {
            currentInput = firstOperand / secondOperand;
        } else {
            currentInput = 'Error';
        }
        break;

        default:
            return;
    }
    resultInput.value = currentInput;
    operator = null;
    shouldResetDisplay = true;
}

function toggleSign() {
    currentInput = currentInput.startsWith('-') ? currentInput.substring(1) : '-' + currentInput;
    resultInput.value = currentInput;
}

function calculatePercentage() {
    currentInput = (parseFloat(currentInput) / 100).toString();
    resultInput.value = currentInput;
}