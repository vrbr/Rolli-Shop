function calcCartPriceAndDelivery() {
    const cartWrapper = document.querySelector('.cart-wrapper');
    const priceElem = cartWrapper.querySelectorAll('.price__currency');
    const totalPriceElem = document.querySelector('.total-price');
    const deliveryCost = document.querySelector('.delivery-cost');
    const cartDelivery = document.querySelector('[data-cart-delivery]');

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

    //добавляем/скрываем блок со стоимостью доставки
    if (totalPrice > 0) {
        cartDelivery.classList.remove('none');
    } else {
        cartDelivery.classList.add('none');
    }

    //меняем стоимость доставки в зависимости от общей цены за все товары
    if (totalPrice >= 600) {
        deliveryCost.classList.add('free');
        deliveryCost.innerText = 'бесплатно';
    } else {
        deliveryCost.classList.remove('free');
        deliveryCost.innerText = '250 ₽';
    }
}