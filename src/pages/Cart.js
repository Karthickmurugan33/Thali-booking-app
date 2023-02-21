import React, { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { remove } from '../store/cartSlice';
import style from "../styles/cart.module.css"

const Cart = () => {
    const cart = useSelector((state) => state.cart.product)
    const dispatch = useDispatch()
    const products = useSelector((state) => state.cart.product);
    const total = useSelector((state) => state.cart.total)
    const payHandler = () => {
        alert("GOOD FOOD GOOD DAY..!")
    }

    const handleRemove = (productId) => {
        dispatch(remove(productId))
    }

    // let totalItems = 0;
    // for (const item of products.price) {
    //     totalItems += item.quantity;
    // }
    // console.log("Total Items: " + totalItems);

    return (
        <div className={`${style.cart}`}>

            <div className={`${style.carts}`}>
                {products.map((product) => (

                    < div key={product.id} className={`${style.cartCard}`}>
                        <img className={`${style.img}`} src={product.image} alt="" />
                        <h3>x {(cart.find(item => item.id === product.id) || { quantity: 0 }).quantity}</h3>

                        <h2>{product.dish}</h2>
                        <h3>$ {(cart.find(item => item.id === product.id) || { quantity: 0 }).totalPrice}</h3>
                        {/* <h2>$ {product.price}</h2> */}

                        <button className={`${style.btn}`}
                            onClick={() => handleRemove(product.id)}>

                            Remove
                        </button>

                    </div>
                ))
                }




            </div >
            <h3 className={`${style.grand}`}> GrandTotal: $ {total}</h3>
            <button onClick={() => payHandler()} className={`${style.btn}`}>Pay</button>
        </div >
    )
}

export default Cart