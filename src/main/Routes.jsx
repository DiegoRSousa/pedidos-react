import React from 'react';
import { Switch, Route, Redirect } from 'react-router';

import Home from '../components/home/Home';
import Categoria from '../components/categoria/Categoria';
import Produto from '../components/produtos/Produto';

export default props =>
    <Switch>
        <Route exact path='/' component={Home} />
        <Route path='/categorias' component={Categoria} />
        <Route path='/produtos' component={Produto} />
        <Redirect from='*' to='/' />
    </Switch>