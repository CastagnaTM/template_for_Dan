import React from 'react'



export default class Image extends React.Component {

    state={
        showText: false
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
            isMobile: window.innerWidth < 500
        });
    }

    windowSizeCheck = () => {
        if (window.innerWidth < 500){
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
                <div className='component-body' id={this.props.item.id % 2 === 0 ? 'designs-b' : 'designs-a'}>
                    <div className='component-image-div' onClick={() => this.revealText()}>
                        <figure className='figure'>
                            <img src={this.props.item.name} className={this.state.showText ? 'designs-component-image-with-text' : 'designs-component-image'} alt='design images'></img>
                            <figcaption className='caption'>{this.props.item.caption}</figcaption>
                        </figure>
                    </div>
                    <div className='designs-component-text' 
                    id={this.props.item.id % 2 === 0 ? 'designs-component-text-b' : 'designs-component-text-a'}
                    style={{display: this.state.showText ? 'block' : 'none' }} >
                        <p>
                            {this.props.item.description}
                        </p>
                    </div>
                </div>
            )
        }
        else {
            if(this.props.item.id % 2 === 0){
                return (
                    <div className='component-body' id='designs-b'>
                        <div className='designs-component-text' 
                        id='designs-component-text-b'
                        style={{display: this.state.showText ? 'block' : 'none' }}
                        >
                            <p>
                                {this.props.item.description}
                            </p>
                        </div>
                        <div className='component-image-div' onClick={() => this.revealText()}>
                            <figure className='figure' >
                                <img src={this.props.item.name} className={this.state.showText ? 'designs-component-image-with-text' : 'designs-component-image'} alt='design images'></img>
                                <figcaption className='caption'>{this.props.item.caption}</figcaption>
                            </figure>
                        </div>
                    </div>
                )
            }
            else {
                return (
                    <div className='component-body' id='designs-a'>
                        <div className='component-image-div' onClick={() => this.revealText()}>
                            <figure className='figure'>
                                <img src={this.props.item.name} className={this.state.showText ? 'designs-component-image-with-text' : 'designs-component-image'} alt='design images'></img>
                                <figcaption className='caption'>{this.props.item.caption}</figcaption>
                            </figure>
                        </div>
                        <div className='designs-component-text' 
                        id='designs-component-text-a'
                        style={{display: this.state.showText ? 'block' : 'none' }}>
                            <p>
                                {this.props.item.description}
                            </p>
                        </div>
                    </div>
                )
            }
        }
        
    }
}