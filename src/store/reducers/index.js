import { combineReducers } from 'redux';
import authReducer from 'store/reducers/authReducer';
import paymentReducer from 'store/reducers/paymentReducer';

const rootReducer = combineReducers({
  auth: authReducer,
  payment: paymentReducer,
});

export default rootReducer;
