import React, { useEffect, useState } from 'react';
import {
  DashboardContainer,
} from './styles';
import axios from 'axios';
import Header from '../../components/Header/Index';
import Summary from '../../components/dashboard-components/Summary/Index';
import Transactions from '../../components/dashboard-components/Transactions/Index';
import Months from '../../components/dashboard-components/Months/Index';
import { useDispatch, useSelector } from 'react-redux';
import { getTransactions, removeTransaction } from '../../redux/action';


const Dashboard = () => {
  const dispatch = useDispatch();
  const [transactions, setTransactions] = useState([]);
  const [transactionsGlobalState, setTransactionsGlobalState] = useState([]);
  const [filteredTransactions, setFilteredTransactions] = useState();
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    fetchTransactions();
  }, []);
  
  // Get all transactions
  function fetchTransactions() {
    // Get user email stored on localStorage
    let email = JSON.parse(localStorage.getItem('persist:finance-control'));

    axios.post('https://api-personal-finance-control.onrender.com/api-transactions', { email: JSON.parse(email.handleSetUser).email })
      .then(response => {
        setTransactionsGlobalState(response.data.message.reverse());
        setIsLoading(false);
      })
      .catch(err => {
        console.log(err);
      });
  }

  function handleFetchAllTransactions() {
    setFilteredTransactions('');
  }

  async function handleFetchTransactionByName(transactionName) {
    let email = JSON.parse(localStorage.getItem('persist:finance-control'));

    if (transactionName === '') {
      setFilteredTransactions('');
    } else {
      try {
        const response = await axios.post('https://api-personal-finance-control.onrender.com/api-search-transaction', {
          email: JSON.parse(email.handleSetUser).email,
          transactionName: transactionName
        });
        setFilteredTransactions(response.data.transactions);
      } catch (err) {
        console.log(err);
      }
    }

  }

  function filterByType(type) {
    // Get user email stored on localStorage
    let email = JSON.parse(localStorage.getItem('persist:finance-control'));

    axios.post('https://api-personal-finance-control.onrender.com/api-transactions', { email: JSON.parse(email.handleSetUser).email })
      .then(response => {
        setFilteredTransactions(response.data.message.filter(transaction => transaction.type === type));
      })
      .catch(err => {
        console.log(err);
      });
  }


  async function handleRemoveTransaction(transaction) {
    let email = JSON.parse(localStorage.getItem('persist:finance-control'));
    try {
      const response = await axios.post('https://api-personal-finance-control.onrender.com/api-remove-transaction', {
        email: JSON.parse(email.handleSetUser).email,
        id: transaction._id
      });
      fetchTransactions();
    } catch (err) {
      console.log(err);
    }
  }

  return (
    <div>
      <Header />
      <DashboardContainer>
        {/* <Months /> */}
          <>
            <Summary transactions={transactionsGlobalState} isLoading={isLoading} />
            <Transactions transactions={filteredTransactions ? filteredTransactions : transactionsGlobalState} isLoading={isLoading} filterByName={handleFetchTransactionByName} handleRemoveTransaction={handleRemoveTransaction} filterByType={filterByType} fetchAllTransactions={handleFetchAllTransactions} />
          </>
      </DashboardContainer>
    </div>
  )
}

export default Dashboard