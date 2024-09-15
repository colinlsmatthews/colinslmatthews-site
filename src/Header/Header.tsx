import React from 'react';
import Nav from '../Nav/Nav';
import './Header.css';

function Header(props) {
    console.log('Header props:', props); // Debug log

    return (
        <header>
            <h1 class="sans">Colin L.S. Matthews</h1>
            <Nav onSelectShape={props.onSelectShape}/>
        </header>
    );
}

export default Header;
