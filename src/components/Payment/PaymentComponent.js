import React from 'react';
import Table from '@material-ui/core/Table';
import TableContainer from '@material-ui/core/TableContainer';
import TableTopBar from 'components/Table/TableTopBar';
import TableHead from 'components/Table/TableHead';
import Paper from '@material-ui/core/Paper';
import TableBottomBar from 'components/Table/TableBottomBar';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableRow from '@material-ui/core/TableRow';
import Avatar from '@material-ui/core/Avatar';
import { ReactComponent as VectorDown } from 'assets/img/Vectordown2.svg';
import Button from '@material-ui/core/Button';
import clsx from 'clsx';
import PropTypes from 'prop-types';
import ToggleComponent from 'HOC/ToggleComponent';
import CircularProgress from '@material-ui/core/CircularProgress';
import format from 'date-format';
import useStyles from './style';

const PaymentComponent = ({
  fetchingPaymentsError,
  payments = [],
  fetchingPayments,
}) => {
  const classes = useStyles();
  const selectCategory = ['All', 'Reconciled', 'Un-Reconciled', 'Settled', 'UnSettled'];
  const tableHeadArray = ['Item type', 'Price', 'Transaction no', 'Time', 'Status', ''];
  return (
    <div className={classes.paymentWrapper}>
      <h2 className="title">Payments</h2>
      <ToggleComponent
        check={fetchingPayments}
        component={(
          <div className={classes.loader}>
            <CircularProgress />
          </div>
)}
      />
      <ToggleComponent
        check={fetchingPaymentsError && !fetchingPayments}
        components={(
          <div>
            error: something went really wrong
          </div>
)}
      />
      <ToggleComponent
        check={!fetchingPayments && payments.length}
        component={(
          <>
            <TableTopBar selectCategory={selectCategory} />
            <TableContainer className={classes.tableWrapper} component={Paper}>
              <Table>
                <TableHead rows={tableHeadArray} />
                <TableBody>
                  {
              payments.map(({
                itemType, price, transactionNo, date, status,
              }) => (
                <>
                  <TableRow Key={itemType}>
                    <TableCell className={classes.specialCell}>
                      <Avatar>{itemType[0]}</Avatar>
                      {itemType}
                    </TableCell>
                    <TableCell>
                      $
                      {price}
                    </TableCell>
                    <TableCell>
                      {transactionNo}
                      {' '}
                    </TableCell>
                    <TableCell>
                      {format('hh:mm', format.parse(format.ISO8601_FORMAT, date))}
                      {' '}
                    </TableCell>
                    <TableCell>
                      <Button
                        size="small"
                        variant="outlined"
                        className={clsx(classes.statusButton, {
                          [classes.pending]: status === 'Pending',
                          [classes.reconciled]: status === 'Reconciled',
                          [classes.unreconciled]: status === 'Un-Reconciled',
                        })}
                      >
                        <span className="circle" />
                        {status}
                      </Button>
                    </TableCell>
                    <TableCell>
                      <VectorDown />
                    </TableCell>
                  </TableRow>
                </>
              ))
            }
                </TableBody>
              </Table>
            </TableContainer>
            <TableBottomBar />
          </>
      )}
      />
    </div>
  );
};

PaymentComponent.propTypes = {
  fetchingPaymentsError: PropTypes.bool.isRequired,
  payments: PropTypes.shape([]).isRequired,
  fetchingPayments: PropTypes.bool.isRequired,
};

export default PaymentComponent;
