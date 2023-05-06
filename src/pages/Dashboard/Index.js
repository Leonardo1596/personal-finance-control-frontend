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
  const [filteredByNameTransaction, setfilteredByNameTransaction] = useState([]);
  const transactionsGlobalState = useSelector((state) => state.handleTransactions);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    if (!transactionsGlobalState) {
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
            setTransactions(response.data.message);
            dispatch(getTransactions(response.data.message));
            setIsLoading(false);
          })
          .catch(err => {
            console.log(err);
          });
      }
      fetchTransactions();
    } else {
      setIsLoading(false);
    }
  }, []);

  async function handleFetchTransactionByName(transactionName) {
    let email = JSON.parse(localStorage.getItem('persist:finance-control'));

    try {
      const response = await axios.post('http://10.147.17.182:8000/api-search-transaction', {
        email: JSON.parse(email.handleSetUser).email,
        transactionName: transactionName
      });

      // console.log(response.data.transactions);
      setfilteredByNameTransaction(response.data.transactions);
      if (transactionName.length === 0) {
        setfilteredByNameTransaction([]);
      }

      //handle undefined return
      if (response.data.transactions === undefined) {
        setfilteredByNameTransaction([]);
      }
      
    } catch (err) {
      console.log(err);
    }
  }


  async function handleRemoveTransaction(transaction) {
    let email = JSON.parse(localStorage.getItem('persist:finance-control'));
    try {
      const response = await axios.post('https://api-personal-finance-control.onrender.com/api-remove-transaction', {
        email: JSON.parse(email.handleSetUser).email,
        id: transaction._id
      });
      dispatch(removeTransaction(transaction._id));
    } catch (err) {
      console.log(err);
    }
  }
  
  return (
    <div>
      <Header />
      <DashboardContainer>
        {/* <Months /> */}
        {!isLoading ? (
          <>
            <Summary transactions={transactionsGlobalState ? transactionsGlobalState : transactions} isLoading={isLoading} />
            <Transactions transactions={filteredByNameTransaction.length > 0 ? filteredByNameTransaction : (transactionsGlobalState ? transactionsGlobalState : transactions)} isLoading={isLoading} onFilterTransactions={handleFetchTransactionByName} handleRemoveTransaction={handleRemoveTransaction} />
          </>
        ) : (
          <div></div>
        )}
      </DashboardContainer>
    </div>
  )
}

export default Dashboard