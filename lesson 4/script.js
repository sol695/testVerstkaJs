// let options = {
//   name:"test",
//   width:1024,
//   height:1024
// }


// options.boll = false;
// options.colors = {
//   border: "black",
//   background:'red'
// }

// console.log(options);


// delete options.boll;


// for(let key in options){
//   console.log('Свойство ' + key + ' имеет значение ' + options[key]); 
// }

// console.log(Object.keys(options).length);


// let arr = [1,2,3,4,5];
// let first = [1,"second",3,4,5];
// arr.pop();

// arr.push(6);

// arr.shift();
// arr.unshift();

// first[99] = 99;

// console.log(first.length); // .length +1

// console.log(arr);


// for (let i = 0; i <arr.length; i++){
// alert(arr[i]);
// }


// first.forEach(function(item, i, arr){
//   console.log(i + ": " + item + "(массив: " + arr + ")");
// })


// let first = ["qq", "aaa", "zzz", "q"];

// let i = prompt("", "")

// i = first.join(",");

// console.log(i);//string


// let first = [1, 13, 20, 3];

// function sortNumbers(a, b) {
//   return a - b;
// }

// let i = first.sort(sortNumbers);

// console.log(i);


// OBJECTS

let soldeier = {
  health: 400,
  armor: 100
}

let john = {
  health: 100
}

john.__proto__ = soldeier;

console.log(john);
console.log(john.armor);





function name(text) {
  let text = gold;
  console.log(text);
}
// console.log(name);

let str = "12.2";

console.log(Math.round(str));

let string = "12.2px";
console.log(parseInt(string));
console.log(parseFloat(string));


// Первая будет спрашивать "Ваш бюджет?"
// Вторая "Название вашего магазина?"

let bisness,
  nameShop,
  time,
  price;

function start() {

  bisness = prompt('Ваш бюджет?', "");

  while (isNaN(bisness) || bisness == "" || bisness == null) {

    bisness = prompt('Ваш бюджет?', "");

  }

  nameShop = prompt("Название вашего магазина?", "").toLocaleUpperCase();
  time = 21;

  console.log("Ваш бюджет: ", bisness, "\n", "Название вашего магазина: ", nameShop, time);

}
/** Todo start
 * 
 */
// start();

mainList = {
  bisness: bisness,
  nameShop: nameShop,
  arrayNameShop: [],
  Employers: {},
  open: false,
  discount: false,
  shopItems: [],
  // Задать пользователю 5 раза вопрос "Какой тип товаров будем продавать?" и записать ответы в массив shopGoods
  chooseGoods: function chooseGoods() {
    for (let i = 0; i < 5; i++) {
      let a = prompt("Какой тип товаров будем продавать?", "");

      if ((typeof (a)) === 'string' && (typeof (a)) === null && a != '' && a.length < 50) {
        console.log('Все верно!');
        mainList.shopGoods[i] = a;
      } else {
        alert("Error");
      }
    }
  },
  workTime: function workTime(time) {
    // let time = 12;
    if (time < 0) {
      console.log('Такого просто не может быть');
    } else if (time > 8 && time < 20) {
      console.log('Время работать');
      mainList.open = true;
    } else if (time < 24) {
      console.log('Уже слишком поздно');
    } else {
      console.log('В сутках только 24 часа!')
    }
  },
  // Вывести на экран пользователя бюджет на 1 день (брать месяц за 30 дней)
  OneDayBudjet: function OneDayBudjet() {
    alert("Ваш бюджет на 1 день: " + mainList.bisness / 30);
  },
  makeDiscount: function makeDiscount() {
    if (mainList.discount == true) {
      price = (price / 100) * 80;
    }
  },
  hireEmployers: function hireEmployers() {
    for (let i = 1; i < 4; i++) {
      let name = prompt("Имя пользователя");
      mainList.Employers[i];
    }
  },
  chooseShopItem: function chooseShopItem() {
    let items = prompt("Перечислите через запятую ваши товары", "")

    mainList.shopItems = items.split(","); // отдельно разбивает элементы массива
    mainList.shopItems.push(prompt("Подождите еще ", ""));
    mainList.shopItems.sort();
  },
  //  Написать проверку, что пользователь может:
  //  Ввести в типах товара только строку
  //  Не может оставить строку пустой
  //  Не может отменить вопрос
  checkUsers: function checkUsers() {
    mainList.shopItems;
    while (isNaN(mainList.shopItems) || typeof (mainList.shopItems) == "" || mainList.shopItems == null) {
      mainList.shopItems.push(prompt("Подождите еще ", ""));
    }
  },
  enumerationPropertyArray: function forcePropertyArray(){
    let items = prompt("У нас вы можете купить: ");
   
    mainList.shopItem.forEach(function(items) {
      console.log(items);
    });
  }
}

console.log(mainList);


