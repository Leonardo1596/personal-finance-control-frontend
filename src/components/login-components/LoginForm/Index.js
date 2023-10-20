import React, { useState } from 'react';
import * as C from './styles';
import axios from 'axios';
import { useDispatch } from 'react-redux';
import { setAuth, setUser } from '../../../redux/action';
import image from '../../../assets/img/kisspng-chart-finance-control-bar-chart-5b0438420d0808.9861240515270032020534-removebg-preview.png';
import loadingGif from '../../../assets/gif/loading-gif.gif';

const Index = () => {
    const dispatch = useDispatch();
    const [loading, setLoading] = useState(false);

    function login() {
        const email = document.getElementById('email').value;
        const password = document.getElementById('password').value;
        const loginButton = document.getElementById('login');

        setLoading(true);
        loginButton.style.backgroundColor = '#437fbf';

        axios.post('https://api-personal-finance-control.onrender.com/auth/sign-in', {
            email: email,
            password: password
        })
            .then(response => {
                if (response.data.message === "Successfully signed") {
                    // console.log(response.data.userInfo);
                    dispatch(setAuth(true));
                    dispatch(setUser(response.data.userInfo));
                    window.location.href = '/inicio'
                } else {
                    setLoading(false);
                    loginButton.style.backgroundColor = '#3D8FE7';
                }
            })
            .catch(err => {
                console.log(err);
            });
    }

    return (
        <div>
            <C.LoginContainer>
                <C.LoginArea>
                    <C.LoginLeftSide>
                        <img src={image} />
                    </C.LoginLeftSide>
                    <C.LoginRightSide>
                        <C.LoginForm>
                            <h1>Login</h1>
                            <C.LoginFormGroup>
                                <C.LoginFormLabel>Email</C.LoginFormLabel>
                                <C.LoginFormInput type='text' placeholder='@mail.com' id='email' />
                            </C.LoginFormGroup>
                            <C.LoginFormGroup>
                                <C.LoginFormLabel>Senha</C.LoginFormLabel>
                                <C.LoginFormInput type='password' placeholder='senha' id='password' />
                            </C.LoginFormGroup>
                            <a href="#">Esqueceu a senha?</a>
                            <C.LoginFormButton onClick={login} id='login'>
                                {loading ? (<img src={loadingGif} />) : ('Entrar')}
                            </C.LoginFormButton>
                            <span>Ainda não tem conta?</span>
                            <a href="/cadastrar" className='register'>Registre-se</a>
                        </C.LoginForm>
                    </C.LoginRightSide>
                </C.LoginArea>
            </C.LoginContainer>
        </div>
    )
}

export default Index