import { takeLatest, call, all, put } from 'redux-saga/effects';

import api from '../../../services/api';

import { returnDepartmentRequest, returnForeignDepartmentRequest } from '../department/actions';

export function* AddDepartment({ payload }) {
  try {
    const { name } = payload;

    const response = yield call(api.post, 'api/department/add', {
        name
    });

    console.log(response.data);

  } catch (error) {
    console.log(error.response.data);
  }
}

export function* ReadDepartment() {
  try {
    let response = yield call(api.get, 'api/department');

    yield put(returnDepartmentRequest(response.data));

  } catch (error) {
    console.log(error.response.data);
  }
}

export function* UpdateDepartment({ payload }) {
  try {
    const { name, _id } = payload;

    const response = yield call(api.put, `api/department/${_id}`, {
      name
    });

    console.log(response.data);

  } catch (error) {
    console.log(error.response.data);
  }
}


export function* DeleteDepartment({ payload }) {
  try {
    const { _id } = payload;

    const response = yield call(api.delete, `api/department/${_id}`);

    console.log(response.data);

  } catch (error) {
    console.log(error.response.data);
  }
}

export function* ForeignDepartment() {
  try {

    const response = yield call(api.get, 'api/department/foreign');
    
    yield put(returnForeignDepartmentRequest(response.data));

  } catch (error) {
    console.log(error.response.data);
  }
}

export default all([
    takeLatest('@department/ADD_DEPARTMENT_REQUEST', AddDepartment),
    takeLatest('@department/READ_DEPARTMENT', ReadDepartment),
    takeLatest('@department/UPDATE_DEPARTMENT', UpdateDepartment),
    takeLatest('@department/DELETE_DEPARTMENT', DeleteDepartment),
    takeLatest('@department/FOREIGN_DEPARTMENT', ForeignDepartment)
]);
