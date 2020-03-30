import { LOGIN, LOGOUT } from 'store/actions/actionTypes';

export const login = () => async (dispatch) => {
  dispatch({ type: LOGIN });
};

export const logout = () => async (dispatch) => {
  dispatch({ type: LOGOUT });
};
