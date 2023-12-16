// components/Header.js
import Image from 'next/image';
import React from 'react';

const headerStyle = {
    textAlign: 'center',
    padding: '20px',
    background: '#333',
    color: '#fff',
};

const heroSectionStyle = {
    position: 'relative',
    height: '400px',
    backgroundImage: `url("/banner.png")`, // Add the path to your image
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    color: '#fff',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    textShadow: '2px 2px 4px rgba(0, 0, 0, 0.8)',
};

const Header = () => {
    return (
        <header style={headerStyle}>
            <div style={heroSectionStyle}>
                <h1 className='text-[100px] text-black'>Rohit Kumar</h1>
                {/* Links */}
                <div className='flex'>
                    <p>About</p>
                    <p>About</p>
                </div>
            </div>
        </header>
    );
};

export default Header;
