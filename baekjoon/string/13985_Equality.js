let fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().split(' ');

let answer = '';
let sum = Number(input[0]) + Number(input[2]);

if (sum === Number(input[4])) answer = 'YES'
else answer = 'NO'

console.log(answer);
