import React from "react";
import { useState } from "react";
import './App.css';
import Items from "./components/Items";
import CartItems from "./components/CartItems";
import AddNewItem from "./components/AddNewItem";

function App() {

  const [products, setProducts] = useState(
    [
      {
        title: 'Product 1',
        id: 1,
        price: 10,
      },
      {
        title: 'Product 2',
        id: 2,
        price: 20,
      },
      {
        title: 'Product 3',
        id: 3,
        price: 30,
      }
    ]
  )

  const [cartProducts, setCartProducts] = useState([])

  const [showAddProduct, setShowAddProduct] = useState(false)


  // This will add a new object in the items object.

  const addProduct = (product) => {
    let id = products.length + 2
    const newProduct = { id, ...product }
    setProducts([...products, newProduct])
  }

  const onAdd = (product) => {
    const exist = cartProducts.find(x => x.id === product.id)
    if (exist) {
      setCartProducts(cartProducts.map(x => x.id === product.id ? { ...exist, quantity: exist.quantity + 1 } : x))
    } else {
      setCartProducts([...cartProducts, { ...product, quantity: 1 }])
    }
  }

  const onRemove = (product) => {
    const exist = cartProducts.find(x => x.id === product.id)
    if (exist.quantity === 1) {
      setCartProducts(cartProducts.filter(x => x.id !== product.id))
    } else {
      setCartProducts(cartProducts.map(x => x.id === product.id ? { ...exist, quantity: exist.quantity - 1 } : x))
    }
  }

  const clearCartItems = () => {
    setCartProducts([])
  }

  const toggleAddProduct = () => {
    setShowAddProduct(!showAddProduct)
  }


  return (
    <div className="container">
      <Items
        products={products}
        onAdd={onAdd}
        countCartProducts={cartProducts.length}
      />
      <br />

      <div className="showHideBtn">
        <button type="button " onClick={toggleAddProduct}>{showAddProduct ? 'Hide' : 'Show'}</button>
      </div>
      <br />
      {showAddProduct && <AddNewItem addProduct={addProduct} />}

      < CartItems
        cartProducts={cartProducts}
        onAdd={onAdd}
        onRemove={onRemove}
        clearCartItems={clearCartItems}
      />
      
      <footer>&copy;GABRIEL</footer>
    </div>
  );
}

export default App;
