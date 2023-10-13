export const SET_AUTH_DATA = 'SET_AUTH_DATA';
export const POST_AUTH_DATA = 'POST_AUTH_DATA';

export const setAuthData = (authData: any) => ({
  type: SET_AUTH_DATA,
  payload: authData
}); 

export const postAuthData = () => ({
  type: POST_AUTH_DATA,
}); 