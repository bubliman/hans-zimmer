if (document.readyState == 'loading') {
    document.addEventListener('DOMContentLoaded', ready)
}else {
    ready ()
}

function ready () {
    var removeCartItemButtons = document.getElementsByClassName('btn-danger')
        console.log(removeCartItemButtons)
        for (var i = 0; i < removeCartItemButtons.length; i++) {
            var button = removeCartItemButtons[i]
            button.addEventListener('click', removeCartItem)
        }
    function removeCartItem(event) {
        var buttonClicked = event.target
            buttonClicked.parentElement.parentElement.remove()
            updateCartTotal()
            console.log('remove-clicked')
        var buttonClicked.parentsElement
    }

    function updateCartTotal() {
        var cartItemContainer = document.getElementsByClassName('cart-items')[0]
        var cartRows = cartItemContainer.getElementsByClassName('cart-row')
        var total = 0
        for (var i = 0; i < cartRows.length; i++) {
            var cartRow = cartRows [i]
            var priceElement = cartRow.getElementsByClassName('cart-price')[0]
            var quantityElement = cartRow.getElementsByClassName('cart-quantity-input')
            [0]
            var price = parseFloat(priceElement.innerText.replace('$', ''))
            // console.log(price)
            var quantity = quantityElement.value
            console.log(quantity * price)
            total = total + (price * quantity)
        }
        document.getElementsByClassName('cart-total'[0].innerText= '$' + total 
        // document.getElementsByClassName('cart-total-price')[0].innerText = total;
    }
}

