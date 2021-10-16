let fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().split('\n');

let cnt = 0;

for (let i = 0; i < input[1].length; i++) {
    if (input[1][i] === 'S') {
        cnt++;
    }
    else {
        cnt++;
        i++;
    }
}

if (cnt+1 < input[1].length) console.log(cnt+1);
else console.log(input[1].length);
