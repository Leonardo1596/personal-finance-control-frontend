import React, { useEffect, useState } from 'react';
import * as C from './styles';
import axios from 'axios';
// import Skeleton from 'react-loading-skeleton';
import Skeleton from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'

const Index = () => {
    const [revenues, setRevenues] = useState('');
    const [expenses, setExpenses] = useState('');
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
            async function getTransactions() {
                // Get user email stored on localStorage
                let user = JSON.parse(localStorage.getItem('persist:finance-control'));

                let body = {
                    email: JSON.parse(user.handleSetUser).email
                }


                await axios.post('https://api-personal-finance-control.onrender.com/api-transactions', body)
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
                        setIsLoading(false);
                    })
                    .catch(err => {
                        console.log(err);
                    });
            }
            getTransactions();
    }, []);

    const balance = (revenues - expenses).toFixed(2).replace('.', ',');


    return (
        <div>
            <C.DashboardSummaryContainer>
                <C.DashboardSummaryArea>
                    <C.DashboardSummary>

                        <C.DashboardSummaryItem>
                            {!isLoading ? <C.DashboardSummaryItemTitle>Saldo</C.DashboardSummaryItemTitle> : <Skeleton />}
                            {!isLoading ? <C.DashboardSummaryItemValue>{`R$ ${balance}`}</C.DashboardSummaryItemValue> : <Skeleton />}
                        </C.DashboardSummaryItem>



                        <C.DashboardSummaryItem>
                            {!isLoading ? <C.DashboardSummaryItemTitle>Receitas</C.DashboardSummaryItemTitle> : <Skeleton />}
                            {!isLoading ? <C.DashboardSummaryItemValue>{`R$ ${revenues.replace('.', ',')}`}</C.DashboardSummaryItemValue> : <Skeleton />}
                        </C.DashboardSummaryItem>



                        <C.DashboardSummaryItem>
                            {!isLoading ? <C.DashboardSummaryItemTitle>Despesas</C.DashboardSummaryItemTitle> : <Skeleton />}
                            {!isLoading ? <C.DashboardSummaryItemValue>{`R$ ${expenses.replace('.', ',')}`}</C.DashboardSummaryItemValue> : <Skeleton />}
                        </C.DashboardSummaryItem>

                    </C.DashboardSummary>
                </C.DashboardSummaryArea>
            </C.DashboardSummaryContainer>
        </div>
    )
}

export default Index