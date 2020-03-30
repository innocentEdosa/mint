import { LOGIN, LOGOUT } from 'store/actions/authActions';

export const login = () => async (dispatch) => {
  dispatch({ type: LOGIN });
};

export const logout = () => async (dispatch) => {
  dispatch({ type: LOGOUT });
};
