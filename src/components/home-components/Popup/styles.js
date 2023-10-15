import styled from 'styled-components';
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
`;

export const Title = styled.h3`
    color: #2E312D;
    font-size: 17px;
    font-weight: 600;
`;

export const DelIconContainer = styled.div`
    :hover {
        color: #ed5a5a;
    }
`;

export const DelIcon = styled(FontAwesomeIcon)`
    width: 21px;
    height: 21px;
    color: #888;
    cursor: pointer;
`;

export const Form = styled.div`
    width: 100%;
    text-align: left;
    margin-top: 30px;
`;

export const FormGroup = styled.div`
    display: flex;
    justify-content: center;
    flex-direction: column;
    margin-bottom: 15px;

    .inputValue {
        width: 100%;
    height: 35px;
    margin-top: 10px;
    border-radius: 4px;
    border: 1px solid #C8B2B2;
    padding: 0 15px;
    font-size: 14px;
    font-weight: 500;
    /* outline: 2px solid #3D8FE7; */

    ::placeholder {
        color: #888;
        font-size: 30px;
        font-weight: 500;
    }
    }
`;

export const Label = styled.label`
    color: #888;
    font-size: 15px;
    font-weight: 500;
    `;

export const Input = styled.input`
    width: 100%;
    height: 35px;
    margin-top: 10px;
    border-radius: 4px;
    border: 1px solid #C8B2B2;
    padding: 0 15px;
    font-size: 14px;
    font-weight: 500;
    /* outline: 2px solid #3D8FE7; */

    ::placeholder {
        color: #888;
        font-size: 30px;
        font-weight: 500;
    }
`;

export const FormGroupWrapper = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
`;

export const SelectInput = styled.select`
    width: 180px;
    height: 35px;
    margin-top: 10px;
    border-radius: 4px;
    border: 1px solid #C8B2B2;
    padding: 0 15px;
    font-size: 14px;
    font-weight: 500;
    color: #888;


    option {
        height: 30px;
    }
`;

export const ButtonWrapper = styled.div`
    margin-top: 40px;
    display: flex;
    align-items: center;
    justify-content: center;
`;

export const Button = styled.button`
    height: 40px;
    width: 215px;
    background-color: #3D8FE7;
    color: white;
    border: none;
    border-radius: 4px;
    margin: 0 auto;

    cursor: pointer;

    &:hover {
        background-color: #66A6F7;
    }
`;