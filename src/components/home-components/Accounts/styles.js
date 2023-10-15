import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export const Container = styled.div`
    width: 515px;
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

export const AccountList = styled.ul`
    width: 100%;
    border-bottom: 1px solid #E2E2E2;
    margin-bottom: 10px;
`;

export const AccountItem = styled.li`
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

export const AccountInfo = styled.div`
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

export const AccountBalance = styled.span`
    color: #2E312D;
    font-size: 18px;
    font-weight: 500;
`;

export const Button = styled.button`
    height: 40px;
    width: 300px;
    background-color: transparent;
    color: #675F5F;
    border: 1px solid #675F5F;
    border-radius: 4px;
    margin-top: 20px;
    transition: all 0.2s;

    cursor: pointer;

    &:hover {
        background-color: #A0A0A0;
        color: white;
    }
`;