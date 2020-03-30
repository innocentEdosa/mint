import { LOGIN, LOGOUT } from 'store/actions/actionTypes';
import faker from 'faker';

const initialState = {
  isAuthenticated: true,
  fullName: faker.name,
};

const login = (state) => ({
  ...state,
  isAuthenticated: true,
});

const logout = (state) => ({
  ...state,
  isAuthenticated: false,
});
const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case LOGIN: return login(state);
    case LOGOUT: return logout(state);
    default:
      return state;
  }
};

export default authReducer;
