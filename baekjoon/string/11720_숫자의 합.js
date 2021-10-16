let fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().split('\n');
let answer = 0;

for (let x of input[1]) {
    answer += Number(x);
}

console.log(answer);
