const modo_light_dark = document.querySelector('.icon-moon');

modo_light_dark.addEventListener('click', () => {
    modo_light_dark.classList.toggle('dark')
    body.classList.toggle('dark')
    header.classList.toggle('dark')
}); 






