let fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().split('');

let time = 0;

for (let x of input) {
    if (x === 'A' || x === 'B' || x === 'C')
        time += 3;
    else if (x === 'D' || x === 'E' || x === 'F')
        time += 4;
    else if (x === 'G' || x === 'H' || x === 'I')
        time += 5;
    else if (x === 'J' || x === 'K' || x === 'L')
        time += 6;
    else if (x === 'M' || x === 'N' || x === 'O')
        time += 7;
    else if (x === 'P' || x === 'Q' || x === 'R' || x === 'S')
        time += 8;
    else if (x === 'T' || x === 'U' || x === 'V')
        time += 9;
    else if (x === 'W' || x === 'X' || x === 'Y' || x === 'Z')
        time += 10;
}

console.log(time);
