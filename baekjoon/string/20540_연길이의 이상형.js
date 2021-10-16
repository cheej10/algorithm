let fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().split('');

let answer = ''

answer += (input[0] === 'E')? 'I' : 'E';
answer += (input[1] === 'S')? 'N' : 'S';
answer += (input[2] === 'F')? 'T' : 'F';
answer += (input[3] === 'J')? 'P' : 'J';

console.log(answer);
