"use strict";

function addX(count) {
    let str = "";
    for (let i = 0; i < count; i++) {
        str += "x";
    }
    return str;
}

function getSlide() {
    for (let x = 1; x <= 20; x++) {
        console.log(addX(x) + " - " + x);
    }
}

getSlide();