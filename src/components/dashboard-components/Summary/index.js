import React, { useEffect, useState } from 'react';
import {
    DashboardSummary,
    DashboardSummaryItem,
    DashboardSummaryItemTitle,
    DashboardSummaryItemValue,
} from './styles';
import axios from 'axios';

const index = () => {
    const [revenues, setRevenues] = useState('');
    const [expenses, setExpenses] = useState('');

    useEffect(() => {
        async function getTransactions() {
            let body = {
                email: 'leonardoemanuel156@gmail.com'
            }
            await axios.post('http://10.147.17.182:8000/api-transactions', body)
                .then(response => {
                    // console.log(response.data.message);
                    // setTransactions(response.data.message);


                    function sumExpenses() {
                        // Filtrar transações que são "saida"
                        const expensesTransactions = response.data.message.filter(transaction => transaction.type === "saída");

                        // Somar os valores das transações filtradas
                        const sum = expensesTransactions.reduce((accumulator, transaction) => {
                            return accumulator + transaction.value;
                        }, 0);

                        setExpenses(sum);

                        // console.log(sum);
                    }
                    sumExpenses();

                    function sumRevenues() {
                        // Filtrar transações que são "saida"
                        const expensesTransactions = response.data.message.filter(transaction => transaction.type === "entrada");

                        // Somar os valores das transações filtradas
                        const sum = expensesTransactions.reduce((accumulator, transaction) => {
                            return accumulator + transaction.value;
                        }, 0);

                        setRevenues(sum);

                        // console.log(sum);
                    }
                    sumRevenues();
                })
                .catch(err => {
                    console.log(err);
                });
        }
        getTransactions();
    }, [revenues]);

    return (
        <div>
            <DashboardSummary>
                <DashboardSummaryItem>
                    <DashboardSummaryItemTitle>Saldo Atual</DashboardSummaryItemTitle>
                    <DashboardSummaryItemValue>{`R$ ${revenues - expenses}`}</DashboardSummaryItemValue>
                </DashboardSummaryItem>
                <DashboardSummaryItem>
                    <DashboardSummaryItemTitle>Receitas</DashboardSummaryItemTitle>
                    <DashboardSummaryItemValue>{`R$ ${revenues}`}</DashboardSummaryItemValue>
                </DashboardSummaryItem>
                <DashboardSummaryItem>
                    <DashboardSummaryItemTitle>Despesas</DashboardSummaryItemTitle>
                    <DashboardSummaryItemValue>{`R$ ${expenses}`}</DashboardSummaryItemValue>
                </DashboardSummaryItem>
            </DashboardSummary>
        </div>
    )
}

export default index