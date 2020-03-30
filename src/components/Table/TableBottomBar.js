import React from 'react';
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';

import ButtonGroup from '@material-ui/core/ButtonGroup';

const useStyles = makeStyles((theme) => ({
  tableBottomTab: {
    display: 'flex',
    justifyContent: 'space-between',

    '& .section1': {
      display: 'flex',
      alignItems: 'center',
      color: theme.palette.text.secondary,
      '& > *': {
        marginRight: theme.spacing(3),
      },
      fontSize: '13px',
      '& .MuiFormControl-root': {
        margin: theme.spacing(0, 0, 0, 5),
        minWidth: '400px',
        '& .MuiInput-underline:before': {
          borderColor: '#ccc',
          fontSize: '11px',
        },
      },
    },
    '& .section2': {
      display: 'flex',
      '& > *': {
        marginLeft: theme.spacing(3.5),
      },
    },

  },
  paginationBtn: {
    color: 'black',
    textTransform: 'none',
    '&:hover': {
      background: theme.palette.primary.main,
      color: theme.palette.text.light,
    },
  },
}));


const TableBottomBar = () => {
  const classes = useStyles();
  return (
    <div className={classes.tableBottomTab}>
      <div className="section1">
        <span>Showing 1 to 20 out of 500 entries</span>

      </div>
      <div className="section2">
        <ButtonGroup className={classes.btnGroup} size="small" aria-label="small outlined button group">
          <Button className={classes.paginationBtn}>Previous</Button>
          <Button className={classes.paginationBtn}>1</Button>
          <Button className={classes.paginationBtn}>2</Button>
          <Button className={classes.paginationBtn}>Next</Button>
        </ButtonGroup>

      </div>
    </div>
  );
};

export default TableBottomBar;
