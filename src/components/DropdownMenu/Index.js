import React from 'react';
import { Dropdown, DropdownButton } from 'react-bootstrap';
import { useDispatch } from 'react-redux';
import { setAuth, setUser } from '../../redux/action';

const Index = () => {
    const dispatch = useDispatch();
    let user = JSON.parse(localStorage.getItem('persist:finance-control')).handleSetUser;

    function handleLogout() {
        dispatch(setAuth(false));
        dispatch(setUser(''));
      }

    return (
        <div>
            <DropdownButton variant="secondary" title={<span>{JSON.parse(user).username}</span>}>
                <Dropdown.Item onClick={handleLogout}>Logout</Dropdown.Item>
            </DropdownButton>
        </div>
    )
}

export default Index