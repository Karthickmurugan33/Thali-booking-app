import React from 'react'
import style from "../styles/nav.module.css"
import { Link } from 'react-router-dom'
import { useSelector } from 'react-redux'
const Nav = () => {
    const quantity = useSelector((state) => state.cart.totalQuantity)

    return (


        <div className={`${style.nav}`}>
            <span title='Order your Food!'>Welcome</span>
            <div >
                <Link title='Home' className={`${style.navBar}`} to='/'>
                    Home
                </Link>
                <Link title='Cart' className={`${style.navBar}`} to='/cart'>
                    Cart
                </Link>
                <Link title='Cart' className={`${style.navBar}`} to='/Contact'>
                    About us
                </Link>

                <span title='Cart Items' className={`${style.count}`}>Cart Items:{quantity}</span>
            </div>
        </div>



    )
}

export default Nav