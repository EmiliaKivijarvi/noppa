'use strict';

const container = document.getElementById('container');
const dice = document.getElementById('dice');
const button = document.getElementById('button');

button.addEventListener('click', () => {
    const random = Math.floor(Math.random() * 6 )+1;
    dice.src = `./img/${random}.png`;
})

