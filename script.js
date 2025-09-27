let lastScroll = 0;
const nav = document.querySelector('nav');

window.addEventListener('scroll', () => {
    const currentScroll = window.pageYOffset;

    if (currentScroll > lastScroll) {
        // Scroll vers le bas → cacher la nav
        nav.style.transform = 'translateY(-100%)';
    } else {
        // Scroll vers le haut → montrer la nav
        nav.style.transform = 'translateY(0)';
    }

    lastScroll = currentScroll;
});
const toggle = document.querySelector('.nav-toggle');
const navList = document.querySelector('.nav-list');

toggle.addEventListener('click', () => {
    const expanded = toggle.getAttribute('aria-expanded') === 'true';
    toggle.setAttribute('aria-expanded', String(!expanded));
    navList.classList.toggle('open');
});
document.querySelectorAll('.nav-list a').forEach(a => {
    a.addEventListener('click', () => navList.classList.remove('open'));
});