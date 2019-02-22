// var money = prompt("Ваш бюджет на месяц?");
//     time = prompt("Введите дату в формате YYYY-MM-DD");
    

// var firstQuest = prompt("Введите обязательную статью расходов в этом месяце", "");
// var secondQuest = prompt("Во сколько обойдется?", "");

// var appData = {
//         budget : money,
//         timeData : time,
//         expenses: { firstQuest : secondQuest},
//         optionalExpenses: {},
//         income : [],
//         savings : false
//     };

    
// alert('ваш бюжет на 1 день состовляет'  + (firstQuest/30) + "рублей");

 

// for (let i = 1 ; i < 8 ; i++){
//     if (i%2 == 1){
//         console.log(i);
//     }  
    
// }

// for (let i = 1 ; i < 8 ; i++){
//     if (i%1 == 1){
//         console.log(i);
//     }  
    
// }

// for (let i = 1 ; i < 8 ; i++){
//     if (i >= 2){
//         console.log("-----");
//     }  
//     console.log(i);
// }

// let num = 30;

//  function showMessage(text){
//      alert(text);
//   let num = 20;
//   console.log(num);
//  }

//  showMessage('hi!');
//  console.log(num);


// function calc(a,b){
//     return (a + b);
// }

// console.log(calc(1,5));

// console.log(calc(2,5));
 

// function retVar() {
//     let num = 50;
//     return num;
// }

// let anotherNum = retVar();
// console.log(anotherNum);


// let calc = function(a,b){
//     return(a + b);
// };

// console.log(calc(3,2));


// let car = {
//     name: "Bmw X5",
//     age: 2005
// };

// console.log(car);

// car.weight = "600 kg";
// car.color = ['red','black','blue'];
// car.firstAid = {
//     bandage: 1,
//     iodine: 2,
//     tow: 0
// };

// for (let key in car){
//     console.log('свойство ' + key + ' имеет значение ' + car[key]);
// }

// console.log(Object.keys(car).length);

// let arr = ['первый', 2, 3, 4, 'five', 6];
 
// arr.pop(); //удаление последнего элемента массива
// arr.push('2'); // добавление элемента в конец массива
// arr.shift(); // удаление первого элемента массива
// arr.unshift(12); // добавление элемента в начало массива

// for ( let i = 0; i < arr.length; i++){
//     console.log(arr[i]);
// }

// arr.forEach(function(item, i, mass){
//     console.log(i + ': '  + item + " (массив: " + mass + ")");
// });


// let mass = [1,2,5,6,12];

// for (let key in mass){
//     console.log(key);
// }

// for (let key of mass){
//     console.log(key);
// }


// let ans = prompt("введите через запятую ваши любимые цветы", "");
//     arr = [];

// arr = ans.split(",");
// console.log(arr);


// let arr = ['ass' , 'boobs', 'vagina'],
//     i = arr.join(', ');
//     console.log(i);

// let arr = [ 1, 15, 4],
//     i = arr.sort(compareNum);


// function compareNum(a,b){
//     return a - b;
// }
//     console.log(arr);

// ООП 


let soldier = {
    health: 200,
    armor: 400,
    color: 'white'
};

let alex = {
    health: 100
};

alex.__proto__ = soldier;

console.log(alex);
console.log(alex.color);

