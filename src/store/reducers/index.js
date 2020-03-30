import { combineReducers } from 'redux';
import authReducer from 'store/reducers/authReducer';
import paymentReducer from 'store/reducers/paymentReducer';
import orderReducer from 'store/reducers/orderReducer';

const rootReducer = combineReducers({
  auth: authReducer,
  payment: paymentReducer,
  orders: orderReducer,
});

export default rootReducer;
