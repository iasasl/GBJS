const content = document.querySelector('.window');
const exit = document.querySelector('span');
const open = document.querySelector('button');

open.addEventListener('click', function() {
    content.classList.remove('hidden');
});

exit.addEventListener('click', function() {
    content.classList.add('hidden');
});