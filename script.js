
/* 
Задание 1
Необходимо с помощью цикла for вывести следующие 11 строк в консоль:
0 – это ноль
1 – нечетное число
2 – четное число
3 – нечетное число
…
10 – четное число */


for (let i = 0; i <= 11; i++) {
    if (i === 0) {
        console.log(`${i} - это ноль`)
    }
    else if (i % 2 === 0) {
        console.log(`${i} - четное число`)
    }
    else {
        console.log(`${i} - нечетное число`)
    }
}

/* 
Задание 2
Дан массив [1, 2, 3, 4, 5, 6, 7]
Сделайте из этого массива следующий [1, 2, 3, 6, 7] */

/* 
let array = [1, 2, 3, 4, 5, 6, 7];
for (let i = 3; i < array.length; i++) {
    array[i] = array[i + 2];
}
array.pop();
array.pop();
console.log(array); 
*/

/* 
Задание 3
Используя Math.random() вам необходимо генерировать цифры от 0 до 9, и создать массив состоящий из 5 таких элементов
1. Рассчитать сумму элементов этого массива
2. Найти минимальное число
3. Найти есть ли в этом массиве число 3 */

/* 
let array = [];
while (array.length != 5) {
    array.push(Math.round(Math.random() * 10));
}
console.log(array);
let sum = 0;
for (let i = 0; i < array.length; i++) {
    sum = sum + array[i];
}
console.log(`Сумму элементов сгенерированного массива = ${sum}`);
let min = array[0];
for (let i = 1; i < array.length; i++) {
    if (array[i] < min) {
        min = array[i];
    }
}
console.log(`Минимальное число в сгенерированном массиве = ${min}`);
let resul = 0;
for (let i = 0; i < array.length; i++) {
    if (array[i] === 3) {
        resul = 1;
        console.log(`В сгенерированном массиве есть число 3 с индексом ${i}`);
    }
}
if (resul === 0) {
    console.log(`В сгенерированном массиве нет числа 3`);
} 
*/

/* 
*Необязательное задание. *
Необходимо вывести горку в консоль (используя цикл for), как показано на рисунке, только у вашей горки должно быть 20 рядов, а не 5:

x
xx
xxx
xxxx
xxxxx
*/

/* 
let str = "x";
for (let i = 1; i <= 20; i++) {
    console.log(str.repeat(i));
} 
*/


/* Дополнительное задание с семинара
У нас есть график, где даны отрезок 1 - (х1; x2) и отрезок 2(х3, x4)
Необходимо составить код, который находит их пересечение.
Пересечением двух отрезка 1 и 2 могут быть - отрезок, точка или ничего
С клавиатуры вводим х1, x2, х3, x4 и выводим ответ - границы пересечений отрезков, общую точку или «не пересекаются». */

/* 
let x1 = Number(prompt(`Введите 1 число`));
let x2 = Number(prompt(`Введите 2 число`));
let x3 = Number(prompt(`Введите 3 число`));
let x4 = Number(prompt(`Введите 4 число`));

let min1 = x1;
let max1 = x2;
if (min1 > max1) {
    min1 = x2;
    max1 = x1;
}
console.log(`Первый отрезок (${min1},${max1})`);

let min2 = x3;
let max2 = x4;
if (min2 > max2) {
    min2 = x4;
    max2 = x3;
}
console.log(`Второй отрезок (${min2},${max2})`);

if (max1 === min2) {
    console.log(`Отрезки имеют точку пересечения ${max1}`);
}

if (max1 < min2) {
    console.log(`Отрезки не пересекаются`);
}

else if (max1 !== min2) {
    let minBig = min1;
    if (min2 > minBig) {
        minBig = min2;
    }
    let maxSmall = max1;
    if (max2 < maxSmall) {
        maxSmall = max2;
    }
    console.log(`Отрезки имеют границы пересечения (${minBig},${maxSmall})`);
} 
*/