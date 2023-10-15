const type = '';

const handleSetTransactionType = (state = type, action) => {
    switch (action.type) {
        case 'SETTYPE':
            let newState = { ...state };
            newState = action.payload;
            return newState;

        default:
            return state;
            break;
    }
}

export default handleSetTransactionType;