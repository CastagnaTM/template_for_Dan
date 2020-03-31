import React, { Component } from 'react'
import Banner from './Banner'
import Navbar from'./Navbar'


// this component used to hold a slideshow. I've since decided to get rid of that, in favor of a cleaner and more streamlined user experience
export default class Home extends Component {
    
    state = {
        images: [],
        currentImage: 1
    }

    componentDidMount = () => {
        document.title="Home";
    }

    getImage = () => {
        let slide = require(`../Assets/${this.state.currentImage}.jpg`);
        return slide;
    }

    changeSlide = () => {
        if(this.state.currentImage < 6){
            this.setState(prevState => ({
                currentImage: prevState.currentImage + 1
            }));
        }
        else{
            this.setState({
                currentImage: 1
            });
        }
    }

    render(){
        return (
            <div className='component' id='home-component'>
                <Navbar />
                <Banner />

                <div className='header-container'>
                    <h1 className='component-header'>Dan's Designs</h1>
                </div>
                <div className='component-body'>
                    {/* <div className='component-slideshow'>
                        <figure>
                            <img src={this.getImage()} className='component-slideshow-slide' alt="slideshow images"></img>
                            <figcaption className='caption'>A description for each image could go here</figcaption>
                        </figure>
                    </div> */}
                    <div className='component-text'>
                        <p>
                            Hello! If you are seeing this page, you've reached Dan's Unforgettable Creations. 
                            This site is currently a work in progress, and is still receiving regular updates. Feel free to look around though!
                        </p>
                    </div>
                </div>
            </div>
        )
    }
    
}
