import React, { useEffect, useState } from 'react';
import * as C from './styles';
import axios from 'axios';

const Index = (props) => {
    const [userInfo, setUserInfo] = useState('');

    useEffect(() => {
        function fetchUserInfo() {
            axios.get(`https://api-personal-finance-control.onrender.com/users/${props.userProfile._id}`)
                .then(response => {
                    // console.log(response.data);
                    setUserInfo(response.data.user);
                })
                .catch(err => {
                    console.log(err);
                });
        }
        fetchUserInfo();
    }, [])

    return (
        <div>
            <C.Container>
                <C.Header>Contas</C.Header>
                <C.AreaInfo style={{ marginTop: '10px' }}>
                    {props.userProfile.accounts.map((account, index) => (
                        <C.AccountList key={index}>
                            <C.AccountItem>
                                <C.LeftInfo>
                                    <C.AccountInfo>
                                        <h3>{account.accountName}</h3>
                                    </C.AccountInfo>
                                </C.LeftInfo>

                                <C.RightInfo>
                                    <C.AccountBalance>R$ {(props.revenues - props.expenses).toFixed(2).toString().replace('.', ',')}</C.AccountBalance>

                                </C.RightInfo>
                            </C.AccountItem>
                        </C.AccountList>
                    ))}
                    <a href='/contas'><C.Button>Gerenciar contas</C.Button></a>
                </C.AreaInfo>
            </C.Container>
        </div>
    )
}

export default Index