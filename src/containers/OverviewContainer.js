import React, { useEffect } from 'react';
import TransactionComponent from 'components/Transaction';
import PaymentComponent from 'components/Payment';
import fetchPaymentAction from 'store/actions/paymentActions';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

const OverviewContainer = ({
  fetchPayments,
  payments,
  fetchingPayments,
  fetchingPaymentsError,
}) => {
  useEffect(() => {
    fetchPayments();
  }, []);

  return (
    <>
      <TransactionComponent />
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
}) => ({
  payments,
  fetchingPayments,
  fetchingPaymentsError,
});

const mapDispatchToProps = (dispatch) => ({
  fetchPayments: () => dispatch(fetchPaymentAction()),
});

OverviewContainer.propTypes = {
  fetchPayments: PropTypes.func.isRequired,
  payments: PropTypes.shape([]).isRequired,
  fetchingPayments: PropTypes.bool.isRequired,
  fetchingPaymentsError: PropTypes.bool.isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(OverviewContainer);
