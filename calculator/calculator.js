const one = document.getElementById("one");
const two = document.getElementById("two");
const three = document.getElementById("three");
const four = document.getElementById("four");
const five = document.getElementById("five");
const six = document.getElementById("six");
const seven = document.getElementById("seven");
const eight = document.getElementById("eight");
const nine = document.getElementById("nine");
const zero = document.getElementById("zero");
const display = document.getElementById("bot-display");
const topDisplay = document.getElementById("top-display");
const clear = document.getElementById("clear");
const del = document.getElementById("delete");
const add = document.getElementById("plus");
const minus = document.getElementById("minus");
const multiply = document.getElementById("multiply");
const divide = document.getElementById("divide");
const equal = document.getElementById("equal");
const dot = document.getElementById("dot");

let total = 0;
let input = 0;
let firstNumber = false;
let operator = "";

function performOp(no1, no2, op) {
    if (op == "plus") {
        return no1 + no2;
    } else if (op == "minus") {
        return no1 - no2;
    } else if (op == "multiply") {
        return no1 * no2;
    } else if (op == "divide") {
        return no1 / no2;
    } else {
        return;
    }
}

dot.addEventListener("click", () => {
    display.innerHTML += ".";
})

equal.addEventListener("click", () => {
    input = parseFloat(display.innerHTML);
    if (input == 0 && operator == "divide") {
        alert("Can't divide by zero!");
        return;
    }
    topDisplay.innerHTML += input + " =";
    display.innerHTML = performOp(total, input, operator);
})

add.addEventListener("click", () => {
    if (firstNumber == false) {
        total = parseFloat(display.innerHTML);
        firstNumber = true;
    } else {
        input = parseFloat(display.innerHTML);
        total = performOp(total, input, operator);
    }
    display.innerHTML = "";
    topDisplay.innerHTML = total + " + ";
    operator = "plus";
})

minus.addEventListener("click", () => {
    if (firstNumber == false) {
        total = parseFloat(display.innerHTML);
        firstNumber = true;
    } else {
        input = parseFloat(display.innerHTML);
        total = performOp(total, input, operator);
    }
    display.innerHTML = "";
    topDisplay.innerHTML = total + " - ";
    operator = "minus";
})

multiply.addEventListener("click", () => {
    if (firstNumber == false) {
        total = parseFloat(display.innerHTML);
        firstNumber = true;
    } else {
        input = parseFloat(display.innerHTML);
        total = performOp(total, input, operator);
    }
    display.innerHTML = "";
    topDisplay.innerHTML = total + " x ";
    operator = "multiply";
})

divide.addEventListener("click", () => {
    if (firstNumber == false) {
        total = parseFloat(display.innerHTML);
        firstNumber = true;
    } else {
        input = parseFloat(display.innerHTML);
        if (input == 0) {
            alert("Can't divide by zero!");
            return;
        }
        total = performOp(total, input, operator);
    }
    display.innerHTML = "";
    topDisplay.innerHTML = total + " ÷ ";
    operator = "divide";
})

one.addEventListener("click", () => {
    display.innerHTML += 1;
})

two.addEventListener("click", () => {
    display.innerHTML += 2;
})

three.addEventListener("click", () => {
    display.innerHTML += 3;
})

four.addEventListener("click", () => {
    display.innerHTML += 4;
})

five.addEventListener("click", () => {
    display.innerHTML += 5;
})

six.addEventListener("click", () => {
    display.innerHTML += 6;
})

seven.addEventListener("click", () => {
    display.innerHTML += 7;
})

eight.addEventListener("click", () => {
    display.innerHTML += 8;
})

nine.addEventListener("click", () => {
    display.innerHTML += 9;
})

zero.addEventListener("click", () => {
    display.innerHTML += 0;
})

clear.addEventListener("click", () => {
    display.innerHTML = "";
    topDisplay.innerHTML = "";
    total = 0;
    input = 0;
    firstNumber = false;
})

del.addEventListener("click", () => {
    display.innerHTML = display.innerHTML.slice(0, -1);
})