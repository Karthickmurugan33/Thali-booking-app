import React from 'react'
import Products from '../components/Products'


const Home = () => {
    return (
        <div className='back'>
            <h3 style={{ color: "white" }}>Trusted by every food addict..!</h3>
            <h1></h1>
            <section>
                <Products />
            </section>

        </div>
    )
}

export default Home