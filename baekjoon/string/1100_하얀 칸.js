let fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().split(' ');
let cnt = 0;

for (let i = 0; i < input.length; i++) {
    for (let j = 0; j < input[i].length; j++) {
        if (i % 2 === 0 && j % 2 === 0 && input[i][j] === 'F')
            cnt++;
        else if (i % 2 !== 0 && j % 2 !== 0 && input[i][j] === 'F')
            cnt++;
    }
}

console.log(cnt);
