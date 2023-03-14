import {productsCard} from './Products.js';

const offersSwiper = new Swiper('.special-offers__swiper', {
    setWrapperSize: true,
    loop: true,
    slideActiveClass: 'special-offers__swiper-slide-active',
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
});

const heroSwiper = new Swiper('.section-hero-slider__swiper', {
    setWrapperSize: true,
    touchReleaseOnEdges: true,
    pagination: {
        el: '.section-hero-slider__swiper-pagination',
        clickable: true,
        renderBullet: function (index, className) {
            return '<span class="' + className + '">' + '0' + (index + 1) + '</span>';
        }
    },
});



const swiperContentWidth = [];
document.querySelector('.special-offers__swiper').querySelectorAll('.special-offers__inner-text').forEach(item => {
    swiperContentWidth.push(item.getBoundingClientRect().width)
})


document.querySelector('.special-offers__swiper').style.width = Math.max.apply(null, swiperContentWidth) + 100 + 'px';


document.addEventListener('click', e => {
    if (e.target.closest('.lang-currancy')) {
        let langChangeButton = e.target.closest('.lang-currancy').querySelector('.lang-currancy__button');
        let langChangeMenu = e.target.closest('.lang-currancy').querySelector('.lang-currancy__lang-change');
        langChangeMenu.classList.toggle('lang-currancy__lang-change-open');
        langChangeButton.classList.toggle('lang-currancy__button-open-menu')
    };
    if (!e.target.closest('.lang-currancy')) {
        document.querySelectorAll('.lang-currancy__lang-change').forEach(item => {
            item.classList.remove('lang-currancy__lang-change-open');
            item.parentNode.querySelector('.lang-currancy__button').classList.remove('lang-currancy__button-open-menu');
        })
    }
    if  (e.target.closest('.cart')) {
        document.querySelector('.cart-basket').classList.toggle('cart-basket-active');
    }
    if  (e.target.closest('.cart-basket__close')) {
        document.querySelector('.cart-basket').classList.remove('cart-basket-active');
    }
    if  (!e.target.closest('.cart-basket') && !e.target.closest('.cart')) {
        document.querySelector('.cart-basket').classList.remove('cart-basket-active');
    }
    if (e.target.closest('.product__color')) {
        console.log(e.target.closest('.product__color').dataset.color);
        let colors = e.target.closest('.product__color-containers').children;
        for (let i = 0; i < colors.length; i += 1) {
            colors[i].style.border = "";
          }
        e.target.closest('.product__color-containers').dataset.selectedColor = e.target.closest('.product__color').dataset.color;
        e.target.closest('.product__color-container').style.border = "1px solid #17696A";
    }
    if (e.target.closest('.product__size')) {
        console.log(e.target.closest('.product__size').dataset.size);
        let sizes = e.target.closest('.product__size-container').children;
        for (let i = 0; i < sizes.length; i += 1) {
            sizes[i].style.border = "";
          }
        e.target.closest('.product__size-container').dataset.selectedSize = e.target.closest('.product__size').dataset.size;
        e.target.closest('.product__size').style.border = "1px solid #17696A";
    }
    if (e.target.closest('.productButton')) {
        let id = e.target.closest('.product').dataset.productId;
        console.log(e.target);
        productsCard.handleSetLocationStorage(e.target, id);
    }
});








    
    
    
const newArrivalsSwiper = new Swiper('.section-new-arrivals__products-slider', {
    
    pagination: {
        el: '.section-new-arrivals__swiper-pagination',
        clickable: true,
        dynamicBullets: false,
    },
    slidesPerView: 6,
    spaceBetween: 20,
    slidesPerGroup: 6,
    observer: true,
    observerUpdate: true,
});
    



export {newArrivalsSwiper};






// let product1 = {
//     "id": "183260098",
//     "name": "Basic hooded sweatshirt in pink",
//     "imageAndVideo": "/product img/product-image@1x.jpg, /product img/product-image.jpg",
//     "basePrice": "31.00",
//     "currentPrice": "15.50",
//     "discount": "-50",
//     "size": "36, 37, 38, 39, 40",
//     "color": "pink, blue, yellow",
//     "rating": "4.13",
// };