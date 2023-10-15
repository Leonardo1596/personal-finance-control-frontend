import storage from "redux-persist/lib/storage";
import { persistReducer } from "redux-persist";

export default reducers => {
    const persistedReducers =persistReducer({
        key: 'finance=control',
        storage,
        whiteList: ['handleAuth', 'handleSetUser', 'handleBillsToPay', 'showExpensePopup', 'showPopup', 'deleteAccount', 'setTransactionId']
    }, reducers);

    return persistedReducers;
}


