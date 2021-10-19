let arr = [];
let fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().split('\n').forEach(v => arr.push(Number(v)));

let max = Math.max(...arr)

console.log(max)
console.log(arr.indexOf(max)+1)
