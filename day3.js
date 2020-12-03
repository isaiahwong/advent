const { d } = require('./input/day3');

let c = [[1, 1], [3, 1], [5, 1], [7, 1], [1, 2]];

function f1(arr, x, y) {
    let dy = 0, dx = 0;
    let count = 0;
    while (dy < arr.length) {
        if (arr[dy][dx % arr[0].length] == "#")
            count += 1;
        dy += y;
        dx += x;
    }
    return count;
}

function f2() {
    let total = 1;
    c.forEach((cood) => total *= f1(d, cood[0], cood[1]))
    console.log(total);
}

(() => f2())();