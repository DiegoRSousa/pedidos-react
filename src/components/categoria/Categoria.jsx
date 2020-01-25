import React, { Component } from 'react';
import api from '../../services/Api';
import CategoriaForm from './CategoriaForm';
import CategoriaList from './CategoriaList';
import Search from '../search/Search';
import Main from '../template/Main';

const headerProps = {
    icon: 'angle-double-right',
    title: 'Categorias',
    subtitle: 'Crud de categorias'
}

const initialState = {
    categoria: {id: 0, descricao: ''},
    list: [],
    error: ''
}

export default class Categoria extends Component{

    constructor(props) {
        super(props);
        this.state = initialState;

        this.update = this.update.bind(this);
        this.save = this.save.bind(this);
        this.search = this.search.bind(this);
        this.remove = this.remove.bind(this);
        this.clear = this.clear.bind(this);
        this.load = this.load.bind(this);
        this.search = this.search.bind(this);
        this.refresh();
    }
    
    refresh() {
        this.setState({error: ""});
        api.get("/categorias").then(resp => {
            const list = resp.data;
            this.setState({categoria: initialState.categoria, list})   
        }).catch(function(error) {
            if(error.response.status === 403)
                return window.location.href = '/';
        });
    }

    save() {
        const categoria = this.state.categoria;
        if(!categoria.descricao)
            this.setState({error: "Preenchimento obrigatório"});
        else{
            const method = categoria.id ? 'put' : 'post';
            api[method]("categorias", categoria).then(resp => {
                alert('Categoria salva com sucesso');
                this.refresh();
            });
        }
    }

    remove(categoria) {
        api.delete(`/categorias/${categoria.id}`).then(resp => {
            this.refresh();
            alert('Categoria removida com sucesso');
        }).catch(function(error) {
            alert('Erro ao excluir categoria');
        });
    }

    search() {
       const descricao = document.getElementById("search").value;
       if(descricao !== "")
            api.get(`/categorias/search/${descricao}`).then(resp => {
                const list = resp.data;
                this.setState({categoria: initialState.categoria, list})   
            }).catch(function (error) {
                console.log("erro");
            });
        else 
            this.refresh();
    }

    update(event) {
        const categoria = {...this.state.categoria}
        categoria[event.target.name] = event.target.value
        this.setState({categoria})
    }

    load(categoria) {
        this.setState({categoria})
    }

    clear() {
        this.setState({categoria: initialState.categoria})
    }

    render() {
        return (
            <Main {...headerProps}>    
                <CategoriaForm 
                        categoria = {this.state.categoria}
                        update = {this.update}
                        save = {this.save}
                        clear = {this.clear}
                        error = {this.state.error}/>
                    <Search
                        search = {this.search} />
                    <CategoriaList
                        list = {this.state.list} 
                        load = {this.load}
                        remove = {this.remove} />
            </Main>
        )
    }
}