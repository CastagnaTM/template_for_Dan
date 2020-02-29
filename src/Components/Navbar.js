import React from 'react';
import { Link } from 'react-router-dom';
import Dan from '../Assets/Dan.png'

export default function Navbar() {

    return (
        <nav-bar>
            <ul className='nav-links'>
                <Link to='/' className='nav-style'>
                    <li><img className='icon' src={Dan} alt='home'></img></li>
                </Link>
                <Link to='/about' className='nav-style'>
                    <li>About</li>
                </Link>
                <Link to='/designs' className='nav-style'>
                    <li>Designs</li>
                </Link>
                <Link to='/contact' className='nav-style'>
                    <li>Contact</li>
                </Link>
            </ul>
        </nav-bar>
    )

}
