import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export const TransactionsListContainer = styled.div`
    width: 100%;
    min-height: 150px;
    margin-top: 40px;
    margin-bottom: 30px;
    padding: 0 20px;
    padding-bottom: 40px;
    border-bottom: 1px solid #E2E2E2;
`;

export const TransactionsListArea = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-top: 30px;
`;

export const TransactionDescription = styled.h3`
    color: #3C433A;
    /* text-align: center; */
    font-family: Inter;
    font-size: 15px;
    font-weight: 500;
    min-width: 300px;
    max-width: 300px;
`;

export const TransactionAccount = styled.h3`
    color: #A0A0A0;
    text-align: center;
    font-family: Inter;
    font-size: 14px;
    font-weight: 500;
    min-width: 110px;
`;

export const TransactionDate = styled.h3`
    color: #A0A0A0;
    text-align: center;
    font-family: Inter;
    font-size: 14px;
    font-weight: 500;
`;

export const TransactionValue = styled.h3`
    color: #3C433A;
    text-align: end;
    font-family: Inter;
    font-size: 14px;
    font-weight: 500;
    min-width: 95px;
`;

export const TrashIcon = styled(FontAwesomeIcon)`
    font-size: 14px;
    /* color: red; */
    cursor: pointer;
`;