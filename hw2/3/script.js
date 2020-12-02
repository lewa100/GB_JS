"use strict";

const a = +prompt("Введите значение а");
const b = +prompt("Введите значение b");
let res = null;
switch (true) {
    case a >= 0 && b >= 0:
        res = a - b;
        break;
    case a <= 0 && b <= 0:
        res = a * b;
        break;
    case a * b < 0:
        res = a + b;
        break;
    default:
        res = "Значения а и б не соответствуют условиям";
        break;
}
console.log(res);