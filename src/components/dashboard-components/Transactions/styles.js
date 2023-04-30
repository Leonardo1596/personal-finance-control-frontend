import styled from "styled-components";

export const DashboardTransactionsContainer = styled.div`
  width: 100vw;
  `

export const DashboardTransactionsArea = styled.div`
  margin: auto;
  max-width: 980px;

  @media screen and (max-width: 1024px) {
    max-width: 768px;
    padding: 0 16px;
  }

  @media screen and (max-width: 768px) {
    max-width: 576px;
    padding: 0 16px;
  }
`

export const DashboardTransactions = styled.div`
  width: 100%;
  max-width: 1200px;
  padding: 1rem;
  margin-top: 2rem;

  @media screen and (max-width: 768px) {
    padding: 0.5rem;
  }

  @media screen and (max-width: 576px) {
    padding: 0.25rem;
  }

  h2 {
    font-size: 20px;
  }
`;

export const DashboardTransactionList = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
  margin-top: 15px;
`;

export const DashboardTransactionItem = styled.li`
  display: flex;
  align-items: center;
  padding: 1rem;
  background-color: #fff;
  border-radius: 8px;
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.1);
  margin-bottom: 0.5rem;
  cursor: pointer;
`;

export const DashboardTransactionItemIcon = styled.span`
  margin-right: 1rem;
`;

export const DashboardTransactionItemInfo = styled.div`
  flex-grow: 1;
`;

export const DashboardTransactionItemTitle = styled.h3`
  margin: 0;
  font-size: 21px;

  @media screen and (max-width: 500px) {
  font-size: 15px;
}
`;

export const DashboardTransactionItemCategory = styled.p`
  margin: 0;
  color: #666;
  font-size: 15px;

  @media screen and (max-width: 500px) {
  font-size: 13px;
}
`;

export const DashboardTransactionItemValue = styled.p`
  margin: 0;
  font-size: 18px;
  font-weight: bold;
  margin-top: 0.5rem;

  @media screen and (max-width: 500px) {
  font-size: 14px;
}
`;

export const DashboardTransactionItemDate = styled.p`
  margin: 0;
  color: #666;
  margin-top: 0.5rem;
  font-size: 15px;

  @media screen and (max-width: 500px) {
  font-size: 13px;
}
`;