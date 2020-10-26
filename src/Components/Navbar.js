import React from 'react';
import { NavLink } from 'react-router-dom';
import Logo from '../Assets/logo2.png'

export default function Navbar() {

    return (
        <nav-bar>
            <nav className='nav-links'>
                <NavLink exact to='/' >
                    <li><img className='icon' src={Logo} alt='home'></img></li>
                </NavLink>
                <NavLink exact to='/creations' className='nav-style' activeClassName='active-nav'>
                    <li>Creations</li>
                </NavLink>
                <NavLink exact to='/packages' className='nav-style' activeClassName='active-nav'>
                    <li>Packages</li>
                </NavLink>
                <NavLink exact to='/contact' className='nav-style' activeClassName='active-nav'>
                    <li>Contact</li>
                </NavLink>
            </nav>
        </nav-bar>
    )

}
