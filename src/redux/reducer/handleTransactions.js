const transactions = '';

const handleTransactions = (state = transactions, action) => {
    switch (action.type) {
        case 'GETTRANSACTIONS':
            let newState = { ...state };
            newState = action.payload;
            return newState;
            break;
    
        default:
            return state;
            break;
    }
}

export default handleTransactions;