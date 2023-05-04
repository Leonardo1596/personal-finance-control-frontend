import React, { useState } from 'react';
import * as C from './styles';
import axios from 'axios';
import { useDispatch } from 'react-redux';
import { setAuth, setUser } from '../../../redux/action';
import gifLoading from '../../../assets/gif/loading-gif.gif';

const Index = () => {
    const dispatch = useDispatch();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [isLoginLoading, setIsLoginLoading] = useState(false);

    const handleEmailChange = (event) => {
        setEmail(event.target.value);
    };

    const handlePasswordChange = (event) => {
        setPassword(event.target.value);
    };

    const handleSubmit = (event) => {
        setIsLoginLoading(true);
        event.preventDefault();
        
        let body = {
            email: email,
            password: password
        };

        axios.post('https://api-personal-finance-control.onrender.com/auth/sign-in', body)
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
                    <C.LoginButton type="submit">{isLoginLoading ? <img src={gifLoading} width={20} />: 'Entrar'}</C.LoginButton>
                    <C.ForgotPasswordLink href="#">Esqueci minha senha</C.ForgotPasswordLink>
                </C.LoginForm>
            </C.LoginContainer>
        </div>
    )
}

export default Index