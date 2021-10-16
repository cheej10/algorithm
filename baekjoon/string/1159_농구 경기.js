let fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

const answer = [];
const player = new Map();

for (let i = 0; i < input.length; i++) {
    let str = input[i][0];
    if (player.has(str)) player.set(str, player.get(str) + 1);
    else player.set(str, 1);
}
for (let [k, v] of player) {
    if (v >= 5) answer.push(k);
}

console.log(answer.length === 0 ? 'PREDAJA' : answer.sort().join(''));
