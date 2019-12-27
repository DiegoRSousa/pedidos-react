import React from 'react';

export default props =>
<div className="row">
    <div className="col-12 col-md-6">
        <input type="text" className="form-control" 
        placeholder="Pesquisar..." id="search" 
        onChange={() => props.search()}/>
    </div>
</div>   
