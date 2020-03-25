import React from 'react'
import { Link } from 'react-router-dom'


export default class Banner extends React.Component {

    displayProps = () => {
        // let location = document.getElementById('designs-component')
        // if(location){
        //     document.getElementById('packages').scrollIntoView({behavior: 'smooth'})
        // }
        if(this.props.scrollToPackages){
            this.props.scrollToPackages()
            
        }
        
    }

    render(){

        return (
            <div className='banner' >
                <button 
                onClick={this.displayProps}
                style={{backgroundColor: 'black', border: 'none'}}>
                <Link className='banner-link' to={{
                    pathname: '/designs',
                    state: {
                        fromBanner: true
                    }
                }}
                >
                    ULTIMATE &nbsp; WEDDING &nbsp; PACKAGE 
                </Link>
                </button>
            </div>
        )
    }
}
