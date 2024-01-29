//3
let arr = [42, 2, 33, 11, 12, 10, 0];

let sum = arr.reduce((a, b) => a + b, 0);
let avg = sum / arr.length; 

console.log(avg); // 15