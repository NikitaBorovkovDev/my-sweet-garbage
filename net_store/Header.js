
class Header {
    
    render(count) {
        const html = `
            <div class="cart__count">${count}</div>
        `;

        document.querySelectorAll('.cart').forEach(item => {
            item.innerHTML = html;
        });
        document.querySelector('.cart-basket__carts-count').textContent = count
    }



}

const headerpage = new Header();

export {Header, headerpage}