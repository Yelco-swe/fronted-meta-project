import React from 'react';
import Nav from './Nav';

function Header() {
    return (
        <header>
            <div className="container">
                <div className="logo">LITTLE LEMON</div>
                 <Nav />
            </div>
            
        </header>
        
    );
}

export default Header;