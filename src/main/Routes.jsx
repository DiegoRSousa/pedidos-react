import React from 'react';
import { Switch, Route, Redirect } from 'react-router';

import Home from '../components/home/Home';
import Categoria from '../components/categoria/Categoria';
export default props =>
    <Switch>
        <Route exact path='/' component={Home} />
        <Route path='/categorias' component={Categoria} />
        <Redirect from='*' to='/' />
    </Switch>