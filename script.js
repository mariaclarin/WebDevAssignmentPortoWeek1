let btnRed=document.querySelector('#btnRed');
let btnR=document.querySelector('#btnR');
let content = document.querySelector('p');

btnRed.addEventListener('click',() => content.style.color='red');
btnR.addEventListener('click',() => content.style.color='black');