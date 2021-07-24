//добавляем прослушку на всем окне
window.addEventListener('click', (event) => {

    //объявляем переменную для счетчика
    let counter;

    //проверяем клик строго по кнопке плюс или минус
    if (event.target.dataset.action === 'plus' || event.target.dataset.action === 'minus') {
        //находим обертку счетчика
        const counterWrapper = event.target.closest('.counter-wrapper');
        //находим лив с числом счетчика
        counter = counterWrapper.querySelector('[data-counter]');
    }

    //проверяем явл ли эл по которому был совершен клик кнопкой плюс
    if (event.target.dataset.action === 'plus') {
        counter.innerText = ++counter.innerText;
    }

    //проверяем явл ли эл по которому был совершен клик кнопкой минус
    if (event.target.dataset.action === 'minus') {

        //проверяем чтобы счетчик был больше 1
        if (parseInt(counter.innerText) > 1) {
            counter.innerText = --counter.innerText;
        } else if (event.target.closest('.cart-wrapper') && parseInt(counter.innerText) === 1) {
            //проверка на товар который находится в корзине
             //удаляем товар из корзины
             event.target.closest('.cart-item').remove();

            //отображение статуса корзины: пустая / полная
            toggleCartStatus();

            //пересчет общей стоимости товаров в корзине
            calcCartPrice();
        }
    }

    //проверяем клик на плюс или минус внутри корзины
    if (event.target.hasAttribute('data-action') && event.target.closest('.cart-wrapper')) {
        //пересчет общей стоимости товаров в корзине
        calcCartPrice();
    }
});