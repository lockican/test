let ul = document.querySelector('ul'),
    li = document.createElement('li'),
    bg = document.querySelector('body'),
    adv = document.querySelector('.adv');

li.classList.add('menu-item');
li.innerHTML = 'Пятый элемент';

ul.appendChild(li);


bg.style.background = 'url(../img/apple_true.jpg)';
adv.remove();

let questionApple = prompt('Как вы относитесь к технике Apple' , ''),
    pr = document.getElementById('prompt');

    pr.innerHTML = questionApple;

    console.log(questionApple);