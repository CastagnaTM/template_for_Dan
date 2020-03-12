import React from 'react';
import { NavLink } from 'react-router-dom';
import Logo from '../Assets/logo2.png'

export default function Navbar() {

    return (
        <nav-bar>
            <ul className='nav-links'>
                <NavLink exact to='/' className='nav-style' activeClassName='active-nav'>
                    <li><img className='icon' src={Logo} alt='home'></img></li>
                </NavLink>
                <NavLink exact to='/about' className='nav-style' activeClassName='active-nav'>
                    <li>About</li>
                </NavLink>
                <NavLink exact to='/designs' className='nav-style' activeClassName='active-nav'>
                    <li>Designs</li>
                </NavLink>
                <NavLink exact to='/contact' className='nav-style' activeClassName='active-nav'>
                    <li>Contact</li>
                </NavLink>
            </ul>
        </nav-bar>
    )

}
