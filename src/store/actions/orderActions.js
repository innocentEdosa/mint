import { FETCH_ORDERS, FETCH_ORDERS_SUCCESS, FETCH_ORDERS_FAILED } from 'store/actions/actionTypes';
import { fetchOrderService } from 'api';

const fetchOrders = () => async (dispatch) => {
  dispatch({ type: FETCH_ORDERS });
  try {
    const { data: { orders } } = await fetchOrderService();
    dispatch({ type: FETCH_ORDERS_SUCCESS, orders });
  } catch (error) {
    dispatch({ type: FETCH_ORDERS_FAILED });
    // DO ALL THE MAGIC FOR A FAILED REQUEST HERE
  }
};

export default fetchOrders;
