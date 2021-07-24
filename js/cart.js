const cartWrapper = document.querySelector('.cart-wrapper');

window.addEventListener('click', (event) => {

    if (event.target.hasAttribute('data-cart')) {
        //найти карточку с товаром, внутри которой был совершен клик
        const card = event.target.closest('.card');

        //собрать данные с этого товара и записать их в объект
        const productInfo = {
            id: card.dataset.id,
            imgSrc: card.querySelector('.product-img').getAttribute('src'),
            title: card.querySelector('.item-title').innerText,
            itemsInBox: card.querySelector('[data-items-in-box]').innerText,
            weight: card.querySelector('.price__weight').innerText,
            price: card.querySelector('.price__currency').innerText,
            counter: card.querySelector('[data-counter]').innerText,
        };

        //проверить если ли уже такой товар в корзине
        const itemInCart = cartWrapper.querySelector(`[data-id="${productInfo.id}"]`);

        //если товар есть в корзине
        if (itemInCart) {
            const counterElem = itemInCart.querySelector('[data-counter]');
            counterElem.innerText = parseInt(counterElem.innerText) + parseInt(productInfo.counter);
        } else {
            //если товара нет в корзине

            //собранные данные подставить в шаблон для товара в корзине
            const cartItemHTML = `
                <div class="cart-item" data-id="${productInfo.id}">
                    <div class="cart-item__top">
                        <div class="cart-item__img">
                            <img src="${productInfo.imgSrc}" alt="${productInfo.title}">
                        </div>
                        <div class="cart-item__desc">
                            <div class="cart-item__title">${productInfo.title}</div>
                            <div class="cart-item__weight">${productInfo.itemsInBox} / ${productInfo.weight}.</div>

                            <!-- cart-item__details -->
                            <div class="cart-item__details">

                                <div class="items items--small counter-wrapper">
                                    <div class="items__control" data-action="minus">-</div>
                                    <div class="items__current" data-counter="">${productInfo.counter}</div>
                                    <div class="items__control" data-action="plus">+</div>
                                </div>

                                <div class="price">
                                    <div class="price__currency">${productInfo.price}</div>
                                </div>

                            </div>
                            <!-- // cart-item__details -->

                            </div>
                        </div>
                    </div>
            `;

            //отобразить товар в корзине
            cartWrapper.insertAdjacentHTML('beforeend', cartItemHTML)
        }

        //после добавления товара в корзину сбрасываем его счетчик
        card.querySelector('[data-counter]').innerText = '1';
    }
});