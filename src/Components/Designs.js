import React from 'react'
import Image from './Image'
import One from '../Assets/1.jpg'
import Two from '../Assets/2.jpg'
import Three from '../Assets/3.jpg'
import Four from '../Assets/4.jpg'
import Five from '../Assets/5.jpg'
import Six from '../Assets/6.jpg'



export default class Designs extends React.Component {

    state = {
        designImages: []
    }
    
    scrollListener = () => {
        let button = document.getElementById('scroll-up-button')
        let buttonDiv = document.getElementById('scroll-up-button-div')
        if (window.scrollY > 100){
            // button.classList.remove('not-scrolling');
            button.classList.add('scrolling');
            buttonDiv.classList.add('scrolling');
        }
        else {
            button.classList.remove('scrolling');
            buttonDiv.classList.remove('scrolling');
            // button.classList.add('not-scrolling');
        }
    }

    componentDidMount = () => {

        this.setImages();
        if (this.props.location.state){
            this.getPackages()
            
        }
        
       window.addEventListener("scroll", this.scrollListener)
    }

    componentWillUnmount = () => {
        window.removeEventListener("scroll", this.scrollListener);
    }

    setImages = () => {
        this.setState({
            designImages: 
            [{ id: 1, name: One, caption:'Insert a description for your design'}, { id: 2, name: Two, caption:'Insert a description for your design'}, 
            { id: 3, name: Three, caption:'Insert a description for your design'}, { id: 4, name: Four, caption:'Insert a description for your design'}, 
            { id: 5, name: Five, caption:'Insert a description for your design'}, { id: 6, name: Six, caption:'Insert a description for your design'}]
        })
    }

    getPackages = () => {
        let scroll = document.getElementById('packages');
       if(scroll){
           setTimeout(() =>{
            scroll.scrollIntoView({behavior: 'smooth'})
           }, 500);
       } 
    }

    scrollUp = () => {
       document.getElementById('root').scrollIntoView();
    }

    displayImages = () => {
        return this.state.designImages.map((item, i) => <Image key={i} item={item}/>)
    }
    
    render(){
        return (
            <div className='component' id="designs-component">
                <div id='scroll-up-button-div' >
                    <button id='scroll-up-button'
                    onClick={this.scrollUp}
                    >
                        Scroll To Top
                    </button>
                </div>
                 <div className='header-container'>
                    <h1 className='component-header'>Designs</h1>
                </div>
                {this.displayImages()}
                <section id='packages' >
                    {/* <div className='packages-text'> */}
                        <p>This is where packages might go</p>
                        <h1>ULTIMATE WEDDING PACKAGE</h1>
                    {/* </div> */}
                </section>
                
            </div>
        )
    }

}

