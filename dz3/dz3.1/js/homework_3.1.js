let number = prompt('Введите первое число', '0');
let number_2 = prompt('Введите второе число', '0');
number = Number(number);
number_2 = Number(number_2);
let result = 0;

for (let i = number; i <= number_2; i++) {
    if (i % 6 == 0) {
        console.log(i);
        result += i;

    }
}
alert(`Сумма кратных чисел 6ти от ${number}  до ${number_2} = ${result}`);