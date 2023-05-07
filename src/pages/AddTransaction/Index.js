import React from 'react';
import { AddTransactionContainer } from './styles';
import Header from '../../components/Header/Index';
import TransactionForm from '../../components/addTransaction-components/TransactionForm/Index';

const Index = () => {
  return (
    <div>
      <AddTransactionContainer>
        <Header />
        <TransactionForm />
      </AddTransactionContainer>
    </div>
  )
}

export default Index