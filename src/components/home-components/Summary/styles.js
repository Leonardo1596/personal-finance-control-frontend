import styled from 'styled-components';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export const SummaryContainer = styled.div`
    width: 100vw;
    font-family: 'Inter', sans-serif;
`;

export const SummaryArea = styled.div`
    max-width: 1060px;
    margin: auto;
`;

export const SummaryHeaderContainer = styled.div`
    width: 100%;
    padding: 0 15px;
    margin-top: 40px;
`;

export const SummaryHeaderGreetings = styled.h1`
    font-weight: 600;
    font-size: 20.0323px;
    line-height: 24px;
    color: #2E312D;
`;

export const SummaryMain = styled.div`
    width: 100%;
    height: 215px;
    margin-top: 26px;
    background-color: white;
    border-radius: 8px;
    display: flex;
    align-items: center;
`;

export const SummaryMainLeftSide = styled.div`
    width: 50%;
    height: 100%;
    padding: 30px 0;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`;

export const SummaryBalance = styled.div`
    padding: 10px 45px;
    border-color: #E2E2E2;
    border-left: 1px solid #E2E2E2;
    border-right: 1px solid #E2E2E2;

    h3 {
        font-weight: 300;
        font-size: 14px;
        color: #2E312D;
        display: inline-block;
        margin-right: 17px;
    }
`;

export const SummaryEyeIcon = styled(FontAwesomeIcon)`
    font-size: 13px;
`;

export const SummaryCurrencyValueContainer = styled.div`
    display: flex;
    align-items: center;
    margin-top: 10px;

    .currency {
        margin-right: 7px;
        color: #757575;
        font-size: 13px;
    }

    .value {
        color: #2E312D;
        font-size: 15px;
        font-weight: 600;
    }
`;

export const SummaryMainRightSide = styled.div`
    width: 50%;
    height: 100%;
    padding: 38px 0;
`;

export const SummaryMainRightSideArea = styled.div`
    width: 100%;
    height: 100%;
    padding: 10px 0;
    border-left: 1px solid #E2E2E2;
    position: relative;

    h2 {
        text-align: center;
        font-weight: 600;
        font-size: 17px;
        color: #2E312D;
    }
`;

export const SummaryButtonsContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    position: absolute;
    bottom: 10px;
    left: 0;
    right: 0;
    
    button {
        width: 150px;
        height: 37px;
        background: #FFFFFF;
        box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
        border: none;
        border-radius: 4px;
        font-size: 14px;
        font-style: normal;
        font-weight: 300;
        color: #2E312D;
        cursor: pointer;
    }

    button:not(:last-child) {
        margin-right: 15px;
    }

    button:hover {
        color: white;
        background-color: #3D8FE7;
    }
`;

export const SummaryInfoList = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
`;

export const SummaryInfoLabelValue = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    background: #FFFFFF;
    box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.25);
    border-radius: 6px;
    width: 190px;
    height: 65px;
    margin-top: 25px;
    margin-right: 35px;

    .label {
        font-weight: 300;
        font-size: 15px;
        color: #2E312D;
    }

    .label-value {
        font-weight: 600;
        font-size: 15px;
        line-height: 18px;
        margin-top: 9px;
    }
`;