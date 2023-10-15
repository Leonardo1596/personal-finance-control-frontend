import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export const AccountsContainer = styled.div`
    width: 100vw;
    font-family: 'Inter', sans-serif;
`;

export const AccountsArea = styled.div`
    max-width: 870px;
    margin: auto;
`;

export const AccountsMain = styled.div`
    width: 100%;
    margin-top: 60px;
    padding: 40px 65px;
    background-color: white;
    border-radius: 8px;
`;

export const Header = styled.h3`
    color: #2E312D;
    font-weight: 600;
    font-size: 20px;
    margin-bottom: 40px;
`;

export const AccountsList = styled.ul`
    width: 100%;
    margin-bottom: 10px;
`;

export const AccountItem = styled.li`
    list-style: none;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 15px 20px;
`;

export const LeftInfo = styled.div`
    display: flex;
    align-items: center;
`;
export const RightInfo = styled.div`
    display: flex;
    align-items: center;
    position: relative;
`;

export const AccountInfo = styled.div`
    text-align: left;
    width: auto;

    h3 {
        color: #3C433A;
        font-size: 16px;
        font-weight: 600;
    }

    span {
        color: #8E8E8E;
        font-size: 15px;
        font-weight: 600;
        margin-left: 5px;
    }
`;

export const DropdownButtonContainer = styled.div`
    :hover {
        background-color: #f2f2f2;
        border-radius: 25px;
    }
    `;

export const DropdownButton = styled(FontAwesomeIcon)`
    transition: all 0.2s;
    border-radius: 25px;
    padding: 10px;
    cursor: pointer;
`;

export const AddTransaction = styled.div`
    display: flex;
    align-items: center;
    position: relative;
    margin-top: 60px;
    border-top: 1px solid #E2E2E2;
    padding: 30px 0;
`;

export const LabelButton = styled.h3`
    /* display: inline; */
    padding: 0 20px;
    color: #3C433A;
    font-family: Inter;
    font-size: 17px;
    font-weight: 600;
`;

export const AddButton = styled(FontAwesomeIcon)`
    color: #3D8FE7;
    font-size: 24px;
    cursor: pointer;
`;