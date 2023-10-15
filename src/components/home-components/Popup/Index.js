import React, { useEffect, useState } from 'react';
import * as C from './styles';
import axios from 'axios';
import { showExpensePopup, transactionType, setUser } from '../../../redux/action'
import { faTimes } from "@fortawesome/free-solid-svg-icons";
import { useDispatch, useSelector } from 'react-redux';

const Index = (props) => {
    const dispatch = useDispatch();
    const currentDate = new Date();
    const year = currentDate.getFullYear();
    const month = String(currentDate.getMonth() + 1).padStart(2, '0');
    const day = String(currentDate.getDate()).padStart(2, '0');
    const formattedDate = `${year}-${month}-${day}`;

    const optionsExpenses = ['Gastos essenciais', 'Gastos supérfluos', 'Investimentos', 'Gastos para trabalhar', 'Outros'];
    const optionsRevenues = ['Salário', 'Outras receitas'];

    const userProfile = useSelector((state) => state.handleSetUser);
    const transactionTypeValue = useSelector((state) => state.handleSetTransactionType);

    const [formValues, setFormValues] = useState({
        description: '',
        value: 0,
        date: formattedDate,
        category: optionsExpenses[0],
        account: props.accounts.length > 0 ? props.accounts[0]._id : '',
        accountName: props.accounts.length > 0 ? props.accounts[0].accountName : '',
        observation: ''
    });

    const handleChange = (event) => {
        const { id, value } = event.target;
        setFormValues((prevValues) => ({
            ...prevValues,
            [id]: value,
        }));
    };

    const formatCurrency = (value) => {
        const numericValue = value.replace(/[^\d]/g, '');
        const formatted = Number(numericValue / 100).toLocaleString('pt-BR', {
            style: 'currency',
            currency: 'BRL',
        });
        return formatted;
    };

    const handleValueChange = (event) => {
        const { value } = event.target;
        const numericValue = parseFloat(value.replace(/[^\d]/g, '')) / 100;
        const formattedValue = formatCurrency(value);
        const formattedValueWithComma = formattedValue.replace('.', ',');

        setFormValues((prevValues) => ({
            ...prevValues,
            value: numericValue.toFixed(2),
            formattedValue: formattedValueWithComma,
        }));
    };

    function handleClosePopup() {
        dispatch(transactionType(''))
        dispatch(showExpensePopup(false));
    }

    const handleAccountChange = (event) => {
        const selectedAccountId = event.target.value;

        // Encontre a conta correspondente com base no _id selecionado
        const selectedAccount = props.accounts.find((account) => account._id === selectedAccountId);

        // Atualize o estado incluindo o _id da conta e o nome da conta
        setFormValues((prevFormValues) => ({
            ...prevFormValues,
            account: selectedAccountId,
            accountName: selectedAccount ? selectedAccount.accountName : '', // Define accountName se uma conta correspondente for encontrada
        }));
    };

    function handleAddBill() {
        const selectValue = document.getElementById('paid').value; // Get select value
        const isPaid = selectValue === 'true'; // Convert select value to boolean

        const desiredAccount = props.accounts.find(account => account._id === formValues.account);
        const originalBalance = parseFloat(desiredAccount.balance.replace(',', '.'))

        const valueWithoutSymbol = formValues.formattedValue.replace(/[^\d,.]/g, '');
        let body = {
            userId: userProfile._id,
            // accountId: userProfile.accounts[0]._id,
            accountId: formValues.account,
            email: userProfile.email,
            description: formValues.description,
            value: valueWithoutSymbol,
            date: formValues.date,
            type: transactionTypeValue,
            category: formValues.category,
            accountName: formValues.accountName,
            paid: isPaid,
            originalBalance: originalBalance
        }

        // Copy userProfile
        const updatedUser = userProfile;

        axios.post('https://api-personal-finance-control.onrender.com/transaction/create', body)
            .then(response => {
                if (response.data) {
                    console.log(response.data);
                    function setUpdatedUser() {
                        dispatch(setUser(''));
                        dispatch(setUser(updatedUser));
                    }

                    if (response.data.paid === true) {
                        // Update user
                        updatedUser.transactions.push(response.data);
                    } else {
                        // Update user
                        updatedUser.bills_to_pay.push(response.data);
                    }

                    dispatch(transactionType(''))
                    dispatch(showExpensePopup(false));
                    setUpdatedUser();
                    window.location.reload();
                }
            })
            .catch(err => {
                console.log(err);
            });
    }

    return (
        <div>
            {props.isBill ? (<C.Container>
                <C.Area>
                    <C.Header>
                        <C.Title>{transactionTypeValue === 'saída' ? 'Adicionar conta a pagar' : 'Adicionar receita'}</C.Title>
                        <C.DelIconContainer>
                            <C.DelIcon icon={faTimes} onClick={handleClosePopup} />
                        </C.DelIconContainer>
                    </C.Header>
                    <C.Form>
                        <C.FormGroup>
                            <C.Label>Descrição</C.Label>
                            <C.Input type='text' id='description' value={formValues.description} onChange={handleChange} />
                        </C.FormGroup>
                        <C.FormGroupWrapper>
                            <C.FormGroup>
                                <C.Label>Valor</C.Label>
                                <C.Input
                                    type='text'
                                    style={{ width: '180px' }}
                                    placeholder='R$ 0,00'
                                    id='value'
                                    value={formValues.formattedValue}
                                    onChange={handleValueChange}
                                />
                            </C.FormGroup>

                            <C.FormGroup>
                                <C.Label>Data</C.Label>
                                <C.Input type='date' style={{ width: '180px' }} id='date' value={formValues.date} onChange={handleChange} />
                            </C.FormGroup>
                        </C.FormGroupWrapper>
                        <C.FormGroupWrapper>
                            <C.FormGroup>
                                <C.Label>Pago</C.Label>
                                <C.SelectInput id='paid'>
                                    <option value={true}>Pago</option>
                                    <option value={false}>Á pagar</option>
                                </C.SelectInput>
                            </C.FormGroup>
                        </C.FormGroupWrapper>

                        <C.FormGroup>
                            <C.Label>Observação</C.Label>
                            <C.Input type='text' style={{ height: '70px' }} id='observation' value={formValues.observation} onChange={handleChange} />
                        </C.FormGroup>
                        <C.ButtonWrapper>
                            <C.Button onClick={handleAddBill}>{transactionTypeValue === 'saída' ? 'Adicionar despesa' : 'Adicionar receita'}</C.Button>
                        </C.ButtonWrapper>
                    </C.Form>
                </C.Area>
            </C.Container>) : (<C.Container>
                <C.Area>
                    <C.Header>
                        <C.Title>{transactionTypeValue === 'saída' ? 'Adicionar despesa' : 'Adicionar receita'}</C.Title>
                        <C.DelIconContainer>
                            <C.DelIcon icon={faTimes} onClick={handleClosePopup} />
                        </C.DelIconContainer>
                    </C.Header>
                    <C.Form>
                        <C.FormGroup>
                            <C.Label>Descrição</C.Label>
                            <C.Input type='text' id='description' value={formValues.description} onChange={handleChange} />
                        </C.FormGroup>
                        <C.FormGroupWrapper>
                            <C.FormGroup>
                                <C.Label>Valor</C.Label>
                                <C.Input
                                    type='text'
                                    style={{ width: '180px' }}
                                    placeholder='R$ 0,00'
                                    id='value'
                                    value={formValues.formattedValue}
                                    onChange={handleValueChange}
                                />
                            </C.FormGroup>

                            <C.FormGroup>
                                <C.Label>Data</C.Label>
                                <C.Input type='date' style={{ width: '180px' }} id='date' value={formValues.date} onChange={handleChange} />
                            </C.FormGroup>
                        </C.FormGroupWrapper>
                        <C.FormGroupWrapper>
                            <C.FormGroup>
                                <C.Label>Categoria</C.Label>
                                <C.SelectInput id='category' value={formValues.category} onChange={handleChange} >
                                    {transactionTypeValue === 'saída' ? optionsExpenses.map((option, index) => (
                                        <option key={index} value={option}>
                                            {option}
                                        </option>
                                    )) : optionsRevenues.map((option, index) => (
                                        <option key={index} value={option}>
                                            {option}
                                        </option>
                                    ))}
                                </C.SelectInput>
                            </C.FormGroup>

                            <C.FormGroup>
                                <C.Label>Pago</C.Label>
                                <C.SelectInput id='paid'>
                                    <option value={true}>Pago</option>
                                    <option value={false}>Á pagar</option>
                                </C.SelectInput>
                            </C.FormGroup>
                        </C.FormGroupWrapper>

                        <C.FormGroupWrapper>
                            <C.FormGroup>
                                <C.Label>Conta</C.Label>
                                <C.SelectInput id='account' value={formValues.account} onChange={handleAccountChange} >
                                    {props.accounts.map((account, index) => (
                                        <option key={index} value={account._id} >{account.accountName}</option>
                                    ))}
                                </C.SelectInput>
                            </C.FormGroup>
                        </C.FormGroupWrapper>

                        <C.FormGroup>
                            <C.Label>Observação</C.Label>
                            <C.Input type='text' style={{ height: '70px' }} id='observation' value={formValues.observation} onChange={handleChange} />
                        </C.FormGroup>
                        <C.ButtonWrapper>
                            <C.Button onClick={handleAddBill}>{transactionTypeValue === 'saída' ? 'Adicionar despesa' : 'Adicionar receita'}</C.Button>
                        </C.ButtonWrapper>
                    </C.Form>
                </C.Area>
            </C.Container>)}










        </div>
    )
}

export default Index