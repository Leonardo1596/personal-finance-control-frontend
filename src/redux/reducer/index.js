
import { combineReducers } from "redux";
import handleAuth from "./handleAuth";
import handleSetUser from './handleSetUser';


const rootReducers = combineReducers({
    handleAuth,
    handleSetUser,
});


export default rootReducers;