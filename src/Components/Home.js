import React from 'react'
import Banner from './Banner'
import Navbar from'./Navbar'


export default function Home() {
    
    return (
        <div className='component' id='home-component'>
            <Navbar />
            <Banner />

            <div className='header-container'>
                <h1 className='component-header'>Dan's Unforgettable Creations</h1>
            </div>
            <div className='component-body'>
                <div className='component-text'>
                    <p>
                        Hello! If you are seeing this page, you've reached Dan's Unforgettable Creations. 
                        This site is currently a work in progress, and is still receiving regular updates. Feel free to look around though!
                    </p>
                </div>
            </div>
        </div>
    )
    
}
