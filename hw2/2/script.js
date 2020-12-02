"use strict";
/**
 * (a *= 2) => a = 2 * 2 = 4
 * x = 1 + 4 = 5
 */
let a = 2;
let x = 1 + (a *= 2);
console.log(a, x);