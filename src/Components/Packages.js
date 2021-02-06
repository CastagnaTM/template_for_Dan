import React from 'react'

import Carousel from 'react-bootstrap/Carousel'
import { ArrowLeftCircleFill, ArrowRightCircleFill } from 'react-bootstrap-icons';

import Banner from './Banner'
import Navbar from'./Navbar'
import Image from './Image'
import UBWP from '../Assets/arbor chairs.JPG'
import FrankEleniWelcome from '../Assets/frank eleni welcome.JPG'
import TomFrankDonut from '../Assets/tom frank donut.JPG'
import ChampagneGlass from '../Assets/champagne glass.JPG'
import Polaroids from '../Assets/polaroids4.jpg'
import PictureOfPicture from '../Assets/picture of picture.JPG'
import Jenga from '../Assets/jenga.JPG'
import FakeWedding from '../Assets/fake wedding.JPG'
import Lights2 from '../Assets/Lights2.JPG'



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
        this.windowSizeCheck()
        window.addEventListener("scroll", this.scrollListener)
        
    }

    componentWillUnmount = () => {
        window.removeEventListener("scroll", this.scrollListener);
    }

    windowSizeCheck = () => {
        if (window.innerWidth < 800){
            this.setState({
                isMobile: true
            })
        }
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
                    id: 1, name: UBWP, title: 'Ultimate Backyard Wedding Package', 
                    description: ['$2000 to rent the entire package for your special day', 'Comes with: Contactless Delivery, Assembly, and Disassembly, Arbor, Welcome Sign, Donut Wall, Champagne Wall, Picture Pallet and Sign, Picture Backdrop and Sign, Plummeting Prisms Game, Centerpieces, and Lights', 'Plus a Personalized Custom Decoration to keep as a Permanent Memory as a Thank You for Using Our Services!', '____________________________________________________________________', 'Looking to make decorations in your wedding package more personalized? Contact us to discuss custom pieces for an additional cost.'], 
                    images: 
                    [ 
                        { image: UBWP, title: 'Ultimate Backyard Wedding Package' }, 
                        { image: FakeWedding, title: 'Arbor' },
                        { image: FrankEleniWelcome, title: 'Welcome Sign' },
                        { image: TomFrankDonut, title: 'Donut Wall' },
                        { image: ChampagneGlass, title: 'Champagne Wall' },
                        { image: PictureOfPicture, title: 'Picture Backdrop' },
                        { image: Polaroids, title: 'Picture Pallet' },
                        { image: Jenga, title: 'Plummeting Prisms' },
                        { image: Lights2, title: 'Lights' },

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

