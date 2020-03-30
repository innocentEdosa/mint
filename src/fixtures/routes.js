const routes = {
  dashboard: '/dashboard',
  overview: '/dashboard/overview',
  merchant: '/dashbaord/merchant',
  allpayments: '/dashboard/payments',
  reconciledpayments: '/dashboard/payments?mode=reconciled',
  unreconciledpayments: '/dashboard/payments?mode=unreconciled',
  manualpayments: '/dashboard/payments?mode=manual',
  allorders: '/dashboard/orders',
  pendingorders: '/dashboard/orders?mode=pending',
  reconcilledorders: '/dashboard/orders?reconciled',
};

export default routes;
