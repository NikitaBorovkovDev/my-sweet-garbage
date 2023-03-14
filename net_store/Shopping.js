class Shopping {

    numberOfProduct(element, upDown) {
        let count = Number(element.closest('.cart-basket__counter-box').querySelector('.cart-basket__counter').value);
        if (count > 99) {
            count = element.closest('.cart-basket__counter-box').querySelector('.cart-basket__counter').value = 99;
        }
        if (count < 1) {
            count = element.closest('.cart-basket__counter-box').querySelector('.cart-basket__counter').value = 1;
        }

        if (upDown == "up") {
            if (count < 99) {
                element.closest('.cart-basket__counter-box').querySelector('.cart-basket__counter').value = count += 1;
            }
        }

        if (upDown == "down") {
            if (count > 1) {
                element.closest('.cart-basket__counter-box').querySelector('.cart-basket__counter').value = count -= 1;
            }
        }
        
    }



    render() {
        
        const productsStore = localStorageUtil.getProducts();
        let htmlCatalog = '';
        let htmlPrice = '';
        let totalPrice = 0;
        let numberOfProducts = 0;
        let products = new Promise(function(resolve, reject){
            resolve(fetch('https://raw.githubusercontent.com/nickfluffybr/emag/somethblng/productsJson.json'))
            });
        products.
            then(products => {
                return products.json() 
            }).
                then(productsJson => {
                    productsJson.forEach(({
                        id, 
                        name, 
                        imageAndVideo, 
                        basePrice,
                        currentPrice,
                        discount,
                        size,
                        color,
                        rating
                    }) => {
                        productsStore = productsStore.split(';')
                        if (productsStore.indexOf(id) !== -1) {
                            if (discount !== 0) {
                                htmlPrice = `
                                    <div class="cart-basket__current-price cart-basket__current-price_discount">${currentPrice}</div>
                                    <div class="cart-basket__no-discount-price">${basePrice}</div>
                                `
                            } else {
                                htmlPrice = `
                                    <div class="cart-basket__current-price">${currentPrice}</div>
                                `
                            }
                            numberOfProducts = 1;
                            htmlCatalog += `
                                <div class="cart-basket__product">
                                    <img class="cart-basket__image" src="${imageAndVideo.split(',')[0]}" alt="">
                                    <div class="cart-basket__item">
                                        <div class="cart-basket__product-name">${name}</div>
                                        <div class="cart-basket__product-color-container">Color: <span class="cart-basket__product-color">${color.split(',')[0]}</span></div>
                                        <div class="cart-basket__product-size-container">Size: <span class="cart-basket__product-size">${size.split(',')[0]}</span></div>
                                        <div class="cart-basket__product-count">
                                            <div class="cart-basket__counter-box">
                                                <input type="number" step="1" min="1" max="99" class="cart-basket__counter" value="${numberOfProducts}">
                                                <div class="cart-basket__stepper-arrows">
                                                    <div class="cart-basket__stepper-arrows-up" onclick="shoppingPage.numberOfProduct(this, 'up');"></div>
                                                    <div class="cart-basket__stepper-arrows-down" onclick="shoppingPage.numberOfProduct(this, 'down');"></div>
                                                </div>
                                            </div>
                                            ${htmlPrice}
                                            
                                        </div>
                                        <div class="wish-list">Move to</div>
                                    </div>
                                    <button class="cart-basket__delet-item-button"></button>
                                </div>
                            `;
                            totalPrice += Number(currentPrice);
                            
                        }
                    })
                    

                    
                    document.getElementsByClassName('cart-basket__products')[0].innerHTML = htmlCatalog;
                    document.getElementsByClassName('cart-basket__subtotal-sum')[0].textContent = totalPrice;
                    document.querySelectorAll('.cart-basket__counter').forEach(item => {
                        item.addEventListener('keydown', (event) => {
                            item.addEventListener('keydown', function(event) {
                                // Разрешаем: backspace, delete, tab и escape
                                
                                
                                if ( event.keyCode == 46 || event.keyCode == 8 || event.keyCode == 9 || event.keyCode == 27 ||
                                    // Разрешаем: Ctrl+A
                                    (event.keyCode == 65 && event.ctrlKey === true) ||
                                    // Разрешаем: home, end, влево, вправо
                                    (event.keyCode >= 35 && event.keyCode <= 39)) {
                                        
                    
                                    // Ничего не делаем
                                    return;
                                } else {
                                    // Запрещаем все, кроме цифр на основной клавиатуре, а так же Num-клавиатуре
                                    if ((event.keyCode < 48 || event.keyCode > 57) && (event.keyCode < 96 || event.keyCode > 105 )) {
                                        event.preventDefault();
                                    }
                                }
                            });

                            item.addEventListener('input', () => {
                                let count = Number(item.closest('.cart-basket__counter-box').querySelector('.cart-basket__counter').value);
                                item.value = item.value.replace(/\D/, '');
                                if (count > 99) {
                                    count = item.closest('.cart-basket__counter-box').querySelector('.cart-basket__counter').value = 99;
                                }
                                
                            })

                            item.addEventListener('blur', () => {
                                let count = Number(item.closest('.cart-basket__counter-box').querySelector('.cart-basket__counter').value);
                                item.value = item.value.replace(/\D/, '');
                                if (count > 99) {
                                    count = item.closest('.cart-basket__counter-box').querySelector('.cart-basket__counter').value = 99;
                                }
                                if (count < 1) {
                                    count = item.closest('.cart-basket__counter-box').querySelector('.cart-basket__counter').value = 1;
                                }

                                if (String(item.value)[0] == 0) {
                                    item.value = String(item.value).substring(1);
                                    Number(item.value);
                                }
                            });
                            
                        })
                    })

                    

                }
                )

    }


}

const shoppingPage = new Shopping();

