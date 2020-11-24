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

const a = +prompt("Введите значение а");
const b = +prompt("Введите значение b");

console.log("sum: " + sum(a, b));
console.log("diff: " + diff(a, b));
console.log("div: " + div(a, b));
console.log("multi: " + multi(a, b));