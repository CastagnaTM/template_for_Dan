import React from 'react'

import Banner from './Banner'
import Navbar from './Navbar'

import IDoBBQ from '../Assets/I do.jpg'
import BabyShower from '../Assets/Baby Shower.jpg'
import Arch1 from '../Assets/Arch1.jpg'
import Arch2 from '../Assets/Arch2.jpg'
import Donut1 from '../Assets/Donut1.jpg'
import Donut2 from '../Assets/Donut2.jpg'
import Donut3 from '../Assets/Donut3.jpg'
import PicturePallet from '../Assets/PicturePallet.jpg'
import PhotoWall from '../Assets/PhotoWall.jpg'
import FallCollection from '../Assets/FallCollection.jpg'

const images = [
    {
        name: FallCollection, title: 'Fall Collection',
        description: 'Descriptive text!!!!'
    },
    {
        name: Arch1, title: 'Triangle Arbor', 
        description: 'DESCRIPTION!'
    },
    {
        name: Arch2, title: 'Triangle Arbor', 
        description: 'DESCRIPTION!'
    },
    {
        name: Donut1, title: 'Donut Wall', 
        description: 'DESCRIPTION!'   
    },
    {
        name: Donut2, title: 'Donut Wall', 
        description: 'DESCRIPTION!'   
    },
    {
        name: Donut3, title: 'Donut Wall', 
        description: 'DESCRIPTION!'   
    },
    {
        name: PicturePallet, title: 'Picture Pallet', 
        description: 'DESCRIPTION!'
    },
    {
        name: PhotoWall, title: 'Pallet Backdrop',
        description: 'Descriptive text!!!!'
    },
    { 
        name: IDoBBQ, title:'I Do BBQ',
        description: 'This is a space to provide a description of the image / design',
    }, 
    { 
        name: BabyShower, title:'Baby Shower',
        description: 'This is a space to provide a description of the image / design'
    },
]

const mapImages = () => {
    return images.map((img, i) => 
        <div className="creations-grid-card" key={i}>
            <div className="creations-grid-card-text">
                <h3>{img.title}</h3>
                <p>{img.description}</p>
            </div>
            <img src={img.name} alt={img.title}/>
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