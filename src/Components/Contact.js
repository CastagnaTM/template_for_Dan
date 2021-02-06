import React from 'react'
import Banner from './Banner'
import Navbar from './Navbar'
import Insta from '../Assets/insta_logo.png'
import { Envelope } from 'react-bootstrap-icons';


const Contact = () => {
    return (
        <div className='component'>
            <Navbar />
            <Banner />
            <div className='header-container'>
            </div>
            <div className='component-body'>
                <div className='contact-column'>
                    <div className='email-link'>
                        <a data-auto-recognition="true" target="_blank" rel="noopener noreferrer" href="mailto:Dan@dansunforgettablecreations.com">Contact Us <Envelope color='#E9D21B' /></a>
                    </div>
                    <div className='contact-link'>
                        <a href='https://www.instagram.com/dansunforgettablecreations/' target='_blank' rel="noopener noreferrer"> Follow Us! &nbsp;
                            <img className='contact-logo' src={Insta} alt="Instagram Logo"></img>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    )
    
}

export default Contact


