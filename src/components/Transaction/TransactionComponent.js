import clsx from 'clsx';
import React, { useState } from 'react';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import { ReactComponent as Chart } from 'assets/img/smallchart.svg';
import LinearProgress from '@material-ui/core/LinearProgress';
import Button from '@material-ui/core/Button';
import { ReactComponent as Right } from 'assets/img/Objectright.svg';
import { ReactComponent as Left } from 'assets/img/Objectleft.svg';
import { ReactComponent as BigChart } from 'assets/img/biggraph.svg';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import { withStyles } from '@material-ui/core/styles';

import DatePickerButton from 'components/DatePickerButton';
import useStyles from './style';


const TransactionComponent = () => {
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
                  <p className="header">Daily Transaction Value</p>
                  <p className="value">2345</p>
                </div>
                <Chart />
              </Paper>
            </Grid>
            <Grid item sm={6}>
              <Paper className={classes.paper}>xs=6 sm=3</Paper>
            </Grid>
          </Grid>
        </div>
        <div className={clsx(classes.listWrapper)}>
          <Grid container spacing={3}>
            <Grid item sm={6}>
              <Paper className={classes.paper}>
                <div className={classes.listDescription}>
                  <p className="header">Daily Transaction Value</p>
                  <p className="value">2345</p>
                </div>
                <Chart />
              </Paper>
            </Grid>
            <Grid item sm={6}>
              <Paper className={classes.paper}>xs=6 sm=3</Paper>
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
            <EnhancedLinearProgress variant="determinate" value={80} />
            <div>
              <p className="summaryEntry">Pending Orders: 20</p>
              <p className="summaryEntry">Reconciled Orders: 80</p>
              <p className="summaryEntry">Total order: 100</p>
            </div>

          </div>
          <div className="summarySection">
            <h4 className="summaryHeader">Payments</h4>
            <EnhancedLinearProgress variant="determinate" value={50} />
            <div>
              <p className="summaryEntry">Pending Payments: 20</p>
              <p className="summaryEntry">Reconciled Payments: 80</p>
              <p className="summaryEntry">Total Payments: 100</p>
            </div>

          </div>
        </div>
      </div>
    </>
  );
};

export default TransactionComponent;
