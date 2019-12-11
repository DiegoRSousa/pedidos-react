import 'bootstrap/dist/css/bootstrap.min.css';
import 'font-awesome/css/font-awesome.min.css';

import React from 'react';
import { HashRouter } from 'react-router-dom'
import './App.css';
import Nav from '../components/template/Nav';
import Footer from '../components/template/Footer';
import Routes from '../main/Routes'

export default props =>
<HashRouter>
  <div className="app">
    <Nav />
    <Routes />
    <Footer />
  </div>

</HashRouter>