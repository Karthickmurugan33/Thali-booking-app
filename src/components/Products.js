import React from 'react'
import style from "../styles/products.module.css"
import { add, remove } from '../store/cartSlice'
import ThaliDetais from '../store/ThaliDetails'
import { useDispatch, useSelector } from 'react-redux'
const Products = () => {
    const cart = useSelector((state) => state.cart.product)

    const dispatch = useDispatch();
    const handleAdd = (product) => {
        dispatch(add(product))
        // console.log(product);
    }
    const handleRemove = (productId) => {
        dispatch(remove(productId))
    }

    return (
        <div className='productWrap'>

            {ThaliDetais.map((product) => (
                <div className='card' key={product.id}>
                    <img src={product.image} alt="" />
                    <div className={`${style.data}`}>
                        <h3>x {(cart.find(item => item.id === product.id) || { quantity: 0 }).quantity}</h3>
                        <h3>$ {(cart.find(item => item.id === product.id) || { quantity: 0 }).totalPrice}</h3>

                    </div>

                    <h2>{product.dish}</h2>
                    <h2>$ {product.price}</h2>
                    <button onClick={() => handleAdd(product)} className={`${style.btn}`}>
                        +
                    </button>
                    <button onClick={() => handleRemove(product.id)} className={`${style.btn}`}>
                        -
                    </button>
                </div>
            ))}


        </div>
    );
}

export default Products;
