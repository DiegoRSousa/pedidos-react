import React from 'react';
export default props => 
    <div className="form">
        <div className="row">
            <div className="col-12 col-md-6">
                <div className="form form-group">
                    <label>Descrição</label>
                    <input type="text" className="form-control" 
                        name="descricao" value={props.categoria.descricao} 
                        onChange={props.update}
                        placeholder="Digite a descrição"/>
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
