import React from 'react'
import Logo from '../Assets/logo.png'

export default function About() {
    // Something like: Hey, I'm Dan. I design things. Like these Chihuahuas.
    // I know it sounds weird, but it's true. I designed these Chihuahuas, and for a reasonable price
   // I could design one for you too, or you could rent one that I've already designed. 

    return (
        <div className='component'>
             <div className='header-container'>
                <h1 className='component-header'>Dan</h1>
            </div>
            <div className='component-body'>
                <div className='component-image-div'>
                    <img src={Logo} className='component-image' alt="gif"></img>
                </div>
                <div className='component-text'>
                    <p>
                        This page will contain information about Dan and his business.
                    </p>
                </div>
            </div>
        </div>
    )
    
}
