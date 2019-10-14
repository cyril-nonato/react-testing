import {createStore, applyMiddleware} from 'redux';
import ReduxThunk from 'redux-thunk'
import rootReducer from './root.reducer';

export const middlewares = [ReduxThunk];

export const createStoreWithMiddleware = applyMiddleware(...middlewares)(createStore)

const store = createStoreWithMiddleware(rootReducer);

export default store;