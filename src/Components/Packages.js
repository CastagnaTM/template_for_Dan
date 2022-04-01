import React from 'react'

import Carousel from 'react-bootstrap/Carousel'
import { ChevronLeft, ChevronRight } from 'react-bootstrap-icons'

import Banner from './Banner'
import Navbar from'./Navbar'
import PackageImage from './PackageImage'
import CustomModal from './CustomModal'

import { packageOneImages } from '../constants'

import ArborOutside from '../Assets/ArborOutside.jpg'
import BriWelcome from '../Assets/BriWelcome.jpg'
import Sterno3 from '../Assets/Sterno3.jpg'
import WeddingChampagne from '../Assets/WeddingChampagne.jpg'
import SheetBackdrop from '../Assets/SheetBackdrop.jpg'
import JengaDay from '../Assets/JengaDay.jpg'
import CornholePlay from '../Assets/CornholePlay.jpg'
import TakeAPic from '../Assets/TakeAPic.jpg'
import weddingrules from '../Assets/weddingrules.jpg'
import kaiasign from '../Assets/kaiasign.jpg'
import WalkSign from '../Assets/WalkSign.jpg'
import Centerpieces from '../Assets/Centerpieces.jpg'
import mrmrssign from '../Assets/mrmrssign.png'

const images = {
    'Sterno3': Sterno3,
    'WeddingChampagne': WeddingChampagne,
    'BriWelcome': BriWelcome,
    'CornholePlay': CornholePlay,
    'JengaDay': JengaDay,
    'TakeAPic': TakeAPic,
    'WalkSign': WalkSign,
    'mrmrssign': mrmrssign,
    'weddingrules': weddingrules,
    'kaiasign': kaiasign,
    'Centerpieces': Centerpieces,
    'SheetBackdrop': SheetBackdrop,
    'ArborOutside': ArborOutside
}

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
                    images: packageOneImages
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

    getCarouselItems = () => {
        return (
            this.state.selectedImage.images.map((img, i) => {
                return (
                    <Carousel.Item key={i} className='carousel-item'>
                        <img src={images[img.image]} className='carousel-image' alt={this.state.selectedImage.title}/>
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
                prevIcon={<ChevronLeft size={50} aria-label='previous'/>}
                nextIcon={<ChevronRight size={50} aria-label='next'/>}
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
                <ul className="package-list">{this.displayImages()}</ul>
            </div>
        )
    }
}
