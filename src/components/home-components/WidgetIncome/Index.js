import React from 'react';
import * as C from './styles';

const Index = () => {
    return (
        <div>
            <C.Container>
                <C.Header>Recebíveis</C.Header>
                <C.AreaInfo>
                    <C.Title>Sem recebíveis a receber no momento.</C.Title>
                    <C.TextInfo>Adicione suas entradas de dinheiro e mantenha suas finanças organizadas.</C.TextInfo>
                    <C.Button>Adicionar recebível</C.Button>
                </C.AreaInfo>
            </C.Container>
        </div>
    )
}

export default Index