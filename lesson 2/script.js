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

for (let i = 0; i < 5; i++) {
 let a =  prompt("Какой тип товаров будем продавать?", "");
 
 if ((typeof(a)) === 'string' && (typeof(a)) === null && a != '' && a.length < 50) {
   console.log('Все верно!');
   mainList.shopGoods[i] = a;
 } else{
   
 }
}

if(time < 0){
  console.log('Такого просто не может быть');
} else if(time > 8 && time < 20){
  console.log('Время работать')
} else if(time < 24){
  console.log('Уже слишком поздно');
} else{
  console.log('В сутках только 24 часа!')
}
console.log(shopGoods);



// Вывести на экран пользователя бюджет на 1 день (брать месяц за 30 дней)

alert(mainList.budjet / 30);
var day = prompt("Ваш бюджет на 1 день: ");
console.log(mainList);
// console.log(day)