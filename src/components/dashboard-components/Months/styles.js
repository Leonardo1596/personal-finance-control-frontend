import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";


export const MonthContainer = styled.div`
    width: 100vw;
`;

export const MonthArea = styled.div`
    max-width: 980px;
    margin: auto;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0 150px;
    margin-bottom: 10px;


    h2 {
        font-size: 24px;
    }

    @media screen and (max-width: 1024px) {
        padding: 0 230px;
        h2 {
            font-size: 22px;
        }
    }

    @media screen and (max-width: 980px) {
        width: 52vw;
        padding: 0;
    }

    @media screen and (max-width: 768px) {
        width: 55vw;
        h2 {
            font-size: 20px;
        }
    }

    @media screen and (max-width: 500px) {
        width: 100%;
        padding: 0 80px;

        h2 {
            font-size: 18px;
        }
    }
`;

export const ArrowIcon = styled(FontAwesomeIcon)`
    font-size: 24px;
    cursor: pointer;

    @media screen and (max-width: 1024px) {
        font-size: 22px;
    }

    @media screen and (max-width: 768px) {
        font-size: 20px;
    }
`;