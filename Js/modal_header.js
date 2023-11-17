const open_modal = document.querySelector('.bi-bi-list');
const close_modal = document.querySelector('.close-icon');
const open_menu_mobile = document.querySelector('.nav-mobile-icons');
const close_menu_mobile = document.querySelector('.nav-mobile-icons');
const body = document.body;

open_modal.addEventListener('click', function() {
    open_modal.style.display = 'none';
    close_modal.style.display = 'block';   
    open_menu_mobile.style.display = 'block';
});

close_modal.addEventListener('click', function() {
    close_modal.style.display = 'none';
    open_modal.style.display = 'block';
    close_menu_mobile.style.display = 'none';
});

function checkScreenSize() {
    if (window.innerWidth >= 599 && close_menu_mobile.style.display === 'block') {
        close_menu_mobile.style.display = 'none';
        close_modal.style.display = 'none';
        open_modal.style.display = 'block';
    }
}

checkScreenSize();
window.addEventListener('resize', checkScreenSize);