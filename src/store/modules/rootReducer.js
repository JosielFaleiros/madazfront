import { combineReducers } from 'redux';
import { connectRouter } from 'connected-react-router'

import auth from './auth/reducer';
import department from './department/reducer';
import user from './user/reducer';

const rootReducer = (history) => combineReducers({
    router: connectRouter(history),
    auth, user, department
  })
export default rootReducer;