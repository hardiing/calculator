const display = document.getElementById("currentScreen");
const numberButtons = document.querySelectorAll(".numberBtn");
let firstOperand = 0;

numberButtons.forEach((button) =>
    button.addEventListener("click", () => 
        appendNumber(button.textContent))
    )

function appendNumber(number) {
    if (display.textContent === "0") {
        resetScreen()
    }
    display.textContent += number;
    firstOperand = display.textContent;
}

function resetScreen() {
    display.textContent = "";
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
    if (operator == add) {
        add(a, b);
    }
    else if (operator == subtract) {
        subtract(a, b);
    }
    else if (operator == multiply) {
        multiply(a, b);
    }
    else if (operator == divide) {
        divide(a, b);
    }
}