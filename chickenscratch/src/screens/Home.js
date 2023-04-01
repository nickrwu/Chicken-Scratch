import React from 'react';
import {Link} from 'react-router-dom';

import Navbar from '../components/Navbar';

function Home() {
    return (
        <body className='Home'>
            <Link to={'/Home'} style={{ textDecoration: 'none' }}>
            <div style={{ 
                display: 'flex', 
                flexDirection: 'column', 
                alignItems: 'flex-start',
                border: '1px solid #ddd',
                borderRadius: '8px',
                padding: '16px',
                boxShadow: '0px 2px 4px rgba(0, 0, 0, 0.1)'
            }}>
                <img src= '../components/test.png'/>
                <div style={{ marginTop: '8px', fontWeight: 'bold' }}>{'title'}</div>
            </div>
            </Link>
        </body>
    );
}

export default Home;
