import React, { useEffect, useState } from 'react';
import * as C from './styles';
import axios from 'axios';
import { useSelector } from 'react-redux';

const Index = () => {
    const [transactions, setTransactions] = useState([]);
    const [categoryPercentages, setCategoryPercentages] = useState({});
    const userProfile = useSelector((state) => state.handleSetUser);

    useEffect(() => {
        async function fetchTransactions() {
            try {
                const response = await axios.get(`https://api-personal-finance-control.onrender.com/transactions/${userProfile._id}/${userProfile.accounts[0]._id}`);
                setTransactions(response.data);
            } catch (error) {
                console.log(error);
            }
        }
        fetchTransactions();
    }, []);

    useEffect(() => {
        // Função para calcular as porcentagens das categorias
        function calculateCategoryPercentages() {
            // 1. Filtrar transações excluindo 'Salário'
            const filteredTransactions = transactions.filter(
                (transaction) => transaction.type !== 'entrada'
            );

            const categoryTotals = {};
            let totalValue = 0;

            filteredTransactions.forEach((transaction) => {
                const { category, value } = transaction;
                totalValue += parseFloat(value);
                categoryTotals[category] = (categoryTotals[category] || 0) + parseFloat(value);
            });

            const percentages = {};
            Object.keys(categoryTotals).forEach((category) => {
                percentages[category] = (categoryTotals[category] / totalValue) * 100;
            });

            setCategoryPercentages(percentages);
        }

        calculateCategoryPercentages();
    }, [transactions]);

    return (
        <div>
            <C.Container>
                <C.Header>Gastos por categoria</C.Header>
                <C.AreaInfo style={{ marginTop: '10px' }}>
                    {Object.keys(categoryPercentages).map((category, index) => (
                        <C.TransactionList key={index}>
                            <C.TransactionItem>
                                <C.LeftInfo>
                                    <C.TransactionInfo>
                                        <h3>{category}</h3>
                                    </C.TransactionInfo>
                                </C.LeftInfo>
                                <C.RightInfo>
                                    <C.Percentage>{categoryPercentages[category].toFixed(2)}%</C.Percentage>
                                </C.RightInfo>
                            </C.TransactionItem>
                        </C.TransactionList>
                    ))}
                </C.AreaInfo>
            </C.Container>
        </div>
    );
};

export default Index;
