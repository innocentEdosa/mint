import AppBar from '@material-ui/core/AppBar';
import Badge from '@material-ui/core/Badge';
import IconButton from '@material-ui/core/IconButton';
import InputBase from '@material-ui/core/InputBase';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import React from 'react';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';

import { ReactComponent as SearchIcon } from 'assets/img/topsearch.svg';
import { ReactComponent as NotificationIcon } from 'assets/img/bell.svg';
import Button from '@material-ui/core/Button';
import Avatar from '@material-ui/core/Avatar';

import useStyles from './style';

export default function PrimarySearchAppBar() {
  const classes = useStyles();
  const [anchorEl, setAnchorEl] = React.useState(null);
  const isMenuOpen = Boolean(anchorEl);

  const handleProfileMenuOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
  };


  const menuId = 'account-menu';
  const renderMenu = (
    <Menu
      anchorEl={anchorEl}
      anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
      id={menuId}
      keepMounted
      transformOrigin={{ vertical: 'top', horizontal: 'right' }}
      open={isMenuOpen}
      onClose={handleMenuClose}
    >
      <MenuItem onClick={handleMenuClose}>Log out</MenuItem>
      <MenuItem onClick={handleMenuClose}>Log in</MenuItem>
    </Menu>
  );

  return (
    <div className={classes.grow}>
      <AppBar className={classes.header} position="static">
        <Toolbar>
          <Typography className={classes.title} variant="h6" noWrap>
            TransMonitor
          </Typography>
          <div className={classes.search}>
            <SearchIcon />
            <InputBase
              placeholder="Search…"
              classes={{
                root: classes.inputRoot,
                input: classes.inputInput,
              }}
              inputProps={{ 'aria-label': 'search' }}
            />
          </div>
          <div className={classes.grow} />
          <div className={classes.navSection}>
            <Button className="topBarBtn">
              Support
            </Button>
            <Button className="topBarBtn">
              FAQ
            </Button>
            <IconButton aria-label="show 17 new notifications" color="inherit">
              <Badge badgeContent={8} color="primary">
                <NotificationIcon />
              </Badge>
            </IconButton>
            <div className={classes.profileContainer}>
              <div className="profileDetails">
                <h6 className="al-l">Hello</h6>
                <p>Innocent Edosa</p>
              </div>
              <IconButton
                edge="end"
                aria-label="account of current user"
                aria-controls={menuId}
                aria-haspopup="true"
                onClick={handleProfileMenuOpen}
                color="inherit"
              >
                <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" />
              </IconButton>
            </div>
          </div>
        </Toolbar>
      </AppBar>
      {renderMenu}
    </div>
  );
}
