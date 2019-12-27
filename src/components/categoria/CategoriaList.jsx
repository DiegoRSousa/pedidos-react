import React from 'react';
export default props => {
    const list = props.list || [];
    function renderRows() {
        if(list.length > 0)
            return list.map(categoria => (
                <tr key={categoria.id}>
                    <td>{categoria.id}</td>
                    <td>{categoria.descricao}</td>
                    <td>
                        <button className="btn btn-warning"
                            onClick={() => props.load(categoria)}>
                            <i className="fa fa-pencil"></i>
                        </button>
                        <button className="btn btn-danger ml-2"
                            onClick={() => props.remove(categoria)}>
                            <i className="fa fa-trash"></i>
                        </button>
                    </td>
                </tr>
            ))    
        return (
            <tr><td colSpan="3">Não há dados</td></tr>
        )       
    }

    return (
         <div>
            <table className="table mt-4">
                <thead>
                    <tr>
                        <th>Id</th>
                        <th>Descrição</th>
                        <th>Ações</th>
                    </tr>
                </thead>
                <tbody>
                    {renderRows()}
                </tbody>
            </table>
        </div>
    )
}