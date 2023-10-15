const auth = false;

const handleAuth = (state = auth, action) => {
    switch (action.type) {
        case 'ISLOGGEDIN':
            // console.log(action.payload);
            let newState = { ...state };
            newState = action.payload;
            return newState;
    
        default:
            return state;
    }
}

export default handleAuth;