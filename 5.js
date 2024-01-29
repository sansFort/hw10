//5 
let arr = ["parrot", 140, "bull", true, 0, "bear", 47, "monkey"];

let stringsOnly = arr.filter(el => typeof el === 'string'); 

console.log(stringsOnly); // ["parrot", "bull", "bear", "monkey"]