import React, { useEffect, useState } from 'react';
import * as C from './styles';
import { useDispatch, useSelector } from 'react-redux';

import Skeleton from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'
import { faEye, faEyeSlash, faCircle } from "@fortawesome/free-solid-svg-icons";
import { setCurrentValueVisibility } from '../../../redux/action';


const Index = (props) => {
    const dispatch = useDispatch();
    const buttonVisibility = useSelector((state) => state.handleSetCurrentValueVisibility);
    const [revenues, setRevenues] = useState('');
    const [expenses, setExpenses] = useState('');
    const balance = String(parseFloat(revenues.replace(',', '.')) - parseFloat(expenses.replace(',', '.'))).replace('.', ',');


    function handleClick() {
        dispatch(setCurrentValueVisibility(!buttonVisibility));
    }

    
    useEffect(() => {
        sumExpenses();
        sumRevenues()
    }, [props.transactions]);


    function sumExpenses() {
        setExpenses(String(props.transactions.filter(transaction => transaction.type === "saída").reduce((accumulator, transaction) => {
            return accumulator + transaction.value;
        }, 0).toFixed(2)).replace('.', ','));
    }


    function sumRevenues() {
        setRevenues(String(props.transactions.filter(transaction => transaction.type === "entrada").reduce((accumulator, transaction) => {
            return accumulator + transaction.value;
        }, 0).toFixed(2)).replace('.', ','));
    }

    return (
        <div>
            <C.DashboardSummaryContainer>
                <C.DashboardSummaryArea>
                    <C.DashboardSummary>
                        <C.DashboardSummaryItem>
                            {!props.isLoading ? <C.DashboardSummaryItemTitle>Saldo</C.DashboardSummaryItemTitle> : <Skeleton />}
                            {!props.isLoading ? <C.DashboardSummaryButton onClick={handleClick}>{buttonVisibility ? (<C.EyeIcon icon={faEyeSlash} />) : (<C.EyeIcon icon={faEye} />)}</C.DashboardSummaryButton> : ''}

                            {!props.isLoading ? (buttonVisibility ? <C.DashboardSummaryItemValue style={{color: 'green'}} >{`+R$ ${balance}`}</C.DashboardSummaryItemValue> : (
                                <span style={{ display: 'flex', alignItems: 'center' }}>
                                    <C.DashboardSummaryHiddenValueContainer>
                                        <C.DashboardSummaryHiddenValue icon={faCircle} />
                                        <C.DashboardSummaryHiddenValue icon={faCircle} />
                                        <C.DashboardSummaryHiddenValue icon={faCircle} />
                                        <C.DashboardSummaryHiddenValue icon={faCircle} />
                                    </C.DashboardSummaryHiddenValueContainer>
                                </span>)) : <Skeleton />}
                        </C.DashboardSummaryItem>


                        <C.DashboardSummaryItem>
                            {!props.isLoading ? <C.DashboardSummaryItemTitle>Despesas</C.DashboardSummaryItemTitle> : <Skeleton />}
                            {!props.isLoading ? (buttonVisibility ? <C.DashboardSummaryItemValue style={{color: 'red'}} >{`-R$ ${expenses}`}</C.DashboardSummaryItemValue> : (
                                <span style={{ display: 'flex', alignItems: 'center' }}>
                                    <C.DashboardSummaryHiddenValueContainer>
                                        <C.DashboardSummaryHiddenValue icon={faCircle} />
                                        <C.DashboardSummaryHiddenValue icon={faCircle} />
                                        <C.DashboardSummaryHiddenValue icon={faCircle} />
                                        <C.DashboardSummaryHiddenValue icon={faCircle} />
                                    </C.DashboardSummaryHiddenValueContainer>
                                </span>
                            )) : <Skeleton />}
                        </C.DashboardSummaryItem>


                        <C.DashboardSummaryItem>
                            {!props.isLoading ? <C.DashboardSummaryItemTitle>Receitas</C.DashboardSummaryItemTitle> : <Skeleton />}
                            {!props.isLoading ? (buttonVisibility ? <C.DashboardSummaryItemValue style={{color: 'green'}} >{`+R$ ${revenues}`}</C.DashboardSummaryItemValue> : (
                                <span style={{ display: 'flex', alignItems: 'center' }}>
                                    <C.DashboardSummaryHiddenValueContainer>
                                        <C.DashboardSummaryHiddenValue icon={faCircle} />
                                        <C.DashboardSummaryHiddenValue icon={faCircle} />
                                        <C.DashboardSummaryHiddenValue icon={faCircle} />
                                        <C.DashboardSummaryHiddenValue icon={faCircle} />
                                    </C.DashboardSummaryHiddenValueContainer>
                                </span>
                            )) : <Skeleton />}
                        </C.DashboardSummaryItem>

                    </C.DashboardSummary>
                </C.DashboardSummaryArea>
            </C.DashboardSummaryContainer>
        </div>
    )
}

export default Index