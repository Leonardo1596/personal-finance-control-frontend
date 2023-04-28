import React from 'react';
import {
  DashboardContainer,
} from './styles';
import Header from '../../components/Header/Index';
import Summary from '../../components/dashboard-components/Summary/Index';
import Transactions from '../../components/dashboard-components/Transactions/Index';
import Months from '../../components/dashboard-components/Months/Index';

const Dashboard = () => {


  return (
    <div>
      <Header />
      <DashboardContainer>
        {/* <Months /> */}
        <Summary />
        <Transactions />
      </DashboardContainer>
    </div>
  )
}

export default Dashboard