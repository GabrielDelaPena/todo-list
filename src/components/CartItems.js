import React from 'react'

const CartItems = ({ cartProducts, onAdd, onRemove, clearCartItems }) => {

    const totalPrice = cartProducts.reduce((totalSum, product) => totalSum + product.price * product.quantity, 0)

    const purchasedBtn = () => {
        if (cartProducts.length === 0) {
            alert('Please add a product.')
        } else {
            alert('Thank you for your purchased.')
            clearCartItems()
        }
    }

    return (
        <div className="cart_products_container">
            <h2>Cart items</h2>

            {cartProducts.length === 0 && (<div><p>Cart is empty</p></div>)}

            {cartProducts.map(product => (
                <div className="cart_products" key={product.id}>
                    <p>{product.title}</p>
                    <p>{product.quantity} <span>* ${product.price}</span></p>
                    <div className="plus_min_btn">
                        <button onClick={() => onAdd(product)}>+</button>
                        <button onClick={() => onRemove(product)}>-</button>
                    </div>
                    <br />
                    <br />
                    <br />
                </div>
            ))}

            {cartProducts !== 0 && (
                <div>
                    <p>Total Price: <span>${totalPrice}</span></p>
                    <button className="purchasedBtn" onClick={purchasedBtn}>Purchased</button>
                </div>
            )}
        </div>
    )
}

export default CartItems
