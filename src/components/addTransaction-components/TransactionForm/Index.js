import React, { useState } from 'react';
import * as C from './styles';
import axios from 'axios';
import gifLoading from '../../../assets/gif/loading-gif.gif';
import { useDispatch } from 'react-redux';
import { addTransaction } from '../../../redux/action';

const Index = () => {
    const dispatch = useDispatch();
    const options = ['Salário', 'Gastos essenciais', 'Gastos supérfluos', 'Investimentos', 'Gastos para trabalhar', 'Outros'];
    const [value, setValue] = useState(0);
    const [isPostLoading, setIsPostLoading] = useState(false);



    const handleValue = (newValue) => {
        setValue(newValue);
    };

    const handleSubmit = (event) => {
        event.preventDefault();
    }


    async function postTransaction() {
        setIsPostLoading(true);
        const description = document.getElementById('description').value;
        const valueNumber = parseFloat(value.replace("R$ ", "").replace(".", "").replace(",", ".")).toFixed(2);
        const category = document.getElementById('category').value;
        const type = document.getElementById('type').value;
        const date = document.getElementById('date').value;


        // Get user email stored on localStorage
        let email = JSON.parse(localStorage.getItem('persist:finance-control'));


        let body = {
            email: JSON.parse(email.handleSetUser).email,
            description: description,
            value: valueNumber,
            category: category,
            type: type,
            date: date
        }

        await axios.post('https://api-personal-finance-control.onrender.com/api-post-transactions', body)
            .then(response => {
                console.log(response.data);
                dispatch(addTransaction({
                    description: description,
                    value: parseFloat(value.replace(",", ".")),
                    category: category,
                    type: type,
                    date: date
                }));
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
                    <C.FormTitle>Adicionar Transação</C.FormTitle>
                    <C.FormGroup>
                        <C.FormLabel>Descrição</C.FormLabel>
                        <C.FormInput type="text" name="description" id="description" />
                    </C.FormGroup>
                    <C.FormGroup>
                        <C.FormLabel>Valor</C.FormLabel>
                        {/* <C.FormInput type="number" name="value" id="value"  /> */}
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
                        <C.FormSelect name="category" id="category">
                            {options.map((option, index) => (
                                <option key={index} value={option}>
                                    {option}
                                </option>
                            ))}
                        </C.FormSelect>
                    </C.FormGroup>
                    <C.FormGroup>
                        <C.FormLabel>Tipo</C.FormLabel>
                        <C.FormSelect name="type" id="type">
                            <option value="entrada">Entrada</option>
                            <option value="saída">Saída</option>
                        </C.FormSelect>
                    </C.FormGroup>
                    <C.FormGroup>
                        <C.FormLabel>Data</C.FormLabel>
                        <C.FormInput type="date" name="date" id="date"></C.FormInput>
                    </C.FormGroup>
                    <C.FormButton onClick={postTransaction}>{isPostLoading ? <img src={gifLoading} width={20} /> : 'Adicionar'}</C.FormButton>
                </C.Area>
            </C.FormContainer>
        </div>
    )
}

export default Index