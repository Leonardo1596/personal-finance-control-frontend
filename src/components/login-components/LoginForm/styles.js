import styled from 'styled-components';

export const LoginContainer = styled.div`
    width: 100vw;
    height: 100vh;
    padding: 90px 0;
    background-color: #F3F3F3;

    @media screen and (max-width: 1366px) {
        padding: 60px 0;
}
`;

export const LoginArea = styled.div`
    height: 100%;
    max-width: 980px;
    margin: auto;
    display: flex;
`;

export const LoginLeftSide = styled.div`
    width: 50%;
    background-color: #3D8FE7;
    display: flex;
    align-items: center;
    justify-content: center;

    @media screen and (max-width: 1366px) {
        img {
            width: 500px;
        }
    }
`;

export const LoginRightSide = styled.div`
    width: 50%;
    background-color: white;
    display: flex;
    align-items: center;
    justify-content: center;
`;

export const LoginForm = styled.div`
        padding: 0 90px;
        width: 100%;
    h1 {
        font-size: 36px;
        text-align: center;
        margin-bottom: 20px;
    }

    
    a {
        font-size: 14px;
        color: #3D8FE7;
        text-decoration: none;
    }
    
    span {
        font-size: 14px;
        margin-right: 5px;
    }
    
    .register {
        text-decoration: underline;
    }

    @media screen and (max-width: 1366px) {
        h1 {
            font-size: 32px;
        }

        a {
            font-size: 13px;
        }

        span {
            font-size: 13px;
        }
    }
`;

export const LoginFormGroup = styled.div`
    margin-bottom: 0.875rem;
`;

export const LoginFormLabel = styled.label`
    display: block;
    margin-bottom: 0.313rem;
    font-size: 16px;

    @media screen and (max-width: 1366px) {
        font-size: 14px;
    }
`;

export const LoginFormInput = styled.input`
    height: 56px;
    border-radius: 7px;
    background-color: #F8F8F8;
    border: none;
    outline: none;
    padding-left: 13px;
    font-size: 15px;
    width: 100%;

    @media screen and (max-width: 1366px) {
        font-size: 13px;
        height: 50px;
    }
`;

export const LoginFormButton = styled.button`
    margin-top: 0.875rem;
    margin-bottom: 0.875rem;
    height: 56px;
    border-radius: 7px;
    background-color: #3D8FE7;
    border: none;
    color: white;
    font-size: 20px;
    width: 100%;
    cursor: pointer;

    @media screen and (max-width: 1366px) {
        font-size: 16px;
        height: 50px;
    }
`;