function toggleCartStatus() {
    const cartWrapper = document.querySelector('.cart-wrapper');
    const cartEmptyBadge = document.querySelector('[data-cart-empty]');

    const ofredForm = document.querySelector('#order-form');

    if (cartWrapper.children.length > 0) {
        cartEmptyBadge.classList.add('none');
        ofredForm.classList.remove('none');
    } else {
        cartEmptyBadge.classList.remove('none');
        ofredForm.classList.add('none');
    }
}