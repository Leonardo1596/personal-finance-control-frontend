import React from 'react';
import { EditTransactionContainer } from './styles';
import Header from '../../components/Header/Index';
import TransactionForm from '../../components/editTransaction-components/TransactionForm/Index';

const Index = () => {
  return (
    <div>
      <EditTransactionContainer>
        <Header />
        <TransactionForm />
      </EditTransactionContainer>
    </div>
  )
}

export default Index