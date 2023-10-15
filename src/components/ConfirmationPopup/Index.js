import React from 'react';
import * as C from './styles';
import { useDispatch } from 'react-redux';
import { showPopup } from '../../redux/action'


const Index = ({ header, description, handleAction }) => {
    const dispatch = useDispatch();

    function handleClosePopup() {
        dispatch(showPopup(false));
    }

    function handleConfirm() {
        handleAction();
        handleClosePopup();
    }

    return (
        <div>
            <C.Container>
                <C.Area>
                    <C.Header>
                        <C.Title>{header}</C.Title>
                    </C.Header>
                    <C.DescriptionContainer>
                        <C.Description>{description}</C.Description>
                    </C.DescriptionContainer>
                    <C.ButtonContainer>
                        <C.Button style={{ backgroundColor: '#949494' }} onClick={handleClosePopup} >Cancelar</C.Button>
                        <C.Button style={{ backgroundColor: 'red' }} onClick={handleConfirm} >Confirmar</C.Button>
                    </C.ButtonContainer>
                </C.Area>
            </C.Container>
        </div>
    )
}

export default Index