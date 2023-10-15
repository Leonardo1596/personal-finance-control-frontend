const initialState = false;

const showExpensePopup = (state = initialState, action) => {
    switch (action.type) {
        case 'ISEXPENSEPOPUPVISIBLE':
            let newState = { ...state };
            newState = action.payload;
            return newState;
    
        default:
            return state;
    }
}

export default showExpensePopup;