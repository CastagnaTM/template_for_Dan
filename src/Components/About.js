import React from 'react'
import Zoidberg from '../Assets/zoidberg.gif'

export default function About() {

    return (
        <div className='component'>
             <div className='header-container'>
                <h1 className='component-header'>Dan</h1>
            </div>
            <div className='component-body'>
                <div className='component-image-div'>
                    <img src={Zoidberg} className='component-image' alt="gif"></img>
                </div>
                <div className='component-text'>
                    <p>
                        Hi, my name is Dan. Welcome to my website.
                        I make stuff you can rent from me for events.
                        I am also the inventor of the "Fire Dance"
                    </p>
                </div>
            </div>
        </div>
    )
    
}
