import React from 'react'
import Banner from './Banner'
import Navbar from'./Navbar'
import About from './About'
import HomeCarousel from './HomeCarousel'

// import VideoPlayer from './VideoPlayer'

////2.e4fe80f2.chunk.js:1 
//main.5e05b7d7.chunk.js:1 
export default function Home() {
    
    return (
        <div className='component' id='home-component'>
            <Navbar />
            <Banner />

            <div className='header-container'>
                <h1 className='component-header' id='home-header'>Dan's Unforgettable Creations</h1>
            </div>
            <div>
                <HomeCarousel />
                {/* <VideoPlayer /> */}
            </div>
            <About/>
        </div>
    )
    
}
