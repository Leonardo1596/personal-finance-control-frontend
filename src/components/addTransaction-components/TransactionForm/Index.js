import React from 'react';
import * as C from './styles';
import axios from 'axios';

const Index = () => {
    const options = ['Salário', 'Gastos essenciais', 'Gastos supérfluos', 'Investimentos', 'Gastos para trabalhar', 'Outros'];

    const handleSubmit = (event) => {
        event.preventDefault();
    }

    async function postTransaction() {
        const description = document.getElementById('description').value;
        const value = document.getElementById('value').value;
        const category = document.getElementById('category').value;
        const type = document.getElementById('type').value;
        const date = document.getElementById('date').value;


        let body = {
            email: 'leonardoemanuel156@gmail.com',
            description: description,
            value: value,
            category: category,
            type: type,
            date: date
        }

        await axios.post('http://10.147.17.182:8000/api-post-transactions', body)
            .then(response => {
                console.log(response.data);
            })
            .catch(err => {
                console.log(err);
            });

        alert('A transação foi adicionada!');
        window.location.href = '/dashboard';
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
                        <C.FormInput type="number" name="value" id="value" />
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
                    <C.FormButton onClick={postTransaction}>Adicionar</C.FormButton>
                </C.Area>
            </C.FormContainer>
        </div>
    )
}

export default Index