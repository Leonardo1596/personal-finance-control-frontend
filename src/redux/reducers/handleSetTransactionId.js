const initialState = '';

const handleSetTransactionId = (state = initialState, action) => {
    switch (action.type) {
        case 'SETTRANSACTIONID':
            let newState = { ...state };
            newState = action.payload;
            return newState;
    
        default:
            return state;
    }
}

export default handleSetTransactionId;