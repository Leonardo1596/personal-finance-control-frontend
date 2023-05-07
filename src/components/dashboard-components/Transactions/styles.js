import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";


export const DashboardTransactionsContainer = styled.div`
  width: 100vw;
  `

export const DashboardTransactionsArea = styled.div`
  margin: auto;
  max-width: 980px;
  position: relative;

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

export const DashboardTransactionSearch = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  position: relative;
  margin-bottom: 10px;
`;

export const DashboardTransactionSearchInput = styled.input`
  padding: 0.5rem 3rem;
  width: 50%;
  outline: none;
  border-radius: 15px;
  border: 1px solid grey;
  font-size: 15px;

  @media screen and (max-width: 1024px) {
    width: 70%;
    height: 35px;
    font-size: 14px;
  }

  @media screen and (max-width: 768px) {
    padding: 0.5rem 4rem;
  }

  @media screen and (max-width: 500px) {
    font-size: 15px;
    padding: 0.5rem 3rem
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
`;

export const DashboardTransactionItemIcon = styled.span`
  margin-right: 1rem;
`;

export const DashboardTransactionItemInfo = styled.div`
  flex-grow: 1;
`;

export const DashboardTransactionItemTitle = styled.h3`
  margin: 0;
  font-size: 16px;

  @media screen and (max-width: 768px) {
    font-size: 15px;
  }
`;

export const DashboardTransactionItemCategory = styled.p`
  margin: 0;
  color: #666;
  font-size: 14px;

  @media screen and (max-width: 1024px) {
    font-size: 13px;
  }
`;

export const DashboardTransactionItemValue = styled.p`
  margin: 0;
  font-size: 16px;
  font-weight: bold;
  margin-top: 0.5rem;

  @media screen and (max-width: 768px) {
    font-size: 15px;
  }
`;

export const DashboardTransactionItemDate = styled.p`
  margin: 0;
  color: #666;
  margin-top: 0.5rem;
  font-size: 14px;

  @media screen and (max-width: 1024px) {
    font-size: 13px;
  }
`;

export const AddIcon = styled(FontAwesomeIcon)`
  color: #6A5ACD;
  font-size: 30px;
  margin-right: 10px;
`;

export const SearchIcon = styled(FontAwesomeIcon)`
  position: absolute;
  top: 12px;
  left: 20px;
  color: grey;
  font-size: 18px;

  @media screen and (max-width: 1024px) {
    top: 10px;
    font-size: 17px;
  }

  @media screen and (max-width: 768px) {
    left: 30px;
  }

  @media screen and (max-width: 500px) {
    font-size: 15px;
    left: 20px;
  }
`;

export const TrashIcon = styled(FontAwesomeIcon)`
  cursor: pointer;
`;

export const EditIcon = styled(FontAwesomeIcon)`
  color: black;
  cursor: pointer;
  margin-right: 20px;
`