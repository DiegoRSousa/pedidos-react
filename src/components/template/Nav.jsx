import React from 'react';
import { Link } from 'react-router-dom';

export default porps => 
    <aside className="menu-area">
        <nav className="menu">
            <Link to="/">
                <i className="fa fa-home"></i> Home &nbsp;
            </Link>
            <Link to="/categorias">
                <i className="fa fa-angle-double-right"></i> Categorias &nbsp;
            </Link>
            <Link to="produtos">
                <i className="fa fa-angle-double-right"></i> Produtos &nbsp;
            </Link>
        </nav>
    </aside>