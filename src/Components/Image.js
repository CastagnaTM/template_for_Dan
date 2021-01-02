import React from 'react'
import { LayersFill } from 'react-bootstrap-icons'


export default class Image extends React.Component {

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
            isMobile: window.innerWidth < 800
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
        if(this.state.isMobile){
            return (
                <li>
                    <div className='package-component-body'>
                        <div className='packages-component-image-div' onClick={()=>this.props.handleCarousel(this.props.item)}>
                            <img src={this.props.item.name} className='packages-component-image' alt={this.props.item.name}></img>
                        </div>
                        <div className='packages-component-text-div'>
                            <div className='text-div-container'>
                                <h2>
                                    {this.props.item.title}
                                </h2>
                                <p id="image-description">
                                    {this.props.item.description}
                                </p>
                            </div>
                        </div>
                    </div>
                </li>
            )
        }
        else {
            if(this.props.item.id % 2 === 0){
                return (
                    <li>
                        <div className='package-component-body' id='packages-b'>
                            <div className='packages-component-text-div' id='packages-component-text-b'>
                                <div className='text-div-container'>
                                    <h2>
                                        {this.props.item.title}
                                    </h2>
                                    <p id="image-description">
                                        {this.props.item.description}
                                    </p>
                                </div>
                            </div>
                            <div className='packages-component-image-div-b' onClick={()=>this.props.handleCarousel(this.props.item)}>
                                {this.props.item.images && this.getStack() }
                                <img src={this.props.item.name} className='packages-component-image' alt={this.props.item.name}></img>            
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
                                {this.props.item.images ? this.getStack() : null}
                                <img src={this.props.item.name} className='packages-component-image' alt={this.props.item.name}></img>
                            </div>
                            <div className='packages-component-text-div' id='packages-component-text-a'>
                                <div className='text-div-container'>
                                    <h2>
                                        {this.props.item.title}
                                    </h2>
                                    <p id="image-description">
                                        {this.props.item.description}
                                    </p>
                                </div>
                            </div>
                        </div>
                    </li>
                )
            }
        }
        
    }
}