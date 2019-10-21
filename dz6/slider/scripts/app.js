document.head.insertAdjacentHTML("afterbegin", '<link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.5.0/css/all.css" integrity="sha384-B4dIYHKNBt8Bc12p+WXckhzcICo0wtJAoU8YZTY5qE0Id1GSseTk6S+L3BlXeVIU" crossorigin="anonymous">');

let slider = document.querySelector('.slider');

let loadIcon = document.createElement('i');
loadIcon.classList.add('fas', 'fa-spinner', 'fa-spin');
slider.insertAdjacentElement("afterbegin", loadIcon);

let leftArrow = document.createElement('i');
leftArrow.classList.add('fas', 'fa-chevron-circle-left', 'slider-leftArrow');
slider.insertAdjacentElement("beforeend", leftArrow);

let rightArrow = document.createElement('i');
rightArrow.classList.add('fas', 'fa-chevron-circle-right', 'slider-rightArrow');
slider.insertAdjacentElement("beforeend", rightArrow);


window.addEventListener('load', function() {
    loadIcon.style.display = 'none';
    contentImages.init();
});

let contentImages = {
    currentIndex: 0,

    images: [],

    init() {
        this.images = document.querySelectorAll('.slider-content');
        this.showCurrentImage();
    },

    showCurrentImage() {
        this.images[this.currentIndex].classList.remove('hidden');
    },

    hidePreviousImage() {
        this.images[this.currentIndex].classList.add('hidden');
    },
};

rightArrow.addEventListener('click', function() {
    contentImages.hidePreviousImage();
    contentImages.currentIndex += 1;
    if (contentImages.currentIndex >= contentImages.images.length) {
        contentImages.currentIndex = 0;
    }
    contentImages.init();
    contentImages.images[contentImages.currentIndex].classList.add('slider-rl-anim');
    setTimeout(function() {
        contentImages.images[contentImages.currentIndex].classList.remove('slider-rl-anim');
    }, 300);
});

leftArrow.addEventListener('click', function() {
    contentImages.hidePreviousImage();
    contentImages.currentIndex -= 1;
    if (contentImages.currentIndex < 0) {
        contentImages.currentIndex = contentImages.images.length - 1;
    }
    contentImages.init();
    contentImages.images[contentImages.currentIndex].classList.add('slider-lr-anim');
    setTimeout(function() {
        contentImages.images[contentImages.currentIndex].classList.remove('slider-lr-anim');
    }, 300);
});

