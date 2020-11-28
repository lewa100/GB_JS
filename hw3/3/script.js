"use strict";

const products = [{
        id: 3,
        price: 200,
    },
    {
        id: 4,
        price: 900,
    },
    {
        id: 1,
        price: 1000,
    },
];

function setDiscount(discount) {
    products.forEach(el => {
        el.price = el.price - el.price * discount / 100;
    });
}

setDiscount(15);
console.log(products);