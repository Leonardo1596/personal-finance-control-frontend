import React, { useEffect, useState } from 'react';
import {
  DashboardTransactions,
  DashboardTransactionList,
  DashboardTransactionItem,
  DashboardTransactionItemIcon,
  DashboardTransactionItemInfo,
  DashboardTransactionItemTitle,
  DashboardTransactionItemCategory,
  DashboardTransactionItemValue,
  DashboardTransactionItemDate,
} from './styles';
import axios from 'axios';

const Index = () => {
  const [transactions, setTransactions] = useState([]);

  useEffect(() => {
    function getTransactions() {
      let body = {
        email: 'leonardoemanuel156@gmail.com'
      }
      axios.post('https://api-personal-finance-control.onrender.com/api-transactions', body)
        .then(response => {
          // console.log(response.data.message);
          setTransactions(response.data.message);
        })
        .catch(err => {
          console.log(err);
        });
    }
    getTransactions();
  }, [transactions])


  return (
    <div>
      <DashboardTransactions>
        <h2>Transações</h2>
        <DashboardTransactionList>
          {transactions.map((transaction, index) => (
            <DashboardTransactionItem>
              <DashboardTransactionItemIcon>🛍️</DashboardTransactionItemIcon>
              <DashboardTransactionItemInfo>
                <DashboardTransactionItemTitle>{transaction.description}</DashboardTransactionItemTitle>
                <DashboardTransactionItemCategory>{transaction.category}</DashboardTransactionItemCategory>
                <DashboardTransactionItemValue>{transaction.value}</DashboardTransactionItemValue>
                <DashboardTransactionItemDate>{transaction.date}</DashboardTransactionItemDate>
              </DashboardTransactionItemInfo>
            </DashboardTransactionItem>
          ))}
        </DashboardTransactionList>
      </DashboardTransactions>
    </div>
  )
}

export default Index