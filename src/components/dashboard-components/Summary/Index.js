import React, { useEffect, useState } from 'react';
import * as C from './styles';
import axios from 'axios';

const Index = () => {
    const [revenues, setRevenues] = useState('');
    const [expenses, setExpenses] = useState('');

    useEffect(() => {
            async function getTransactions() {
                // Get user email stored on localStorage
                let user = JSON.parse(localStorage.getItem('persist:finance-control'));

                let body = {
                    email: JSON.parse(user.handleSetUser).email
                }

                await axios.post('http://10.147.17.182:8000/api-transactions', body)
                    .then(response => {
                        // console.log(response.data.message);
                        // setTransactions(response.data.message);


                        // Retrieve expenses value and save on "expenses"
                        function sumExpenses() {
                            // Filtrar transações que são "saida"
                            const expensesTransactions = response.data.message.filter(transaction => transaction.type === "saída");

                            // Somar os valores das transações filtradas
                            const sum = expensesTransactions.reduce((accumulator, transaction) => {
                                return accumulator + transaction.value;
                            }, 0);

                            setExpenses(sum.toFixed(2));

                            // console.log(sum);
                        }
                        sumExpenses();


                        // Retrieve revenues value and save on "revenues"
                        function sumRevenues() {
                            // Filtrar transações que são "saida"
                            const expensesTransactions = response.data.message.filter(transaction => transaction.type === "entrada");

                            // Somar os valores das transações filtradas
                            const sum = expensesTransactions.reduce((accumulator, transaction) => {
                                return accumulator + transaction.value;
                            }, 0);

                            setRevenues(sum.toFixed(2));

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
            <C.DashboardSummaryContainer>
                <C.DashboardSummaryArea>
                    <C.DashboardSummary>

                        <C.DashboardSummaryItem>
                            <C.DashboardSummaryItemTitle>Saldo
                            </C.DashboardSummaryItemTitle>
                            <C.DashboardSummaryItemValue>{`R$ ${(revenues - expenses).toFixed(2).replace('.', ',')}`}</C.DashboardSummaryItemValue>
                        </C.DashboardSummaryItem>



                        <C.DashboardSummaryItem>
                            <C.DashboardSummaryItemTitle>Receitas</C.DashboardSummaryItemTitle>
                            <C.DashboardSummaryItemValue>{`R$ ${revenues.replace('.', ',')}`}</C.DashboardSummaryItemValue>
                        </C.DashboardSummaryItem>



                        <C.DashboardSummaryItem>
                            <C.DashboardSummaryItemTitle>Despesas</C.DashboardSummaryItemTitle>
                            <C.DashboardSummaryItemValue>{`R$ ${expenses.replace('.', ',')}`}</C.DashboardSummaryItemValue>
                        </C.DashboardSummaryItem>

                    </C.DashboardSummary>
                </C.DashboardSummaryArea>
            </C.DashboardSummaryContainer>
        </div>
    )
}

export default Index