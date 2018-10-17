// Первая будет спрашивать "Ваш бюджет?"
// Вторая "Название вашего магазина?"

/*


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

let time = 12;
if(time < 0){
  console.log('Такого просто не может быть');
} else if(time > 8 && time < 20){
  console.log('Время работать')
} else if(time < 24){
  console.log('Уже слишком поздно');
} else{
  console.log('В сутках только 24 часа!')
}
// console.log(shopGoods);



// Вывести на экран пользователя бюджет на 1 день (брать месяц за 30 дней)

alert(mainList.budjet / 30);
var day = prompt("Ваш бюджет на 1 день: ");
console.log(mainList);
// console.log(day)




// Какое будет выведено значение: let x = 5; alert( x++ ); ?

let x = 5;
alert(x++);//5

// Чему равно такое выражение: [ ] + false - null + true ?

console.log([]+ false - null + true);//NaN

// Что выведет этот код: let y = 1; let x = y = 2; alert(x); ?
let y = 1;
x = y = 2;
alert(x); //2

// Чему равна сумма [ ] + 1 + 2?
console.log([] + 1 + 2);//12

// Что выведет этот код: alert( "1"[0] )?
alert("1"[0]);//1

// Чему равно 2 && 1 && null && 0 && undefined ?
console.log(2 && 1 && null && 0 && undefined);//null

// Есть ли разница между выражениями? !!( a && b ) и (a && b)?
let a = 1;
let b = 2;
console.log(!!( a && b ));//true
console.log((a && b));//2

// Что выведет этот код: alert( null || 2 && 3 || 4 ); ?
alert(null || 2 && 3 || 4);//3
// a = [1, 2, 3]; b = [1, 2, 3]; Правда ли что a == b ?
var ab = [1, 2, 3]; 
var ba = [1, 2, 3];
console.log(ab==ba);//false

// Что выведет этот код: alert( +"Infinity" ); ?
alert( +"Infinity");//Infinity

// Верно ли сравнение: "ёжик" > "яблоко"?
console.log("ejic" > "apple");//true

// Чему равно 0 || "" || 2 || undefined || true || falsе ?
console.log(0 || "" || 2 || undefined || true || falsе);//2

*/


// Hard work
/**
1) Создать массив week и записать в него дни недели
·        Вывести на экран все дни недели
·        Каждый из них с новой строчки
·        Выходные дни - жирным шрифтом
·        Текущий день - курсивом
2) Создать массив arr = []
·        Записать в него 7 многозначных чисел в виде строк
·        Вывести в консоль только те, что начинаются с цифры 3 или 7 (Должны присутствовать в массиве)
*/
let week =[
  'Понидельник',
  'Вторник',
  'Четверг',
  'Пятница',
  'Субота',
  'Воскресенье'
];

for (let index = 0; index < array.length; index++) {
  const element = array[index];
  
}
console.log(week);