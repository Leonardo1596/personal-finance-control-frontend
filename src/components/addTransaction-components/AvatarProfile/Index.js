import React, { useState } from 'react';
import * as C from './styles';
import { FaAngleDown } from "react-icons/fa";

const Index = () => {
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);

    const handleDropdownToggle = () => {
        setIsDropdownOpen(!isDropdownOpen);
    };


    return (
        <div>
            <C.AvatarContainer>
                <C.AvatarImage onClick={handleDropdownToggle} src="https://w7.pngwing.com/pngs/481/915/png-transparent-computer-icons-user-avatar-woman-avatar-computer-business-conversation-thumbnail.png" alt="Avatar de Perfil" />
                {isDropdownOpen && (
                    <C.DropdownMenu>
                        <C.DropdownMenuItem>Editar Perfil</C.DropdownMenuItem>
                        <C.DropdownMenuItem>Sair</C.DropdownMenuItem>
                    </C.DropdownMenu>
                )}
            </C.AvatarContainer>
        </div>
    )
}

export default Index