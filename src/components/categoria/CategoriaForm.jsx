import React from 'react';
export default props => 
<div className="form">
    <div className="row">
        <div className="col-12 col-md-6">
            <label>Descrição: </label>
            <input type="text" name="descricao" className="form-control" 
                value={props.categoria.descricao} 
                onChange={props.update} placeholder="Digite a descrição"/>
        </div>
    </div>
    <div className="row mt-2">
        <div className="col-12 d-flex">
            <button className="btn btn-primary" onClick={props.save}>Salvar</button>
            <button className="btn btn-secondary ml-2" onClick={props.clear}>Cancelar</button>
        </div>
    </div>
    <hr />
</div>