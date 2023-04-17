import React from 'react';
import {
  DashboardContainer,
  DashboardHeader,
  DashboardHeaderText,
  DashboardSummary,
  DashboardSummaryItem,
  DashboardSummaryItemTitle,
  DashboardSummaryItemValue,
  DashboardTransactions,
  DashboardTransactionList,
  DashboardTransactionItem,
  DashboardTransactionItemIcon,
  DashboardTransactionItemInfo,
  DashboardTransactionItemTitle,
  DashboardTransactionItemCategory,
  DashboardTransactionItemValue,
  DashboardTransactionItemDate,
} from './styles';
import Header from '../../components/addTransaction-components/Header';
import Summary from '../../components/dashboard-components/Summary';
import Transactions from '../../components/dashboard-components/Transactions';

const Dashboard = () => {


  return (
    <div>
      <Header />
      <DashboardContainer>
        <Summary />
        <Transactions />
        {/* <DashboardHeader>
        <DashboardHeaderText>Dashboard</DashboardHeaderText>
      </DashboardHeader> */}
        {/* <DashboardSummary>
          <DashboardSummaryItem>
            <DashboardSummaryItemTitle>Saldo Atual</DashboardSummaryItemTitle>
            <DashboardSummaryItemValue>R$ 5.000,00</DashboardSummaryItemValue>
          </DashboardSummaryItem>
          <DashboardSummaryItem>
            <DashboardSummaryItemTitle>Receitas</DashboardSummaryItemTitle>
            <DashboardSummaryItemValue>R$ 3.500,00</DashboardSummaryItemValue>
          </DashboardSummaryItem>
          <DashboardSummaryItem>
            <DashboardSummaryItemTitle>Despesas</DashboardSummaryItemTitle>
            <DashboardSummaryItemValue>R$ 1.500,00</DashboardSummaryItemValue>
          </DashboardSummaryItem>
        </DashboardSummary> */}
        {/* <DashboardTransactions>
          <h2>Transações</h2>
          <DashboardTransactionList>
            <DashboardTransactionItem>
              <DashboardTransactionItemIcon>🛍️</DashboardTransactionItemIcon>
              <DashboardTransactionItemInfo>
                <DashboardTransactionItemTitle>Compra na loja XYZ</DashboardTransactionItemTitle>
                <DashboardTransactionItemCategory>Compras</DashboardTransactionItemCategory>
                <DashboardTransactionItemValue>- R$ 200,00</DashboardTransactionItemValue>
                <DashboardTransactionItemDate>10 de Abril, 2023</DashboardTransactionItemDate>
              </DashboardTransactionItemInfo>
            </DashboardTransactionItem>
            <DashboardTransactionItem>
              <DashboardTransactionItemIcon>💰</DashboardTransactionItemIcon>
              <DashboardTransactionItemInfo>
                <DashboardTransactionItemTitle>Salário</DashboardTransactionItemTitle>
                <DashboardTransactionItemCategory>Renda</DashboardTransactionItemCategory>
                <DashboardTransactionItemValue>+ R$ 3.000,00</DashboardTransactionItemValue>
                <DashboardTransactionItemDate>5 de Abril, 2023</DashboardTransactionItemDate>
              </DashboardTransactionItemInfo> */}
            {/* </DashboardTransactionItem> */}
            {/* Adicione mais itens de transação aqui */}
          {/* </DashboardTransactionList> */}
        {/* </DashboardTransactions> */}
      </DashboardContainer>
    </div>
  )
}

export default Dashboard