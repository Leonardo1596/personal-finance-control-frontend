const initialState = '';

const handleDeleteAccount = (state = initialState, action) => {
    switch (action.type) {
        case 'DELETEACCOUNT':
            let newState = { ...state };
            newState = action.payload;
            return newState;
    
        default:
            return state;
    }
}

export default handleDeleteAccount;