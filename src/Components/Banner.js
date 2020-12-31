import React from 'react'
import { Link } from 'react-router-dom'


export default class Banner extends React.Component {

    displayProps = () => {
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
                    pathname: '/packages',
                    state: {
                        fromBanner: true
                    }
                }}
                >
                    ULTIMATE BACKYARD WEDDING PACKAGE 
                </Link>
                {/* <p>EVERYTHING YOU NEED FOR YOUR SPECIAL DAY</p> */}
                </button>
            </div>
        )
    }
}
