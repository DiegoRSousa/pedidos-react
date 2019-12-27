import React, { Component } from 'react';
import ProdutoForm from './ProdutoForm';
import ProdutoList from './ProdutoList';
import Search from '../search/Search';
import Main from '../template/Main';
import api from '../../services/Api';

const headerProps = {
    icon: 'angle-double-right',
    title: 'Produtos',
    subtitle: 'Crud de produtos'
}

const initialState = {
    produto: {id: 0, codigo: '', descricao: '', preco: '', categoriaId: 0, categoriaDescricao: ''},
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
        api.get("produtos").then(resp => {
            const produtos = resp.data; 
            this.setState({produto: initialState.produto, produtos});
        });
        api.get("/categorias").then(resp => {
             const categorias = resp.data;
             this.setState({categorias});
         });    
    }

    update(event) {
        const produto = {...this.state.produto}
        produto[event.target.name] = event.target.value
        this.setState({produto})
    }

    save() {
        const produto = this.state.produto;
        const method = produto.id ? 'put' : 'post';
        console.log(produto);
        api[method]("produtos", produto).then(resp => {
             this.refresh();
        });
    }

    search() {
        const descricao = document.getElementById("search").value;
        if(descricao !== "")
             api.get(`produtos/search/${descricao}`).then(resp => {
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
        api.delete(`produtos/${produto.id}`).then(resp => {
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
            <Search search={this.search} />
            <ProdutoList 
                list = {this.state.produtos}
                load = {this.load}
                remove = {this.remove}/>
            </Main>
        )
    }
}