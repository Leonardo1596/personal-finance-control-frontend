import styled from 'styled-components';

export const RegisterContainer = styled.div`
    width: 100vw;
    height: 100vh;
    padding: 90px 0;
    background-color: #F3F3F3;

    @media screen and (max-width: 1366px) {
        padding: 60px 0;
}
`;

export const RegisterArea = styled.div`
    height: 100%;
    max-width: 980px;
    margin: auto;
    display: flex;
`;

export const RegisterRightSide = styled.div`
    width: 50%;
    background-color: #3D8FE7;
    display: flex;
    align-items: center;
    justify-content: center;

    img {
        transform: scaleX(-1);
    }

    @media screen and (max-width: 1366px) {

        img {
            width: 500px;
        }
    }
`;

export const RegisterLeftSide = styled.div`
    width: 50%;
    background-color: white;
    display: flex;
    align-items: center;
    justify-content: center;
`;

export const RegisterForm = styled.div`
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

    .login {
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

export const RegisterFormGroup = styled.div`
    margin-bottom: 0.875rem;
`;

export const RegisterFormLabel = styled.label`
    display: block;
    margin-bottom: 0.313rem;
    font-size: 16px;

    @media screen and (max-width: 1366px) {
        font-size: 14px;
    }
`;

export const RegisterFormInput = styled.input`
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

export const RegisterFormButton = styled.button`
    margin-top: 1.75rem;
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