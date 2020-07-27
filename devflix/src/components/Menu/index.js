import React from 'react';
import logo from '../../assets/img/logo.png';
import './Menu.css';

function Menu() {
    return (
        <nav className="Menu">
        <a href="/">
            <img className="Logo" src={logo} alt="Devflix logo" />
        </a>

        <a className="ButtonLink" href="/" >
            Novo video
        </a>
        </nav>
    );
}

export default Menu;