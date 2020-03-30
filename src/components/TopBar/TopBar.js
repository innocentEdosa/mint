import AppBar from '@material-ui/core/AppBar';
import Badge from '@material-ui/core/Badge';
import IconButton from '@material-ui/core/IconButton';
import InputBase from '@material-ui/core/InputBase';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import React from 'react';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import ToggleComponent from 'HOC/ToggleComponent';
import { ReactComponent as SearchIcon } from 'assets/img/topsearch.svg';
import { ReactComponent as NotificationIcon } from 'assets/img/bell.svg';
import Button from '@material-ui/core/Button';
import Avatar from '@material-ui/core/Avatar';
import NavigationHandler from 'HOC/NavigationHandler';
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
  const renderMenu = (logout) => (
    <Menu
      anchorEl={anchorEl}
      anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
      id={menuId}
      keepMounted
      transformOrigin={{ vertical: 'top', horizontal: 'right' }}
      open={isMenuOpen}
      onClose={handleMenuClose}
    >
      <MenuItem onClick={() => { logout(); handleMenuClose(); }}>Log out</MenuItem>
    </Menu>
  );

  return (
    <NavigationHandler>
      {
        ({
          isAuthenticated, fullName, imgUrl, login, logout,
        }) => (
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
                  <ToggleComponent
                    check={!isAuthenticated}
                    component={(
                      <Button onClick={login} className="topBarBtn">
                        Login
                      </Button>
                )}
                  />
                  <ToggleComponent
                    check={isAuthenticated}
                    component={(
                      <>
                        <IconButton aria-label="show 17 new notifications" color="inherit">
                          <Badge badgeContent={8} color="primary">
                            <NotificationIcon />
                          </Badge>
                        </IconButton>
                        <div className={classes.profileContainer}>
                          <div className="profileDetails">
                            <h6 className="al-l">Hello</h6>
                            <p>{fullName}</p>
                          </div>
                          <IconButton
                            edge="end"
                            aria-label="account of current user"
                            aria-controls={menuId}
                            aria-haspopup="true"
                            onClick={handleProfileMenuOpen}
                            color="inherit"
                          >
                            <Avatar alt={fullName} src={imgUrl} />
                          </IconButton>
                        </div>
                      </>
                  )}
                  />
                </div>

              </Toolbar>
            </AppBar>
            {renderMenu(logout)}
          </div>
        )
      }
    </NavigationHandler>
  );
}
