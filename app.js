let num1
let num2
let operator
let displayNumber
let previousNumber
let firstOp = true
let editable = true

let numberButtons = document.querySelectorAll(".number")
let operatorButtons = document.querySelectorAll(".operator")
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
        if (editable === true) {
           display.value = toInt(btn.innerHTML)
           editable = false
        } else {
            display.value += toInt(btn.innerHTML)
        }
        // if (firstOp === false) {
        //     num2 = toInt(display.value)
        //     operator = btn.innerHTML // trying to call innerhtml of operator button from number button event handler
        //     displayNumber = evaluate(num1, num2, operator)
        //     display.value = displayNumber
        //     previousNumber = toInt(display.value)
        //     num1 = previousNumber
        //     editable = true
        // }
    })
})

operatorButtons.forEach(btn => {
    btn.addEventListener("click", function() {
        if (firstOp === true) {
            num1 = toInt(display.value)
            operator = btn.innerHTML
            firstOp = false
            editable = true
        } else {
            num2 = toInt(display.value)
            operator = btn.innerHTML
            displayNumber = evaluate(num1, num2, operator)
            display.value = displayNumber
            previousNumber = toInt(display.value)
            num1 = previousNumber
            editable = true
        }   
    })
})

equalsBtn.addEventListener("click", function() {
    num2 = toInt(display.value)
    displayNumber = evaluate(num1, num2, operator)
    display.value = displayNumber
    editable = true
    firstOp = true
})

clearBtn.addEventListener("click", function() {
    num1 = 0
    num2 = 0
    operator = ""
    display.value = "0"
    firstOp = true
})
