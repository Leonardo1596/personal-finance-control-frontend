import React, { useEffect, useState } from 'react';
import * as C from './styles';
import axios from 'axios';
import Skeleton from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'
import { FaMoneyCheckAlt, FaMoneyBillWave, FaUtensils, FaChartLine, FaBriefcase, FaEllipsisH } from 'react-icons/fa';
import { faTrash } from "@fortawesome/free-solid-svg-icons";
import { useDispatch, useSelector } from 'react-redux';
import { getTransactions } from '../../../redux/action';

const Index = () => {
  const dispatch = useDispatch();
  // const [transactions, setTransactions] = useState([]);
  const transactions = useSelector((state) => state.handleTransactions);
  const categoryIcons = {
    'Salário': FaMoneyCheckAlt,
    'Gastos essenciais': FaMoneyBillWave,
    'Gastos supérfluos': FaUtensils,
    'Investimentos': FaChartLine,
    'Gastos para trabalhar': FaBriefcase,
    'Outros': FaEllipsisH
  }
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Get all transactions
    function fetchTransactions() {
      // Get user email stored on localStorage
      let email = JSON.parse(localStorage.getItem('persist:finance-control'));

      let body = {
        email: JSON.parse(email.handleSetUser).email
      }
      axios.post('https://api-personal-finance-control.onrender.com/api-transactions', body)
        .then(response => {
          // console.log(response.data.message);

          // setTransactions(response.data.message);
          dispatch(getTransactions(response.data.message));
          setIsLoading(false);
        })
        .catch(err => {
          console.log(err);
        });
    }
    fetchTransactions();
  }, [transactions]);


  // Remove transaction
  function handleRemove(transaction) {
    let email = JSON.parse(localStorage.getItem('persist:finance-control'));

    let body = {
      email: JSON.parse(email.handleSetUser).email,
      id: transaction._id
    }

    axios.post('http://10.147.17.182:8000/api-remove-transaction', body);
  }


  return (
    <div>
      <C.DashboardTransactionsContainer>
        <C.DashboardTransactionsArea>
          <C.DashboardTransactions>
            <h2>Transações</h2>
            <C.DashboardTransactionList>
              {!isLoading ? transactions.reverse().map((transaction, index) => (
                <C.DashboardTransactionItem key={index}>
                  <C.DashboardTransactionItemIcon>{categoryIcons[transaction.category] && React.createElement(categoryIcons[transaction.category])}</C.DashboardTransactionItemIcon>
                  <C.DashboardTransactionItemInfo>
                    <C.DashboardTransactionItemTitle>{transaction.description}</C.DashboardTransactionItemTitle>
                    <C.DashboardTransactionItemCategory>{transaction.category}</C.DashboardTransactionItemCategory>
                    <C.DashboardTransactionItemValue>{`R$ ${transaction.value.toString().replace('.', ',')}`}</C.DashboardTransactionItemValue>
                    <C.DashboardTransactionItemDate>{transaction.date}</C.DashboardTransactionItemDate>
                  </C.DashboardTransactionItemInfo>
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