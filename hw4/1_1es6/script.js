"use strict";

class Product {
    constructor(name, price) {
        this.name = name;
        this.price = price;
    }

    make25PercentDiscount() {
        this.price = this.price - this.price * 0.25;
    }
}

console.log("----ES6----");
let prod1 = new Product("TV", 1000);
console.log(JSON.stringify(prod1));
prod1.make25PercentDiscount();
console.log(JSON.stringify(prod1));