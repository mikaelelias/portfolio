const open_modal = document.querySelector('.bi-bi-list');
const close_modal = document.querySelector('.close-icon');

open_modal.addEventListener('click', function() {
    open_modal.style.display = 'none';
    close_modal.style.display = 'block';    
});

close_modal.addEventListener('click', function(){
    close_modal.style.display = 'none';
    open_modal.style.display = 'block';
});