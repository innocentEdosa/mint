import { ReactComponent as OverviewIcon } from 'assets/img/Groupoverview.svg';
import { ReactComponent as Wallet } from 'assets/img/Groupwallet.svg';
import { ReactComponent as ReconciledWallet } from 'assets/img/Groupwallet2.svg';
import { ReactComponent as UnReconciledWallet } from 'assets/img/Groupwallet3.svg';
import { ReactComponent as Manual } from 'assets/img/Groupmanual.svg';
import { ReactComponent as AllOrders } from 'assets/img/Groupallorders.svg';
import { ReactComponent as PendingOrders } from 'assets/img/Grouppendingorders.svg';
import { ReactComponent as ReconciledOrders } from 'assets/img/reconciledorder.svg';
import { ReactComponent as Merchant } from 'assets/img/Groupmerchant.svg';
import React from 'react';

export const mainNav = [
  {
    label: 'overview',
    icon: <OverviewIcon />,
  },
];

export const paymentsNav = [
  {
    label: 'All payments',
    icon: <Wallet />,
  },
  {
    label: 'Reconciled Payments',
    icon: <ReconciledWallet />,
  },
  {
    label: 'Un - Reconciled Payments',
    icon: <UnReconciledWallet />,
  },
  {
    label: 'Manuel Settlements',
    icon: <Manual />,
  },
];

export const ordersNav = [
  {
    label: 'All Orders',
    icon: <AllOrders />,
  },
  {
    label: 'Pending Orders',
    icon: <PendingOrders />,
  },
  {
    label: 'Reconciled Orders',
    icon: <ReconciledOrders />,
  },
];

export const generalNav = [
  {
    label: 'Merchant Profile',
    icon: <Merchant />,
  },
];
