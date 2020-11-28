"use strict";

const products = [{

        id: 3,
        price: 127,
        photos: [
            "1.jpg",
            "2.jpg",
        ]
    }, {
        id: 5,
        price: 499,
        photos: []
    }, {
        id: 10,
        price: 26,
        photos: [
            "3.jpg"
        ]
    },
    {
        id: 8,
        price: 78
    },
];
//1
const getProductWithPrice = products.filter(order => 'photos' in order && order.photos.length > 0);
console.log(getProductWithPrice);

//2
products.sort(function(a, b) {
    return a.price - b.price;
});
console.log(products);