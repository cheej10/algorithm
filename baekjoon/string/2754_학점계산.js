let fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString();
let answer = 0;

switch (input[0]) {
    case 'A':
        answer = 4.0;
        break;
    case 'B':
        answer = 3.0;
        break;
    case 'C':
        answer = 2.0;
        break;
    case 'D':
        answer = 1.0;
        break;
}

switch (input[1]) {
    case '+':
        answer += 0.3;
        break
    case '-':
        answer -= 0.3;
        break;
}

console.log(answer.toFixed(1));
