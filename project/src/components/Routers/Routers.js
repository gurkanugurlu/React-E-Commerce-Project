import React from 'react';
import {NavLink} from 'react-router-dom';
const home="Home";
const products="Products";
const aboutUs="About Us"
const Routers= () => {

    return (
        <nav className="header__link-container">
            <NavLink to="/"  exact={true} className="nav__link" activeClassName="nav_link--active">{home}</NavLink>
            <NavLink to="/products" className="nav__link" activeClassName="nav_link--active" exact={true}>{products}</NavLink>
            <NavLink to="/about-us" className="nav__link" activeClassName="nav_link--active" exact={true}>{aboutUs} </NavLink>
        </nav>

    )
}

export default Routers;
