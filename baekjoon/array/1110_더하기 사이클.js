let fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString();

let newNum = Number(input);
let answer = 0;
    do {
        let ten = Math.floor(newNum / 10);
        let one = newNum % 10;
        let sum = ten + one;
        newNum = one * 10 + sum % 10;
        answer++;
    } while (newNum !== Number(input));

console.log(answer);
