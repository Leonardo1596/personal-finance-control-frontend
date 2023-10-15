import styled from 'styled-components';

export const Container = styled.div`
    width: 515px;
    min-height: 220px;
    background-color: white;
    border-radius: 8px;
    padding: 30px;
    font-family: 'Inter', sans-serif;
`;

export const Header = styled.h3`
    color: #2E312D;
    font-weight: 600;
    font-size: 17px;
`;

export const AreaInfo = styled.div`
    margin: 0 auto;
    /* margin-top: 30px; */
    width: 100%;
    padding-top: 10px;
    text-align: center;
`;

export const TransactionList = styled.ul`
    width: 100%;
    border-bottom: 1px solid #E2E2E2;
    margin-bottom: 10px;
`;

export const TransactionItem = styled.li`
    list-style: none;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 15px 0;
`;

export const LeftInfo = styled.div`
    display: flex;
    align-items: center;
`;

export const TransactionInfo = styled.div`
    text-align: left;
    width: auto;

    h3 {
        color: #675F5F;
        font-size: 15px;
        font-weight: 500;
    }

    span {
        color: #8E8E8E;
        font-size: 13px;
        font-weight: 600;
    }
`;

export const RightInfo = styled.div`
    display: flex;
    align-items: center;
`;

export const Percentage = styled.span`
    color: #675F5F;
    font-size: 15px;
    font-weight: 500;
`;