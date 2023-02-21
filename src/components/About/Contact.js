import React from 'react'

const Contact = () => {

    const submitHandlet = (e) => {
        e.preventDefault()
        alert("THANK YOU ..!")

    }
    return (
        <div className='about'>
            <div>
                <h4>Our Address</h4>
                <p>Food Hub</p>
                <p>406/2 A.P Road ,coimbatore</p>
            </div>
            <p>Call Us : 9876543210(Whats Up)</p>
            <p>Mail Us : test@mail.com</p>
            <div>
                <form className='form'>
                    <h1>Feedback</h1>
                    <label className='label'> Name:
                        <input placeholder='Name' required></input>
                    </label><br></br>
                    <label className='label'> Email:
                        <input placeholder='Enter Your Mail' required></input>
                    </label><br></br>
                    <label htmlFor='textarea ' className='label' >
                        write.
                        <textarea required></textarea>
                    </label>
                    <br></br>
                    <button onClick={submitHandlet} >Submit</button>
                </form>
            </div>
        </div>
    )
}

export default Contact