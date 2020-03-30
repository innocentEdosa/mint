import { FETCH_ORDERS, FETCH_ORDERS_SUCCESS, FETCH_ORDERS_FAILED } from 'store/actions/actionTypes';
import { fetchOrderService } from 'api';

const fetchOrders = () => async (dispatch) => {
  dispatch({ type: FETCH_ORDERS });
  try {
    const { data: { ORDERS } } = await fetchOrderService();
    dispatch({ type: FETCH_ORDERS_SUCCESS, ORDERS });
  } catch (error) {
    dispatch({ type: FETCH_ORDERS_FAILED });
    // DO ALL THE MAGIC FOR A FAILED REQUEST HERE
  }
};

export default fetchOrders;
