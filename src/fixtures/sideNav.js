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
import routes from 'fixtures/routes';

export const mainNav = [
  {
    label: 'overview',
    icon: <OverviewIcon />,
    path: routes.overview,
  },
];

export const paymentsNav = [
  {
    label: 'All payments',
    icon: <Wallet />,
    path: routes.allpayments,
  },
  {
    label: 'Reconciled Payments',
    icon: <ReconciledWallet />,
    path: routes.reconciledpayments,
  },
  {
    label: 'Un - Reconciled Payments',
    icon: <UnReconciledWallet />,
    path: routes.unreonciledpayments,
  },
  {
    label: 'Manual Settlements',
    icon: <Manual />,
    path: routes.manualpayments,
  },
];

export const ordersNav = [
  {
    label: 'All Orders',
    icon: <AllOrders />,
    path: routes.allorders,
  },
  {
    label: 'Pending Orders',
    icon: <PendingOrders />,
    path: routes.pendingorders,
  },
  {
    label: 'Reconciled Orders',
    icon: <ReconciledOrders />,
    path: routes.reconciledorders,
  },
];

export const generalNav = [
  {
    label: 'Merchant Profile',
    icon: <Merchant />,
    path: routes.merchant,
  },
];
