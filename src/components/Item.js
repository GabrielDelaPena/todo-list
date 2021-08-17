import React from 'react'

const Item = ({ product, onAdd }) => {
    return (
        <div className="product">
            <p>{product.title}</p>
            <p>${product.price}</p>
            <button className="add_cart_btn" onClick={() => onAdd(product)}>BUY</button>
        </div>
    )
}

export default Item
