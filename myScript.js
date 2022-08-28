// const menu = document.querySelector('.menu')
// const close = document.querySelector('.close')
// const nav = document.querySelector('nav')

// menu.addEventListener('click', () => {
//     nav.classList.add('open-nav');
//     console.log("It has been clicked");
// })

// console.log("Hello World!");

const menu = document.querySelector('.menu')
const close = document.querySelector('.close')
const nav = document.querySelector('nav')

menu.addEventListener('click', () => {
    nav.classList.add('open-nav')
})

close.addEventListener('click', () => {
    nav.classList.remove('open-nav')
})