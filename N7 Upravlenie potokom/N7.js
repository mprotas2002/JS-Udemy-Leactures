// if else
const money = 100;

if (money > 50) {
	console.log('Может купить наш продукт');
} else if (money > 5) {
	console.log('Куплен mini продукт');
} else {
	consoke.log('Не хватает баланса');
}

console.log('Итог');

//Упражнение - Размещегие депозита
/*
    Вася положил 12000$ на вклад 7% годовых с капитализацией 1 раз в месяц.
    Вывести в консоли , сможет ли он купить дом за 13000$ через 2 года после снятия вклада. И остаток после покупки.
    Итог = Сумма * (1 + Ставка_в_месяц не в %) ^ срок_в_месяцах
*/

let fMoney = 12000;
let nMoney = 13500;
let capProcent = 7;
let time = 24;
let sum = fMoney * (1 + capProcent / 100 / 12) ** time;
console.log('Итог накоплений ' + sum);
if (sum >= nMoney) {
	console.log('Вы можете купить дом');
	console.log('Остаток: ' + (sum - nMoney));
} else {
	console.log('Вы не можете купить дом');
}

// Операторы равенства
