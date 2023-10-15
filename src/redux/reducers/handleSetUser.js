const user = '';

const handleSetUser = (state = user, action) => {
    switch (action.type) {
        case 'SETUSER':
            let newState = { ...state };
            newState = action.payload;
            return newState;
            break;

        case 'REMOVEUSER':
            let newStateRemoveUser = { ...state };
            newStateRemoveUser = action.payload;
            return newStateRemoveUser;
            break;

        default:
            return state;
            break;
    }
}


export default handleSetUser;