/*
Ваша часовая ставка 80$ и вы готовы работать не
более 5 часов в день 5 дней в неделю (кроме выходных).
К вам приходит заказчик и предлагает заказ на 40
часов работы.
Сейчас понедельник.
Вы должны уехать через 11 дней.
Выведете в консоль:
- Boolean переменную успеете ли вы взяться за работу
- Сколько вы за неё попросите?
*/

/*
пн-пт 5 дней
сб-вс 2 дня
пн-чт 4 дня
всего 11

80 * 40
*/
// Данные
const payPerHour = 80;
const hoursPerDay = 5;
let hoursForWork = 40;
let fondDays = 11;
let workDays = 5;
let notWorkDays = 2;
let money = undefined;
let takeWork = undefined;

// Вычисления
takeWork = hoursForWork / hoursPerDay <= fondDays - notWorkDays;
money = payPerHour * hoursForWork;

// Результат
console.log('Беру работу: ' + takeWork);
console.log('Заработаю: ' + money);
