import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import Carousel from 'react-bootstrap/Carousel'
import { ChevronLeft, ChevronRight } from 'react-bootstrap-icons'

import { Image } from 'cloudinary-react'
import { allImages, Cloud, Key, Secret } from '../constants'

import Banner from './Banner'
import Navbar from './Navbar'


const Creations = () => {
    const [selectedImage, setSelectedImage] = useState(null)
    const [index, setIndex] = useState(null)

    const getCarouselItems = () => {
        return (
            allImages.map((img, i) => {
                return (
                    <Carousel.Item key={i} className='carousel-item'>
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