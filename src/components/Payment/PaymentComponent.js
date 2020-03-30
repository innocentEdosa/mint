import React from 'react';
import Table from '@material-ui/core/Table';
import TableContainer from '@material-ui/core/TableContainer';
import TableTopBar from 'components/Table/TableTopBar';
import TableHead from 'components/Table/TableHead';
import Paper from '@material-ui/core/Paper';
import TableBottomBar from 'components/Table/TableBottomBar';

import useStyles from './style';

const PaymentComponent = () => {
  const classes = useStyles();
  const selectCategory = ['All', 'Reconciled', 'Un-Reconciled', 'Settled', 'UnSettled'];
  const tableHeadArray = ['Item type', 'Price', 'Transaction no', 'Time', 'Status', ''];
  return (
    <div className={classes.paymentWrapper}>
      <h2 className="title">Payments</h2>
      <TableTopBar selectCategory={selectCategory} />
      <TableContainer className={classes.tableWrapper} component={Paper}>
        <Table>
          <TableHead rows={tableHeadArray} />
        </Table>
      </TableContainer>
      <TableBottomBar />
    </div>
  );
};

export default PaymentComponent;
