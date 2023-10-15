import React from 'react';
import * as C from './styles';
import { useDispatch } from 'react-redux';
import { setAccountId, showPopup } from '../../../redux/action';

const Index = ({ isOpen, accountId, handleDeleteAccount }) => {
    const dispatch = useDispatch();
    
    function handleDelete() {
        dispatch(setAccountId(accountId));
        dispatch(showPopup(true));
    }

    return (
        <div>
            <C.DropdownList isOpen={isOpen}>
                <button><C.ListItem>Editar</C.ListItem></button>
                <button><C.ListItem onClick={() => handleDelete()}>Excluir</C.ListItem></button>
            </C.DropdownList>
        </div>
    )
}

export default Index