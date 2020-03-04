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

    componentDidMount = () => {

        this.setImages();
        if (this.props.location.state){
            console.log(this.props.location.state)
            this.getPackages()
        }

    }

    getPackages = async () => {
       let scroll = await document.getElementById('packages');
       if(scroll){
           setTimeout(() =>{
            scroll.scrollIntoView({behavior: 'smooth'})
           }, 500);
       } 
    }

    setImages = () => {
        this.setState({
            designImages: 
            [{ id: 1, name: One, caption:'Insert a description for your design'}, { id: 2, name: Two, caption:'Insert a description for your design'}, 
            { id: 3, name: Three, caption:'Insert a description for your design'}, { id: 4, name: Four, caption:'Insert a description for your design'}, 
            { id: 5, name: Five, caption:'Insert a description for your design'}, { id: 6, name: Six, caption:'Insert a description for your design'}]
        })
    }

    displayImages = () => {
        return this.state.designImages.map((item, i) => <Image key={i} item={item}/>)
    }

    loadPackages = () => {
        const packageSection = document.getElementById('packages');
        window.scrollTo(packageSection);
    }
    
    render(){
        return (
            <div className='component' id="designs-component">
                 <div className='header-container'>
                    <h1 className='component-header'>Designs</h1>
                </div>  
                {this.displayImages()}
                <section id='packages' ref={this.myRef}>
                    <p>This is where packages might go</p>
                </section>
                
            </div>
        )
    }

}
