import styled from 'styled-components';

export const Container = styled.div`
    width: 515px;
    background-color: white;
    border-radius: 8px;
    padding: 30px;
    font-family: 'Inter', sans-serif;
    margin-bottom: 30px;
`;

export const Header = styled.h3`
    color: #2E312D;
    font-weight: 600;
    font-size: 17px;
    margin-bottom: 30px;
`;

export const AreaInfo = styled.div`
    margin: 0 auto;
    width: 100%;
    padding: 10px 0;
    text-align: center;
    max-width: 300px;
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
    cursor: pointer;
    transition: all 0.2s;

    &:hover {
        background-color: #66A6F7;
    }
`;