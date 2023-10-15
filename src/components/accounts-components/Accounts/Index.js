import React, { useEffect, useState } from 'react';
import * as C from './styles';
import DropdownMenu from '../DropdownMenu/Index';
import { useDispatch, useSelector } from 'react-redux';
import { faGripLines, faCirclePlus } from "@fortawesome/free-solid-svg-icons";
import { showPopup } from '../../../redux/action';

import axios from 'axios';

const Index = (props) => {
  const [userInfo, setUserInfo] = useState('');
  const [openMenuIndex, setOpenMenuIndex] = useState(-1);

  const dispatch = useDispatch();

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
  }, []);

  const toggleDropdown = (index) => {
    setOpenMenuIndex(index === openMenuIndex ? -1 : index);
  };

  function handleDeleteAccount() {
    dispatch(showPopup(true));
  }

  return (
    <div>
      {userInfo ? <C.AccountsContainer>
        <C.AccountsArea>
          <C.AccountsMain>
            <C.Header>Contas</C.Header>
            {userInfo.accounts.map((account, index) => (
              <C.AccountsList key={index}>
                <C.AccountItem>
                  <C.LeftInfo>
                    <C.AccountInfo>
                      <h3>{account.accountName}</h3>
                      <span style={{
                        color:
                          parseFloat(account.balance.replace(',', '.')) > 0
                            ? 'green'
                            : parseFloat(account.balance.replace(',', '.')) < 0
                              ? 'red'
                              : '#8E8E8E'
                      }} >R$ {account.balance.replace('.', ',')}</span>
                    </C.AccountInfo>
                  </C.LeftInfo>

                  <C.RightInfo>
                    <C.DropdownButtonContainer>
                      <C.DropdownButton onClick={() => { toggleDropdown(index); }} icon={faGripLines}></C.DropdownButton>
                    </C.DropdownButtonContainer>
                    {openMenuIndex === index && (
                      <DropdownMenu isOpen={true} accountId={account._id} handleDeleteAccount={handleDeleteAccount} />
                    )}
                  </C.RightInfo>
                </C.AccountItem>
              </C.AccountsList>
            ))}
            <C.AddTransaction>
              <C.LabelButton>Criar conta</C.LabelButton>
              <C.AddButton icon={faCirclePlus} />
            </C.AddTransaction>
          </C.AccountsMain>
        </C.AccountsArea>
      </C.AccountsContainer> : <span>loading</span>}

    </div>
  )
}

export default Index