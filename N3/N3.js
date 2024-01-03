// однострочный комментарий

/* 
Двустрочный
комментарий
*/

// Базовые арифметические операции

const width = 10;
const height = 5;
const space = 10 * 5;
console.log(space);
const newWidth = width + height;
const newHeight = height + space;
const division = newWidth / newHeight;
console.log(division);
const volume = width ** 3;
console.log(volume);

// Строки
const city = 'Москва';
const street = 'Рижская';
console.log(city + ', ' + street);

// Операции присваивания
let age = 18 + 5;
age += 2;
// age = age + 2
age -= 3;
age *= 2;
age++; // age = age +1
console.log('age ' + age);

// Операторы сравнения
const vasia = 20;
console.log(age > vasia);
console.log(age >= vasia);
console.log(age < vasia);
console.log(age <= vasia);
console.log(age == vasia);

/* Порядок операторов
https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Operators/Operator_Precedence#table
*/
console.log('Порядок операторов');
const isSuited = 100 - 10 > 90 - 5;
console.log(isSuited);

//Оператор присваивания идет справа налево
let b;
let c;
c = b = 100 + 50;
console.log(c);
console.log(b);

// Типы данных
// Объект
const user = {
	name: 'Вася',
	age: 18,
};

// Примитив
const agePr1 = 18;

// примитивами могут быть
// Числа
const agePr2 = 20;

// Строки
const surname = 'Иванов';

// True/False
const isAdmin = true;

// Не заданное значение (переменная задана, но пока не знаем, что там будет)
const isSEO = undefined;
let data;

// Пустое значение (строго пусто)
let id = null;

// уникальное неизменное значение
const us = Symbol('Admin');

// Работа с большими числами
const big = BigInt(99999999999999999999999);

console.log('типы данных');
let abc = 5;
let cba = 5.6;
console.log(typeof abc);
abc = 'строка';
console.log(typeof abc);

let c1;
console.log(typeof c1);
c1 = 5;
console.log(typeof c1);

let d1 = null;
console.log(typeof d1);
