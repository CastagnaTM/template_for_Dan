import React from 'react'



export default class Image extends React.Component {

    state={
        showText: false
    }
    componentDidMount() {
        window.addEventListener('resize', () => {
            this.setState({
                isMobile: window.innerWidth < 800
            });
        }, false);
    }

    revealText = () => {
        this.setState({
            showText: !this.state.showText
        })
    }

    render(){
        if(this.state.isMobile){
            return (
                <div className='component-body'>
                    <div className='component-image-div' onClick={() => this.revealText()}>
                        <figure>
                            <img src={this.props.item.name} className='component-image' alt='design images'></img>
                            <figcaption className='caption'>{this.props.item.caption}</figcaption>
                        </figure>
                    </div>
                    <div className='component-text' style={{display: this.state.showText ? 'block' : 'none' }}>
                        <p>
                            Proident nostrud reprehenderit aliqua sunt laboris nostrud velit ex commodo eiusmod fugiat aliqua esse eu. Id laborum in irure ex duis voluptate aliquip dolore nostrud aliquip Lorem. Irure quis dolore nulla voluptate dolore sit adipisicing. Dolore voluptate mollit velit consectetur dolor cillum adipisicing irure incididunt et sunt.
                        </p>
                    </div>
                </div>
            )
        }
        else {
            if(this.props.item.id % 2 === 0){
                return (
                    <div className='component-body'>
                        <div className='component-text' style={{display: this.state.showText ? 'block' : 'none' }}>
                            <p>
                                Proident nostrud reprehenderit aliqua sunt laboris nostrud velit ex commodo eiusmod fugiat aliqua esse eu. Id laborum in irure ex duis voluptate aliquip dolore nostrud aliquip Lorem. Irure quis dolore nulla voluptate dolore sit adipisicing. Dolore voluptate mollit velit consectetur dolor cillum adipisicing irure incididunt et sunt.
                            </p>
                        </div>
                        <div className='component-image-div' onClick={() => this.revealText()}>
                            <figure>
                                <img src={this.props.item.name} className='component-image' alt='design images'></img>
                                <figcaption className='caption'>{this.props.item.caption}</figcaption>
                            </figure>
                        </div>
                    </div>
                )
            }
            else {
                return (
                    <div className='component-body'>
                        <div className='component-image-div' onClick={() => this.revealText()}>
                            <figure>
                                <img src={this.props.item.name} className='component-image' alt='design images'></img>
                                <figcaption className='caption'>{this.props.item.caption}</figcaption>
                            </figure>
                        </div>
                        <div className='component-text' style={{display: this.state.showText ? 'block' : 'none' }}>
                            <p>
                                Proident nostrud reprehenderit aliqua sunt laboris nostrud velit ex commodo eiusmod fugiat aliqua esse eu. Id laborum in irure ex duis voluptate aliquip dolore nostrud aliquip Lorem. Irure quis dolore nulla voluptate dolore sit adipisicing. Dolore voluptate mollit velit consectetur dolor cillum adipisicing irure incididunt et sunt.
                            </p>
                        </div>
                    </div>
                )
            }
        }
        
    }
}