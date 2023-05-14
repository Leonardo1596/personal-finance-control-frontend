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
  const [transactionsGlobalState, setTransactionsGlobalState] = useState([]);
  const [filteredTransactionsByName, setFilteredTransactionsByName] = useState()
  const [filteredTransactions, setFilteredTransactions] = useState();
  const [currentMonth, setCurrentMonth] = useState(new Date().getMonth());  // Get current month
  const [currentYear, setCurrentYear] = useState(new Date().getFullYear()); // Get current year
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
    filterTransactionsByMonth(currentMonth, currentYear);
  }, []);


  useEffect(() => {
    filterTransactionsByMonth(currentMonth, currentYear);
  }, [currentMonth, currentYear]);


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
    setFilteredTransactionsByName('');
  }

  async function handleFetchTransactionByName(transactionName) {
    let email = JSON.parse(localStorage.getItem('persist:finance-control'));
    console.log(transactionName);

    if (transactionName === '') {
      setFilteredTransactionsByName('');
      setFilteredTransactions('');
    } else {
      try {
        const response = await axios.post('https://api-personal-finance-control.onrender.com/api-search-transaction', {
          email: JSON.parse(email.handleSetUser).email,
          transactionName: transactionName
        });
        // setFilteredTransactions(response.data.transactions);
        setFilteredTransactionsByName(response.data.transactions);
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
        setFilteredTransactionsByName(response.data.message.filter(transaction => transaction.type === type));
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
      if (currentYear === 0) {
        setCurrentMonth(0);
      } else {
        const updatedYear = currentYear - 1;
        setCurrentYear(updatedYear);
        setCurrentMonth(11);
        filterTransactionsByMonth(11, updatedYear);
      }
    } else {
      const updatedMonth = currentMonth - 1;
      setCurrentMonth(updatedMonth);
      filterTransactionsByMonth(updatedMonth, currentYear);
    }
  }

  // Get the current month number and increments it by one more
  function handleArrowRighttMonth() {
    if (currentMonth === 11) {
      const updatedYear = currentYear + 1;
      setCurrentYear(updatedYear);
      setCurrentMonth(0);
      filterTransactionsByMonth(0, updatedYear);
    } else {
      const updatedMonth = currentMonth + 1;
      setCurrentMonth(updatedMonth);
      filterTransactionsByMonth(updatedMonth, currentYear);
    }
  }



  const filterTransactionsByMonth = (month, year) => {
    const filtered = transactionsGlobalState.filter(transaction => {
      const transactionDate = transaction.date.split('-'); // Separar a data em dia, mês e ano
      const transactionMonth = parseInt(transactionDate[1], 10) - 1; // Obter o valor do mês como número
      const transactionYear = parseInt(transactionDate[0], 10); // Obter o valor do ano como número
      return transactionMonth === month && transactionYear === year;
    });
    setFilteredTransactions(filtered);
  };


  useEffect(() => {
    filterTransactionsByMonth(currentMonth, currentYear);
  }, [currentMonth, currentYear, transactionsGlobalState]);

  const currentMonthYear = `${months[currentMonth]} de ${currentYear}`;


  return (
    <div>
      <Header />
      <DashboardContainer>
        <Months month={currentMonthYear} handleArrowLeftMonth={handleArrowLeftMonth} handleArrowRighttMonth={handleArrowRighttMonth} />
        <>
          <Summary transactions={filteredTransactions ? filteredTransactions : transactionsGlobalState} isLoading={isLoading} />
          <Transactions transactions={filteredTransactionsByName ? filteredTransactionsByName : (filteredTransactions ? filteredTransactions : transactionsGlobalState)} isLoading={isLoading} filterByName={handleFetchTransactionByName} handleRemoveTransaction={handleRemoveTransaction} filterByType={filterByType} fetchAllTransactions={handleFetchAllTransactions} />
        </>
      </DashboardContainer>
    </div>
  )
}

export default Dashboard