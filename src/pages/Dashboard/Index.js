import React, { useEffect, useState } from 'react';
import {
  DashboardContainer,
} from './styles';
import axios from 'axios';
import Header from '../../components/Header/Index';
import Summary from '../../components/dashboard-components/Summary/Index';
import Transactions from '../../components/dashboard-components/Transactions/Index';
import Months from '../../components/dashboard-components/Months/Index';


const Dashboard = () => {
  const [transactions, setTransactions] = useState([]);
  const [transactionsGlobalState, setTransactionsGlobalState] = useState([]);
  const [filteredTransactions, setFilteredTransactions] = useState();
  const [currentMonth, setCurrentMonth] = useState(new Date().getMonth());
  const [isLoading, setIsLoading] = useState(true);

  const months = {
    0: 'Janeiro',
    1: 'Fevereiro',
    2: 'Março',
    3: 'Abril',
    4: 'Maio',
    5: 'Junho',
    6: 'Julho',
    7: 'Agosto',
    8: 'Setembro',
    9: 'Outubro',
    10: 'Novembro',
    11: 'Dezembro'
  }


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


  // Get the current month number and subtract one more
  function handleArrowLeftMonth() {
    // fetchTransactions();
    if (currentMonth === 0) {
      setCurrentMonth(0);
    } else {
      const updatedMonth = currentMonth - 1;
    setCurrentMonth(updatedMonth);
    filterTransactionsByMonth(updatedMonth);
    }
  }

  // Get the current month number and increments it by one more
  function handleArrowRighttMonth() {
    if (currentMonth === 11) {
      setCurrentMonth(11);
    } else {
      const updatedMonth = currentMonth + 1;
    setCurrentMonth(updatedMonth);
    filterTransactionsByMonth(updatedMonth);
    }
  }



  const filterTransactionsByMonth = (month) => {
    const filtered = transactionsGlobalState.filter(transaction => {
      const transactionDate = transaction.date.split('-'); // Separar a data em dia, mês e ano
      const transactionMonth = parseInt(transactionDate[1], 10) - 1; // Obter o valor do mês como número
      console.log(transactionMonth);
      return transactionMonth === month;
    });
    setTransactions(filtered);
  };


  useEffect(() => {
    filterTransactionsByMonth(currentMonth);
  }, [currentMonth]);



  return (
    <div>
      <Header />
      <DashboardContainer>
        <Months month={months[currentMonth]} handleArrowLeftMonth={handleArrowLeftMonth} handleArrowRighttMonth={handleArrowRighttMonth} />
          <>
            <Summary transactions={transactions ? transactions : transactionsGlobalState} isLoading={isLoading} />
            <Transactions transactions={transactions ? transactions : (filteredTransactions ? filteredTransactions : transactionsGlobalState)} isLoading={isLoading} filterByName={handleFetchTransactionByName} handleRemoveTransaction={handleRemoveTransaction} filterByType={filterByType} fetchAllTransactions={handleFetchAllTransactions} />
          </>
      </DashboardContainer>
    </div>
  )
}

export default Dashboard