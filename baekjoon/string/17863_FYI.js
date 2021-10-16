let fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString();

let answer = 'YES'

if (input.substr(0, 3) !== '555') answer = 'NO'

console.log(answer);
