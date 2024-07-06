let navbar = document.querySelector('#navigationBarDiv');
let home = document.querySelector('#brand')
let links = document.querySelectorAll('.nav-link')
let dropDownButton = document.querySelector('#hamburgerIcon');
let linkDiv = document.querySelector('#navbarNavAltMarkup');
home.style.margin = '0';
for (let link of links) {
    link.style.fontSize = '1.5vw';
    link.style.padding = '0.5vw 2vw';
}
dropDownButton.style.fontSize = '1vw';
dropDownButton.style.backgroundColor = '#dee2e6';
window.addEventListener('scroll', function () {
    if (window.scrollY > 50) {
        navbar.classList.add('navigationBarScroll');
        navbar.classList.remove('navigationBarDefault');
        for (let link of links) {
            link.classList.add('navigationBarScroll');
            link.classList.remove('navigationBarDefault');
            link.style.color = 'white';
        }
    }
    else {
        navbar.classList.remove('navigationBarScroll');
        navbar.classList.add('navigationBarDefault');
        for (let link of links) {
            link.classList.add('navigationBarDefault');
            link.classList.remove('navigationBarScroll');
            link.style.color = 'black';
        }
    }
})

if (window.innerWidth <= 992) {
    navbar.classList.add('navigationBarDefault');
    for (let link of links) {
        link.classList.add('navigationBarDefault');
        link.style.paddingTop = '0.5vw';
    }
}
// else {
// }