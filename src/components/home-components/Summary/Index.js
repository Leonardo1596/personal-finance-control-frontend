import React, { useEffect, useState } from 'react';
import * as C from './styles';
import axios from 'axios';
import { faEye } from "@fortawesome/free-solid-svg-icons";

const Index = (props) => {
    const [userInfo, setUserInfo] = useState('');

    useEffect(() => {
      function fetchUserInfo() {
        axios.get(`https://api-personal-finance-control.onrender.com/users/${props.userProfile._id}`)
            .then(response => {
                // console.log(response.data);
                setUserInfo(response.data.user);
            })
            .catch(err => {
                console.log(err);
            });
      }
      fetchUserInfo();
    }, [])

    function getGreeting() {
        const currentHour = new Date().getHours();
    
        if (currentHour >= 6 && currentHour < 12) {
            return "Bom dia";
        } else if (currentHour >= 12 && currentHour < 18) {
            return "Boa tarde";
        } else {
            return "Boa noite";
        }
    }
    const greeting = getGreeting();

    return (
        <div>
            <C.SummaryContainer>
                <C.SummaryArea>
                    <C.SummaryHeaderContainer>
                        <C.SummaryHeaderGreetings>{`${greeting}, ${props.userProfile.username}`}</C.SummaryHeaderGreetings>
                    </C.SummaryHeaderContainer>
                    <C.SummaryMain>
                        <C.SummaryMainLeftSide>
                            <C.SummaryBalance>
                                <h3>Saldo atual</h3>
                                <C.SummaryEyeIcon icon={faEye} />
                                <C.SummaryCurrencyValueContainer>
                                    <span className='currency'>R$</span>
                                    <span className='value'>{props.userProfile ? (props.revenues - props.expenses).toFixed(2).toString().replace('.', ',') : '0,00'}</span>

                                </C.SummaryCurrencyValueContainer>
                            </C.SummaryBalance>
                            <C.SummaryInfoList>
                                <C.SummaryInfoLabelValue>
                                    <p className='label'>Receita mensal</p>
                                    <p className='label-value' style={{ color: '#00FF47' }}>R$ {props.revenues.toString().replace('.', ',')}</p>
                                </C.SummaryInfoLabelValue>
                                <C.SummaryInfoLabelValue>
                                    <p className='label'>Despesa mensal</p>
                                    <p className='label-value' style={{ color: '#FF0000' }}>R$ -{props.expenses.toString().replace('.', ',')}</p>
                                </C.SummaryInfoLabelValue>
                            </C.SummaryInfoList>
                        </C.SummaryMainLeftSide>
                        <C.SummaryMainRightSide>
                            <C.SummaryMainRightSideArea>
                                <h2>Acesso rápido</h2>
                                <C.SummaryButtonsContainer>
                                    <button>Despesa</button>
                                    <button>Receita</button>
                                    <button>Ver relatório</button>
                                </C.SummaryButtonsContainer>
                            </C.SummaryMainRightSideArea>
                        </C.SummaryMainRightSide>
                    </C.SummaryMain>
                </C.SummaryArea>
            </C.SummaryContainer>
        </div>
    )
}

export default Index