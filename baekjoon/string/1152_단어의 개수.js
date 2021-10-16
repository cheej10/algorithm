let fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().trim().split(" ");

if (input[0] === '') input.pop();

console.log(input.length);
