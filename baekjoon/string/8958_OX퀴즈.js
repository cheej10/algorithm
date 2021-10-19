let fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().split('\n');

for (let i = 1; i <= Number(input[0]); i++) {
    let answer = 0
    let cnt = 0
    for (let x of input[i]) {
        if (x === 'O') {
            cnt++
            answer += cnt
        } else cnt = 0
    }
    console.log(answer)
}
