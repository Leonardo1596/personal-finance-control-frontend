import React from 'react';
import * as C from './styles';
import Navbar from '../../components/home-components/Navbar/Index';
import Accounts from '../../components/accounts-components/Accounts/Index';
import ConfirmationPopup from '../../components/ConfirmationPopup/Index';
import { useDispatch, useSelector } from 'react-redux';
import { setUser } from '../../redux/action';
import axios from 'axios';

const Index = () => {
  const dispatch = useDispatch();
  const userProfile = useSelector((state) => state.handleSetUser);
  const isPopupVisible = useSelector(state => state.handleShowPopup);
  const accountId = useSelector(state => state.handleDeleteAccount);

  function handleDeleteAccount() {
    const updatedUser = userProfile;

    // Account to remove
    const accountToDelete = userProfile.accounts.find(account => account._id === accountId);

    const accountIndexToDelete = updatedUser.accounts.findIndex(
      account => account._id === accountToDelete._id
    );

    if (accountIndexToDelete !== -1) {
      updatedUser.accounts.splice(accountIndexToDelete, 1);
    }

    function setUpdatedUser() {
      dispatch(setUser(''));
      dispatch(setUser(updatedUser));
    };

    axios.delete(`https://api-personal-finance-control.onrender.com/users/${userProfile._id}/accounts/${accountId}`)
      .then(response => {
        console.log(response.data);

        if (response.data.message) {
          setUpdatedUser();
        }



        if (response.data.error === 'Você não pode excluir sua única conta') {
          alert('Impossível excluir sua única conta!');
        }


        // window.location.reload();
      })
      .catch(err => {
        console.log(err);
      });
  }

  return (
    <div>
      <C.Main>
        <Navbar />
        {isPopupVisible && <C.Overlay><ConfirmationPopup header='Confirmar exclusão' description='Tem certeza que deseja excluir a conta selecionada?' handleAction={handleDeleteAccount} /></C.Overlay>}
        <Accounts userProfile={userProfile} />
      </C.Main>
    </div>
  )
}

export default Index