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
                <div className='component-body' id={this.props.item.id % 2 === 0 ? 'designs-b' : 'designs-a'}>
                    <div className='component-image-div' onClick={() => this.revealText()}>
                        <button style={{backgroundColor: 'transparent', border: 'none'}}
                        aria-expanded={this.state.showText ? 'true' : 'false'}
                        aria-controls="designs-component-text-a designs-component-text-b"
                        >
                            <figure className='figure'>
                                <img src={this.props.item.name} className={this.state.showText ? 'designs-component-image-with-text' : 'designs-component-image'} alt='design'></img>
                                <figcaption className='caption'>{this.props.item.caption}</figcaption>
                            </figure>
                        </button>
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
                        <button style={{backgroundColor: 'transparent', border: 'none'}}
                        aria-expanded={this.state.showText ? 'true' : 'false'}
                        aria-controls="designs-component-text-b"
                        
                        >
                            <figure className='figure' >
                                <img src={this.props.item.name} className={this.state.showText ? 'designs-component-image-with-text' : 'designs-component-image'} alt='design'></img>
                                <figcaption className='caption'>{this.props.item.caption}</figcaption>
                            </figure>
                            </button>
                        </div>
                    </div>
                )
            }
            else {
                return (
                    <div className='component-body' id='designs-a'>
                        <div className='component-image-div' onClick={() => this.revealText()}>
                        <button style={{backgroundColor: 'transparent', border: 'none'}}
                        aria-expanded={this.state.showText ? 'true' : 'false'}
                        aria-controls="designs-component-text-a"
                        >
                            <figure className='figure'>
                                <img src={this.props.item.name} className={this.state.showText ? 'designs-component-image-with-text' : 'designs-component-image'} alt='design'></img>
                                <figcaption className='caption'>{this.props.item.caption}</figcaption>
                            </figure>
                            </button>
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