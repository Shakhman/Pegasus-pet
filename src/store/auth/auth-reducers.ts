import { POST_AUTH_DATA, SET_AUTH_DATA } from './auth-actions';

export const authReducer = (state = { email: '', password: '' }, action: any) => {
  switch(action.type) {
  case SET_AUTH_DATA: {
    return action.payload;
  }
  case POST_AUTH_DATA: {
    console.log('POST');
    return state;
  }
  default: {
    return state;
  }
  }
};