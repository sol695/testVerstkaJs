// Первая будет спрашивать "Ваш бюджет?"
// Вторая "Название вашего магазина?"

var budjet = ('Ваш бюджет?');

 var bisness = prompt(budjet);

 var nameShop = prompt("Название вашего магазина?");

 console.log("Ваш бюджет: " , bisness, "\n" , "Название вашего магазина: ",nameShop);



mainList = {
budjet: bisness,
nameShop: nameShop,
arrayNameShop:[],
objectEmployers:{},
open:false
}
console.log(mainList);



// Задать пользователю 3 раза вопрос "Какой тип товаров будем продавать?" и записать ответы в массив shopGoods

 
mainList.shopGoods[0] = prompt("Какой тип товаров будем продавать?", "");
mainList.shopGoods[1] = prompt("Какой тип товаров будем продавать?", "");
mainList.shopGoods[2] = prompt("Какой тип товаров будем продавать?", "");


var  shopGoods = [answerOne, answerTwo, answerTree];
console.log(shopGoods);



// Вывести на экран пользователя бюджет на 1 день (брать месяц за 30 дней)

alert(mainList.budjet / 30);
var day = prompt("Ваш бюджет на 1 день: ");
console.log(mainList);
// console.log(day)