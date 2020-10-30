import { all } from 'redux-saga/effects';

import auth from './auth/sagas';
import department from './department/sagas';
import user from './user/sagas';

export default function* rootSaga() {
  return yield all([
    auth, user, department
  ]);
}
