const coffee = document.querySelector('#house');
const menu = document.querySelector('#menu');

coffee.addEventListener('click', () => {
    menu.classList.toggle('disp')
});