import React from 'react';

export default props =>{
    function options() {
        return props.categorias.map(c => {
            return <option key={c.id} value={c.id}>{c.descricao}</option>
        });
    }
    return (
    <div className="form">
        <div className="row">
            <div className="col-12 col-md-6">
                <div className="form form-group">                    
                    <label>Código</label>
                    <input type="text" className="form-control" 
                        name="codigo" value={props.produto.codigo} 
                        onChange={props.update}
                        placeholder="Digite o código"/>
                    <label>Descrição</label>
                    <input type="text" className="form-control" 
                        name="descricao" value={props.produto.descricao} 
                        onChange={props.update}
                        placeholder="Digite a descrição"/>
                    <label>Preço</label>
                    <input type="text" className="form-control" 
                        name="preco" value={props.produto.preco} 
                        onChange={props.update}
                        placeholder="Digite o preço"/>
                    <label>Categória</label>
                    <select className="form-control" value={props.produto.categoria.id}
                            name="categoria" onChange={props.update}>
                                <option value='0'>Selecione</option>
                        {options()}
                    </select>
                </div>
                <div className="row">
                    <div className="col-12">
                        <button className="btn btn-primary" onClick={props.save}>
                            Salvar
                        </button>
                        <button className="btn btn-secondary ml-2" onClick= {props.clear}>
                            Cancelar
                        </button>
                    </div>
                </div>
                <hr />
            </div>
        </div>
    </div>
    )
}