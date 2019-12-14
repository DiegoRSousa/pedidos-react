import React, { Component } from 'react';
import ProdutoForm from './ProdutoForm';
import ProdutoSearch from './ProdutoSearch';
import ProdutoList from './ProdutoList';
import Main from '../template/Main';
import axios from 'axios';

const headerProps = {
    icon: 'angle-double-right',
    title: 'Produtos',
    subtitle: 'Crud de produtos'
}

const baseUrl = "http://localhost:8080/";

const initialState = {
    produto: {id: 0, codigo: '', descricao: '', preco: '', categoria: {id: 0}},
    produtos: [],
    categorias: []
}

export default class Produto extends Component {
    constructor(props) {
        super(props);
        this.state = initialState;
        this.update = this.update.bind(this);
        this.save = this.save.bind(this);
        this.clear = this.clear.bind(this);
        this.search = this.search.bind(this);
        this.remove = this.remove.bind(this);
        this.load = this.load.bind(this);
    
        this.refresh();
    }

    refresh() {
        axios(`${baseUrl}produtos`).then(resp => {
            const produtos = resp.data; 
            this.setState({produto: initialState.produto, produtos});
        });
        axios(`${baseUrl}categorias`).then(resp => {
             const categorias = resp.data;
             this.setState({produto: initialState.produto, categorias});
         });    
    }

    update(event) {
        const produto = {...this.state.produto}
        if(event.target.name === 'categoria') 
            produto.categoria.id = event.target.value;
        else
            produto[event.target.name] = event.target.value
        this.setState({produto})
    }

    save() {
        console.log(this.state.produto);
        const produto = this.state.produto;
        const method = produto.id ? 'put' : 'post';
        axios[method](`${baseUrl}produtos`, produto).then(resp => {
             this.refresh();
        });
    }

    search() {
        const descricao = document.getElementById("search").value;
        if(descricao !== "")
             axios(`${baseUrl}produtos/search/${descricao}`).then(resp => {
                 const produtos = resp.data;
                 this.setState({produto: initialState.produto, produtos})   
             }).catch(function (error) {
                 console.log("erro");
             });
         else 
             this.refresh();
     }

    clear() {
        this.setState({produto: initialState.produto})
    }

    load(produto) {
        this.setState({produto})
    }

    remove(produto) {
        axios.delete(`${baseUrl}produtos/${produto.id}`).then(resp => {
            this.refresh();
        })
    }

    render() {
        return (
            <Main {...headerProps}>
            <ProdutoForm 
                produto={this.state.produto} 
                categorias={this.state.categorias}
                update = {this.update}
                save = {this.save}
                clear = {this.clear}
            />
            <ProdutoSearch search={this.search} />
            <ProdutoList 
                list = {this.state.produtos}
                load = {this.load}
                remove = {this.remove}/>
            </Main>
        )
    }
}