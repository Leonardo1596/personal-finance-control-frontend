import storage from 'redux-persist/lib/storage';
import { persistReducer } from 'redux-persist';

export default reducers => {
    const persistedReducers = persistReducer({
        key: 'finance-control',
        storage,
        whiteList: ['handleUser']
    }, reducers);

    return persistedReducers;
};