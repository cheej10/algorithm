let fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().split('\n');

let cnt = Number(input[0]);

for (let i = 1; i <= Number(input[0]); i++) {
    let check = [];
    for (let j = 0; j < input[i].length; j++) {
        if (!check.includes(input[i][j])) {
            check.push(input[i][j])
        } else {
            if (input[i][j] !== input[i][j - 1]) {
                cnt--;
                break;
            }
        }
    }
}
