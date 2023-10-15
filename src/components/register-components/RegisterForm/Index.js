import React from 'react';
import * as C from './styles' ;
import axios from 'axios';
import image from '../../../assets/img/kisspng-chart-finance-control-bar-chart-5b0438420d0808.9861240515270032020534-removebg-preview.png';

const Index = () => {
    function register() {
        const email = document.getElementById('email').value;
        const username = document.getElementById('username').value;
        const password = document.getElementById('password').value;
        const confirmPassword = document.getElementById('confirmPassword').value;


        axios.post('http://10.147.17.113:8000/auth/sign-up', {
            email: email,
            username: username,
            password: password,
            confirmPassword: confirmPassword
        })
            .then(response => {
                // console.log(response.data);
            })
            .catch(err => {
                // console.log(err);
            });
    }


  return (
    <div>
        <C.RegisterContainer>
                <C.RegisterArea>
                    <C.RegisterLeftSide>
                        <C.RegisterForm>
                            <h1>Inscrever-se</h1>
                            <C.RegisterFormGroup>
                                <C.RegisterFormLabel>Email</C.RegisterFormLabel>
                                <C.RegisterFormInput type='text' placeholder='@mail.com' id='email' />
                            </C.RegisterFormGroup>
                            <C.RegisterFormGroup>
                                <C.RegisterFormLabel>Usuário</C.RegisterFormLabel>
                                <C.RegisterFormInput type='text' placeholder='nome do usuário' id='username' />
                            </C.RegisterFormGroup>
                            <C.RegisterFormGroup>
                                <C.RegisterFormLabel>Senha</C.RegisterFormLabel>
                                <C.RegisterFormInput type='password' placeholder='senha' id='password' />
                            </C.RegisterFormGroup>
                            <C.RegisterFormGroup>
                                <C.RegisterFormLabel>Confirmar senha</C.RegisterFormLabel>
                                <C.RegisterFormInput type='password' placeholder='confirmar senha' id='confirmPassword' />
                            </C.RegisterFormGroup>
                            <C.RegisterFormButton onClick={register} id='Register'>Cadastrar</C.RegisterFormButton>
                            <span>Já tem uma conta?</span>
                            <a href="#" className='login'>Faça login</a>
                        </C.RegisterForm>
                    </C.RegisterLeftSide>
                    <C.RegisterRightSide>
                        <img src={image} />
                    </C.RegisterRightSide>
                </C.RegisterArea>
            </C.RegisterContainer>
    </div>
  )
}

export default Index