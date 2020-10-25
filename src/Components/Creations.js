import React from 'react'

import Banner from './Banner'
import Navbar from './Navbar'

import One from '../Assets/1.jpeg'
// import Two from '../Assets/2.jpeg'
import Three from '../Assets/3.jpeg'

const images = [
    { 
        id: 1, name: One, title:'I Do BBQ',
        description: 'This is a space to provide a description of the image / design', import: One
    }, 
    // { 
    //     id: 2, name: Two, title:'Something New',
    //     description: 'This is a space to provide a description of the image / design', import: Two
    // },
    { 
        id: 3, name: Three, title:'Baby Shower',
        description: 'This is a space to provide a description of the image / design', import: Three
    },
]

const mapImages = () => {
    return images.map((img) => 
        <div className="creations-grid-card" key={img.id}>
            <div className="creations-grid-card-text">
                <h3>{img.title}</h3>
                <p>{img.description}</p>
            </div>
            <img src={img.name} />
        </div>
    )
}

const Creations = () => {

    return (
        <div className="component" id="creation-component">
            <Navbar />
            <Banner />
            <div className='header-container' >
                <h1 className='component-header'>Creations</h1>
            </div>

            <div className="creations-grid-container">
                {mapImages()}
            </div>
        </div>
    )
}

export default Creations