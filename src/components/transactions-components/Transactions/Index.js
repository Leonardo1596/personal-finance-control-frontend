import React, { useState } from 'react';
import * as C from './styles';
import FilterField from '../FilterField/Index';
import TransactionsList from '../TransactionsList/Index';
import { faArrowLeft, faArrowRight, faCirclePlus } from "@fortawesome/free-solid-svg-icons";
import { showExpensePopup, transactionType } from '../../../redux/action';
import { useDispatch } from 'react-redux';

const Index = (props) => {
    const dispatch = useDispatch();
    const [isOpen, setIsOpen] = useState(false);

    function handleExpenseButton() {
        dispatch(transactionType('saída'))
        dispatch(showExpensePopup(true));
        setIsOpen(!isOpen);
    }

    function handleRevenueButton() {
        dispatch(transactionType('entrada'))
        dispatch(showExpensePopup(true));
        setIsOpen(!isOpen);
    }


    const toggleDropdown = () => {
        setIsOpen(!isOpen);
    };

    return (
        <div>
            <C.TransactionsContainer>
                <C.TransactionsArea>
                    <C.TransactionsMain>
                        <C.TransactionsMonthContainer>
                            <C.TransactionsMonth>
                                <C.ArrowLeftIcon icon={faArrowLeft} onClick={props.handleArrowLeftMonth} />
                                <h3>{props.month}</h3>
                                <C.ArrowRightIcon icon={faArrowRight} onClick={props.handleArrowRighttMonth} />
                            </C.TransactionsMonth>
                        </C.TransactionsMonthContainer>
                        <FilterField />
                        <TransactionsList transactions={props.transactions} userProfile={props.userProfile} />
                        <C.AddTransaction>
                            <C.LabelButton>Lançamento</C.LabelButton>
                            <C.DropdownButtonStyled onClick={toggleDropdown}><C.AddButton icon={faCirclePlus} /></C.DropdownButtonStyled>
                            <C.DropdownContent isOpen={isOpen}>
                                <C.DropdownItem onClick={handleExpenseButton}>Despesa</C.DropdownItem>
                                <C.DropdownItem onClick={handleRevenueButton}>Receita</C.DropdownItem>
                            </C.DropdownContent>
                        </C.AddTransaction>
                    </C.TransactionsMain>
                </C.TransactionsArea>
            </C.TransactionsContainer>
        </div>
    )
}

export default Index