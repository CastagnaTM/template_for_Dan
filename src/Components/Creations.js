import React, { useState } from 'react'

import Banner from './Banner'
import Navbar from './Navbar'

import IDoBBQ from '../Assets/I do.jpeg'
import BabyShower from '../Assets/Baby Shower.jpeg'
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
        id: 1, name: Arch1, title: 'Triangle Arbor', 
        description: 'DESCRIPTION!', images: [Arch1, Arch2]
    },
    {
        id: 2, name: Donut1, title: 'Donut Wall', 
        description: 'DESCRIPTION!', images: [Donut1, Donut2, Donut3]   
    },
    {
        id: 3, name: PicturePallet, title: 'Picture Pallet', 
        description: 'DESCRIPTION!'
    },
    {
        id: 4, name: PhotoWall, title: 'Photo Wall',
        description: 'Descriptive text!!!!'
    },
    {
        id: 5, name: FallCollection, title: 'Fall Collection',
        description: 'Descriptive text!!!!'
    },
    { 
        id: 6, name: IDoBBQ, title:'I Do BBQ',
        description: 'This is a space to provide a description of the image / design',
    }, 
    { 
        id: 7, name: BabyShower, title:'Baby Shower',
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

    const [selectedImage, setSelectedImage] = useState(null)

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