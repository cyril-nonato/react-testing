
import { combineReducers} from 'redux'
import postsReducer from './reducers/posts/reducer';

export default combineReducers({
  posts: postsReducer
});
