import { FETCH_PAYMENTS, FETCH_PAYMENTS_SUCCESS, FETCH_PAYMENTS_FAILED } from 'store/actions/actionTypes';

const initialState = {
  fetchingPayments: false,
  payments: [],
  fetchingPaymentsError: false,
};

const fetchingPayments = (state) => ({
  ...state,
  fetchingPayments: true,
  fetchingPaymentsError: false,
});

const fetchPaymentsSuccessHandler = (state, { payments }) => ({
  ...state,
  payments,
  fetchingPayments: false,
});

const fetchPaymentFailedHandler = (state) => ({
  ...state,
  fetchingPayments: false,
  fetchingPaymentsError: true,
});

const paymentReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_PAYMENTS: return fetchingPayments(state);
    case FETCH_PAYMENTS_SUCCESS: return fetchPaymentsSuccessHandler(state, action);
    case FETCH_PAYMENTS_FAILED: return fetchPaymentFailedHandler(state);
    default:
      return state;
  }
};

export default paymentReducer;
