import React from 'react'

import Carousel from 'react-bootstrap/Carousel'
import { ArrowLeftCircleFill, ArrowRightCircleFill } from 'react-bootstrap-icons';

import Banner from './Banner'
import Navbar from'./Navbar'
import Image from './Image'
import Arch1 from '../Assets/Arch1.jpg'
import Arch2 from '../Assets/Arch2.jpg'
import Donut1 from '../Assets/Donut1.jpg'
import Donut2 from '../Assets/Donut2.jpg'
import Donut3 from '../Assets/Donut3.jpg'
import PicturePallet from '../Assets/PicturePallet.jpg'
import PhotoWall from '../Assets/PhotoWall.jpg'
import FallCollection from '../Assets/FallCollection.jpg'

export default class Packages extends React.Component {

    state = {
        packages: [],
        isMobile: false,
        selectedImage: null,
        index: 0,
    }
    packagesRef = React.createRef();
    scrollButtonRef = React.createRef();
    scrollDivRef = React.createRef();
    headerRef = React.createRef();

    componentDidMount = () => {

        this.setImages();
           
        window.addEventListener("scroll", this.scrollListener)
        
    }

    componentWillUnmount = () => {
        window.removeEventListener("scroll", this.scrollListener);
    }

    scrollListener = () => {
        let button = this.scrollButtonRef;
        let buttonDiv = this.scrollDivRef;
        if (window.scrollY > 20){
            button.classList.add('scrolling');
            buttonDiv.classList.add('scrolling');
        }
        else {
            button.classList.remove('scrolling');
            buttonDiv.classList.remove('scrolling');
        }
    }

    setImages = () => {
        this.setState({
            packages: 
            [
                {
                    id: 1, name: FallCollection, title: 'Fall Collection One', 
                    description: 'DESCRIPTION!', 
                    images: 
                    [ 
                        { image: FallCollection, title: 'Fall Collection One' }, 
                        { image: Arch1, title: 'Triangle Arbor' },
                        { image: Arch2, title: 'Triangle Arbor' },
                        { image: Donut1, title: 'Donut Wall' },
                        { image: Donut2, title: 'Donut Wall' },
                        { image: Donut3, title: 'Donut Wall' },
                        { image: PicturePallet, title: 'Picture Pallet' },
                        { image: PhotoWall, title: 'Pallet Backdrop' },
                    ]
                }
            ]
        })
    }

   
    // scrollToPackages = () => {
    //     setTimeout(() =>{
    //         this.packagesRef.scrollIntoView({
    //             behavior: 'smooth'
    //         }) 
    //     }, 500);
    // }

    scrollUp = () => {
        this.headerRef.scrollIntoView({
            behavior: 'smooth',
            block: 'center'
        });
    }

    displayImages = () => {
        return (
            this.state.packages.map((item, i) => {
                return (
                    <Image 
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
        // this.setState({
        //     isMobile: !this.state.isMobile
        // })
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
                <ArrowLeftCircleFill size={50} />
            )
        }
        if (value === 'right') {
            return (
                <ArrowRightCircleFill size={50} />
            )
        }
    }

    getCarouselItems = () => {
        return (
            this.state.selectedImage.images.map((img, i) => {
                return (
                    <Carousel.Item key={i} >
                        <img src={img.image} className='zoom-image' alt={this.state.selectedImage.title}></img>
                        <Carousel.Caption>
                            <h3>{img.title}</h3>
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

    // getModal = () => {
    //     return (
    //         <div className='zoom-image-container'>
    //             <img src={this.state.selectedImage.name} className='zoom-image' alt={this.state.selectedImage.title}></img>
    //         </div>
    //     )
       
    // }

    getSelectedImage = () => {
        return( 
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
                <Banner 
                    // scrollToPackages={this.scrollToPackages}
                />
                <div 
                    id='scroll-up-button-div' 
                    ref={ref => {this.scrollButtonRef = ref}}
                    style={{ display: this.state.selectedImage ? "none" : "initial" }}
                >
                    <button id='scroll-up-button' ref={ref => {this.scrollDivRef = ref}}
                    onClick={this.scrollUp}
                    >
                     <p>&uarr;</p>
                    </button>
                </div>
                <div className='header-container' ref={ref => {this.headerRef = ref}}>
                    <h1 className='component-header'>Packages</h1>
                </div>
                {
                    this.state.selectedImage ? this.getSelectedImage() : null
                }
                <ul className="package-list">{this.displayImages()}</ul>
            </div>
        )
    }
}

