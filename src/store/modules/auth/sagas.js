import { takeLatest, call, put, all } from 'redux-saga/effects';

import history from '../../../services/history';
import api from '../../../services/api';

import { signInSuccess, signFailure } from './actions';

import { sigIn, setUser} from './authLocalStorage'

export function* SignIn({ payload }) {
  try {
    var { email, password } = payload;

    const response = yield call(api.post, 'api/auth', {
      email,
      password,
    });
    
    const { token, user } = response.data;    

    api.defaults.headers.Authorization = `Bearer ${token}`;

    sigIn(token);
    setUser(user._id)


    yield put(signInSuccess(token, user));

    history.push('/admin/');

  } catch (err) {
    yield put(signFailure());
    console.log('Falha na autenticação, verifique seus dados');
  }
}

export function Logout() {
  try {
    
    api.defaults.headers.Authorization = '';

    
    history.push('/');

  } catch (err) {
    console.log('Falha no Logout');
  }
}

export function* LoginSocial() {
  try {
    yield put(signInSuccess({}, {}));
    history.push('/admin/');

  } catch (err) {
    console.log('Falha no Login');
  }
}

export default all([
  takeLatest('@auth/SIGN_IN_REQUEST', SignIn),
  takeLatest('@auth/SIGN_OUT', Logout),
  takeLatest('@auth/LOGIN_SOCIAL', LoginSocial),
])