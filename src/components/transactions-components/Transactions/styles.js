import styled from 'styled-components';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export const TransactionsContainer = styled.div`
    width: 100vw;
    font-family: 'Inter', sans-serif;
`;

export const TransactionsArea = styled.div`
    max-width: 870px;
    margin: auto;
`;

export const TransactionsMain = styled.div`
    width: 100%;
    margin-top: 60px;
    padding: 40px 65px;
    background-color: white;
    border-radius: 8px;
`;

export const TransactionsMonthContainer = styled.div`
    width: 100%;
    display: flex;
    justify-content: center;
`;

export const TransactionsMonth = styled.div`
    h3 {
        color: #7F7F7F;
        font-family: Inter;
        font-size: 17px;
        font-weight: 600;
        margin: 0 85px;
        display: inline;
    }
`;

export const ArrowLeftIcon = styled(FontAwesomeIcon)`
    font-size: 19px;
    color: #7F7F7F;
    cursor: pointer;
`;

export const ArrowRightIcon = styled(FontAwesomeIcon)`
    font-size: 19px;
    color: #7F7F7F;
    cursor: pointer;
`;

export const AddTransaction = styled.div`
    display: flex;
    align-items: center;
    position: relative;
`;

export const LabelButton = styled.h3`
    /* display: inline; */
    padding: 0 20px;
    color: #3C433A;
    font-family: Inter;
    font-size: 17px;
    font-weight: 600;
`;

export const AddButton = styled(FontAwesomeIcon)`
    color: #3D8FE7;
    font-size: 24px;
    cursor: pointer;
`;


export const DropdownButtonStyled = styled.button`
  /* background-color: #3498db; */
  color: #fff;
  border: none;
  /* padding: 10px; */
  cursor: pointer;
`;

// Estilização do dropdown
export const DropdownContent = styled.div`
  display: ${(props) => (props.isOpen ? 'block' : 'none')};
  position: absolute;
  top: 0;
  left: 170px;
  background-color: #f9f9f9;
  min-width: 160px;
  box-shadow: 0px 8px 16px 0px rgba(0, 0, 0, 0.2);
  z-index: 1;
`;

// Estilização dos itens do dropdown
export const DropdownItem = styled.a`
  padding: 12px 16px;
  text-decoration: none;
  font-size: 14px;
  display: block;
  color: #333;
  cursor: pointer;
  &:hover {
    background-color: #ddd;
  }
`;