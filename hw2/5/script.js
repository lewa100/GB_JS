"use strict";

function sum(a, b) {
    return a + b;
};

function diff(a, b) {
    return a - b;
};

function div(a, b) {
    return a / b;
};

function multi(a, b) {
    return a * b;
};

function mathOperation(arg1, arg2, operation) {
    switch (operation) {
        case "+":
            return sum(a, b);
        case "-":
            return diff(a, b);
        case "/":
            return div(a, b);
        case "*":
            return multi(a, b);
        default:
            return "Не правильно заданы условия!";
    }
}

const a = +prompt("Введите значение а");
const b = +prompt("Введите значение b");
const operation = prompt("Введите значение операции(+, -, /, *)");

if (isNaN(a) || isNaN(b)) {
    console.log("Значение а или б укезаны не верно!");
} else {
    const res = mathOperation(a, b, operation);
    console.log(res);
}