'use strict';
/*
const box = document.getElementById('box');
console.log(box);

const btns = document.getElementsByTagName('button');
console.log(btns[0]);

const circles = document.getElementsByClassName('circle');
console.log(circles);

const hearts = document.querySelectorAll('.heart');
console.log(hearts);
hearts.forEach(item => {
    console.log(item);
})

const oneHeart = document.querySelector('.heart');
console.log(oneHeart);
*/
const box = document.getElementById('box'),
      btns = document.getElementsByTagName('button'),
      circles = document.getElementsByClassName('circle'),
      hearts = document.querySelectorAll('.heart'),
      oneHeart = document.querySelector('.heart'),
    //oneHeart = wrapper.querySelector('.heart'), т.к. дочерн эл
      wrapper = document.querySelector('.wrapper');
console.dir(box);
box.style.backgroundColor = 'blue';
box.style.width = '500 px';
// box.style.cssText = 'background-color: blue; width: 500px';
btns[1].style.borderRadius = '100%';
circles[1].style.backgroundColor = 'red';
/*
for (let i = 0; i < hearts.length; i++) {
    hearts[i].style.backgroundColor = 'blue';
}*/
hearts.forEach(item => {
    item.style.backgroundColor = 'blue';
});
const div = document.createElement('div');
div.classList.add('black');// add style div-у
document.body.append(div);// add div в конец body
wrapper.append(div);
wrapper.prepend(div);
//добавл div в начало
// hearts[0].before(div)//добавл перед
// hearts[0].after(div)//добавл после
circles[0].remove()//delete
//замена эл--(этим элементом)
hearts[0].replaceWith(circles[0]);
div.innerHTML = '<h1>Hello world</h1>'// вставл text || html
// div.textContent = 'Hello'//только text
//ВСТАВКА HTML
div.insertAdjacentHTML('beforebegin', '<h2>Hello</h2>')//перед эл
