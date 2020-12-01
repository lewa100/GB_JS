"use strict";

function Product(name, price) {
    this.name = name;
    this.price = price;
}

Product.prototype.make25PercentDiscount = function() {
    return this.price = this.price - this.price * 0.25;
}

console.log("----ES5----");
let prod1 = new Product("TV", 1000);
console.log(JSON.stringify(prod1));
prod1.make25PercentDiscount();
console.log(JSON.stringify(prod1));