import styled from "styled-components";

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