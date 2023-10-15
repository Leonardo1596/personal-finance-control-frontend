import React, { useEffect } from 'react';
import * as C from './styles';
import { format } from 'date-fns';
import { parseISO } from 'date-fns';
import { faTrash } from "@fortawesome/free-solid-svg-icons";
import { useDispatch } from 'react-redux';
import { showPopup, setAccountId, setTransactionId } from '../../../redux/action';

const Index = (props) => {
  const dispatch = useDispatch();

  function handleDelete(accountId, transactionId) {
    dispatch(setAccountId(accountId));
    dispatch(setTransactionId(transactionId));
    dispatch(showPopup(true));
  }

  return (
    <div>
      <C.TransactionsListContainer>
        {props.transactions.map((transaction, index) => (
          <C.TransactionsListArea key={index}>
            <C.TransactionDescription>{transaction.description}</C.TransactionDescription>
            <C.TransactionAccount>{transaction.accountName}</C.TransactionAccount>
            <C.TransactionDate>{format(parseISO(transaction.date), 'dd/MM/yyyy')}</C.TransactionDate>
            <C.TransactionValue style={{ color: transaction.type === 'entrada' ? 'green' : 'red' }}>R$ {transaction.type === 'saída' ? `-${transaction.value}` : transaction.value}</C.TransactionValue>
            <C.TrashIcon icon={faTrash} onClick={() => handleDelete(transaction.accountId, transaction._id)} />
          </C.TransactionsListArea>
        ))}
      </C.TransactionsListContainer>
    </div>
  )
}

export default Index