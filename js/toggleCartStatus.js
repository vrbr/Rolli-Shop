function toggleCartStatus() {
    const cartWrapper = document.querySelector('.cart-wrapper');
    const cartEmptyBadge = document.querySelector('[data-cart-empty]');

    if (cartWrapper.children.length > 0) {
        cartEmptyBadge.classList.add('none');
    } else {
        cartEmptyBadge.classList.remove('none');
    }
}