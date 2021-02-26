import React from 'react'
import { LayersFill } from 'react-bootstrap-icons'

import { Image } from 'cloudinary-react'
import { Cloud, Key, Secret } from '../constants'

export default class PackageImage extends React.Component {

    state={
        showText: false,
        isMobile: false
    }

    componentDidMount() {
        this.windowSizeCheck();
        window.addEventListener('resize', this.resizeListener);
    }

    componentWillUnmount() {
        window.removeEventListener('resize', this.resizeListener);
    }

    resizeListener = () => {
        this.setState({
            isMobile: window.innerWidth < 821
        });
    }

    windowSizeCheck = () => {
        if (window.innerWidth < 800){
            this.setState({
                isMobile: true
            })
        }
    }

    revealText = () => {
        this.setState({
            showText: !this.state.showText
        })
    }

    getStack = () => {
        return (
            <LayersFill
                className='packages-image-stack' 
                size={30}
                color="white"
            />
        )
    }

    render(){
        if(this.state.isMobile) {
            return (
                <li>
                    <div className='package-component-body'>
                        <div className='packages-component-image-div' onClick={()=>this.props.handleCarousel(this.props.item)}>
                            {this.props.item.images && this.getStack()}
                            <Image
                                cloudName={Cloud}
                                apiKey={Key}
                                apiSecret={Secret}
                                publicId={this.props.item.name}
                                className='packages-component-image'
                                alt={this.props.item.name}
                            />
                        </div>
                        <div className='packages-component-text-div'>
                            <div className='text-div-container'>
                                <h2 id='package-header'>
                                    {this.props.item.title}
                                </h2>
                                <ul id="image-description">
                                    {this.props.item.description.map((point, i) => <li key={i} >{point}</li>)}
                                </ul>
                            </div>
                        </div>
                    </div>
                </li>
            )
        }
        else {
            if(this.props.item.id % 2 === 0) {
                return (
                    <li>
                        <div className='package-component-body' id='packages-b'>
                            <div className='packages-component-text-div' id='packages-component-text-b'>
                                <div className='text-div-container'>
                                    <h2>
                                        {this.props.item.title}
                                    </h2>
                                    <ul id="image-description">
                                        {this.props.item.description.map((point, i) => <li key={i} >{point}</li>)}
                                    </ul>
                                </div>
                            </div>
                            <div className='packages-component-image-div-b' onClick={()=>this.props.handleCarousel(this.props.item)}>
                                {this.props.item.images && this.getStack()}
                                <Image
                                    cloudName={Cloud}
                                    apiKey={Key}
                                    apiSecret={Secret}
                                    publicId={this.props.item.name}
                                    className='packages-component-image'
                                    alt={this.props.item.name}
                                />
                            </div>
                        </div>
                    </li>
                )
            }
            else {
                return (
                    <li>
                        <div className='package-component-body' id='packages-a'>
                            <div className='packages-component-image-div-a' onClick={()=>this.props.handleCarousel(this.props.item)}>
                                {this.props.item.images && this.getStack()}
                                <Image
                                    cloudName={Cloud}
                                    apiKey={Key}
                                    apiSecret={Secret}
                                    publicId={this.props.item.name}
                                    className='packages-component-image'
                                    alt={this.props.item.name}
                                />
                            </div>
                            <div className='packages-component-text-div' id='packages-component-text-a'>
                                <div className='text-div-container'>
                                    <h2>
                                        {this.props.item.title}
                                    </h2>
                                    <ul id="image-description">
                                        {this.props.item.description.map((point, i) => <li key={i} >{point}</li>)}
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </li>
                )
            }
        }   
    }
}