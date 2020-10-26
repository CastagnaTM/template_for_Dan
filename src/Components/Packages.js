import React from 'react'

import Carousel from 'react-bootstrap/Carousel'
import { ArrowLeftCircleFill, ArrowRightCircleFill } from 'react-bootstrap-icons';

import Banner from './Banner'
import Navbar from'./Navbar'
import Image from './Image'
import IDoBBQ from '../Assets/I do.jpeg'
import BabyShower from '../Assets/Baby Shower.jpeg'
import Arch1 from '../Assets/Arch 1.png'
import Arch2 from '../Assets/Arch 2.png'
import Donut1 from '../Assets/Donut 1.png'
import Donut2 from '../Assets/Donut 2.png'
import PicturePallet from '../Assets/Picture Pallet.png'

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
                    id: 1, name: Arch1, title: 'Triangle Arbor', 
                    description: 'DESCRIPTION!', second: Arch2
                },
                {
                    id: 2, name: Donut1, title: 'Donut Wall', 
                    description: 'DESCRIPTION!', second: Donut2   
                },
                {
                    id: 3, name: PicturePallet, title: 'Picture Pallet', 
                    description: 'DESCRIPTION!', 
                },
                { 
                    id: 4, name: IDoBBQ, title:'I Do BBQ',
                    description: 'This is a space to provide a description of the image / design',
                }, 
                { 
                    id: 5, name: BabyShower, title:'Baby Shower',
                    description: 'This is a space to provide a description of the image / design'
                },

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
            this.state.packages.map((item, i) => <Image key={i} item={item} 
            isMobile={this.state.isMobile}
            handleZoom={this.handleZoom} />)
        )
            
        // switch(section){
        // case 'signs':
        //     return this.state.packages.slice(0,3).map((item, i) => <Image key={i} item={item} 
        //     isMobile={this.state.isMobile}
        //     handleZoom={this.handleZoom} />)
        // default:
        //     return this.state.packages.map((item, i) => <Image key={i} item={item} 
        //     isMobile={this.state.isMobile}
        //     handleZoom={this.handleZoom} />)
        // }
        
        // I don't remember what this was for ^^^
    }

    setMobile = () => {
        this.setState({
            isMobile: !this.state.isMobile
        })
        this.displayImages()
    }

    handleZoom = (value) => {
        value ? document.body.style.overflow = 'hidden' :
            document.body.style.overflow = 'unset'

        this.setState({
            selectedImage: value
        })
    }

    handleSelect = (selectedIndex) => {
        this.setState({
            index: selectedIndex,
        })
    };

    icons = (value) => {
        if (value === 'left') {
            return (
                <ArrowLeftCircleFill
                    color="rgb(34, 34, 36)"
                    size={50}
                />
            )
        }
        if (value === 'right') {
            return (
                <ArrowRightCircleFill
                    color="rgb(34, 34, 36)"
                    size={50}
                />
            )
        }
    }

    getSelectedImage = () => {
        return( 
            <div className="zoom">
                <div className='zoom-img-button'>
                    <button className="zoom-button" onClick={() => this.handleZoom(null)}>&#x2613;</button>
                    <Carousel 
                        className='zoom-image-container'
                        interval={null}
                        prevIcon={this.icons('left')}
                        nextIcon={this.icons('right')}
                    >
                        <Carousel.Item>
                            <img src={this.state.selectedImage.name} className='zoom-image' alt={this.state.selectedImage.name}></img>
                        </Carousel.Item>
                        <Carousel.Item>
                            <img src={this.state.selectedImage.second} className='zoom-image' alt={this.state.selectedImage.name}></img>
                        </Carousel.Item>
                    </Carousel>
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
                <div id='scroll-up-button-div' ref={ref => {this.scrollButtonRef = ref}}>
                    <button id='scroll-up-button' ref={ref => {this.scrollDivRef = ref}}
                    onClick={this.scrollUp}
                    >
                     <p>&uarr;</p>
                    </button>
                </div>
                <div className='header-container' ref={ref => {this.headerRef = ref}}>
                    <h1 className='component-header'>Packages</h1>
                </div>
                {this.state.selectedImage ? 
                    this.getSelectedImage()
                    : null
                }
                {/* <div>
                    <h2 className='component-header' id='h2'> Signs </h2>
                </div> */}
                <ul className="package-list">{this.displayImages()}</ul>
            </div>
        )
    }
}

