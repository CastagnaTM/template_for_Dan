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
    
    render(){
        return (
            <div className='component'>
                 <div className='header-container'>
                    <h1 className='component-header'>Designs</h1>
                </div>  
                {this.displayImages()}
            </div>
        )
    }

}
