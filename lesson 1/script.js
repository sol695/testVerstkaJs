// Первая будет спрашивать "Ваш бюджет?"
// Вторая "Название вашего магазина?"

var budjet = ('Ваш бюджет?');

 var bisness = prompt(budjet);

 var nameShop = prompt("Название вашего магазина?");

 console.log("Ваш бюджет: " , bisness, "\n" , "Название вашего магазина: ",nameShop);



mainList = {
budjet: 100000,
nameShop: "SKIFI",
arrayNameShop:[1,2,3],
objectEmployers:{a:1},
open:open.length
}
console.log(mainList);



// Задать пользователю 3 раза вопрос "Какой тип товаров будем продавать?" и записать ответы в массив shopGoods

 
var answerOne = prompt("Какой тип товаров будем продавать?", "");
var answerTwo = prompt("Какой тип товаров будем продавать?", "");
var answerTree = prompt("Какой тип товаров будем продавать?", "");


var  shopGoods = [answerOne, answerTwo, answerTree];
console.log(shopGoods);



// Вывести на экран пользователя бюджет на 1 день (брать месяц за 30 дней)

var day = prompt("Ваш бюджет на 1 день: ");
console.log(day)