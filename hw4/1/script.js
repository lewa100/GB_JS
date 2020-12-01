"use strict";

function parseNum(num) {
    if (!isNaN(num) && num >= 0 && num <= 999 && Number.isInteger(num)) {
        const hundreds = Math.trunc(num / 100);
        const tens = Math.trunc(num / 10) - hundreds * 10;
        const units = num % 10;
        return {
            units: hundreds, //это единицы 
            tens: tens, //это десятки 
            hundreds: units, //это сотни
        }
    }
    console.log("Число введено неправильно!");
    return {};
}

const num = +prompt("Введите число от 0 до 999");
alert(JSON.stringify(parseNum(num)));