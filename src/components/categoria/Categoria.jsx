import React, { Component } from 'react';
import axios from 'axios';

import CategoriaForm from './CategoriaForm';
import CategoriaList from './CategoriaList';
import CategoriaSearch from './CategoriaSearch';
import Main from '../template/Main';

const headerProps = {
    icon: 'angle-double-right',
    title: 'Categorias',
    subtitle: 'Crud de categorias'
}
const baseUrl = "http://localhost:8080/categorias";

const initialState = {
    categoria: {id: 0, descricao: ''},
    list: []
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
        axios(baseUrl).then(resp => {
            const list = resp.data;
            this.setState({categoria: initialState.categoria, list})   
        });
    }

    save() {
        const categoria = this.state.categoria;
        const method = categoria.id ? 'put' : 'post';
        const url = categoria.id ? `${baseUrl}/${categoria.id}` : baseUrl;
        console.log(method);
        console.log(url);

        axios[method](url, categoria).then(resp => {
            this.refresh();
        });
    }

    remove(categoria) {
        axios.delete(`${baseUrl}/${categoria.id}`).then(resp => {
            this.refresh();
        })

    }

    search() {
       const descricao = document.getElementById("search").value;
       if(descricao !== "")
            axios(`${baseUrl}/search/${descricao}`).then(resp => {
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
                        clear = {this.clear}/>
                    <CategoriaSearch
                        search = {this.search} />
                    <CategoriaList
                        list = {this.state.list} 
                        load = {this.load}
                        remove = {this.remove}/>
            </Main>
        )
        
    }
}