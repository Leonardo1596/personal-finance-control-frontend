import React from 'react';
import { Dropdown, DropdownButton } from 'react-bootstrap';
import * as C from './styles';
import { useDispatch } from 'react-redux';
import { setAuth, setUser, getTransactions } from '../../redux/action';

const Index = () => {
    const dispatch = useDispatch();
    let user = JSON.parse(localStorage.getItem('persist:finance-control')).handleSetUser;

    function handleLogout() {
        dispatch(setAuth(false));
        dispatch(setUser(''));
        dispatch(getTransactions(''));
    }

    return (
        <div>
            <C.Button ><DropdownButton variant="" title={<span>{JSON.parse(user).username}</span>}>
                <Dropdown.Item className='item' onClick={handleLogout}>Logout</Dropdown.Item>
            </DropdownButton></C.Button>
            {/* <DropdownButton variant="secondary" title={<span>{JSON.parse(user).username}</span>}>
                <Dropdown.Item onClick={handleLogout}>Logout</Dropdown.Item>
            </DropdownButton> */}
        </div>
    )
}

export default Index