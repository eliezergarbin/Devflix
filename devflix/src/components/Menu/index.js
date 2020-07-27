import React from 'react';
import logo from '../../assets/img/logo.png';
import './Menu.css';
import ButtonLink from './components/ButtonLink';

function Menu() {
    return (
        <nav className="Menu">
            <a href="/">
                <img className="Logo" src={logo} alt="Devflix logo" />
            </a>

            <ButtonLink className="ButtonLink" href="/" >
                Novo video
            </ButtonLink>
        </nav>
    );
}

export default Menu;