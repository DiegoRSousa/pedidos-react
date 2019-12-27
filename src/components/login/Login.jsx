import './Login.css';
import React, { Component } from 'react';
import  api  from '../../services/Api';
import {login as authLogin}  from '../../services/Auth';
import { Redirect } from 'react-router';
const initialState = { usuario: {nome: '', senha: ''}};

export default class Login extends Component {
    constructor(props) {
        super(props); 
        this.state = initialState;

        this.update = this.update.bind(this);
        this.clear = this.clear.bind(this);
        this.login = this.login.bind(this);
    }
    
    update(event) {       
        const usuario = {...this.state.usuario};
        usuario[event.target.name] = event.target.value;
        this.setState({usuario});
    }
    login = async () => {
        const response = await api.post("/login", this.state.usuario);
        authLogin(response.headers.authorization);
        this.props.history.push("/home");
    }
    clear() {
        this.setState({usuario: initialState.usuario});
    }
    render() {
        return (
            <div className="form login">
                <div className="card">
                    <div className="card-header">Login</div>
                    <div className="card-body">
                        <div className="col-12">
                            <label>Usuario: </label>
                            <input type="text" name="nome" className="form-control" 
                                value={this.state.usuario.nome}
                                onChange={this.update} placeholder="Digite o usuário"/>
                        </div>
                        <div className="col-12">
                            <label>Senha: </label>
                            <input type="password" name="senha" className="form-control" 
                                value={this.state.usuario.senha}
                                onChange={this.update} placeholder="Digite a senha"/>
                        </div>
                        
                        <div className="row mt-2">
                            <div className="col-12 d-flex">
                                <button className="btn btn-primary" onClick={this.login}>Login</button>
                                <button className="btn btn-secondary ml-2" onClick={this.clear}>Cancelar</button>
                            </div>
                        </div>
                    </div> 
                </div>
            </div>
    )
    }
}
    