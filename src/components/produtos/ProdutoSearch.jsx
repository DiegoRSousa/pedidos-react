import React from 'react';

export default props =>
<div className="row mt-2">
        <div className="col-12 col-md-6">
        <label>Pesquisar:</label>
        <div className="form form-group">
            <input type="text" className="form-control" 
            placeholder="Por descrição..." id="search" 
            onChange={() => props.search()}/>
        </div>
        </div>
    </div>   