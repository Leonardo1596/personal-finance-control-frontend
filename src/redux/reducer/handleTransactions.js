const initialState = [];

const handleTransactions = (state = initialState, action) => {
    switch (action.type) {
        case 'GETTRANSACTIONS':
            let newState = { ...state };
            newState = action.payload;
            return newState;
            break;
        case 'ADDTRANSACTION':
            return [...state, action.payload];
        case 'REMOVETRANSACTION':
            const newStateRemoveTransaction = state.filter(transaction => transaction._id !== action.payload);
            return newStateRemoveTransaction;
        case 'UPDATETRANSACTION':
            const updatedTransaction = action.payload;
            const updatedTransactions = state.map(transaction => {
                if (transaction._id === updatedTransaction._id) {
                    return {
                        ...transaction,
                        ...updatedTransaction
                    }
                } else {
                    return transaction;
                }
            });
            return updatedTransactions;
        default:
            return state;
            break;
    }
}

export default handleTransactions;