import React, { useEffect } from 'react';
import TransactionComponent from 'components/Transaction';
import PaymentComponent from 'components/Payment';
import fetchPaymentAction from 'store/actions/paymentActions';
import fetchOrdersAction from 'store/actions/orderActions';

import { connect } from 'react-redux';
import PropTypes from 'prop-types';

const OverviewContainer = ({
  fetchPayments,
  payments,
  fetchingPayments,
  fetchingPaymentsError,
  fetchOrders,
  fetchingOrders,
  orders,
  fetchingOrdersError,
}) => {
  useEffect(() => {
    fetchPayments();
  }, []);

  useEffect(() => {
    fetchOrders();
  }, []);

  return (
    <>
      <TransactionComponent
        fetchingOrders={fetchingOrders}
        orders={orders}
        fetchingOrdersError={fetchingOrdersError}
        fetchingPaymentsError={fetchingPaymentsError}
        fetchingPayments={fetchingPayments}
        payments={payments}
      />
      <PaymentComponent
        fetchingPaymentsError={fetchingPaymentsError}
        fetchingPayments={fetchingPayments}
        payments={payments}
      />
    </>
  );
};

const mapStateToProps = ({
  payment: {
    payments,
    fetchingPayments,
    fetchingPaymentsError,
  },
  orders: {
    fetchingOrders,
    orders,
    fetchingOrdersError,
  },
}) => ({
  payments,
  fetchingPayments,
  fetchingPaymentsError,
  fetchingOrders,
  orders,
  fetchingOrdersError,
});

const mapDispatchToProps = (dispatch) => ({
  fetchPayments: () => dispatch(fetchPaymentAction()),
  fetchOrders: () => dispatch(fetchOrdersAction()),

});

OverviewContainer.propTypes = {
  fetchPayments: PropTypes.func.isRequired,
  payments: PropTypes.shape([]).isRequired,
  fetchingPayments: PropTypes.bool.isRequired,
  fetchingPaymentsError: PropTypes.bool.isRequired,
  fetchOrders: PropTypes.func.isRequired,
  fetchingOrders: PropTypes.bool.isRequired,
  orders: PropTypes.shape([]).isRequired,
  fetchingOrdersError: PropTypes.bool.isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(OverviewContainer);
