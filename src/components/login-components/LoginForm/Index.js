import React, { useState } from 'react';
import * as C from './styles';
import axios from 'axios';
import { useDispatch } from 'react-redux';
import { setAuth, setUser } from '../../../redux/action';

const Index = () => {
    const dispatch = useDispatch();

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleEmailChange = (event) => {
        setEmail(event.target.value);
    };

    const handlePasswordChange = (event) => {
        setPassword(event.target.value);
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        
        let body = {
            email: email,
            password: password
        };

        axios.post('http://10.147.17.182:8000/auth/sign-in', body)
            .then(response => {
                // console.log(response.data);
                if (response.data.message === "Successfully signed") {
                    dispatch(setUser(response.data.userProfile))
                    dispatch(setAuth(true));
                    window.location.href = '/';
                }
            })
            .catch(err => {
                console.log(err);
            });
    };

    return (
        <div>
            <C.LoginContainer>
                <C.LoginForm onSubmit={handleSubmit}>
                    <C.LoginTitle>Login</C.LoginTitle>
                    <C.LoginInput type="email" placeholder="Email" value={email} onChange={handleEmailChange} />
                    <C.LoginInput type="password" placeholder="Senha" value={password} onChange={handlePasswordChange} />
                    <C.LoginButton type="submit">Entrar</C.LoginButton>
                    <C.ForgotPasswordLink href="#">Esqueci minha senha</C.ForgotPasswordLink>
                </C.LoginForm>
            </C.LoginContainer>
        </div>
    )
}

export default Index