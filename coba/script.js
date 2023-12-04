let geser = document.getElementById('slide');
const bg = document.getElementById('bg');

window.addEventListener('scroll', function () {
    let value = window.scrollY;
    geser.style.marginTop = value * -1 + 'px';
    bg.style.backgroundSize = 140 - +this.window.pageYOffset/12+'%';
});