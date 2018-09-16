import React from 'react';
import { Link, NavLink } from "react-router-dom";
import "./Header.scss";

const Header = () => (
    <header>
        <h1>My Shop</h1>
        <Link to='/'>Home</Link>
        <NavLink to='/cart'>Cart</NavLink>
    </header>
)

export default Header;
