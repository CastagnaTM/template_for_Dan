import React from 'react'

import { Image } from 'cloudinary-react'
import { Cloud, Key, Secret } from '../constants'

export default function About() {
    
    return (
        <>

            <div className='component' id='about-component'>
                <div className='header-container' id='about-header'>
                    <h1 className='component-header'>About Us</h1>
                </div>
                <div className='component-body'>
                    <div className='component-image-div'>
                        <Image
                            cloudName={Cloud}
                            apiKey={Key}
                            apiSecret={Secret}
                            publicId='DanAbout'
                            className='component-image'
                            alt='Dan with Welcome sign'
                        />
                    </div>
                    <div className='component-text' id="about-text">
                        <p>
                            Welcome to Dan’s Unforgettable Creations! My name is Dan, and I started this company with 2 of my best friends, Andrew and Chris. 
                            Born and raised on Long Island, my ultimate goal in life has always been to use my passion for designing and engineering to help people and bring them happiness. 
                            There’s nothing like the feeling of making people smile, especially when dealing with a day that is extremely special. 
                            Here at Dan’s Unforgettable Creations, our goal is to make any special day of yours unforgettable! 
                            Please feel free to reach out to us via our Contact page to set up an appointment to give us your vision for your perfect day.
                        </p>
                    </div>
                </div>
            </div>
            <footer>
                <p>Site Designed by <a href="https://www.linkedin.com/in/castagnatm/" target="_blank" rel="noopener noreferrer"> Tom Castagna</a></p>
            </footer>
        </>
    )
    
}
