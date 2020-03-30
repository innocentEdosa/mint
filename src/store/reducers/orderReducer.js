import { FETCH_ORDERS, FETCH_ORDERS_SUCCESS, FETCH_ORDERS_FAILED } from 'store/actions/actionTypes';

const initialState = {
  fetchingOrders: false,
  orders: [],
  fetchingOrdersError: false,
};

const fetchingOrders = (state) => ({
  ...state,
  fetchingOrders: true,
  fetchingOrdersError: false,
});

const fetchOrdersSuccessHandler = (state, { orders }) => ({
  ...state,
  orders,
  fetchingOrders: false,
});

const fetchPaymentFailedHandler = (state) => ({
  ...state,
  fetchingOrders: false,
  fetchingOrdersError: true,
});

const orderReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_ORDERS: return fetchingOrders(state);
    case FETCH_ORDERS_SUCCESS: return fetchOrdersSuccessHandler(state, action);
    case FETCH_ORDERS_FAILED: return fetchPaymentFailedHandler(state);
    default:
      return state;
  }
};

export default orderReducer;
