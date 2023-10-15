import React, { useEffect, useState } from 'react';
import * as C from './styles';
import axios from 'axios';
import { connect } from 'react-redux';
import { useDispatch, useSelector } from 'react-redux';
import { showExpensePopup, setUser } from '../../redux/action';
import Navbar from '../../components/home-components/Navbar/Index';
import Summary from '../../components/home-components/Summary/Index';
import WidgetBills from '../../components/home-components/WidgetBills/Index';
import WidgetIncome from '../../components/home-components/WidgetIncome/Index';
import ExpenseCategories from '../../components/home-components/ExpenseCategories/Index';
import Accounts from '../../components/home-components/Accounts/Index';
import Popup from '../../components/home-components/Popup/Index';
import ConfirmationPopup from '../../components/ConfirmationPopup/Index';


const Index = (props) => {
  const dispatch = useDispatch();
  const isPopupVisible = useSelector(state => state.showExpensePopup);
  const isConfirmPopupVisible = useSelector(state => state.handleShowPopup);
  const transactionId = useSelector(state => state.handleSetTransactionId);
  const userProfile = useSelector((state) => state.handleSetUser);
  const [bills, setBills] = useState([]);

  const [currentMonth, setCurrentMonth] = useState(new Date().getMonth());  // Get current month
  const [currentYear, setCurrentYear] = useState(new Date().getFullYear()); // Get current year

  const [revenues, setRevenues] = useState([]);
  const [expenses, setExpenses] = useState([]);

  useEffect(() => {
    if (isPopupVisible) {
      dispatch(showExpensePopup(false));
    }

    async function fetchBills() {
      await axios.get(`https://api-personal-finance-control.onrender.com/bills_to_pay/${userProfile._id}`)
        .then(response => {
          // console.log(response.data);
          const filteredBills = response.data.filter(bill => bill.paid === false);
          setBills(filteredBills);
          // console.log(filteredBills);
        })
        .catch(error => {
          console.log(error);
        });
    }
    fetchBills();
  }, []);

  const filterTransactionsByMonth = (month, year, transactions) => {
    if (transactions) {
      const filtered = transactions.filter(transaction => {
        const transactionDate = transaction.date.split('-'); // Separar a data em dia, mês e ano
        const transactionMonth = parseInt(transactionDate[1], 10) - 1; // Obter o valor do mês como número
        const transactionYear = parseInt(transactionDate[0], 10); // Obter o valor do ano como número
        return transactionMonth === month && transactionYear === year;
      });
      return filtered;
    }
  };

  useEffect(() => {
    async function fetchTransactions() {
      axios.get(`https://api-personal-finance-control.onrender.com/transactions/${userProfile._id}/${userProfile.accounts[0]._id}`)
        .then(response => {
          let filteredTransactions = filterTransactionsByMonth(currentMonth, currentYear, response.data)
          function sumRevenues() {
            const revenues = filteredTransactions.filter(transaction => transaction.type === 'entrada');
            const values = revenues.map(transaction => parseFloat(transaction.value.replace(',', '.')));
            const sum = values.reduce((total, value) => total + value, 0);
            setRevenues(sum.toFixed(2));
          }
          sumRevenues();

          function sumExpenses() {
            const expenses = filteredTransactions.filter(transaction => transaction.type === 'saída');
            const values = expenses.map(transaction => parseFloat(transaction.value.replace(',', '.')));
            const sum = values.reduce((total, value) => total + value, 0);
            setExpenses(sum.toFixed(2));
          }
          sumExpenses();
        })
        .catch(error => {
          console.log(error);
        });
    }
    fetchTransactions();
  }, []);

  function handleDelete() {
    const updatedUser = userProfile;

    // Bill to remove
    const billToDelete = userProfile.bills_to_pay.find(bill => bill._id === transactionId);

    const billIndexToDelete = updatedUser.bills_to_pay.findIndex(
      bill => bill._id === billToDelete._id
    );

    if (billIndexToDelete !== -1) {
      updatedUser.bills_to_pay.splice(billIndexToDelete, 1);
    }

    function setUpdatedUser() {
      dispatch(setUser(''));
      dispatch(setUser(updatedUser));
    };

    axios.delete(`https://api-personal-finance-control.onrender.com/bill_to_pay/delete/${userProfile._id}/${transactionId}`)
      .then(response => {
        // console.log(response.data);

        setUpdatedUser();
        window.location.reload();
      })
      .catch(err => {
        console.log(err);
      });
  }

  return (
    <div>
      <C.Home>
        {props.isPopupVisible && <C.Overlay><Popup accounts={userProfile.accounts} isBill={true} /></C.Overlay>}

        {isConfirmPopupVisible && <C.Overlay><ConfirmationPopup header='Confirmar exclusão' description={'Tem certeza que deseja excluir a transação selecionada?'} handleAction={handleDelete} /></C.Overlay>}
        <Navbar />
        <Summary userProfile={userProfile} expenses={expenses} revenues={revenues} />
        <C.WidgetGridContainer>
          <C.WidgetGridArea>

            <WidgetBills bills={bills} />
            <WidgetIncome />
            <Accounts userProfile={userProfile} />
            <ExpenseCategories />

          </C.WidgetGridArea>
        </C.WidgetGridContainer>
      </C.Home>
    </div>
  )
}

const mapStateToProps = (state) => {
  return {
    isPopupVisible: state.showExpensePopup
  };
};
export default connect(mapStateToProps)(Index);