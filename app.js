const display = document.getElementById("currentScreen");
const numberButtons = document.querySelectorAll(".numberBtn");
const opButtons = document.querySelectorAll(".opBtn");
const equalsButton = document.querySelector(".equalsBtn");
const clearButton = document.querySelector(".clearBtn");
let firstOperand = "";
let secondOperand = "";
let currentOperator = "";

numberButtons.forEach((button) =>
    button.addEventListener("click", () => 
        appendNumber(button.textContent))
    )

opButtons.forEach((button) =>
    button.addEventListener("click", () =>
        setOperation(button.textContent))
    )

equalsButton.addEventListener("click", equals);
clearButton.addEventListener("click", clear);

function appendNumber(number) {
    if (display.textContent === "0") {
        resetScreen()
    }
    display.textContent += number;
}

function resetScreen() {
    display.textContent = "";
}

function clear() {
    firstOperand = ""
    secondOperand = ""
    currentOperator = ""
    resetScreen();
}

function setOperation(operator) {
    firstOperand = display.textContent;
    currentOperator = operator;
    resetScreen();
}

function equals() {
    secondOperand = display.textContent;
    if (currentOperator === "/" && secondOperand === "0") {
        display.textContent = "You can't divide by zero!!!"
    } else {
        display.textContent = roundResult(operate(currentOperator, firstOperand, secondOperand));
    }
    firstOperand = display.textContent;
    secondOperand = "";
}

function roundResult(number) {
    return Math.round(number * 1000) / 1000;
}

function add(a, b) {
    return a + b;
}

function subtract(a, b) {
    return a - b;
}

function multiply(a, b) {
    return a * b;
}

function divide(a, b) {
    return a / b;
}

function operate(operator, a, b) {
    a = Number(a);
    b = Number(b);
    console.log(a);
    console.log(operator);
    console.log(b);
    if (operator === "+") {
        return add(a, b);
    }
    else if (operator === "-") {
        return subtract(a, b);
    }
    else if (operator === "*") {
        return multiply(a, b);
    }
    else if (operator === "/") {
        return divide(a, b);
    }
}