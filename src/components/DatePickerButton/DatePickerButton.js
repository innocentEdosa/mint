import Button from '@material-ui/core/Button';
import React from 'react';

import { ReactComponent as Down } from 'assets/img/down.svg';

import useStyles from './style';

const DatePickerButton = ({ value, onClick }) => {
  const classes = useStyles();
  return (
    <Button
      size="small"
      variant="outlined"
      onClick={onClick}
      className={classes.datePicker}
      endIcon={<Down />}
    >
      {value}
    </Button>
  );
};

export default DatePickerButton;
