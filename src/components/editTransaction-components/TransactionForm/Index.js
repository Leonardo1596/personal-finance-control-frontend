import React, { useEffect, useState } from 'react';
import * as C from './styles';
import axios from 'axios';
import { useParams } from 'react-router-dom';

const Index = () => {
    const options = ['Salário', 'Gastos essenciais', 'Gastos supérfluos', 'Investimentos', 'Gastos para trabalhar', 'Outros'];
    const { id } = useParams();
    const [value, setValue] = useState(0);
    const [transaction, setTransaction] = useState({
        description: '',
        value: '',
        category: '',
        type: '',
        date: '',
        id: id
    });

    const handleDescription = (event) => {
        setTransaction({
            ...transaction,
            description: event.target.value,
        });
    }

    const handleCategory = (event) => {
        setTransaction({
            ...transaction,
            category: event.target.value,
        });
    }

    const handleType = (event) => {
        setTransaction({
            ...transaction,
            type: event.target.value,
        });
    }

    const handleDate = (event) => {
        setTransaction({
            ...transaction,
            date: event.target.value,
        });
    }

    const handleValue = (newValue) => {
        setValue(newValue);
    };


    const handleSubmit = (event) => {
        event.preventDefault();
    }


    useEffect(() => {
        async function getCurrentTransaction() {
            // Get user email stored on localStorage
            let email = JSON.parse(localStorage.getItem('persist:finance-control'));


            let body = {
                email: JSON.parse(email.handleSetUser).email
            }

            await axios.post(`https://api-personal-finance-control.onrender.com/api-transaction/${id}`, body)
                .then(response => {
                    // console.log(response.data.message);
                    setTransaction(response.data.message);
                    setValue(response.data.message.value);

                })
                .catch(err => {
                    console.log(err);
                });
        }
        getCurrentTransaction();
    }, [])





    async function editTransaction() {
        // To value start in a string
        const stringValue = String(value);


        // Get user email stored on localStorage
        let email = JSON.parse(localStorage.getItem('persist:finance-control'));


        let body = {
            email: JSON.parse(email.handleSetUser).email,
            id: id,
            description: transaction.description,
            value: parseFloat(stringValue.replace("R$ ", "").replace(".", "").replace(",", ".")).toFixed(2),        // Convert to number to save on db
            category: transaction.category,
            type: transaction.type,
            date: transaction.date
        }


        await axios.put('https://api-personal-finance-control.onrender.com/api-edit-transaction', body)
            .then(response => {
                // console.log(response.data);
                window.location.href = '/';
            })
            .catch(err => {
                console.log(err);
            });
    }

    
    return (
        <div>
            <C.FormContainer onSubmit={handleSubmit}>
                <C.Area>
                    <C.FormTitle>Editar Transação</C.FormTitle>
                    <C.FormGroup>
                        <C.FormLabel>Descrição</C.FormLabel>
                        <C.FormInput type="text" name="description" id="description" onChange={handleDescription} defaultValue={transaction.description} />
                    </C.FormGroup>
                    <C.FormGroup>
                        <C.FormLabel>Valor</C.FormLabel>
                        <C.StyledCurrencyInput
                            name="myInput"
                            value={value}
                            onValueChange={handleValue}
                            prefix="R$ "
                            decimalSeparator=","
                            groupSeparator="."
                            disableAbbreviations={true} />
                    </C.FormGroup>
                    <C.FormGroup>
                        <C.FormLabel>Categoria</C.FormLabel>
                        <C.FormSelect name="category" id="category" onChange={handleCategory} value={transaction.category} >
                            {options.map((option, index) => (
                                <option key={index} value={option}>
                                    {option}
                                </option>
                            ))}
                        </C.FormSelect>
                    </C.FormGroup>
                    <C.FormGroup>
                        <C.FormLabel>Tipo</C.FormLabel>
                        <C.FormSelect name="type" id="type" onChange={handleType} value={transaction.type} >
                            <option value="entrada">Entrada</option>
                            <option value="saída">Saída</option>
                        </C.FormSelect>
                    </C.FormGroup>
                    <C.FormGroup>
                        <C.FormLabel>Data</C.FormLabel>
                        <C.FormInput type="date" name="date" id="date" onChange={handleDate} value={transaction.date}></C.FormInput>
                    </C.FormGroup>
                    <C.FormButton onClick={editTransaction}>Editar</C.FormButton>
                </C.Area>
            </C.FormContainer>
        </div>
    )
}

export default Index