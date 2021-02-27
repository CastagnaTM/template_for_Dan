import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import Carousel from 'react-bootstrap/Carousel'
import { ChevronLeft, ChevronRight } from 'react-bootstrap-icons'

import { Image } from 'cloudinary-react'
import { Cloud, Key, Secret } from '../constants'

import Banner from './Banner'
import Navbar from './Navbar'


const images = [
    
    {
        name: 'danAndrewWelcome', title: 'Welcome Sign',
        description: "3 Feet Wide x 2.5 Feet Tall with Stand"
    },
    {
        name: 'fakeWedding', title: 'Triangular Arbor',
        description: "9 Feet Tall x 8.5 Feet Wide with 4.5 foot long base. Includes eye hooks on the back for flowers."
    },
    {
        name: 'tomFrankDonut', title: 'Donut Wall',
        description: "6 Feet Tall x 3 Feet Wide x 2.5 Feet Deep. Holds between 32-96 donuts. Has 2 shelves and utensil holder. Comes with 'Donut Mind If I Do' sign."
    },
    {
        name: 'champagneGlass', title: 'Champagne Wall',
        description: "7 Feet Tall x 3 Feet Wide x 2 Feet Deep. Holds 60-120 champagne flutes. Comes with 'Cheers!' sign."
    },
    {
        name: 'pictureOfAPicture', title: 'Picture Backdrop',
        description: "6.5 Feet Tall x 7 Feet Wide x 1.5 Feet Deep. Comes with 'Take A Picture It'll Last Longer' sign."
    },
    {
        name: 'jenga', title: 'Plummeting Prisms',
        description: "Blocks are 12 Inches Long x 4 Inches Wide x 2 Inches Tall. The full stack is 2.5 feet tall."
    },
    {
        name: 'polaroids', title: 'Picture Pallet',
        description: "6.5 Feet Tall x 7 Feet Wide x 1.5 Feet Deep. Comes with mini clothespins, battery powered LED lights, and 'Take a Picture Let's Fill This Pallet With Memories' sign."
    },
    {
        name: 'picturePalletSign', title: 'Picture Pallet',
        description: "6.5 Feet Tall x 7 Feet Wide x 1.5 Feet Deep. Comes with mini clothespins, battery powered LED lights, and 'Take a Picture Let's Fill This Pallet With Memories' sign."
    },
    {
        name: 'mrmrssign', title: 'Couple Chair Sign',
        description: "Hangs on the back of couple's chairs"
    },
    {
        name: 'table', title: '',
        description: ""
    },
    {
        name: 'demiDonut', title: '',
        description: ""
    },
    {
        name: 'andrewDemiCheers', title: '',
        description: ""
    },
    {
        name: 'polaroid', title: '',
        description: ""
    },   
    {
        name: 'frankEleniWelcome', title: 'Welcome Sign',
        description: "3 Feet Wide x 2.5 Feet Tall with Stand"
    },
    {
        name: 'welcomeSetUp', title: 'Welcome Sign',
        description: "3 Feet Wide x 2.5 Feet Tall with Stand"
    },
    {
        name: 'eleniFrankArbor', title: 'Triangular Arbor',
        description: "9 Feet Tall x 8.5 Feet Wide with 4.5 foot long base. Includes eye hooks on the back for flowers."
    },
    {
        name: 'arborChairs', title: 'Triangular Arbor',
        description: "9 Feet Tall x 8.5 Feet Wide with 4.5 foot long base. Includes eye hooks on the back for flowers.",
        version: true
    },
    {
        name: 'LBArbor', title: 'Triangular Arbor',
        description: "9 Feet Tall x 8.5 Feet Wide with 4.5 foot long base. Includes eye hooks on the back for flowers."
    },
    {
        name: 'donutWallAngle', title: 'Donut Wall',
        description: "6 Feet Tall x 3 Feet Wide x 2.5 Feet Deep. Holds between 32-96 donuts. Has 2 shelves and utensil holder. Comes with 'Donut Mind If I Do' sign."
    },
    {
        name: 'donutAngleFull', title: 'Donut Wall',
        description: "6 Feet Tall x 3 Feet Wide x 2.5 Feet Deep. Holds between 32-96 donuts. Has 2 shelves and utensil holder. Comes with 'Donut Mind If I Do' sign."
    },
    {
        name: 'lightBulb', title: '',
        description: ""
    },   
    {
        name: 'champagneGlasses', title: 'Champagne Wall',
        description: "7 Feet Tall x 3 Feet Wide x 2 Feet Deep. Holds 60-120 champagne flutes. Comes with 'Cheers!' sign."
    },
    {
        name: 'takeAPicture', title: 'Picture Backdrop',
        description: "6.5 Feet Tall x 7 Feet Wide x 1.5 Feet Deep. Comes with 'Take A Picture It'll Last Longer' sign."
    },
    {
        name: 'jengaPeek', title: 'Plummeting Prisms',
        description: "Blocks are 12 Inches Long x 4 Inches Wide x 2 Inches Tall. The full stack is 2.5 feet tall."
    },   
    {
        name: 'fallCollection', title: 'Fall Collection',
        description: "Fall themed Arbor, Donut Wall, Champagne Wall, Picture Backdrop, Picture Pallet, and more!"
    },
    {
        name: 'arch1', title: 'Triangular Arbor', 
        description: '9 Feet Tall x 8.5 Feet Wide with 4.5 foot long base. Includes eye hooks on the back for flowers.'
    },
    {
        name: 'Arch2', title: 'Triangular Arbor', 
        description: '9 Feet Tall x 8.5 Feet Wide with 4.5 foot long base. Includes eye hooks on the back for flowers.'
    },
    {
        name: 'donut1', title: 'Donut Wall', 
        description: "6 Feet Tall x 3 Feet Wide x 2.5 Feet Deep. Holds between 32-96 donuts. Has 2 shelves and utensil holder. Comes with 'Donut Mind If I Do' sign."   
    },
    {
        name: 'donut2', title: 'Donut Wall', 
        description: "6 Feet Tall x 3 Feet Wide x 2.5 Feet Deep. Holds between 32-96 donuts. Has 2 shelves and utensil holder. Comes with 'Donut Mind If I Do' sign."   
    },
    {
        name: 'donut3', title: 'Donut Wall', 
        description: "6 Feet Tall x 3 Feet Wide x 2.5 Feet Deep. Holds between 32-96 donuts. Has 2 shelves and utensil holder. Comes with 'Donut Mind If I Do' sign."   
    },
    {
        name: 'champagneWall2', title: 'Champagne Wall', 
        description: "7 Feet Tall x 3 Feet Wide x 2 Feet Deep. Holds 60-120 champagne flutes. Comes with 'Cheers!' sign."   
    },
    {
        name: 'champagneWall3', title: 'Champagne Wall', 
        description: "7 Feet Tall x 3 Feet Wide x 2 Feet Deep. Holds 60-120 champagne flutes. Comes with 'Cheers!' sign."   
    },
    {
        name: 'welcomeSign', title: 'Welcome Sign', 
        description: '3 Feet Wide x 2.5 Feet Tall with Stand'
    },
    {
        name: 'picturePallet', title: 'Picture Pallet', 
        description: "6.5 Feet Tall x 7 Feet Wide x 1.5 Feet Deep. Comes with mini clothespins, battery powered LED lights, and 'Take a Picture Let's Fill This Pallet With Memories' sign."
    },
    {
        name: 'photoWall', title: 'Picture Backdrop',
        description: "6.5 Feet Tall x 7 Feet Wide x 1.5 Feet Deep. Comes with 'Take A Picture It'll Last Longer' sign."
    },
]


const Creations = () => {
    const [selectedImage, setSelectedImage] = useState(null)
    const [index, setIndex] = useState(null)

    const getCarouselItems = () => {
        return (
            images.map((img, i) => {
                return (
                    <Carousel.Item key={i} >
                        <Image
                            cloudName={Cloud}
                            apiKey={Key}
                            apiSecret={Secret}
                            publicId={img.name}
                            className='carousel-image'
                            alt={img.title}
                        >
                        </Image>
                        <Carousel.Caption>
                            <h3>{img.title}</h3>
                        </Carousel.Caption>
                    </Carousel.Item>
                )
            })
        )
    }

    const openCarousel = () => {
        return (
            <Carousel 
                className='zoom-image-container'
                interval={null}
                prevIcon={icons('left')}
                nextIcon={icons('right')}
                defaultActiveIndex={index}
            >
                {getCarouselItems()}
            </Carousel>
        )
    }

    const icons = (value) => {
        if (value === 'left') {
            return (
                <ChevronLeft size={50} aria-label='previous'/>
            )
        }
        if (value === 'right') {
            return (
                <ChevronRight size={50} aria-label='next'/>
            )
        }
    }

    const handleCarousel = (value, index) => {
        value ? document.body.style.overflow = 'hidden' :
            document.body.style.overflow = 'unset'
        
        setSelectedImage(value)
        setIndex(index)
    }

    const getSelectedImage = () => {
        return ( 
            <div className="zoom">
                <div className='zoom-img-button'>
                    <button className="close-carousel" onClick={() => handleCarousel(null)}>&#x2613;</button>
                    { openCarousel() }
                </div>
            </div>
        )
    }

    const mapImages = () => {
        return images.map((img, i) => 
            <div className="creations-grid-card" key={i} onClick={() => handleCarousel(img, i)}>
                <div className="creations-grid-card-text">
                    <h3>{img.title}</h3>
                    <p>{img.description}</p>
                </div>
                <Image
                    cloudName={Cloud}
                    apiKey={Key}
                    apiSecret={Secret}
                    publicId={img.name}
                    className='zoom-image'
                    alt={img.title}
                    version={img.version && '1613431345'}
                />
            </div>
        )
    }

    return (
        <div className="component" id="creation-component">
            <Navbar />
            <Banner />
            <div className='header-container' >
                <h1 className='component-header'>Creations</h1>
                <div className='link-to-contact'>
                    <p>Don't see something you want? &nbsp;</p>
                    <Link className='creations-link' to={{pathname: '/contact'}}>
                        Let us know !
                    </Link>
                </div>
            </div>
            {selectedImage && getSelectedImage()}
            <div className="creations-grid-container">
                {mapImages()}
            </div>
        </div>
    )
}

export default Creations