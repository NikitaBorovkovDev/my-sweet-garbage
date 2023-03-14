"use strict"
const slidesContainer = document.querySelector('.container');
const slides = document.querySelectorAll('.slide');

slidesContainer.addEventListener('click', (event) => {
    if (event.target.closest('.slide')) {
        
        let currentSlide = event.target.closest('.slide')
        let slideImage = currentSlide.querySelector('img');

        if (currentSlide.classList.contains('_active')) {
            clearActiveClasses();
        } else {
            clearActiveClasses();
            currentSlide.classList.add('_active')
            // если ширина больше высоты, то ширина картинки увеличивается до исходного соотношения ширины и высоты, если нет, то ширина немного увеличивается 
            if (slideImage.naturalWidth > slideImage.naturalHeight) {
                currentSlide.style.flexBasis = `${currentSlide.clientHeight  * (slideImage.naturalWidth / slideImage.naturalHeight)}px`
            } else {
                currentSlide.style.flexGrow = '1.2'
            }
            
        }

        
        
    }
})


function clearActiveClasses() {
    // обнуление изменения размера
    slides.forEach(slide => {
        slide.classList.remove('_active')
        slide.style.flexBasis = '';
        slide.style.flexGrow = ''
    })
}


// background-цвет для тега <body> - изменён
// картинки для карточек - заменены :>