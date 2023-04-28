import { persistStore } from 'redux-persist';
import { createStore } from 'redux';
import rootReducers from './reducer';

import persistedReducers from './reduxPersist';

const store = createStore(persistedReducers(rootReducers));


export const persistor = persistStore(store);
export default store;