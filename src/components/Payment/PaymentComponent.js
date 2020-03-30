import React from 'react';
import TableTopBar from 'components/Table/TableTopBar';
import useStyles from './style';


const PaymentComponent = () => {
  const classes = useStyles();
  return (
    <div className={classes.paymentWrapper}>
      <h2 className="title">Payments</h2>
      <TableTopBar />

    </div>
  );
};

export default PaymentComponent;
