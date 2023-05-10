import React from 'react';
import * as C from './styles';

const Index = (props) => {
    // Fetch all transactions
    function handleAllClick() {
        props.fetchAllTransactions();
    }

    // Fetch transactions by revenues type
    function handleRevenuesClick() {
        props.filterByType('entrada');
    }

    // Fetch transactions by expenses type
    function handleExpensesClick() {
        props.filterByType('saída');
    }

    return (
        <div>
            <C.FilterDropdown className="dropdown">
                <button className="btn btn-secondary dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                    Filtrar
                </button>
                <ul className="dropdown-menu">
                    <li><a className="dropdown-item" onClick={handleAllClick}>Todos</a></li>
                    <li><a className="dropdown-item" onClick={handleExpensesClick}>Despesas</a></li>
                    <li><a className="dropdown-item" onClick={handleRevenuesClick}>Receitas</a></li>
                    <li><a className="dropdown-item" href="#">Categorias</a></li>
                </ul>
            </C.FilterDropdown>
        </div>
    )
}

export default Index