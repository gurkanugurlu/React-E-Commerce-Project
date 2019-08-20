import React from 'react';
import Logo from './Logo';
import Routers from '../Routers/Routers';

const Header = props => {
    return(
        <header className="header">
        <Logo />
        <Routers />
        </header>
    )
}

export default Header;
