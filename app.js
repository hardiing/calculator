let num1
let num2
let operator

let button1 = document.getElementById("1")
let button2 = document.getElementById("2")
let button3 = document.getElementById("3")
let button4 = document.getElementById("4")
let button5 = document.getElementById("5")
let button6 = document.getElementById("6")
let button7 = document.getElementById("7")
let button8 = document.getElementById("8")
let button9 = document.getElementById("9")
let buttonAdd = document.getElementById("add")
let buttonSub = document.getElementById("sub")
let buttonMul = document.getElementById("mul")
let buttonDiv = document.getElementById("div")
let buttonEqual = document.getElementById("equal")
let buttonClear = document.getElementById("clear")


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

function operate(num1, num2, operator) {
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

console.log(operate(3, 2, "*"))