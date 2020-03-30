import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import CircularProgress from '@material-ui/core/CircularProgress';
import clsx from 'clsx';
import DatePicker from 'react-datepicker';
import DatePickerButton from 'components/DatePickerButton';
import Grid from '@material-ui/core/Grid';
import LinearProgress from '@material-ui/core/LinearProgress';
import Paper from '@material-ui/core/Paper';
import PropTypes from 'prop-types';
import React, { useState } from 'react';
import ToggleComponent from 'HOC/ToggleComponent';

import 'react-datepicker/dist/react-datepicker.css';
import { ReactComponent as BigChart } from 'assets/img/biggraph.svg';
import { ReactComponent as Chart } from 'assets/img/smallchart.svg';
import { ReactComponent as Left } from 'assets/img/Objectleft.svg';
import { ReactComponent as Right } from 'assets/img/Objectright.svg';

import useStyles from './style';

const TransactionComponent = ({
  payments,
  fetchingPayments,
  fetchingOrders,
  orders,
}) => {
  const totalPayments = payments.length;

  const totalOrders = orders.length;

  const reconciledPayments = payments.filter(({ status }) => status === 'Reconciled').length;

  const pendingPayments = payments.filter(({ status }) => status === 'Pending').length;

  const pendingOrders = orders.filter(({ status }) => status === 'pending').length;

  const reconciledOrders = orders.filter(({ status }) => status === 'reconciled').length;

  const percentOrder = ((reconciledOrders / totalOrders) * 100) || 0;
  const percentPayment = ((reconciledPayments / totalPayments) * 100) || 0;

  const classes = useStyles();
  const [selectedDate, setSelectedDate] = useState(new Date());
  const handleDateChange = (date) => setSelectedDate(date);

  const EnhancedLinearProgress = withStyles({
    colorPrimary: {
      backgroundColor: '#FDC203',
    },
    barColorPrimary: {
      backgroundColor: '#27AE60',
    },
  })(LinearProgress);

  return (
    <>
      <div className={classes.transactionList}>
        <div className={clsx(classes.listWrapper, classes.marginRight)}>
          <Grid container spacing={3}>
            <Grid item sm={6}>
              <Paper className={classes.paper}>
                <div className={classes.listDescription}>
                  <p className="header">Daily Transaction Volume</p>
                  <p className="value">2,345</p>
                </div>
                <Chart />
              </Paper>
            </Grid>
            <Grid item sm={6}>
              <Paper className={classes.paper}>
                <div className={classes.listDescription}>
                  <p className="header">Daily Transaction Value</p>
                  <p className="value">400, 000</p>
                </div>
                <Chart />

              </Paper>
            </Grid>
          </Grid>
        </div>
        <div className={clsx(classes.listWrapper)}>
          <Grid container spacing={3}>
            <Grid item sm={6}>
              <Paper className={classes.paper}>
                <div className={classes.listDescription}>
                  <p className="header">Total Transaction Volume</p>
                  <p className="value">$452,000</p>
                </div>
                <Chart />
              </Paper>
            </Grid>
            <Grid item sm={6}>
              <Paper className={classes.paper}>
                <div className={classes.listDescription}>
                  <p className="header">Total Transaction Value</p>
                  <p className="value">$4,000,000</p>
                </div>
                <Chart />
              </Paper>
            </Grid>
          </Grid>
        </div>
      </div>
      <div className={classes.transactionSummary}>
        <div className="chartSummary">
          <div className="topTab">
            <h4 className="date">
              Today: 5, Aug 2018
            </h4>
            <div className="topTabBtns">
              <DatePicker
                selected={selectedDate}
                customInput={<DatePickerButton />}
                onChange={handleDateChange}
              />
              <div className="arrBtnWrapper">
                <Button
                  variant="outlined"
                  className={classes.arrBtn}
                >
                  <Left />

                </Button>
                <Button
                  variant="outlined"
                  className={classes.arrBtn}
                >
                  <Right />
                </Button>
              </div>
            </div>
          </div>
          <div className="chart">
            <BigChart />
          </div>
        </div>
        <div className="summary">
          <div className="summarySection mb1">
            <h4 className="summaryHeader">Order</h4>
            <EnhancedLinearProgress variant={percentOrder ? 'determinate' : 'indeterminate'} value={percentOrder} />
            <ToggleComponent
              check={fetchingOrders}
              component={(
                <div className={classes.loader}>
                  <CircularProgress className={classes.spinner} />
                </div>
)}
            />
            <ToggleComponent
              check={!fetchingOrders && orders.length}
              component={(
                <div>
                  <p className="summaryEntry">{`Pending Orders: ${pendingOrders}`}</p>
                  <p className="summaryEntry">{`Reconciled Orders: ${reconciledOrders}`}</p>
                  <p className="summaryEntry">{`Total order: ${totalOrders}`}</p>
                </div>
          )}
            />


          </div>
          <div className="summarySection">
            <h4 className="summaryHeader">Payments</h4>
            <EnhancedLinearProgress variant={percentPayment ? 'determinate' : 'indeterminate'} value={percentPayment} />
            <ToggleComponent
              check={fetchingPayments}
              component={(
                <div className={classes.loader}>
                  <CircularProgress className={classes.spinner} />
                </div>
)}
            />
            <ToggleComponent
              check={!fetchingPayments && payments.length}
              component={(
                <div>
                  <p className="summaryEntry">{`Pending Payments: ${pendingPayments}`}</p>
                  <p className="summaryEntry">{`Reconciled Payments: ${reconciledPayments}`}</p>
                  <p className="summaryEntry">{`Total Payments: ${totalPayments}`}</p>
                </div>
          )}
            />


          </div>
        </div>
      </div>
    </>
  );
};

TransactionComponent.propTypes = {
  payments: PropTypes.shape([]).isRequired,
  fetchingPayments: PropTypes.bool.isRequired,
  fetchingOrders: PropTypes.bool.isRequired,
  orders: PropTypes.shape([]).isRequired,
};


export default TransactionComponent;
