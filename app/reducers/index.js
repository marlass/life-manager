import { combineReducers } from 'redux';
import { routerReducer as routing } from 'react-router-redux';
import user from './user';


// Combine reducers with routeReducer which keeps track of
// router state
const rootReducer = combineReducers({
  user,
  routing
});

export default rootReducer;
