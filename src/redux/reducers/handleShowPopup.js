const initialState = false;

const handleShowPopup = (state = initialState, action) => {
    switch (action.type) {
        case 'SHOWPOPUP':
            let newState = { ...state };
            newState = action.payload;
            return newState;
    
        default:
            return state;
    }
}

export default handleShowPopup;