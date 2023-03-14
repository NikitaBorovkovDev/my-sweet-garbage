const appBtn = document.querySelector('.up-button');
const downBtn = document.querySelector('.down-button');

const container = document.querySelector('.container')
const sidebar = document.querySelector('.sidebar');
const mainSlide = document.querySelector('.main-slide');
const slidesCount = mainSlide.querySelectorAll('div').length;

let ActiveSlidesIndex = 0;

sidebar.style.top = `-${(slidesCount -1) * 100}vh`;



appBtn.addEventListener('click', () => {
    changeSlide('up')
})

downBtn.addEventListener('click', () => {
    changeSlide('down')
})


function changeSlide(direction) {
    if (direction === 'up') {
        ActiveSlidesIndex++;
        if (ActiveSlidesIndex === slidesCount) {
            ActiveSlidesIndex = 0
        }
    } else if (direction === 'down') {
        ActiveSlidesIndex--;
        if (ActiveSlidesIndex < 0) {
            ActiveSlidesIndex = slidesCount -1;
        }
    }

    const height = container.clientHeight;

    mainSlide.style.transform = `translateY(-${ActiveSlidesIndex * height}px)`
    sidebar.style.transform = `translateY(${ActiveSlidesIndex * height}px)`
}