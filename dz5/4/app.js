const buttons = document.querySelectorAll('button');
const images = document.querySelectorAll('img');
const spans = document.querySelectorAll('span');

buttons.forEach(function(element){
    element.addEventListener('click', function(event) {
        buttonClicking(event);
    })
});

function buttonClicking(event) {
    const divInfo = event.target.parentNode;
    const neededDiv = {
        content: divInfo,
        span: divInfo.querySelector('span'),
        img: divInfo.querySelector('img'),
        button: divInfo.querySelector('button')
    };

    const buttonText = neededDiv.button.innerText;

    if (buttonText === "Подробнее") {
        neededDiv.img.classList.add('hidden');
        neededDiv.span.classList.remove('hidden');
        neededDiv.button.innerText = "Отмена";
    }
    if (buttonText === "Отмена") {
        neededDiv.img.classList.remove('hidden');
        neededDiv.span.classList.add('hidden');
        neededDiv.button.innerText = "Подробнее";
    }
}


