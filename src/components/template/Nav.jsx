import React from 'react';
import { Link } from 'react-router-dom';

export default porps => 
    <aside className="menu-area">
        <nav className="menu">
            <Link to="/">
                <i className="fa fa-home"></i> Home &nbsp;
            </Link>
            <Link to="/categorias">
                <i className="fa fa-angle-double-right"></i> Categorias
            </Link>
            
            {/* <a href="#"><i className="fa fa-layer-boxes"></i> Produtos</a> */}
        </nav>
    </aside>