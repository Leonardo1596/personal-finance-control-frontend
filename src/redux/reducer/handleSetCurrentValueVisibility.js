const prop = false;

const handleSetCurrentValueVisibility = (state = prop, action) => {
    switch (action.type) {
        case 'SETCURRENTVALUEVISIBILITY':
            // console.log(action.payload);
            let newState = { ...state };
            newState = action.payload;
            return newState;
            break;
    
        default:
            return state;
            break;
    }
}

export default handleSetCurrentValueVisibility;