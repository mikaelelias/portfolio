let modo_light_dark = document.querySelector('.light_dark');
const openModalEl = document.querySelector('.open-icon');

modo_light_dark.addEventListener('click', () => {
    modo_light_dark.classList.toggle('dark')
    body.classList.toggle('dark')
    header.classList.toggle('dark')
});

