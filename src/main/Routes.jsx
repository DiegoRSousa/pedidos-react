import React from 'react';
import {Switch, Route, Redirect } from 'react-router';
import { isAuthenticated } from '../services/Auth';
import Home from '../components/home/Home';
import Categoria from '../components/categoria/Categoria';
import Produto from '../components/produtos/Produto';
import Login from '../components/login/Login';

const PrivateRoute = ({component: Component, ...rest}) => (
    <Route
        {...rest}
        render={props => 
            isAuthenticated() ? (
                <Component {...props} />
            ): (
                <Redirect to={{ pathname: "/", state: { from : props.location}}} />
            )
        }
        />
);

export default props =>
<Switch>
    <Route exact path='/' component={Login} />
    <PrivateRoute path='/categorias' component={Categoria} />
    <PrivateRoute path='/produtos' component={Produto} />
    <PrivateRoute path='/home' component={Home} />
    <Redirect from='*' to='/' />
</Switch>