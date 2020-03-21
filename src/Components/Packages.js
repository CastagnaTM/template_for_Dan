import React, { Component } from 'react';


export default class Packages extends Component {

    state={
        showDescription: false
    }

    toggleDescription = () => {
        this.setState({
            showDescription: !this.state.showDescription
        })
    }

    render() {
        return (
            <div className='packages-component-body'>
                <div className='package-name' onClick={()=> this.toggleDescription()}> 
                    <div id="menu-carrot" className={this.state.showDescription ? 'menu-carrot-open' : null} >&#9658; </div>  
                    <p>{this.props.item.name} &nbsp;</p>
                    <a id='download-link' href={this.props.item.download} download='Package Checklist'>Download</a>
                </div>
                <div id='package-description' style={{maxHeight: this.state.showDescription ? null : 0}}>
                    <p>{this.props.item.description}</p>
                </div>     
            </div>
        )
    }
}
