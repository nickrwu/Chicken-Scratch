import React from 'react';
import {Link} from 'react-router-dom';

const Navbar = () => {
    return (
        <div>
            <div className='logo'>
                ChickenScratch
            </div>
            <nav className='pages'>
                <ul className='ul'>
                    <li>
                        <Link to='/'>Home</Link>
                    </li>
                </ul>
            </nav>
        </div>
    )
}

export default Navbar;