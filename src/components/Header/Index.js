import React from 'react';
import * as C from './styles';
import img from '../../assets/img/Screenshot from 2023-04-16 03-02-22.png';
import DropdownMenu from '../DropdownMenu/Index';


const Header = () => {
    return (
        <div>
            <C.HeaderContainer>
                <C.Area>
                    <img src={img} width="200px"/>
                    <DropdownMenu />
                </C.Area>
            </C.HeaderContainer>
        </div>
    )
}

export default Header