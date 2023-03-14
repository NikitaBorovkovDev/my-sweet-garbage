var blogSwiper = new Swiper('.blog_swiper', {
    direction: 'horizontal',
    loop: true,
    centeredSlides: true,
    autoHeight: true,
    simulateTouch: false,
    keyboard: {
        enable: true, 
        onlyInViewport: true, 
        pageUpDown: true, 
    },
    pagination: {
        type: 'bullets',
        el: '.swiper-pagination',
        clickable: true,
    },
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },
});


var testimonialsSwiper = new Swiper('.testimonials_container_swiper', {
    direction: 'horizontal',
    loop: true,
    breakpoints: {
        // when window width is >= 320px
        320: {
            slidesPerView: 1,
        },
        540: {
            slidesPerView: 1.2,
        },
        600: {
            slidesPerView: 1.43,
            spaceBetween: 30,
        },
        960: {
            slidesPerView: 1.43,
            spaceBetween: 64,
        },
        1140: {
            slidesPerView: 1.43,
            spaceBetween: 64,
        },
    },
    watchOverflow: true,
    keyboard: {
        enable: true, 
        onlyInViewport: true, 
        pageUpDown: true, 
    },
    pagination: {
        type: 'bullets',
        el: '.swiper-pagination',
        clickable: true,
    },
    // autoplay: {
    //     delay: 1700,
    //     // disableOnInteraction: true,
    // },
    speed: 1200,
});













document.querySelectorAll('.header_burger').forEach(item => {item.addEventListener('click', function(){
    document.querySelectorAll('.header_burger').forEach(item => {item.classList.toggle('active')});
    document.querySelector('.header_menu').classList.toggle('active');
    document.querySelectorAll('body').forEach(item => {item.classList.toggle('lock')});



    // document.querySelectorAll('.header_burger').forEach(item => {item.classList.toggle('active')});
    // document.querySelectorAll('.header_menu').forEach(item => {item.classList.toggle('active')});
    // document.querySelectorAll('body').forEach(item => {item.classList.toggle('lock')});
    // document.querySelector('.header_menu').classList.toggle('active')
    // document.querySelector('body').classList.toggle('lock')
})});




var swiperButtons = document.querySelectorAll('.swiper-button-next, .swiper-button-prev');
swiperButtons.forEach(item => {
    item.addEventListener("click", function() {
        blogSwiper.updateAutoHeight(200);
    });
});



var testimonialsSwiperSpeed = document.querySelector('#testimonials_swiper');

testimonialsSwiperSpeed.addEventListener("mouseover", function () {
    testimonialsSwiper.autoplay.stop();
    testimonialsSwiper.params.speed = 300;
});
testimonialsSwiperSpeed.addEventListener("mouseout", function () {
    testimonialsSwiper.autoplay.start();
    testimonialsSwiper.params.speed = 1200;
});


const spoilerContainer = document.querySelectorAll("[data-name='spoiler-container']");

// перебор коробок спойлеров, для поиска названий спойлеров в них
spoilerContainer.forEach(function (item) { 
    var header = item.querySelectorAll("[data-name='spoiler-title']");
    // проверка на наличие нескольких названий в коробке 
    header.forEach(function (headerItem) {
        // запуск функции при клике на любой тайтл в коробке
        headerItem.addEventListener("click", function (){
            header.forEach(function (item) {
                item.classList.toggle("faq_spoiler-active");
            });
            
            // поиск нескольких контейнеров с содержимым спойлера
            var spoilerContent = item.querySelectorAll("[data-name='spoiler-content']");
            spoilerContent.forEach(function (item) {
                // добавление/удаление класса при клике
                item.classList.toggle("faq_spoiler-body");
                if(item.classList.contains('faq_spoiler-body')) {
                    item.style.maxHeight = item.scrollHeight + "px";
                } else {
                    item.style.maxHeight = 0 + "px";
                };
                // сравнение массивов для закрытия открытых спойлеров
                var allSpoilersContent = document.querySelectorAll("[data-name='spoiler-content']");
                var notActiveSpoilers = Array.from(allSpoilersContent).filter(i => !Array.from(spoilerContent).includes(i));
                notActiveSpoilers.forEach(item => {
                    item.classList.remove("faq_spoiler-body");
                    item.style.maxHeight = 0 + "px";
                });
                var allSpoilersHeader = document.querySelectorAll("[data-name='spoiler-title']");
                notActiveSpoilers = Array.from(allSpoilersHeader).filter(i => !Array.from(header).includes(i));
                notActiveSpoilers.forEach(item => {
                    item.classList.remove("faq_spoiler-active");
                });
            });
        });
    });
});
// var h = document.getElementById('menu_bottom').clientHeight;
// function headerClick() {
//   this.nextElementSibling.classList.toggle("faq_spoiler-body");
// }
window.addEventListener('resize', (e) => {
    chartModalOpen()
  });
window.onload = chartModalOpen();

function chartModalOpen(){
    document.querySelector('.chart_play-button').style.top = document.querySelector('.chart_text_container').offsetHeight + parseFloat(window.getComputedStyle(document.querySelector('.chart_text_container'), null).marginTop) + "px";
    // let circle1 = document.querySelector('#chart_circle1');
    // let circle2 = document.querySelector('#chart_circle2');
    // let circle3 = document.querySelector('#chart_circle3');
    // let circle4 = document.querySelector('#chart_circle4');
    function getCoords(elem) {
        let box = elem.getBoundingClientRect();
        return {
            top: box.top + window.pageYOffset,
            right: box.right + window.pageXOffset,
            bottom: box.bottom + window.pageYOffset,
            left: box.left + window.pageXOffset,
            width: box.width ,
        };
    }
    function modalCoordinates (item, circle, modal) {
        item.addEventListener("mouseover",function() {
            modal.style.opacity = 1;
         });
         
         item.addEventListener("mouseout",function() {
            modal.style.opacity = 0;
         });
        modal.style.left = circle.left - modal.offsetWidth / 2 + circle.width / 2 + "px";
        // координаты top для абсолютного позиционирования минуc высота хедера
        modal.style.top = circle.top - modal.offsetHeight * 1.2 - document.querySelector('.header').offsetHeight + "px";
    };
    for (let i = 1; i < 5; i++){
        window['circle' + i] = document.querySelector('#chart_circle'+i);      
        let xa = getCoords(window['circle' + i] = document.querySelector('#chart_circle'+i));
        let item = window['circle' + i] = document.querySelector('#chart_circle'+i);
        modalCoordinates (item, xa, window['circle' + i] = document.querySelector('.chart_modal'+i));
    };

    
};
