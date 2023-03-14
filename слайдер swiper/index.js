const swiper = new Swiper('.swiper', {
    // Optional parameters
    direction: 'horizontal',
    loop: false,
    // simulateTouch: false, //перетаскивание на пк
    // touchRatio: 1, //сила перетаскивания
    // touchAngle: 45, // угол перетаскивания
    // grabCursor: false, // изменение курсора
    // slideToClickedSlide: false, // переключение слайда при клике на него
    hashNavigation: { // объект для навигации по хешу
        watchState: false, // отслеживать состояние через стрелки браузера
    },
    keyboard: { // управление через клаву
        enable: true, // включить 
        onlyInViewport: true, // только в пределах актив области 
        pageUpDown: true, // через up down
    },
    mousewheel: { // колесо мыши 
        sensitivity: 1, 
    },

    // при значение auto и auto width у контента, будет вывод количества слайдов по контенту
    // slidesPerView: 1.2,

    watchOverflow: true,

    spaceBetween: 30, // паддинг

    // autoHeight: true,

    // slidesPerGroup: 3, // слайды за прокрутку
    // centeredSlides: true,
    initialSlide: 1,
    // slidesPerColumn: 2,
    freeMode: true, // свободная прокрутка 
    speed: 300, // скорость прокрутки



    preloadImages: false,
    lazy: {
        loadOnTransitionStart: true,
        loadPerNext: true,
    },

    // If we need pagination
    // буллеты, тукущее положение, процесс бары
    pagination: {
        // тип по умолчанию:
        // type: 'bullets', 
        el: '.swiper-pagination',
        clickable: true,
    //dynamicBullets: true, 
        // вывод буллетов цифрами
        // renderBullet: function (index, className) {
        //     return '<span class="' + className + '">' + (index + 1) + '</span>';
        // },
        // type: 'fraction',
        // renderFraction: function (currentClass, totalClass) {
        //      return 'Фото <span class="' + currentClass + '"></span>' + ' из ' + '<span class="' + totalClass + '"></span>';
        // },
        // type: 'progressbar',
    },
  
    // Navigation arrows
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
  
    // And if we need scrollbar
    scrollbar: {
      el: '.swiper-scrollbar',
      draggable: false, // перетаскивание курсором
    },
  });