import React from 'react';
export default props =>  {
    const list = props.list || [];
    function renderRows() {
        if(list.length > 0)
            return list.map(produto => (
                <tr key={produto.id}>
                    <td>{produto.id}</td>
                    <td>{produto.codigo}</td>
                    <td>{produto.descricao}</td>
                    <td>{produto.preco}</td>
                    <td>{produto.categoriaDescricao}</td>
                    <td>
                        <button className="btn btn-warning"
                            onClick={() => props.load(produto)}>
                            <i className="fa fa-pencil"></i>
                        </button>
                        <button className="btn btn-danger ml-2"
                            onClick={() => props.remove(produto)}>
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
           <table className="table mt-2">
               <thead>
                   <tr>
                       <th>Id</th>
                       <th>Código</th>
                       <th>Descrição</th>
                       <th>Preço</th>
                       <th>Categoria</th>
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