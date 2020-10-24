import React from 'react'
import Banner from './Banner'
import Navbar from'./Navbar'
import Image from './Image'
import One from '../Assets/1.jpeg'
import Two from '../Assets/2.jpeg'
import Three from '../Assets/3.jpeg'



export default class Creations extends React.Component {

    state = {
        designImages: [],
        packages: [],
        isMobile: false,
        selectedImage: null
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
            designImages: 
            [
                { 
                    id: 1, name: One, caption:'I Do BBQ',
                    description: 'This is a space to provide a description of the image / design', import: One
                }, 
                { 
                    id: 2, name: Two, caption:'Something New',
                    description: 'This is a space to provide a description of the image / design', import: Two
                },
                { 
                    id: 3, name: Three, caption:'Baby Shower',
                    description: 'This is a space to provide a description of the image / design', import: Three
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

    displayImages = (section) => {
        switch(section){
        case 'signs':
            return this.state.designImages.slice(0,3).map((item, i) => <Image key={i} item={item} 
            isMobile={this.state.isMobile}
            handleZoom={this.handleZoom} />)
        default:
            return this.state.designImages.map((item, i) => <Image key={i} item={item} 
            isMobile={this.state.isMobile}
            handleZoom={this.handleZoom} />)
        }
        
    }

    setMobile = () => {
        this.setState({
            isMobile: !this.state.isMobile
        })
        this.displayImages()
    }

    handleZoom = (value) => {
        this.setState({
            selectedImage: value
        })
    }

    getSelectedImage = () => {
        return( 
            <div className="zoom">
                <div className='zoom-img-button'>
                    <button className="zoom-button" onClick={() => this.handleZoom(null)}>&#x2613;</button>
                    <div className='zoom-image-container'>
                        <img src={this.state.selectedImage.import} className='zoom-image' alt={this.state.selectedImage.name}></img>
                    </div>
                </div>
            </div>
        )
    }
    
    render(){
        return (
            <div className='component' id="creations-component" >
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
                    <h1 className='component-header'>Creations</h1>
                </div>
                {this.state.selectedImage ? 
                    this.getSelectedImage()
                    : null
                }
                <div>
                    <h2 className='component-header' id='h2'> Signs </h2>
                </div>
                <ul className="design-list">{this.displayImages('signs')}</ul>
            </div>
        )
    }
}

