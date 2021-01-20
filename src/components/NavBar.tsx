import React from 'react';
import { NavLink } from 'react-router-dom';

function NavBar() {
    return (
        <nav>
            <div className='logo'>
                Nordheim
            </div>
            <div className='pages'>
                <NavLink to='/'>
                    Home
                </NavLink>
                <NavLink to='/about'>
                    About
                </NavLink>
                <NavLink to='/blogs'>
                    Blogs
                </NavLink>
                <NavLink to='/contact'>
                    Contact
                </NavLink>
            </div>
        </nav>
    );
}

export default NavBar;
