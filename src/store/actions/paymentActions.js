import { FETCH_PAYMENTS, FETCH_PAYMENTS_SUCCESS, FETCH_PAYMENTS_FAILED } from 'store/actions/actionTypes';
import { fetchPaymentService } from 'api';

const fetchPayments = () => async (dispatch) => {
  dispatch({ type: FETCH_PAYMENTS });
  try {
    const { data: { payments } } = await fetchPaymentService();
    dispatch({ type: FETCH_PAYMENTS_SUCCESS, payments });
  } catch (error) {
    dispatch({ type: FETCH_PAYMENTS_FAILED });
    // DO ALL THE MAGIC FOR A FAILED REQUEST HERE
  }
};

export default fetchPayments;
