import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import Carousel from 'react-bootstrap/Carousel'
import { ChevronLeft, ChevronRight } from 'react-bootstrap-icons'

import Banner from './Banner'
import Navbar from './Navbar'

import { allImages } from '../constants'

import Degroff from '../Assets/Degroff.jpg'
import Degroff2 from '../Assets/degroff2.jpg'
import ShotGlass from '../Assets/ShotGlass.jpg'
import Tequila from '../Assets/Tequila.jpg'
import Tequila2 from '../Assets/tequila2.jpg'
import Tequila3 from '../Assets/tequila3.jpg'
import Tequila4 from '../Assets/tequila4.jpg'
import BriArbor from '../Assets/BriArbor.jpg'
import BriArbor2 from '../Assets/BriArbor2.jpg'
import BriArborOutside from '../Assets/BriArborOutside.jpg'
import BriChrisArbor from '../Assets/BriChrisArbor.jpg'
import Arbor from '../Assets/Arbor.jpg'
import tomFrankDonut from '../Assets/tomFrankDonut.jpg'
import Sterno3 from '../Assets/Sterno3.jpg'
import Donuts from '../Assets/Donuts.jpg'
import WeddingChampagne from '../Assets/WeddingChampagne.jpg'
import MiniDonutWall3 from '../Assets/MiniDonutWall3.jpg'
import danAndrewWelcome from '../Assets/danAndrewWelcome.jpg'
import NewBeginningWelcomeSign from '../Assets/NewBeginningWelcomeSign.jpg'
import BriWelcome from '../Assets/BriWelcome.jpg'
import BestWeddingEverSign from '../Assets/BestWeddingEverSign.jpg'
import pictureOfAPicture from '../Assets/pictureOfAPicture.jpg'
import Cornhole from '../Assets/Cornhole.jpg'
import CornholePlay from '../Assets/CornholePlay.jpg'
import jenga from '../Assets/jenga.jpg'
import JengaDay from '../Assets/JengaDay.jpg'
import JengaNight from '../Assets/JengaNight.jpg'
import DonutMind from '../Assets/DonutMind.jpg'
import TakeAPic from '../Assets/TakeAPic.jpg'
import Posivibes from '../Assets/Posivibes.jpg'
import WalkSign from '../Assets/WalkSign.jpg'
import ChampagneGlassTags from '../Assets/ChampagneGlassTags.jpg'
import polaroids from '../Assets/polaroids.jpg'
import picturePalletSign from '../Assets/picturePalletSign.jpg'
import mrmrssign from '../Assets/mrmrssign.png'
import weddingrules from '../Assets/weddingrules.jpg'
import kaiasign from '../Assets/kaiasign.jpg'
import Centerpieces from '../Assets/Centerpieces.jpg'
import table from '../Assets/table.jpg'
import demiDonut from '../Assets/demiDonut.jpg'
import SeatingArrangements2 from '../Assets/SeatingArrangements2.jpg'
import SeatingArrangements from '../Assets/SeatingArrangements.jpg'
import SheetBackdrop from '../Assets/SheetBackdrop.jpg'
import frankEleniWelcome from '../Assets/frankEleniWelcome.jpg'
import welcomeSetUp from '../Assets/welcomeSetUp.jpg'
import eleniFrankArbor from '../Assets/eleniFrankArbor.jpg'
import arborChairs from '../Assets/arborChairs.jpg'
import ArborOutside from '../Assets/ArborOutside.jpg'
import donutAngleFull from '../Assets/donutAngleFull.jpg'
import lightBulb from '../Assets/lightBulb.jpg'
import champagneGlasses from '../Assets/champagneGlasses.jpg'
import takeAPicture from '../Assets/takeAPicture.jpg'
import Chuppah from '../Assets/Chuppah.jpg'


const images = {
    'Degroff': Degroff,
    'Degroff2': Degroff2,
    'ShotGlass': ShotGlass,
    'Chuppah': Chuppah,
    'Tequila': Tequila,
    'Tequila2': Tequila2,
    'Tequila3': Tequila3,
    'Tequila4': Tequila4,
    'BriArbor': BriArbor,
    'BriArbor2': BriArbor2,
    'BriArborOutside': BriArborOutside,
    'BriChrisArbor': BriChrisArbor,
    'Arbor': Arbor,
    'tomFrankDonut': tomFrankDonut,
    'Sterno3': Sterno3,
    'Donuts': Donuts,
    'WeddingChampagne': WeddingChampagne,
    'MiniDonutWall3': MiniDonutWall3,
    'danAndrewWelcome': danAndrewWelcome,
    'NewBeginningWelcomeSign': NewBeginningWelcomeSign,
    'BriWelcome': BriWelcome,
    'BestWeddingEverSign': BestWeddingEverSign,
    'pictureOfAPicture': pictureOfAPicture,
    'Cornhole': Cornhole,
    'CornholePlay': CornholePlay,
    'jenga': jenga,
    'JengaDay': JengaDay,
    'JengaNight': JengaNight,
    'DonutMind': DonutMind,
    'TakeAPic': TakeAPic,
    'Posivibes': Posivibes,
    'WalkSign': WalkSign,
    'ChampagneGlassTags': ChampagneGlassTags,
    'polaroids': polaroids,
    'picturePalletSign': picturePalletSign,
    'mrmrssign': mrmrssign,
    'weddingrules': weddingrules,
    'kaiasign': kaiasign,
    'Centerpieces': Centerpieces,
    'table': table,
    'demiDonut': demiDonut,
    'SeatingArrangements2': SeatingArrangements2,
    'SeatingArrangements': SeatingArrangements,
    'SheetBackdrop': SheetBackdrop,
    'frankEleniWelcome': frankEleniWelcome,
    'welcomeSetUp': welcomeSetUp,
    'eleniFrankArbor': eleniFrankArbor,
    'arborChairs': arborChairs,
    'ArborOutside': ArborOutside,
    'donutAngleFull': donutAngleFull,
    'lightBulb': lightBulb,
    'champagneGlasses': champagneGlasses,
    'takeAPicture': takeAPicture
}


const Creations = () => {
    const [selectedImage, setSelectedImage] = useState(null)
    const [index, setIndex] = useState(null)

    const getCarouselItems = () => {
        return (
            allImages.map((img, i) => {
                console.log(img)
                return (
                    <Carousel.Item key={i} className='carousel-item'>
                        <img
                            className='carousel-image'
                            alt={img.title}
                            src={images[img.name]}
                        />
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
                prevIcon={<ChevronLeft size={50} aria-label='previous'/>}
                nextIcon={<ChevronRight size={50} aria-label='next'/>}
                defaultActiveIndex={index}
            >
                {getCarouselItems()}
            </Carousel>
        )
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
        return allImages.map((img, i) => 
            <div className="creations-grid-card" key={i} onClick={() => handleCarousel(img, i)}>
                <div className="creations-grid-card-text">
                    <h3>{img.title}</h3>
                    <p>{img.description}</p>
                </div>
                <img
                    className='zoom-image'
                    alt={img.title}
                    src={images[img.name]}
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