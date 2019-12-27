import React from 'react';

export default props => {
    function options() {
        return props.categorias.map(c => {
            return <option key={c.id} value={c.id}>{c.descricao}</option>
        });
    }
    return (
    <div className="form">
            <div className="row">
                <div className="col-12 col-md-6"> 
                    <label>Código</label>
                    <input type="text" className="form-control" 
                        name="codigo" value={props.produto.codigo} 
                        onChange={props.update}
                        placeholder="Digite o código"/>
                    
                </div>
                <div className="col-12 col-md-6"> 
                    <label>Descrição</label>
                    <input type="text" className="form-control" 
                        name="descricao" value={props.produto.descricao} 
                        onChange={props.update}
                        placeholder="Digite a descrição"/>
                </div>
                <div className="col-12 col-md-6"> 
                    <label>Preço</label>
                    <input type="text" className="form-control" 
                        name="preco" value={props.produto.preco} 
                        onChange={props.update}
                        placeholder="Digite o preço"/>
                </div>
                <div className="col-12 col-md-6"> 
                    <label>Categória</label>
                    <select className="form-control" value={props.produto.categoriaId}
                        name="categoriaId" onChange={props.update}>
                            <option value='0'>Selecione</option>
                        {options()}
                    </select>            
                </div>
            </div>
            <div className="row mt-2">
                <div className="col-12 d-flex">
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
        
    )
}