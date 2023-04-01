import React from 'react';
// import {Link} from 'react-router-dom';

import './Styles.css';
import {NavbarHelper} from './NavbarHelper';

// TODO BKND: if folder exists show in NavBar
function Navbar() {
    return (
        // <body>
        //     <div className='logo'>
        //         ChickenScratch
        //     </div>
        <div className='navbar'>
            <ul className='navbarFolders'>
                {NavbarHelper.map((key, index) => {
                    return (
                        <li
                            key = {key}
                            className = 'item'
                            onClick = {() => {
                                window.location.pathname = key.link;
                            }}
                        >
                            <div id = 'icon'>
                                {key.icon}
                            </div>
                            <div id = 'title'>
                                {key.title}
                            </div>
                        </li>
                    );
                })}
            </ul>
        </div>
    );
}

export default Navbar;