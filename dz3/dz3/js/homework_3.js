const MAX_STEP = 10;
let min = 0;
let max = 100;
let outcome;
let step = 0;

do {
    let n = min + (max - min) / 2;
    console.log(max, min, n);
    let answer = confirm(`Загаданное число больше ${n}?`);
    step = step + 1;
    if (answer) {
        min = n;
    } else {
        max = n;
    }
    result = max - min < 1;

} while (!result && step < MAX_STEP);
outcome = Math.round(min + (max - min) / 2);
alert(`Ваше загаданное число ${outcome}`);