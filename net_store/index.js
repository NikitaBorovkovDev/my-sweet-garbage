import {LocalStorageUtil, localStorageUtil} from './LocalStorageUtil.js';
import {Header, headerpage} from './Header.js';
import {Products, productsCard} from './Products.js';

function render() {
    const a = localStorageUtil.getProducts();
    console.log(a);
    
    const productsStore = localStorageUtil.getProducts();
    headerpage.render(productsStore.length);
    
    productsCard.render(document.getElementsByClassName('section-new-arrivals__products-wrapper')[0], 36, 2);
}
render();