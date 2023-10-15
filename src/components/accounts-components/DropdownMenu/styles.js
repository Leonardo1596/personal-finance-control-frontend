import styled from "styled-components";

export const DropdownList = styled.ul`
    list-style: none;
    padding: 0;
    position: absolute;
    background-color: #fff;
    box-shadow: 0px 0px 5px rgba(0, 0, 0, 0.2);
    display: ${props => (props.isOpen ? 'block' : 'none')};
    cursor: pointer;

    button {
      border: none;
    }
`;

export const ListItem = styled.li`
    font-size: 14px;
    padding: 10px 30px;
    background-color: #fff;
    cursor: pointer;

    &:hover {
      background-color: #f2f2f2;
  }
`;