
import { combineReducers } from "redux";
import handleAuth from "./handleAuth";
import handleSetUser from './handleSetUser';
import handleSetCurrentValueVisibility from './handleSetCurrentValueVisibility';
import handleTransactions from './handleTransactions';


const rootReducers = combineReducers({
    handleAuth,
    handleSetUser,
    handleSetCurrentValueVisibility,
    handleTransactions,
});


export default rootReducers;