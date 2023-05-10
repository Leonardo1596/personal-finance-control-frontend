import React from 'react';
import * as C from './styles';
import FilterDropdown from '../FilterDropdown/Index';
import Skeleton from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'
import { FaMoneyCheckAlt, FaMoneyBillWave, FaUtensils, FaChartLine, FaBriefcase, FaEllipsisH } from 'react-icons/fa';
import { faTrash, faEdit, faSearch, faCirclePlus } from "@fortawesome/free-solid-svg-icons";
import { Link } from 'react-router-dom';
import { format } from 'date-fns';
import { parseISO } from 'date-fns';


const Index = (props) => {
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


  // Edit transaction
  function handleEditButton(transaction) {
    return transaction._id;
  }

  // Fetch transactions by name
  function handleSearchTransaction(event) {
    setTimeout(() => {
      props.filterByName(event.target.value);
    }, 1400);
  }


  return (
    <div>
      <C.DashboardTransactionsContainer>
        <C.DashboardTransactionsArea>
          <C.DashboardTransactions>
            <C.DashboardTransactionSearch>
              <C.SearchIcon icon={faSearch} />
              {!props.isLoading ? (<C.DashboardTransactionSearchInput type="text" name="transactionName" id="transactionName" placeholder='Buscar transações' onChange={handleSearchTransaction} />) : (
                <Skeleton width={450} height={40} borderRadius={15} />
              )}
              
              <Link to={'/add-transacao'}><C.AddIcon icon={faCirclePlus} /></Link>
            </C.DashboardTransactionSearch>
            <C.DashboardMenu>
              <C.DashboardMenuList>
                <C.DashboardMenuItem><FilterDropdown filterByType={props.filterByType} fetchAllTransactions={props.fetchAllTransactions} /></C.DashboardMenuItem>
                <C.DashboardMenuItem><C.DashboardMenuItemButton>Transações</C.DashboardMenuItemButton></C.DashboardMenuItem>
                <C.DashboardMenuItem><C.DashboardMenuItemButton>Contas a pagar</C.DashboardMenuItemButton></C.DashboardMenuItem>
              </C.DashboardMenuList>
            </C.DashboardMenu>

            <C.DashboardTransactionList>
              {!props.isLoading ? props.transactions.reverse().map((transaction, index) => (
                <C.DashboardTransactionItem key={index}>
                  <C.DashboardTransactionItemIcon>{categoryIcons[transaction.category] && React.createElement(categoryIcons[transaction.category])}</C.DashboardTransactionItemIcon>
                  <C.DashboardTransactionItemInfo>
                    <C.DashboardTransactionItemTitle>{transaction.description}</C.DashboardTransactionItemTitle>
                    <C.DashboardTransactionItemCategory>{transaction.category}</C.DashboardTransactionItemCategory>
                    <C.DashboardTransactionItemValue>{`R$ ${transaction.value.toString().replace('.', ',')}`}</C.DashboardTransactionItemValue>
                    <C.DashboardTransactionItemDate>{format(parseISO(transaction.date), 'dd/MM/yyyy')}</C.DashboardTransactionItemDate>
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