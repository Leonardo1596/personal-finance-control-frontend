import React, { useEffect, useState } from 'react';
import * as C from './styles';
import axios from 'axios';
import { faTrash } from "@fortawesome/free-solid-svg-icons";
import { format } from 'date-fns';
import { parseISO } from 'date-fns';
import { useDispatch, useSelector } from 'react-redux';
import { showExpensePopup, showPopup, transactionType, setUser, setTransactionId, setAccountId } from '../../../redux/action'

const Index = ({ bills }) => {
    const dispatch = useDispatch();
    const userProfile = useSelector((state) => state.handleSetUser);
    const accountId = useSelector(state => state.handleDeleteAccount);

    function handleAddButton() {
        dispatch(transactionType('saída'))
        dispatch(showExpensePopup(true));
    }

    function handleDelete(bill) {
        dispatch(setTransactionId(bill._id))
        dispatch(showPopup(true));
    };

    function handlePayButton(bill) {
        bill.paid = true;
        const updatedUser = userProfile;

        axios.post('https://api-personal-finance-control.onrender.com/transaction/create', bill)
            .then(response => {
                if (response.data) {
                    function setUpdatedUser() {
                        dispatch(setUser(''));
                        dispatch(setUser(updatedUser));
                    }

                    updatedUser.transactions.push(response.data);
                    setUpdatedUser();

                    window.location.reload();
                }
            })
            .catch(err => {
                console.log(err);
            });
        handleDelete(bill);
    }

    return (
        <div>
            <C.Container>
                <C.Header>Compromissos</C.Header>
                {bills && bills.length > 0 ? (
                    <C.AreaInfo style={{ marginTop: '10px' }}>
                        {bills.map((bill, index) => (
                            <C.BillList key={index}>
                                <C.BillItem>
                                    <C.LeftInfo>
                                        {/* <C.IconBackground></C.IconBackground> */}
                                        <C.BillInfo>
                                            <h3>{bill.description}</h3>
                                            <span>R$ {bill.value}</span>
                                        </C.BillInfo>
                                    </C.LeftInfo>
                                    <C.RightInfo>
                                        <C.Billdate>{format(parseISO(bill.date), 'dd/MM/yyyy')}</C.Billdate>
                                        <C.PayButton onClick={() => handlePayButton(bill)}>Concluir pagamento</C.PayButton>
                                        <C.DeleteIcon icon={faTrash} onClick={() => handleDelete(bill)} />
                                    </C.RightInfo>
                                </C.BillItem>
                            </C.BillList>
                        ))}
                        <C.Button onClick={handleAddButton}>Adicionar compromisso</C.Button>
                        {/* <C.LoadMore>Mostrar mais</C.LoadMore> */}
                    </C.AreaInfo>
                ) : (
                    <C.AreaInfo style={{ maxWidth: '300px', marginTop: '30px' }}>
                        <C.Title>Sem compromissos no momento.</C.Title>
                        <C.TextInfo>Aproveite para revisar suas finanças e planejar seus próximos pagamentos</C.TextInfo>
                        <C.Button onClick={handleAddButton} style={{ marginTop: '0' }}>Adicionar compromisso</C.Button>
                    </C.AreaInfo>
                )}
            </C.Container>
        </div>
    )
}

export default Index