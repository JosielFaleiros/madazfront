import { takeLatest, call, all, put } from 'redux-saga/effects';

import api from '../../../services/api';

import { returnUserRequest, returnForeignUserRequest } from '../user/actions';

export function* AddUser({ payload }) {
  try {
    const { name, password, email, type, company, office, gender, birth } = payload;

    const response = yield call(api.post, 'api/user/add', {
        name, password, email, type, company, office, gender, birth
    });

    console.log(response.data);

  } catch (error) {
    console.log(error.response.data);
  }
}

export function* ReadUser() {
  try {
    let response = yield call(api.get, 'api/user');

    yield put(returnUserRequest(response.data));

  } catch (error) {
    console.log(error.response.data);
  }
}

export function* UpdateUser({ payload }) {
  try {
    const { name, password, email, type, company, office, gender, birth, _id } = payload;

    const response = yield call(api.put, `api/user/${_id}`, {
      name, password, email, type, company, office, gender, birth
    });

    console.log(response.data);

  } catch (error) {
    console.log(error.response.data);
  }
}


export function* DeleteUser({ payload }) {
  try {
    const { _id } = payload;

    const response = yield call(api.delete, `api/user/${_id}`);

    console.log(response.data);

  } catch (error) {
    console.log(error.response.data);
  }
}

export function* ForeignUser() {
  try {

    const response = yield call(api.get, 'api/user/foreign');
    
    yield put(returnForeignUserRequest(response.data));

  } catch (error) {
    console.log(error.response.data);
  }
}

export default all([
    takeLatest('@user/ADD_USER_REQUEST', AddUser),
    takeLatest('@user/READ_USER', ReadUser),
    takeLatest('@user/UPDATE_USER', UpdateUser),
    takeLatest('@user/DELETE_USER', DeleteUser),
    takeLatest('@user/FOREIGN_USER', ForeignUser)
]);


