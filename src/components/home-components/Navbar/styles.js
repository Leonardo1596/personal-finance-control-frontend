import styled from 'styled-components';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export const NavbarContainer = styled.div`
    width: 100vw;
    background-color: #3D8FE7;
    font-family: 'Inter', sans-serif;
    color: white;
    padding: 12px 0;
    max-height: 60px;
    `;

export const NavbarArea = styled.div`
    max-width: 1060px;
    margin: auto;
    display: flex;
    align-items: center;
    justify-content: space-between;
`;

export const NavbarBrand = styled.h1`
    font-size: 32px;
    font-weight: 600;

    a {
        color: white;
        text-decoration: none;
    }
`;

export const NavbarMenuList = styled.ul`
    display: flex;
    align-items: center;
    justify-content: center;
    list-style: none;

    .active {
        opacity: 1;
        /* border-bottom: 2px solid #fff; */
    }

    li:not(:last-child) {
        margin-right: 20px;
}
    `;

export const NavbarMenuItem = styled.li`
    opacity: 0.6;
    font-style: normal;
    font-weight: 600;
    font-size: 15px;
    line-height: 18px;

    a {
        color: white;
        text-decoration: none;
        padding: 19px 0;
        /* border-bottom: 2px solid #fff; */
    }

    :hover {
        opacity: 0.8;
    }
`;

export const NavbarRightSide = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
`;

export const NavbarIcon = styled(FontAwesomeIcon)`
    font-size: 18px;
    margin-right: 20px;
    cursor: pointer;
`;

export const NavbarUserIcon = styled(FontAwesomeIcon)`
    font-size: 28px;
    margin-left: 10px;
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
  top: 50px;
  /* left: 170px; */
  right: 415px;
  background-color: #f9f9f9;
  min-width: 160px;
  box-shadow: 0px 8px 16px 0px rgba(0, 0, 0, 0.2);
  z-index: 1;
`;

// Estilização dos itens do dropdown
export const DropdownItem = styled.a`
  padding: 12px 16px;
  text-align: center;
  text-decoration: none;
  font-size: 14px;
  display: block;
  color: #333;
  cursor: pointer;
  &:hover {
    background-color: #ddd;
  }
`;