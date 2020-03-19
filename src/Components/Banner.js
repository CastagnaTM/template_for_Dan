import React from 'react'
import { Link } from 'react-router-dom'


export default class Banner extends React.Component {

    displayProps = () => {
        // let location = document.getElementById('designs-component')
        // if(location){
        //     document.getElementById('packages').scrollIntoView({behavior: 'smooth'})
        // }
        if(this.props.getPackages){
            this.props.getPackages()
        }
        
    }

    render(){

        return (
            <div className='banner' onClick={this.displayProps} >
                <Link className='banner-link' to={{
                    pathname: '/designs',
                    state: {
                        fromBanner: true
                    }
                }}
                >
                    ULTIMATE &nbsp; WEDDING &nbsp; PACKAGE 
                </Link>
            </div>
        )
    }
}
