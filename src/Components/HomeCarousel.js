import React from 'react'

import Carousel from 'react-bootstrap/Carousel'
import { ChevronLeft, ChevronRight } from 'react-bootstrap-icons'

import { Image } from 'cloudinary-react'
import { allImages, Cloud, Key, Secret } from '../constants'

export default function HomeCarousel() {

    

    return (
        <Carousel
            prevIcon={<ChevronLeft size={50} aria-label='previous'/>}
            nextIcon={<ChevronRight size={50} aria-label='next'/>}
        >
            {allImages.map((img, i) => {
                return (
                    <Carousel.Item
                        key={i} 
                        interval={2500}
                        className='home-carousel-item'
                    >
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
            })}
        </Carousel>
    )
}

