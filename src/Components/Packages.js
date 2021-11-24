import React from 'react'

import Carousel from 'react-bootstrap/Carousel'
import { ChevronLeft, ChevronRight } from 'react-bootstrap-icons'

import { Image } from 'cloudinary-react'
import { Cloud, Key, Secret } from '../constants'

import Banner from './Banner'
import Navbar from'./Navbar'
import PackageImage from './PackageImage'
import CustomModal from './CustomModal'
// import MailchimpformTest from './MailchimpformTest'


export default class Packages extends React.Component {

    state = {
        index: 0,
        isMobile: false,
        packages: [],
        selectedImage: null,
    }
    packagesRef = React.createRef();
    scrollButtonRef = React.createRef();
    scrollDivRef = React.createRef();
    headerRef = React.createRef();

    componentDidMount = () => {
        this.setImages();
        this.windowSizeCheck()
    }

    windowSizeCheck = () => {
        if (window.innerWidth < 800){
            this.setState({
                isMobile: true
            })
        }
    }

    setImages = () => {
        this.setState({
            packages: 
            [
                {
                    id: 1, name: 'BriArbor', title: 'The Perfect Wedding Package', 
                    description: ['$2500 to rent the entire package for your special day', 'Comes with: Contactless Delivery, Assembly and Disassembly, Arbor, Welcome Sign, Donut Wall, Champagne Wall, Picture Pallet and Sign, Picture Backdrop and Sign, Games, Centerpieces, and Lights', 'Plus a Personalized Custom Decoration to keep as a Permanent Memory as a Thank You for Using Our Services!', <hr></hr>, 'Looking to make decorations in your wedding package more personalized? Contact us to discuss custom pieces for an additional cost.'], 
                    images: 
                    [ 
                        { image: 'ArborOutside', title: 'Arbor' },
                        { image: 'BriWelcome', title: 'Welcome Sign' },
                        { image: 'Sterno3', title: 'Donut Wall' },
                        { image: 'WeddingChampagne', title: 'Champagne Wall' },
                        { image: 'SheetBackdrop', title: 'Picture Backdrop' },
                        { image: 'JengaDay', title: 'Jenga' },
                        { image: 'CornholePlay', title: 'Cornhole' },
                        { image: 'TakeAPic', title: 'Picture Backdrop Sign' },
                        { image: 'weddingrules', title: 'Custom Sign' },
                        { image: 'kaiasign', title: 'Custom Signature Drinks Sign' },
                        { image: 'WalkSign', title: 'Custom Sign' },
                        { image: 'Centerpieces', title: 'Centerpieces' },
                        { image: 'mrmrssign', title: 'Mr & Mrs Chair Signs' },


                    ]
                }
            ]
        })
    }

    displayImages = () => {
        return (
            this.state.packages.map((item, i) => {
                return (
                    <PackageImage 
                        key={i} 
                        item={item} 
                        isMobile={this.state.isMobile}
                        handleCarousel={this.handleCarousel} 
                    />
                )

            })
        )
    }

    setMobile = () => {
        this.displayImages()
    }

    handleCarousel = (value) => {
        value ? document.body.style.overflow = 'hidden' :
            document.body.style.overflow = 'unset'

        this.setState({
            selectedImage: value
        })
    }

    icons = (value) => {
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

    getCarouselItems = () => {
        return (
            this.state.selectedImage.images.map((img, i) => {
                return (
                    <Carousel.Item key={i} >
                        <Image
                            cloudName={Cloud}
                            apiKey={Key}
                            apiSecret={Secret}
                            publicId={img.image}
                            className='zoom-image'
                            alt={this.state.selectedImage.title}
                        />
                        <Carousel.Caption>
                            {this.state.isMobile ? <h4>{img.title}</h4> : <h3>{img.title}</h3>}
                        </Carousel.Caption>
                    </Carousel.Item>
                )
            })
        )
    }

    getCarousel = () => {
        return (
            <Carousel 
                className='zoom-image-container'
                interval={null}
                prevIcon={this.icons('left')}
                nextIcon={this.icons('right')}
            >
                {this.getCarouselItems()}
            </Carousel>
        )
    }

    getSelectedImage = () => {
        return ( 
            <div className="zoom">
                <div className='zoom-img-button'>
                    <button className="close-carousel" onClick={() => this.handleCarousel(null)}>&#x2613;</button>
                    {
                        this.state.selectedImage.images && this.getCarousel()
                    }
                </div>
            </div>
        )
    }
    
    render(){
        return (
            <div className='component' id="packages-component" >
                <Navbar />
                <Banner />
                <div className='header-container' ref={ref => {this.headerRef = ref}}>
                    <h1 className='component-header'>Packages</h1>
                </div>
                { this.state.selectedImage && this.getSelectedImage() }
                <CustomModal />
                {/* <MailchimpformTest/> */}
                <ul className="package-list">{this.displayImages()}</ul>
            </div>
        )
    }
}
