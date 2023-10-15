import { combineReducers } from 'redux';
import handleAuth from './handleAuth';
import handleSetUser from './handleSetUser';
import showExpensePopup from './showExpensePopup';
import handleShowPopup from './handleShowPopup';
import handleDeleteAccount from './handleDeleteAccount';
import handleSetTransactionId from './handleSetTransactionId';
import handleSetTransactionType from './handleSetTransactionType';

const rootReducers = combineReducers({
    handleAuth,
    handleSetUser,
    showExpensePopup,
    handleShowPopup,
    handleDeleteAccount,
    handleSetTransactionId,
    handleSetTransactionType,
});

export default rootReducers;