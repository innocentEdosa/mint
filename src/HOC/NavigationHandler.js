import React from 'react';
import { useLocation } from 'react-router-dom';

const NavigationHandler = ({ children }) => {
  const { pathname } = useLocation();
  return (
    children({ pathname })
  );
};

export default NavigationHandler;
