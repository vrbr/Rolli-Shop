function calcCartPrice () {
    const cartWrapper = document.querySelector('.cart-wrapper');
    const priceElem = cartWrapper.querySelectorAll('.price__currency');
    const totalPriceElem = document.querySelector('.total-price');

    //общая стоимость товаров
    let totalPrice = 0;

    //обходим все блоки с ценой в корзине
    priceElem.forEach(function (item) {

        //находим кол-во товаров
        const amountElem = item.closest('.cart-item').querySelector('[data-counter]');
        //добавляем стоимость товара в общую стоимость (кол-во * цену)
        totalPrice += parseInt(item.innerText) * parseInt(amountElem.innerText);
    });

    //отображаем цену на странице
    totalPriceElem.innerText = totalPrice;
}