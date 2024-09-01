const coffee = document.querySelector('#house');
const menu = document.querySelector('#menu');

coffee.addEventListener('click', () => {
    menu.classList.toggle('disp')
});

document.querySelector("#show-popup").addEventListener("click", function(){
    document.querySelector(".popup").classList.add("active");
});
document.querySelector("#close-btn").addEventListener("click", function(){
    document.querySelector(".popup").classList.remove("active");
})

