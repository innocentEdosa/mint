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
          <TableBody>
            <TableRow>

              <TableCell className={classes.specialCell}>
                <Avatar>vw</Avatar>
                Apple Mac Book 15” 250 SSD 12GB
              </TableCell>
              <TableCell>
                $73430
              </TableCell>
              <TableCell>
                1234567890
                {' '}
              </TableCell>
              <TableCell>
                12:30
                {' '}
              </TableCell>
              <TableCell>
                <Button
                  size="small"
                  variant="outlined"
                  className={classes.statusButton}
                >
                  <span className="circle" />
                  Reconciled
                </Button>
              </TableCell>
              <TableCell>
                <VectorDown />
              </TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </TableContainer>
      <TableBottomBar />
    </div>
  );
};

export default PaymentComponent;
