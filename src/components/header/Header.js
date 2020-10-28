import React from 'react';
import HeaderMenu from './HeaderMenu.js';
import './Header.css';

export default function Header() {
    return (
        <header className="header">
            <HeaderMenu />
            <img className="header__logo"
                src="https://press.hulu.com/wp-content/uploads/2020/02/hulu-white.png"
                alt="Hulu logo" />
        </header>
    )
}
