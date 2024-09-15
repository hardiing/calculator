let num1
let num2
let operator
let displayNumber

let numberButtons = document.querySelectorAll(".number")
let operatorButtons = document.getElementsByClassName("operator")
let equalsBtn = document.getElementById("equal")
let clearBtn = document.getElementById("clear")

let display = document.getElementById("display")
display.innerHTML = "0"


function add(x, y) {
    return x + y
}

function subtract(x, y) {
    return x - y
}

function multiply(x, y) {
    return x * y
}

function divide(x, y) {
    return x / y
}

function evaluate(num1, num2, operator) {
    switch(operator) {
        case "+":
            return add(num1, num2)
            break
        case "-":
            return subtract(num1, num2)
            break
        case "*":
            return multiply(num1, num2)
            break
        case "/":
            return divide(num1, num2)
            break
    }
}

function toInt(str) {
    let num = parseInt(str)
    return num
}

numberButtons.forEach(btn => {
    btn.addEventListener("click", function() {
        if (display.value === "0") {
           display.value = toInt(btn.innerHTML) 
        } else {
            display.value += toInt(btn.innerHTML)
        }
    })
})

operatorButtons.forEach(btn => {
    btn.addEventListener("click", function() {
        num1 = display.value
        operator = btn.innerHTML
    }
})


// numberButtons.forEach((button) =>
//     button.addEventListener('click', () => appendNumber(button.textContent))
//   )
