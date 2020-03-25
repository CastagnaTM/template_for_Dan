import React from 'react'
import Banner from './Banner'
import FB from '../Assets/FB_Logo.png'
import Insta from '../Assets/insta_logo.png'

export default  function Contact() {

    
    return (
        <div className='component'>
            <div className='header-container'>
                <h1 className='contact-header'>Contact info</h1>
            </div>
            <div className='contact-column'>
                <div className='contact-row'>
                    <p className='contact-text'>Email</p>
                </div>
                <div className='contact-row'>
                    <p className='contact-text'>Phone</p>
                </div>
                <div className='contact-row'>
                    <p className='contact-text'>Facebook</p>
                    <a href='https://www.facebook.com/dan.castrogivanni' target='_blank' rel="noopener noreferrer"><img src={FB} alt='Facebook logo' className='contact-logo'></img></a>
                </div>
                <div className='contact-row'>
                    <p className='contact-text'>Instagram</p>
                    <a href='https://www.instagram.com/dansunforgettablecreations/' target='_blank' rel="noopener noreferrer"><img src={Insta} alt='Instagram logo' className='contact-logo'></img></a>
                </div>
            </div>
            <Banner />
        </div>
    )
    
}
