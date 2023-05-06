import React, { useEffect, useState } from 'react';
import * as C from './styles';
import { useDispatch, useSelector } from 'react-redux';

import Skeleton from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'
import { faEye, faEyeSlash, faCircle } from "@fortawesome/free-solid-svg-icons";
import { setCurrentValueVisibility } from '../../../redux/action';


const Index = (props) => {
    const dispatch = useDispatch();
    // const transactions = useSelector((state) => state.handleTransactions);
    const buttonVisibility = useSelector((state) => state.handleSetCurrentValueVisibility);
    const [revenues, setRevenues] = useState('');
    const [expenses, setExpenses] = useState('');
    // const [isLoading, setIsLoading] = useState(true);
    const balance = (revenues - expenses).toFixed(2).replace('.', ',');

    function handleClick() {
        dispatch(setCurrentValueVisibility(!buttonVisibility));
    }

    useEffect(() => {
        function sumExpenses() {
            // Filtrar transações que são "saida"
            const expensesTransactions = props.transactions.filter(transaction => transaction.type === "saída");

            // Somar os valores das transações filtradas
            const sum = expensesTransactions.reduce((accumulator, transaction) => {
                return accumulator + transaction.value;
            }, 0);
            setExpenses(sum.toFixed(2));
        }
        sumExpenses();


        // Retrieve revenues value and save on "revenues"
        function sumRevenues() {
            // Filtrar transações que são "saida"
            const expensesTransactions = !props.isLoading && props.transactions.filter(transaction => transaction.type === "entrada");

            // Somar os valores das transações filtradas
            const sum = expensesTransactions.reduce((accumulator, transaction) => {
                return accumulator + transaction.value;
            }, 0);
            setRevenues(sum.toFixed(2));
        }
        sumRevenues();
    }, []);

    return (
        <div>
            <C.DashboardSummaryContainer>
                <C.DashboardSummaryArea>
                    <C.DashboardSummary>
                        <C.DashboardSummaryItem>
                            {!props.isLoading ? <C.DashboardSummaryItemTitle>Saldo</C.DashboardSummaryItemTitle> : <Skeleton />}
                            {!props.isLoading ? <C.DashboardSummaryButton onClick={handleClick}>{buttonVisibility ? (<C.EyeIcon icon={faEyeSlash} />) : (<C.EyeIcon icon={faEye} />)}</C.DashboardSummaryButton> : ''}

                            {!props.isLoading ? (buttonVisibility ? <C.DashboardSummaryItemValue>{`R$ ${balance}`}</C.DashboardSummaryItemValue> : (
                                <span style={{ display: 'flex', alignItems: 'center' }}>
                                    <C.DashboardSummaryHiddenValueContainer>
                                        <C.DashboardSummaryHiddenValue icon={faCircle} />
                                        <C.DashboardSummaryHiddenValue icon={faCircle} />
                                        <C.DashboardSummaryHiddenValue icon={faCircle} />
                                        <C.DashboardSummaryHiddenValue icon={faCircle} />
                                    </C.DashboardSummaryHiddenValueContainer>
                                </span>)) : <Skeleton />}
                        </C.DashboardSummaryItem>



                        <C.DashboardSummaryItem>
                            {!props.isLoading ? <C.DashboardSummaryItemTitle>Receitas</C.DashboardSummaryItemTitle> : <Skeleton />}
                            {!props.isLoading ? <C.DashboardSummaryItemValue>{`R$ ${revenues.replace('.', ',')}`}</C.DashboardSummaryItemValue> : <Skeleton />}
                        </C.DashboardSummaryItem>



                        <C.DashboardSummaryItem>
                            {!props.isLoading ? <C.DashboardSummaryItemTitle>Despesas</C.DashboardSummaryItemTitle> : <Skeleton />}
                            {!props.isLoading ? <C.DashboardSummaryItemValue>{`R$ ${expenses.replace('.', ',')}`}</C.DashboardSummaryItemValue> : <Skeleton />}
                        </C.DashboardSummaryItem>

                    </C.DashboardSummary>
                </C.DashboardSummaryArea>
            </C.DashboardSummaryContainer>
        </div>
    )
}

export default Index