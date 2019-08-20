import React from 'react';
import logo from '../../styles/img/logo.png';
import {Link} from  'react-router-dom';
const Logo= props => {
    return(
        <div className="header__logo-container">
        <Link to="/">
         <img src={logo} alt="Logo" width={256} height={256} className="logo-container__img" />
        </Link> 
        </div>
    )
}

export default Logo;
