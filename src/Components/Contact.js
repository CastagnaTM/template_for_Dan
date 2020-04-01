import React from 'react'
import Banner from './Banner'
import Navbar from './Navbar'
import FB from '../Assets/FB_Logo.png'
import Insta from '../Assets/insta_logo.png'

export default  function Contact() {

    
    return (
        <div className='component'>
            <Navbar />
            <Banner />
            <div className='header-container'>
                <h1 className='component-header'>Contact</h1>
            </div>
            <div className='component-body'>
                <div className='contact-column'>
                    <form className='contact-form'>
                        <label hmtlfor="Name">Your Name</label>
                        <input type="text" id="Name" placeholder="Your Name..."></input>
                        <label hmtlfor="Email">Your Email</label>
                        <input type="text" id="Email" placeholder="example@email..."></input>
                        <label hmtlfor="Subject">Subject</label>
                        <input type="text" id="Subject" placeholder="Subject..."></input>
                        <label hmtlfor="Message">Message</label>
                        <textarea type="text" id="Message" className='contact-message'placeholder="Message..."></textarea>
                    </form>
                    <div className='contact-item'>
                        <a href='https://www.instagram.com/dansunforgettablecreations/' target='_blank' rel="noopener noreferrer"> Follow Dan's Unforgettable Creations on Instagram!</a>
                    </div>
                </div>
            </div>
        </div>
    )
    
}
