const modo_light_dark = document.querySelectorAll('.icon-moon, .icon-moon-mobile');

modo_light_dark.addEventListener('click', () => {
    body.classList.toggle('dark');
});
