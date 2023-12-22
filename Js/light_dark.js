document.addEventListener('DOMContentLoaded', function () {
    const modo_light_dark = document.querySelectorAll('.icon-moon');

    modo_light_dark.forEach(element => {
        element.addEventListener('click', () => {
            document.body.classList.toggle('dark');
        });
    });
});
