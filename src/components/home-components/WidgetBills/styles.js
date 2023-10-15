import styled from 'styled-components';
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

export const Title = styled.h4`
    color: #3C433A;
    font-weight: 500;
    font-size: 16px;
    margin-bottom: 20px;
`;

export const TextInfo = styled.p`
    color: #A0A0A0;
    font-weight: 500;
    font-size: 15px;
    margin-bottom: 25px;
`;

export const Button = styled.button`
    height: 40px;
    width: 215px;
    background-color: #3D8FE7;
    color: white;
    border: none;
    border-radius: 4px;
    margin-top: 20px;
    transition: all 0.2s;

    cursor: pointer;

    &:hover {
        background-color: #66A6F7;
    }
`;

export const BillList = styled.ul`
    width: 100%;
    border-bottom: 1px solid #E2E2E2;
    margin-bottom: 10px;
`;

export const BillItem = styled.li`
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

export const IconBackground = styled.div`
    width: 35px;
    height: 35px;
    background-color: #3D8FE7;
    border-radius: 35px;
    margin-right: 15px;
`;

export const BillInfo = styled.div`
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

export const Billdate = styled.span`
    color: #A0A0A0;
    font-size: 13px;
    font-weight: 500;
`;

export const PayButton = styled.button`
    height: 25px;
    /* width: 150px; */
    padding: 0 10px;
    background-color: #3D8FE7;
    color: white;
    border: none;
    border-radius: 4px;
    /* margin-top: 20px; */
    margin-left: 10px;

    cursor: pointer;

    &:hover {
        background-color: #66A6F7;
    }
`;

export const DeleteIcon = styled(FontAwesomeIcon)`
    font-size: 16px;
    margin-left: 10px;
    color: red;
    cursor: pointer;
`

export const LoadMore = styled.button`
    margin-top: 30px;
    background-color: transparent;
    color: #8A8080;
    border: none;
    text-align: center;
    font-size: 13px;
    font-weight: 400;
    cursor: pointer;
`;