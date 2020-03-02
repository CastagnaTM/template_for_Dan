import React, { Component } from 'react'


// this component used to hold a slideshow. I've since decided to get rid of that, in favor of a cleaner and more streamlined user experience
export default class Home extends Component {
    
    state = {
        images: [],
        currentImage: 1
    }

    componentDidMount = () => {
        // setInterval(this.changeSlide, 2500);
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
                            This is a space where you could put a brief introduction
                        </p>
                        <p>
                            Something like: Hey, I'm Dan. I design things. Like these Chihuahuas.
                            I know it sounds weird, but it's true. I designed these Chihuahuas, and for a reasonable price
                            I could design one for you too, or you could rent one that I've already designed. 
                        </p>
                        <p>
                            Take a looks at the "Designs" tab to learn more about each Chihuahua I've worked on in the past.
                        </p>
                    </div>
                </div>
            </div>
        )
    }
    
}
