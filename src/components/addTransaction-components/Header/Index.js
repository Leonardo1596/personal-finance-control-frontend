import React from 'react';
import * as C from './styles';
import AvatarProfile from '../AvatarProfile/Index';
import img from '../../../assets/img/Screenshot from 2023-04-16 03-02-22.png';

const Header = () => {
    return (
        <div>
            <C.HeaderContainer>
                <C.Area>
                    <img src={img} width="200px"/>
                    <AvatarProfile />
                </C.Area>
            </C.HeaderContainer>
        </div>
    )
}

export default Header