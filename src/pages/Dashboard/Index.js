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
import { getTransactions } from '../../redux/action';

const Dashboard = () => {
  const dispatch = useDispatch();
  const [transactions, setTransactions] = useState([]);
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

  return (
    <div>
      <Header />
      <DashboardContainer>
        {/* <Months /> */}
        {!isLoading ? (
          <>
            <Summary transactions={transactionsGlobalState ? transactionsGlobalState : transactions} isLoading={isLoading} />
            <Transactions transactions={transactionsGlobalState ? transactionsGlobalState : transactions} isLoading={isLoading} />
          </>
        ) : (
          <div></div>
        )}
      </DashboardContainer>
    </div>
  )
}

export default Dashboard