import {createStore, applyMiddleware} from 'redux';
import logger from 'redux-logger';
import { persistStore } from 'redux-persist';

import rootReducer from './root-reducer';

import { composeWithDevTools } from 'redux-devtools-extension'

const middlewares = [logger];

export const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(...middlewares)));

export const persistor = persistStore(store);

export default { store, persistor };

