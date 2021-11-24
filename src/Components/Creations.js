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
        name: 'NewBeginningWelcomeSign', title: 'Welcome Sign',
        description: "3 Feet Wide x 2.5 Feet Tall with Stand"
    },
    {
        name: 'BriWelcome', title: 'Welcome Sign',
        description: "3 Feet Wide x 2.5 Feet Tall with Stand"
    },
    {
        name: 'BestWeddingEverSign', title: 'Welcome Sign',
        description: "3 Feet Wide x 2.5 Feet Tall with Stand"
    },
    {
        name: 'BriArbor', title: 'Triangular Arbor',
        description: "9 Feet Tall x 8.5 Feet Wide with 4.5 foot long base. Includes eye hooks on the back for flowers."
    },
    {
        name: 'BriArbor2', title: 'Triangular Arbor',
        description: "9 Feet Tall x 8.5 Feet Wide with 4.5 foot long base. Includes eye hooks on the back for flowers."
    },
    {
        name: 'BriChrisArbor', title: 'Triangular Arbor',
        description: "9 Feet Tall x 8.5 Feet Wide with 4.5 foot long base. Includes eye hooks on the back for flowers."
    },
    {
        name: 'BriArborOutside', title: 'Triangular Arbor',
        description: "9 Feet Tall x 8.5 Feet Wide with 4.5 foot long base. Includes eye hooks on the back for flowers."
    },
    {
        name: 'Arbor', title: 'Triangular Arbor',
        description: "9 Feet Tall x 8.5 Feet Wide with 4.5 foot long base. Includes eye hooks on the back for flowers."
    },
    {
        name: 'Chuppah', title: 'Chuppah',
        description: "8 Feet Tall x 7 Feet Wide x 7 Feet Deep."
    },
    {
        name: 'tomFrankDonut', title: 'Donut Wall',
        description: "6 Feet Tall x 3 Feet Wide x 2.5 Feet Deep. Holds between 32-96 donuts. Has 2 shelves and utensil holder. Comes with 'Donut Mind If I Do' sign."
    },
    {
        name: 'Sterno3', title: 'Donut Wall',
        description: "6 Feet Tall x 3 Feet Wide x 2.5 Feet Deep. Holds between 32-96 donuts. Has 2 shelves and utensil holder. Comes with 'Donut Mind If I Do' sign."
    },
    {
        name: 'WeddingChampagne', title: 'Champagne Wall',
        description: "7 Feet Tall x 3 Feet Wide x 2 Feet Deep. Holds 60-120 champagne flutes. Comes with 'Cheers!' sign."
    },
    {
        name: 'MiniDonutWall3', title: 'Mini Donut Wall',
        description: "2.5 Feet Tall x 2 Feet Wide x 1 Foot Deep. Holds between 30-90 donuts."
    },
    {
        name: 'Degroff', title: 'Shot Glass Wall',
        description: "6 Feet Tall x 4 Feet Wide. 7 Acrylic Shelves that Holds 126 Shot Glasses. Comes with Changing LED Light Strips and Custom Lettering on Top."
    },
    {
        name: 'Tequila', title: 'Shot Glass Wall',
        description: "6 Feet Tall x 4 Feet Wide. 7 Acrylic Shelves that Holds 126 Shot Glasses. Comes with Changing LED Light Strips and Custom Lettering on Top."
    }, 
    {
        name: 'Tequila2', title: 'Shot Glass Wall',
        description: "6 Feet Tall x 4 Feet Wide. 7 Acrylic Shelves that Holds 126 Shot Glasses. Comes with Changing LED Light Strips and Custom Lettering on Top."
    },
    {
        name: 'ShotGlass', title: 'Shot Glass Wall',
        description: "6 Feet Tall x 4 Feet Wide. 7 Acrylic Shelves that Holds 126 Shot Glasses. Comes with Changing LED Light Strips and Custom Lettering on Top."
    },
    {
        name: 'Degroff2', title: 'Shot Glass Wall',
        description: "6 Feet Tall x 4 Feet Wide. 7 Acrylic Shelves that Holds 126 Shot Glasses. Comes with Changing LED Light Strips and Custom Lettering on Top."
    },
    {
        name: 'Tequila3', title: 'Shot Glass Wall',
        description: "6 Feet Tall x 4 Feet Wide. 7 Acrylic Shelves that Holds 126 Shot Glasses. Comes with Changing LED Light Strips and Custom Lettering on Top."
    },
    {
        name: 'Tequila4', title: 'Shot Glass Wall',
        description: "6 Feet Tall x 4 Feet Wide. 7 Acrylic Shelves that Holds 126 Shot Glasses. Comes with Changing LED Light Strips and Custom Lettering on Top."
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
        name: 'JengaDay', title: 'Plummeting Prisms',
        description: "Blocks are 12 Inches Long x 4 Inches Wide x 2 Inches Tall. The full stack is 2.5 feet tall."
    },
    {
        name: 'JengaNight', title: 'Plummeting Prisms',
        description: "Blocks are 12 Inches Long x 4 Inches Wide x 2 Inches Tall. The full stack is 2.5 feet tall."
    },
    {
        name: 'Cornhole', title: 'Custom Cornhole',
        description: "Custom Cornhole with Wheels, Cup Holders, Scorekeeper, LED Lights, and Bean Bags"
    },
    {
        name: 'CornholePlay', title: 'Custom Cornhole',
        description: "Custom Cornhole with Wheels, Cup Holders, Scorekeeper, LED Lights, and Bean Bags"
    },
    {
        name: 'DonutMind', title: 'Custom Sign',
        description: ""
    },
    {
        name: 'TakeAPic', title: 'Custom Sign',
        description: ""
    },
    {
        name: 'Posivibes', title: 'Custom Sign',
        description: ""
    },
    {
        name: 'WalkSign', title: 'Custom Sign',
        description: ""
    },
    {
        name: 'ChampagneGlassTags', title: '',
        description: ""
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
        name: 'weddingrules', title: '',
        description: ""
    },
    {
        name: 'kaiasign', title: '',
        description: ""
    },
    {
        name: 'Centerpieces', title: '',
        description: ""
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
        name: 'SeatingArrangements2', title: '',
        description: ""
    },
    {
        name: 'SeatingArrangements', title: '',
        description: ""
    },
    {
        name: 'SheetBackdrop', title: '',
        description: "Picture Backdrop"
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
        name: 'ArborOutside', title: 'Triangular Arbor',
        description: "9 Feet Tall x 8.5 Feet Wide with 4.5 foot long base. Includes eye hooks on the back for flowers."
    },
    {
        name: 'Donuts', title: 'Donut Wall',
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
                    <p>Don't see something you want? We can make it!&nbsp;</p>
                    <Link className='creations-link' to={{pathname: '/contact'}}>
                        Contact Us!
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