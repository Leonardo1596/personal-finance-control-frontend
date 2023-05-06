import React from 'react';
import * as C from './styles';
import axios from 'axios';
import Skeleton from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'
import { FaMoneyCheckAlt, FaMoneyBillWave, FaUtensils, FaChartLine, FaBriefcase, FaEllipsisH } from 'react-icons/fa';
import { faTrash, faEdit } from "@fortawesome/free-solid-svg-icons";
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { removeTransaction } from '../../../redux/action';


const Index = (props) => {
  const dispatch = useDispatch();
  const categoryIcons = {
    'Salário': FaMoneyCheckAlt,
    'Gastos essenciais': FaMoneyBillWave,
    'Gastos supérfluos': FaUtensils,
    'Investimentos': FaChartLine,
    'Gastos para trabalhar': FaBriefcase,
    'Outros': FaEllipsisH
  }

  // Remove transaction
  function handleRemove(transaction) {
    props.handleRemoveTransaction(transaction);

  }


  function handleEditButton(transaction) {
    return transaction._id;
  }

  function handleSearchTransaction(event) {
    props.onFilterTransactions(event.target.value);
  }

  return (
    <div>
      <C.DashboardTransactionsContainer>
        <C.DashboardTransactionsArea>
          <C.DashboardTransactions>
            <C.DashboardTransactionSearch>
              <C.DashboardTransactionSearchLabel>Buscar transação</C.DashboardTransactionSearchLabel>
              <C.DashboardTransactionSearchInput type="text" name="transactionName" id="transactionName" onChange={handleSearchTransaction}/>
            </C.DashboardTransactionSearch>
            {/* <h2>Transações</h2> */}
            <C.DashboardTransactionList>
              {!props.isLoading ? props.transactions.reverse().map((transaction, index) => (
                <C.DashboardTransactionItem key={index}>
                  <C.DashboardTransactionItemIcon>{categoryIcons[transaction.category] && React.createElement(categoryIcons[transaction.category])}</C.DashboardTransactionItemIcon>
                  <C.DashboardTransactionItemInfo>
                    <C.DashboardTransactionItemTitle>{transaction.description}</C.DashboardTransactionItemTitle>
                    <C.DashboardTransactionItemCategory>{transaction.category}</C.DashboardTransactionItemCategory>
                    <C.DashboardTransactionItemValue>{`R$ ${transaction.value.toString().replace('.', ',')}`}</C.DashboardTransactionItemValue>
                    <C.DashboardTransactionItemDate>{transaction.date}</C.DashboardTransactionItemDate>
                  </C.DashboardTransactionItemInfo>
                  <Link to={`/editar-transacao/${handleEditButton(transaction)}`}><C.EditIcon icon={faEdit} onClick={() => handleEditButton(transaction)} /></Link>
                  <C.TrashIcon icon={faTrash} onClick={() => handleRemove(transaction)} />
                </C.DashboardTransactionItem>
              )) : <C.DashboardTransactionItem>
                <C.DashboardTransactionItemIcon><Skeleton /></C.DashboardTransactionItemIcon>
                <C.DashboardTransactionItemInfo>
                  <C.DashboardTransactionItemTitle><Skeleton /></C.DashboardTransactionItemTitle>
                  <C.DashboardTransactionItemCategory><Skeleton /></C.DashboardTransactionItemCategory>
                  <C.DashboardTransactionItemValue><Skeleton /></C.DashboardTransactionItemValue>
                  <C.DashboardTransactionItemDate><Skeleton /></C.DashboardTransactionItemDate>
                </C.DashboardTransactionItemInfo>
              </C.DashboardTransactionItem>}
            </C.DashboardTransactionList>
          </C.DashboardTransactions>
        </C.DashboardTransactionsArea>
      </C.DashboardTransactionsContainer>
    </div>
  )
}

export default Index