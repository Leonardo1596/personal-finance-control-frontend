import React, { useEffect, useState } from 'react';
import * as C from './styles';
import Navbar from '../../components/home-components/Navbar/Index';
import Transactions from '../../components/transactions-components/Transactions/Index';
import Popup from '../../components/home-components/Popup/Index';
import ConfirmationPopup from '../../components/ConfirmationPopup/Index';
import { useDispatch, useSelector } from 'react-redux';
import { showExpensePopup, showPopup, setUser } from '../../redux/action';
import axios from 'axios';

const Index = (props) => {
  const dispatch = useDispatch();
  const userProfile = useSelector((state) => state.handleSetUser);
  const [transactions, setTransactions] = useState([]);
  const [filteredTransactions, setFilteredTransactions] = useState([]);
  const isPopupVisible = useSelector(state => state.showExpensePopup);
  const isConfirmPopupVisible = useSelector(state => state.handleShowPopup);
  const accountId = useSelector(state => state.handleDeleteAccount);
  const transactionId = useSelector(state => state.handleSetTransactionId);

  const [transactionsRedux, setTransactionsRedux] = useState(useSelector((state) => state.handleSetUser.accounts[0].transactions));

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

  const [currentMonth, setCurrentMonth] = useState(new Date().getMonth());  // Get current month
  const [currentYear, setCurrentYear] = useState(new Date().getFullYear()); // Get current year
  const currentMonthYear = `${months[currentMonth]} de ${currentYear}`;

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
      setFilteredTransactions(filterTransactionsByMonth(updatedMonth, currentYear, transactionsRedux));
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
      setFilteredTransactions(filterTransactionsByMonth(updatedMonth, currentYear, transactionsRedux));
    }
  }

  const filterTransactionsByMonth = (month, year, transactions) => {
    if (transactions) {
      const filtered = transactions.filter(transaction => {
        const transactionDate = transaction.date.split('-'); // Separate day, month and year
        const transactionMonth = parseInt(transactionDate[1], 10) - 1; // Get value month like number
        const transactionYear = parseInt(transactionDate[0], 10); // Get value year like number
        return transactionMonth === month && transactionYear === year;
      });
      return filtered;
    }
  };

  // Get all transactions
  useEffect(() => {
    if (isPopupVisible) {
      dispatch(showExpensePopup(false));
    }

    async function fetchTransactions() {
      // axios.get(`https://api-personal-finance-control.onrender.com/transactions/${userProfile._id}`)
      //   .then(response => {
      //     // console.log(response.data);
      //     setTransactions(response.data);
      //     setFilteredTransactions(filterTransactionsByMonth(currentMonth, currentYear, response.data));
      //   });
      setFilteredTransactions(filterTransactionsByMonth(currentMonth, currentYear, transactionsRedux));
    }
    fetchTransactions();

  }, []);

  function handleDeleteTransaction() {
    const updatedUser = userProfile;

    // Transaction to remove
    const transactionToDelete = userProfile.transactions.find(transaction => transaction._id === transactionId);

    const transactionIndexToDelete = updatedUser.transactions.findIndex(
      transaction => transaction._id === transactionToDelete._id
    );

    if (transactionIndexToDelete !== -1) {
      updatedUser.transactions.splice(transactionIndexToDelete, 1);
    }

    function setUpdatedUser() {
      dispatch(setUser(''));
      dispatch(setUser(updatedUser));
    };

    axios.delete(`https://api-personal-finance-control.onrender.com/transaction/delete/${userProfile._id}/${accountId}/${transactionId}`)
      .then(response => {
        // console.log(response.data);
        setUpdatedUser();
      })
      .catch(err => {
        console.log(err);
      });
  }

  return (
    <div>
      <C.Main>
        {isPopupVisible && <C.Overlay><Popup accounts={userProfile.accounts} isBill={false} /></C.Overlay>}

        {isConfirmPopupVisible && <C.Overlay><ConfirmationPopup header='Confirmar exclusão' description='Tem certeza que deseja excluir a transação selecionada?' handleAction={handleDeleteTransaction} /></C.Overlay>}
        <Navbar />
        <Transactions transactions={filteredTransactions ? filteredTransactions : transactions} handleArrowLeftMonth={handleArrowLeftMonth} handleArrowRighttMonth={handleArrowRighttMonth} month={currentMonthYear} userProfile={userProfile} />
      </C.Main>
    </div>
  )
}

export default Index