import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import { ReactComponent as VectorDown } from 'assets/img/Vectordown.svg';
import { ReactComponent as Search } from 'assets/img/search.svg';
import TextField from '@material-ui/core/TextField';
import InputAdornment from '@material-ui/core/InputAdornment';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import PropTypes from 'prop-types';

const useStyles = makeStyles((theme) => ({
  tableTopTab: {
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
  dropDown: {
    display: 'flex',
    justifyContent: 'space-around',
    minWidth: '150px',
    border: ' 1px solid #CED0DA',
    color: theme.palette.text.secondary2,
  },
}));


const TableTopBar = ({ selectCategory }) => {
  const classes = useStyles();

  // handle row menu (how many rows should show) functionality
  const [anchorEl, setAnchorEl] = useState(null);
  const isRowMenuOpen = Boolean(anchorEl);
  const handleRowMenuOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleRowMenuClose = () => {
    setAnchorEl(null);
  };
  const rowMenuId = 'row-num-select';

  // handle the select filter functionality
  const [selectState, setSelectState] = useState({
    anchorEl: null,
    selected: 'All',
  });
  const isSelectMenuOpen = Boolean(selectState.anchorEl);
  const handleSelectMenuOpen = (event) => {
    setSelectState((prevState) => ({
      ...prevState,
      anchorEl: event.currentTarget,
    }));
  };
  const handleSelectMenuClose = () => {
    setSelectState((prevState) => ({
      ...prevState,
      anchorEl: null,
    }));
  };
  const selectMenuId = 'select-menu-id';


  const renderRowMenu = (
    <Menu
      anchorEl={anchorEl}
      anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
      id={rowMenuId}
      keepMounted
      transformOrigin={{ vertical: 'top', horizontal: 'right' }}
      open={isRowMenuOpen}
      onClose={handleRowMenuClose}
    >
      <MenuItem onClick={() => { handleRowMenuClose(); }}>20</MenuItem>
      <MenuItem onClick={() => { handleRowMenuClose(); }}>30</MenuItem>
      <MenuItem onClick={() => { handleRowMenuClose(); }}>50</MenuItem>
    </Menu>
  );

  const renderSelectMenu = (
    <Menu
      anchorEl={selectState.anchorEl}
      anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
      id={selectMenuId}
      keepMounted
      transformOrigin={{ vertical: 'top', horizontal: 'right' }}
      open={isSelectMenuOpen}
      onClose={handleSelectMenuClose}
    >
      {
      selectCategory.map((category) => (
        <MenuItem onClick={(e) => { handleSelectMenuClose(e); }}>{category}</MenuItem>

      ))
    }
    </Menu>
  );

  return (
    <div className={classes.tableTopTab}>
      <div className="section1">
        <span>Showing</span>
        <Button
          edge="end"
          aria-label="account of current user"
          aria-controls={rowMenuId}
          aria-haspopup="true"
          onClick={handleRowMenuOpen}

          size="small"
          color="primary"
          className={classes.selectNum}
          endIcon={<VectorDown />}
        >
          20
        </Button>
        <span>out of 500 payments</span>
        <TextField
          id="input-with-icon-textfield"
          placeholder="Search payments"
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <Search />
              </InputAdornment>
            ),
          }}
        />
      </div>
      <div className="section2">
        <p>Show</p>
        <Button
          edge="end"
          aria-label="table selection"
          aria-controls={selectMenuId}
          aria-haspopup="true"
          onClick={handleSelectMenuOpen}

          size="small"
          color="primary"
          variant="outlined"
          className={classes.dropDown}
          endIcon={<VectorDown />}
        >
          All
          <div className={classes.grow} />
        </Button>
      </div>
      {renderRowMenu}
      {renderSelectMenu}

    </div>
  );
};

TableTopBar.propTypes = {
  selectCategory: PropTypes.shape([]).isRequired,
};

export default TableTopBar;
