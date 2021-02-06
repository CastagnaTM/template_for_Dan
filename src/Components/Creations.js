import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import Carousel from 'react-bootstrap/Carousel'
import { ArrowLeftCircleFill, ArrowRightCircleFill } from 'react-bootstrap-icons';

import Banner from './Banner'
import Navbar from './Navbar'

//import IDoBBQ from '../Assets/I do.jpg'
//import BabyShower from '../Assets/Baby Shower.jpg'
import Arch1 from '../Assets/Arch1.jpg'
import Arch2 from '../Assets/Arch2.jpg'
import Donut1 from '../Assets/Donut1.jpg'
import Donut2 from '../Assets/Donut2.jpg'
import Donut3 from '../Assets/Donut3.jpg'
import ChampagneWall1 from '../Assets/champagne wall.jpeg'
import ChampagneWall2 from '../Assets/champagne wall2.jpeg'
import ChampagneWall3 from '../Assets/champagne wall3.jpeg'
import WelcomeSign from '../Assets/welcome sign.jpeg'
import PicturePallet from '../Assets/PicturePallet.jpg'
import PhotoWall from '../Assets/PhotoWall.jpg'
import FallCollection from '../Assets/FallCollection.jpg'
import ChampagneGlass from '../Assets/champagne glass.JPG'
import ChampagneGlasses from '../Assets/champagne glasses.JPG'
import AndrewDemiCheers from '../Assets/andrew demi cheers.JPG'
import ArborChairs from '../Assets/arbor chairs.JPG'
import DanAndrewWelcome from '../Assets/dan andrew welcome.JPG'
import DemiDonut from '../Assets/demi donut.JPG'
import DonutAngleFull from '../Assets/donut angle full.JPG'
import DonutWallAngle from '../Assets/Donut Wall angle.JPG'
import FakeWedding from '../Assets/fake wedding.JPG'
import FrankEleniWelcome from '../Assets/frank eleni welcome.JPG'
import EleniFrankArbor from '../Assets/EleniFrankArbor.JPG'
import JengaPeek from '../Assets/jenga peek.JPG'
import Jenga from '../Assets/jenga.JPG'
import LBArbor from '../Assets/LB Arbor.JPG'
import LightBulb from '../Assets/light bulb.JPG'
import PictureOfPicture from '../Assets/picture of picture.JPG'
import Polaroid from '../Assets/polaroid.JPG'
import Polaroids from '../Assets/polaroids4.jpg'
import PicturePalletSign from '../Assets/PicturePalletSign.JPG'
import Table from '../Assets/table.JPG'
import TakeAPicture from '../Assets/take a picture.JPG'
import TomFrankDonut from '../Assets/tom frank donut.JPG'
import WelcomeSetUp from '../Assets/Welcome set up.JPG'


const images = [
    {
        name: DanAndrewWelcome, title: 'Welcome Sign',
        description: "3 Feet Wide x 2.5 Feet Tall with Stand"
    },
    {
        name: FakeWedding, title: 'Triangular Arbor',
        description: "9 Feet Tall x 8.5 Feet Wide with 4.5 foot long base. Includes eye hooks on the back for flowers."
    },
    {
        name: TomFrankDonut, title: 'Donut Wall',
        description: "6 Feet Tall x 3 Feet Wide x 2.5 Feet Deep. Holds between 32-96 donuts. Has 2 shelves and utensil holder. Comes with 'Donut Mind If I Do' sign."
    },
    {
        name: ChampagneGlass, title: 'Champagne Wall',
        description: "7 Feet Tall x 3 Feet Wide x 2 Feet Deep. Holds 60-120 champagne flutes. Comes with 'Cheers!' sign."
    },
    {
        name: PictureOfPicture, title: 'Picture Backdrop',
        description: "6.5 Feet Tall x 7 Feet Wide x 1.5 Feet Deep. Comes with 'Take A Picture It'll Last Longer' sign."
    },
    {
        name: Jenga, title: 'Plummeting Prisms',
        description: "Blocks are 12 Inches Long x 4 Inches Wide x 2 Inches Tall. The full stack is 2.5 feet tall."
    },
    {
        name: Polaroids, title: 'Picture Pallet',
        description: "6.5 Feet Tall x 7 Feet Wide x 1.5 Feet Deep. Comes with mini clothespins, battery powered LED lights, and 'Take a Picture Let's Fill This Pallet With Memories' sign."
    },
    {
        name: PicturePalletSign, title: 'Picture Pallet',
        description: "6.5 Feet Tall x 7 Feet Wide x 1.5 Feet Deep. Comes with mini clothespins, battery powered LED lights, and 'Take a Picture Let's Fill This Pallet With Memories' sign."
    },
    {
        name: Table, title: '',
        description: ""
    },
    {
        name: DemiDonut, title: '',
        description: ""
    },
    {
        name: AndrewDemiCheers, title: '',
        description: ""
    },
    {
        name: Polaroid, title: '',
        description: ""
    },   
    {
        name: FrankEleniWelcome, title: 'Welcome Sign',
        description: "3 Feet Wide x 2.5 Feet Tall with Stand"
    },
    {
        name: WelcomeSetUp, title: 'Welcome Sign',
        description: "3 Feet Wide x 2.5 Feet Tall with Stand"
    },
    {
        name: EleniFrankArbor, title: 'Triangular Arbor',
        description: "9 Feet Tall x 8.5 Feet Wide with 4.5 foot long base. Includes eye hooks on the back for flowers."
    },
    {
        name: ArborChairs, title: 'Triangular Arbor',
        description: "9 Feet Tall x 8.5 Feet Wide with 4.5 foot long base. Includes eye hooks on the back for flowers."
    },
    {
        name: LBArbor, title: 'Triangular Arbor',
        description: "9 Feet Tall x 8.5 Feet Wide with 4.5 foot long base. Includes eye hooks on the back for flowers."
    },
    {
        name: DonutWallAngle, title: 'Donut Wall',
        description: "6 Feet Tall x 3 Feet Wide x 2.5 Feet Deep. Holds between 32-96 donuts. Has 2 shelves and utensil holder. Comes with 'Donut Mind If I Do' sign."
    },
    {
        name: DonutAngleFull, title: 'Donut Wall',
        description: "6 Feet Tall x 3 Feet Wide x 2.5 Feet Deep. Holds between 32-96 donuts. Has 2 shelves and utensil holder. Comes with 'Donut Mind If I Do' sign."
    },
    {
        name: LightBulb, title: '',
        description: ""
    },   
    {
        name: ChampagneGlasses, title: 'Champagne Wall',
        description: "7 Feet Tall x 3 Feet Wide x 2 Feet Deep. Holds 60-120 champagne flutes. Comes with 'Cheers!' sign."
    },
    {
        name: TakeAPicture, title: 'Picture Backdrop',
        description: "6.5 Feet Tall x 7 Feet Wide x 1.5 Feet Deep. Comes with 'Take A Picture It'll Last Longer' sign."
    },
    {
        name: JengaPeek, title: 'Plummeting Prisms',
        description: "Blocks are 12 Inches Long x 4 Inches Wide x 2 Inches Tall. The full stack is 2.5 feet tall."
    },   
    {
        name: FallCollection, title: 'Fall Collection',
        description: "Fall themed Arbor, Donut Wall, Champagne Wall, Picture Backdrop, Picture Pallet, and more!"
    },
    {
        name: Arch1, title: 'Triangular Arbor', 
        description: '9 Feet Tall x 8.5 Feet Wide with 4.5 foot long base. Includes eye hooks on the back for flowers.'
    },
    {
        name: Arch2, title: 'Triangular Arbor', 
        description: '9 Feet Tall x 8.5 Feet Wide with 4.5 foot long base. Includes eye hooks on the back for flowers.'
    },
    {
        name: Donut1, title: 'Donut Wall', 
        description: "6 Feet Tall x 3 Feet Wide x 2.5 Feet Deep. Holds between 32-96 donuts. Has 2 shelves and utensil holder. Comes with 'Donut Mind If I Do' sign."   
    },
    {
        name: Donut2, title: 'Donut Wall', 
        description: "6 Feet Tall x 3 Feet Wide x 2.5 Feet Deep. Holds between 32-96 donuts. Has 2 shelves and utensil holder. Comes with 'Donut Mind If I Do' sign."   
    },
    {
        name: Donut3, title: 'Donut Wall', 
        description: "6 Feet Tall x 3 Feet Wide x 2.5 Feet Deep. Holds between 32-96 donuts. Has 2 shelves and utensil holder. Comes with 'Donut Mind If I Do' sign."   
    },
    {
        name: ChampagneWall1, title: 'Champagne Wall', 
        description: "7 Feet Tall x 3 Feet Wide x 2 Feet Deep. Holds 60-120 champagne flutes. Comes with 'Cheers!' sign."   
    },
    {
        name: ChampagneWall2, title: 'Champagne Wall', 
        description: "7 Feet Tall x 3 Feet Wide x 2 Feet Deep. Holds 60-120 champagne flutes. Comes with 'Cheers!' sign."   
    },
    {
        name: ChampagneWall3, title: 'Champagne Wall', 
        description: "7 Feet Tall x 3 Feet Wide x 2 Feet Deep. Holds 60-120 champagne flutes. Comes with 'Cheers!' sign."   
    },
    {
        name: WelcomeSign, title: 'Welcome Sign', 
        description: '3 Feet Wide x 2.5 Feet Tall with Stand'
    },
    {
        name: PicturePallet, title: 'Picture Pallet', 
        description: "6.5 Feet Tall x 7 Feet Wide x 1.5 Feet Deep. Comes with mini clothespins, battery powered LED lights, and 'Take a Picture Let's Fill This Pallet With Memories' sign."
    },
    {
        name: PhotoWall, title: 'Picture Backdrop',
        description: "6.5 Feet Tall x 7 Feet Wide x 1.5 Feet Deep. Comes with 'Take A Picture It'll Last Longer' sign."
    },

  // { 
 //       name: IDoBBQ, title:'I Do BBQ',
  //      description: 'This is a space to provide a description of the image / design',
   // }, 

    //{ 
    //     name: BabyShower, title:'Baby Shower',
  //      description: 'This is a space to provide a description of the image / design'
//   },
]


const Creations = () => {
    const [selectedImage, setSelectedImage] = useState(null)
    const [index, setIndex] = useState(null)

    const getCarouselItems = () => {
        return (
            images.map((img, i) => {
                return (
                    <Carousel.Item key={i} >
                        <img src={img.name} className='zoom-image' alt={img.title}></img>
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
                <ArrowLeftCircleFill size={50} />
            )
        }
        if (value === 'right') {
            return (
                <ArrowRightCircleFill size={50} />
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
                <img src={img.name} alt={img.title}/>
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