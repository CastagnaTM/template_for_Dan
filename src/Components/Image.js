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
                    <div className='designs-component-image-div'>
                        <img src={this.props.item.name} className='designs-component-image' alt='design'></img>
                    </div>
                    <div className='designs-component-text-div'>
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
                        <div className='design-component-body' id='designs-b'>
                            <div className='designs-component-text-div' 
                            id='designs-component-text-b'
                            // style={{display: this.state.showText ? 'block' : 'none' }}
                            >
                                <div className='text-div-container'>
                                    <h2>
                                        {this.props.item.caption}
                                    </h2>
                                    <p id="image-description">
                                        {this.props.item.description}
                                    </p>
                                </div>
                            </div>
                            <div className='designs-component-image-div-b' onClick={() => this.revealText()}
                            >
                            <img src={this.props.item.name} className='designs-component-image' alt='design'></img>            
                            </div>
                        </div>
                    </li>
                )
            }
            else {
                return (
                    <li>
                        <div className='design-component-body' id='designs-a'>
                            <div className='designs-component-image-div-a' onClick={() => this.revealText()}>
                                <img src={this.props.item.name} className='designs-component-image' alt='design'></img>
                            </div>
                            <div className='designs-component-text-div' 
                            id='designs-component-text-a'
                            // style={{display: this.state.showText ? 'block' : 'none' }}
                            >
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