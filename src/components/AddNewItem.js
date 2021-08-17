import React from 'react'
import { useState } from 'react'

const AddNewItem = ({ addProduct }) => {

    // Saving the default value of the two input to ''.

    const [title, setTitle] = useState('')

    const [price, setPrice] = useState('')

    // this function will call the addItem() and give two arguments.

    const handleSubmit = (e) => {
        e.preventDefault()

        if (!title) {
            alert('Please provide a title.')
            return
        }
        addProduct({ title, price })

        setTitle('')
        setPrice('')
    }

    // When we change the value of the two inputs.

    const titleInput = (e) => {
        setTitle(e.target.value)
    }

    const priceInput = (e) => {
        setPrice(parseInt(e.target.value))
    }

    return (
        <form onSubmit={handleSubmit}>
            <label>Name:
                <span> <input
                    className="add_item_inputs"
                    type="text"
                    value={title}
                    onChange={titleInput}
                /></span>
            </label>


            <label> Price:
                <span> <input
                    className="add_item_inputs"
                    type="text"
                    value={price}
                    onChange={priceInput}
                /></span>
            </label>


            <input className="add_new_prod_btn" type="submit" value="Add Item" />
        </form>
    )
}

export default AddNewItem
