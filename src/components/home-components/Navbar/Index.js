import React, { useState } from 'react';
import * as C from './styles';
import { faGear, faCircleUser, faBell } from "@fortawesome/free-solid-svg-icons";
import { useDispatch } from 'react-redux';
import { setAuth, setUser } from '../../../redux/action';

const Index = () => {
    const dispatch = useDispatch();
    const [logoutIsOpen, setLogoutIsOpen] = useState(false);

    function handleLogout() {
        dispatch(setAuth(false));
        dispatch(setUser(''));
        setLogoutIsOpen(!logoutIsOpen);
    }

    const toggleDropdown = () => {
        setLogoutIsOpen(!logoutIsOpen);
    };

    return (
        <div>
            <C.NavbarContainer>
                <C.NavbarArea>
                    <C.NavbarBrand><a href="/inicio">BillTracker</a></C.NavbarBrand>
                    <C.NavbarMenuList>
                        <C.NavbarMenuItem className='active'><a href="/inicio">Dashboard</a></C.NavbarMenuItem>
                        <C.NavbarMenuItem><a href="/lancamentos">Lançamentos</a></C.NavbarMenuItem>
                        <C.NavbarMenuItem><a href="/contas">Contas</a></C.NavbarMenuItem>
                        <C.NavbarMenuItem><a href="#">Cartões</a></C.NavbarMenuItem>
                    </C.NavbarMenuList>
                    <C.NavbarRightSide>
                        <C.NavbarIcon icon={faGear} />
                        <C.NavbarIcon icon={faBell} />
                        <C.NavbarUserIcon icon={faCircleUser} onClick={toggleDropdown} />
                        <C.DropdownContent isOpen={logoutIsOpen}>
                            <C.DropdownItem>Perfil</C.DropdownItem>
                            <C.DropdownItem onClick={handleLogout}>Sair da conta</C.DropdownItem>
                        </C.DropdownContent>
                    </C.NavbarRightSide>
                </C.NavbarArea>
            </C.NavbarContainer>
        </div>
    )
}

export default Index