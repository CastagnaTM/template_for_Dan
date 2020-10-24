import React from 'react'



export default class Image extends React.Component {

    state={
        showText: false,
        isMobile: this.props.isMobile
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

    render(){
        if(this.state.isMobile){
            return (
                <li>
                    <div className='design-component-body'>
                        <div className='creations-component-image-div'>
                            <img src={this.props.item.name} className='creations-component-image' alt={this.props.item.name}></img>
                        </div>
                        <div className='creations-component-text-div'>
                            <div className='text-div-container'>
                                <h2>
                                    {this.props.item.caption}
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
                        <div className='design-component-body' id='creations-b'>
                            <div className='creations-component-text-div' id='creations-component-text-b'>
                                <div className='text-div-container'>
                                    <h2>
                                        {this.props.item.caption}
                                    </h2>
                                    <p id="image-description">
                                        {this.props.item.description}
                                    </p>
                                </div>
                            </div>
                            <div className='creations-component-image-div-b' onClick={()=>this.props.handleZoom(this.props.item)}>
                                <img src={this.props.item.name} className='creations-component-image' alt={this.props.item.name}></img>            
                            </div>
                        </div>
                    </li>
                )
            }
            else {
                return (
                    <li>
                        <div className='design-component-body' id='creations-a'>
                            <div className='creations-component-image-div-a' onClick={()=>this.props.handleZoom(this.props.item)}>
                                <img src={this.props.item.name} className='creations-component-image' alt={this.props.item.name}></img>
                            </div>
                            <div className='creations-component-text-div' id='creations-component-text-a'>
                                <div className='text-div-container'>
                                    <h2>
                                        {this.props.item.caption}
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