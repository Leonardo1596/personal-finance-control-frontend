import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export const Container = styled.div`
    width: 100vw;
    height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;
    font-family: 'Inter', sans-serif;
`;

export const Area = styled.div`
    width: 492px;
    /* height: 540px; */
    padding: 40px;
    border-radius: 25px;
    background: #FFF;
    position: fixed;
    z-index: 1000;
`;

export const Header = styled.div`
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-bottom: 50px;
`;

export const Title = styled.h3`
    color: #2E312D;
    font-size: 17px;
    font-weight: 600;
`;

export const DescriptionContainer = styled.div`
    width: 100%;
    text-align: center;
    margin-bottom: 50px;
`;

export const Description = styled.span`
    font-size: 14px;
`;

export const ButtonContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: end;
`;

export const Button = styled.button`
    height: 40px;
    background-color: #3D8FE7;
    color: white;
    border: none;
    border-radius: 4px;
    margin-left: 10px;
    padding: 10px 20px;
    cursor: pointer;

    &:hover {
        opacity: 0.8;
    }
`;