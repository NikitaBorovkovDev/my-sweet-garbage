import {LocalStorageUtil, localStorageUtil} from './LocalStorageUtil.js';
import {Header, headerpage} from './Header.js';
import {newArrivalsSwiper} from './script.js';

class Products {

    constructor() {

    }


    async handleSetLocationStorage(element, id) {
        let size = element.closest('.product__container').querySelector('.product__size-container').dataset.selectedSize;
        let color = element.closest('.product__container').querySelector('.product__color-containers').dataset.selectedColor;
        const {pushProduct, localStorageProducts} = await localStorageUtil.putProducts(id, size, color);


        headerpage.render(localStorageProducts.length);

        console.log(element, id);
    }


        render(productsPlaсe, productsСounter, productSearch = 0) {

            // productsСounter - how many products are needed
            // if productSearch = 0 then random products
            // if productSearch = 1 then random With Discounts
            // if productSearch = 2 then random Without Discounts


            let haveIt = [];

            function generateUniqueRandom(maxNr) {
                //Generate random number
                let random = (Math.random() * maxNr).toFixed();

                //Coerce to number by boxing
                random = Number(random);

                if(!haveIt.includes(random)) {
                    haveIt.push(random);
                    return random;
                } else {
                    if(haveIt.length <= maxNr) {
                    //Recursively generate number
                    return  generateUniqueRandom(maxNr);
                    } else {
                    // console.log('No more numbers available.')
                    haveIt = []
                    return generateUniqueRandom(maxNr);
                    }
                }
            }


            const productsStore = localStorageUtil.getProducts();


            let products = new Promise(function(resolve, reject){
                setTimeout(() => {
                    resolve(fetch('https://raw.githubusercontent.com/nickfluffybr/emag/somethblng/productsJson.json'))
                },0)
                });
            products.then(products => {
                return products.json() 
            }).
                then(productsJson => {
                    // console.log(productsJson);
                    let htmlCatalog = '';
                    let i = 0;
                    let productSearchDiscount = [];
                    let productSearchWithoutDiscounts = [];
                    if (productSearch == 1){
                        for (let key in productsJson) {
                            if (productsJson[key].discount != 0) {
                                productSearchDiscount.push(productsJson[key])
                            }
                        }
                        productsJson = productSearchDiscount;
                    }
                    if (productSearch == 2){
                        for (let key in productsJson) {
                            if (productsJson[key].discount == 0) {
                                productSearchWithoutDiscounts.push(productsJson[key])
                            }
                        }
                        productsJson = productSearchWithoutDiscounts;
                    }
                    // console.log(productsJson);

                    while (i < productsСounter) {
                        ++i;
                        let randomProduct = generateUniqueRandom(productsJson.length - 1);
                        // console.log(productsJson);
                        // console.log(randomProduct);
                        // console.log(productsJson.length);


                       
                        let activeClass = '';



                        let {
                            id, 
                            name, 
                            imageAndVideo, 
                            basePrice,
                            currentPrice,
                            discount,
                            size,
                            color,
                            rating
                        } = productsJson[randomProduct];



                    


                        let CountImageAndVideo = imageAndVideo.split(',');
                        let ImageAndVideoHtml = '';
                        CountImageAndVideo.forEach(item => {
                            item = item.trimStart();
                            
                            ImageAndVideoHtml += 
                            (`
                                <div class="product-img-swiper__slide swiper-slide">
                                    <img class="product-img-swiper__img" src="${item}" alt="">
                                </div>
                            `);
                        })
                        let CountSize = size.split(',');
                        let sizeHtml = '';
                        CountSize.forEach(item => {
                            item = item.trimStart();
                            sizeHtml += 
                            (`
                            <span class="product__size" data-size="${item}">${item}</span>
                            `);
                        })
                        let CountColor = color.split(',');
                        let ColorHtml = '';
                        CountColor.forEach(item => {
                            item = item.trimStart();
                            ColorHtml += 
                            (`
                                <div class="product__color-container">
                                    <div class="product__color" data-color="${item}" style="background-color: ${item};"></div>
                                </div>
                            `);
                        })
                        function CurrentDiscount() {
                            if (discount == 0 || discount == '') {
                                return '';
                            } else {
                                return `<div class="product__discount">${discount}%</div>`
                            }
                        }
                        function price() {
                            if (currentPrice === basePrice) {
                                return `<p class="product__price">$${currentPrice}</p>`
                            } else {
                                return `<p class="product__price product__price_discount">$${currentPrice} <span class="product__base_price">$${basePrice}</span></p>`
                            }
                        }
                        htmlCatalog += `
                            <div class="product swiper-slide" data-product-id="${id}">
                                <div class="product__container">
                                    ${CurrentDiscount()}
                                    <div class="product__stars-rating">
                                        <div class="product__stars-rating-fill" style="width: ${rating / 5 * 70}px;"></div>
                                    </div>
                                    <div class="product__swiper swiper product-img-swiper">
                                        <div class="product-img-swiper__wrapper swiper-wrapper">
                                            ${ImageAndVideoHtml}
                                        </div>

                                        <div class="product-img-swiper__button-prev swiper-button-prev"></div>
                                        <div class="product-img-swiper__button-next 
                                        swiper-button-next"></div>
                                        <button class="product__add-wishlist"></button>
                                    </div>
                                    <p class="product__name">${name}</p>
                                    ${price()}
                                    <div class="product__add-to-cart">
                                        <div class="product__size-container" data-selected-size>
                                            ${sizeHtml}
                                        </div>
                                        <div class="product__color-containers" data-selected-color>
                                            ${ColorHtml}
                                        </div>
                                    </div>
                                    <div class="productButton button fill-button ${activeClass}">Add to cart</div> 
                                </div>
                            </div>
                        `;
                    }
                    // productsJson.forEach(({
                    //     id, 
                    //     name, 
                    //     imageAndVideo, 
                    //     basePrice,
                    //     currentPrice,
                    //     discount,
                    //     size,
                    //     color,
                    //     rating
                    // }) => {
                        
                    // });
                    productsPlaсe.innerHTML = htmlCatalog;
                }).finally(() => {
                    
                    const productSwiper = new Swiper('.product-img-swiper', {
                        loop: true,
                        direction: "horizontal",
                        navigation: {
                          nextEl: '.product-img-swiper__button-next',
                          prevEl: '.product-img-swiper__button-prev',
                        },
                        nested: true,
                        observer: true,
                        observerUpdate: true,
                    });
                    newArrivalsSwiper.update();
                    
                })
            

    }
}
const productsCard = new Products();

export {Products, productsCard}