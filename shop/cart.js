const getCart = () => {
    const cart = JSON.parse(localStorage.getItem('cart')) || []
    return cart
}

const setCart = (cart) => {
    localStorage.setItem('cart', JSON.stringify(cart))
}

const drawCartItems = () => {
    const table = document.querySelector('.cart-table tbody')
    table.innerHTML = ''
    let _cart = JSON.parse(localStorage.getItem('cart')) || []
    if (_cart.length > 0) {
        for (let i = 0; i < _cart.length; i ++){
            const tmp = `
                    <td>${_cart[i].name}</td>
                    <td>1</td>
                    <td>${_cart[i].price}</td>
                    <td><button class="delete-btn" data-product="${_cart[i]._id}">Delete</button></td>
            `
            const cart_tr = document.createElement('tr')
            cart_tr.innerHTML = tmp
            table.append(cart_tr)
        }
    }

    delete_buttons = document.querySelectorAll('.delete-btn')
    for (let i = 0; i < delete_buttons.length; i++){
        const pr_id = delete_buttons[i].dataset['product']
        delete_buttons[i].addEventListener('click', deleteFromCart.bind(null, pr_id))
    }
}

const deleteFromCart = (i) => {
    let _cart = getCart()
    if (_cart.length > 0) {
        const productIndex = _cart.findIndex( pr => pr._id == i)
        _cart.splice(productIndex, 1)
        setCart(_cart)
    }
    drawCartItems()

}


drawCartItems()


