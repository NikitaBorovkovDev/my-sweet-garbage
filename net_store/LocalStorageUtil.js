export class LocalStorageUtil {
    constructor() {
        this.keyName = 'products';
    }
    
    getProducts() {
        let productsLocalStorage = localStorage.getItem(this.keyName);
        if (productsLocalStorage !== null) {
            return JSON.parse(productsLocalStorage);
        } 
        return [];
        
    }

    async putProducts(id, size, color) {
        return fetch('https://raw.githubusercontent.com/nickfluffybr/emag/somethblng/productsJson.json')
        .then(products => {
            return products.json()
            })
        .then(products => {

            let localStorageProducts = this.getProducts();
            console.log(products);
            let pushProduct = false;
            console.log(localStorageProducts);
            let needPush = true;
            localStorageProducts.forEach((item, index) => {
                console.log(`${index}: ${item.id}`);
                console.log(id);
                if ((item.id.includes(id)) && (item.size.includes(size)) && (item.color.includes(color))) {
                    console.log(products);
                    console.log(products.find(product => product.id === id));
                    
                    console.log(size);
                    let productsItem = products.find(product => product.id === id);
                    if (!size && productsItem.size !== size) {
                        localStorageProducts = '';
                        pushProduct = false;
                        return {
                            pushProduct,
                            localStorageProducts
                        }
                        
                    }
                    if (!color && productsItem.color !== color) {
                        localStorageProducts = '';
                        pushProduct = false;
                        return {
                            pushProduct,
                            localStorageProducts
                        }
                    }
                    let count = Number(item.count) + 1;
                    localStorageProducts[index] = {
                        id: id,
                        count: count,
                        size: size,
                        color: color,
                    };
                    needPush = false;
                    return needPush;
                }
                
            })
            
            let productsItem = products.find(product => product.id === id);
            console.log(productsItem);
            console.log(productsItem.size);
            console.log(!size);
                    if (!size && productsItem.size !== size) {
                        localStorageProducts = '';
                        pushProduct = false;
                        return {
                            pushProduct,
                            localStorageProducts
                        }
                        
                    }
                    if (!color && productsItem.color !== color) {
                        localStorageProducts = '';
                        pushProduct = false;
                        return {
                            pushProduct,
                            localStorageProducts
                        }
                    }
            console.log(needPush);
            console.log(localStorageProducts);
            if (needPush === true) {
                localStorageProducts.push({
                    id: id,
                    count: 1,
                    size: size,
                    color: color,
                });
                pushProduct = true;
            } else {
                
                
            }
            
            
            
            
            localStorage.setItem(this.keyName, JSON.stringify(localStorageProducts));
            
            console.log(pushProduct,
                localStorageProducts,);
            return {
                pushProduct,
                localStorageProducts
            }
        })
        
    }
}

export const localStorageUtil = new LocalStorageUtil();




