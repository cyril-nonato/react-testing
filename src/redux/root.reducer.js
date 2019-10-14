import successReducer from './reducers/success.reducer';
import ReduxThunk from 'redux-thunk'
import { combineReducers } from 'redux'

export default combineReducers({
  success: successReducer
});
