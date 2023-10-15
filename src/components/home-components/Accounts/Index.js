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
            {userInfo ? <C.Container>
                <C.Header>Contas</C.Header>
                <C.AreaInfo style={{ marginTop: '10px' }}>
                    {userInfo.accounts.map((account, index) => (
                        <C.AccountList key={index}>
                            <C.AccountItem>
                                <C.LeftInfo>
                                    <C.AccountInfo>
                                        <h3>{account.accountName}</h3>
                                    </C.AccountInfo>
                                </C.LeftInfo>

                                <C.RightInfo>
                                    <C.AccountBalance>R$ {account.balance.replace('.', ',')}</C.AccountBalance>
                                </C.RightInfo>
                            </C.AccountItem>
                        </C.AccountList>
                    ))}
                    <a href='/contas'><C.Button>Gerenciar contas</C.Button></a>
                </C.AreaInfo>
            </C.Container> : <span>loading</span>}
        </div>
    )
}

export default Index