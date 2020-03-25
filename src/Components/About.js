import React from 'react'
import Banner from './Banner'
import Logo from '../Assets/logo.png'

export default function About() {

    
    document.title="About";
    
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
            <Banner />
        </div>
    )
    
}
