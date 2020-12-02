"use strict";

function getWord(number, titles) {
    const cases = [2, 0, 1, 1, 1, 2];
    return titles[(number % 100 > 4 && number % 100 < 20) ? 2 : cases[(number % 10 < 5) ? number % 10 : 5]];
}

const rub = +prompt("Введите значение а");


if (isNaN(rub)) {
    console.log("Cумма введна не верно!");
} else {
    const word = getWord(rub, ['рубль', 'рубля', 'рублей']);
    console.log(`Ваша сумма в ${rub} ${word} успешно зачислена.`);
}