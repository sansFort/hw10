//4
let arr = ["parrot", "bull", "bear", "monkey"];

let totalLength = arr.reduce((sum, str) => {
  return sum + str.length;
}, 0);

console.log(totalLength); 