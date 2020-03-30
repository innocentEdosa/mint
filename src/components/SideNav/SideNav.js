/* eslint-disable jsx-a11y/heading-has-content */
import {
  generalNav, ordersNav, paymentsNav, mainNav,
} from 'fixtures/sideNav';
import { Link } from 'react-router-dom';
import Button from '@material-ui/core/Button';
import clsx from 'clsx';
import Drawer from '@material-ui/core/Drawer';
import List from '@material-ui/core/List';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import React from 'react';

import useStyles from './style';

const SideNav = () => {
  const classes = useStyles();


  const renderNavItems = (navArray) => (
    <List className={classes.list}>
      {navArray.map(({ label, icon }) => (
        <Link>
          <ListItemText className={classes.listItem}>
            <ListItemIcon>{icon}</ListItemIcon>
            <ListItemText className={classes.listText} wrap>
              {label}
            </ListItemText>
          </ListItemText>
        </Link>
      ))}
    </List>
  );
  return (
    <div className={classes.sideNavWrapper}>
      <Drawer variant="permanent" className={clsx(classes.drawer)}>
        <div className={classes.toolbar}>
          <Button variant="contained" className={classes.invoiceBtn}>
            {' '}
            Generate Invoice
          </Button>
        </div>
        <div className={classes.navWrapper}>
          <div>
            <h6 className={classes.navGroupHeader}>Main</h6>
            {renderNavItems(mainNav)}
          </div>
          <div>
            <h6 className={classes.navGroupHeader}>Payments</h6>
            {renderNavItems(paymentsNav)}
          </div>
          <div>
            <h6 className={classes.navGroupHeader}>Orders</h6>
            {renderNavItems(ordersNav)}
          </div>
          <div>
            <h6 className={classes.navGroupHeader} />
            {renderNavItems(generalNav)}
          </div>
        </div>
      </Drawer>
    </div>
  );
};

export default SideNav;
