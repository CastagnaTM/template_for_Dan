import React from 'react'

import Banner from './Banner'
import Navbar from './Navbar'

import IDoBBQ from '../Assets/I do.jpeg'
import BabyShower from '../Assets/Baby Shower.jpeg'

const images = [
    { 
        id: 1, name: IDoBBQ, title:'I Do BBQ',
        description: 'This is a space to provide a description of the image / design'
    }, 
    { 
        id: 2, name: BabyShower, title:'Baby Shower',
        description: 'This is a space to provide a description of the image / design'
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