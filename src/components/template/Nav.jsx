import './Nav.css';
import React from 'react';
import { Link } from 'react-router-dom';

export default porps => 
<aside className="menu-area">
    <nav className="menu">
    <Link to="home">
        <i className="fa fa-home"></i> Home
    </Link>
    <Link to="categorias">
        <i className="fa fa-angle-double-right"></i> Categorias
    </Link>
    <Link to="produtos">
        <i className="fa fa-angle-double-right"></i> Produtos</Link>
    </nav>
</aside>