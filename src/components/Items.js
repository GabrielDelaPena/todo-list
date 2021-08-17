import React from 'react'
import Item from './Item'

const Items = ({ products, onAdd, countCartProducts }) => {

    return (
        <div>
            <header>
                <h1>Products </h1>
                <p>Cart {''}
                    {countCartProducts ? (
                        <button className="badge">{countCartProducts}</button>
                    ) : (
                        ''
                    )}
                </p>
            </header>

            <div>
                {products.map(product => (
                    <Item
                        key={product.id}
                        product={product}
                        onAdd={onAdd}
                    />
                ))}
            </div>

        </div>
    )
}

export default Items
