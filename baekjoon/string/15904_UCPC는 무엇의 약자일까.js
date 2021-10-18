let fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString();

let answer = 'I love UCPC';
let ucpc = ['U','C','P','C'];

for (let x of ucpc) {
    if (input.includes(x)) {
        let xIndex = input.indexOf(x)
        input = input.slice(xIndex+1)
    } else answer = 'I hate UCPC'
}

console.log(answer);
