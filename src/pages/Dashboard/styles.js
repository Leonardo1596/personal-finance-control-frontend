import styled from "styled-components";

export const DashboardContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 2rem;
  background-color: #f8f8f8;
  min-height: 100vh;
`;

export const DashboardHeader = styled.header`
  width: 100%;
  padding: 1rem;
  background-color: #333;
  color: #fff;
`;

export const DashboardHeaderText = styled.h1`
  margin: 0;
`;

// export const DashboardSummary = styled.div`
//   display: grid;
//   grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
//   gap: 1rem;
//   width: 100%;
//   max-width: 1200px;
//   padding: 1rem;
// `;

// export const DashboardSummaryItem = styled.div`
//   padding: 1rem;
//   background-color: #fff;
//   border-radius: 8px;
//   box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.1);
//   text-align: center;
// `;

// export const DashboardSummaryItemTitle = styled.h2`
//   margin: 0;
// `;

// export const DashboardSummaryItemValue = styled.p`
//   margin: 0;
//   font-size: 24px;
//   font-weight: bold;
//   margin-top: 0.5rem;
// `;

export const DashboardTransactions = styled.div`
  width: 100%;
  max-width: 1200px;
  padding: 1rem;
  margin-top: 2rem;
`;

export const DashboardTransactionList = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
`;

export const DashboardTransactionItem = styled.li`
  display: flex;
  align-items: center;
  padding: 1rem;
  background-color: #fff;
  border-radius: 8px;
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.1);
  margin-bottom: 0.5rem;
`;

export const DashboardTransactionItemIcon = styled.span`
  margin-right: 1rem;
`;

export const DashboardTransactionItemInfo = styled.div`
  flex-grow: 1;
`;

export const DashboardTransactionItemTitle = styled.h3`
  margin: 0;
`;

export const DashboardTransactionItemCategory = styled.p`
  margin: 0;
  color: #666;
`;

export const DashboardTransactionItemValue = styled.p`
  margin: 0;
  font-size: 18px;
  font-weight: bold;
  margin-top: 0.5rem;
`;

export const DashboardTransactionItemDate = styled.p`
  margin: 0;
  color: #666;
  margin-top: 0.5rem;
`;