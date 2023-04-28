const auth = false;

const handleAuth = (state = auth, action) => {
    switch (action.type) {
        case 'ISLOGGEDIN':
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


export default handleAuth