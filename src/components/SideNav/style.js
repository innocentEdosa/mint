import { makeStyles } from '@material-ui/core/styles';


const drawerWidth = 260;
const useStyles = makeStyles((theme) => ({
  grow: {
    flexGrow: 1,
  },
  toolbar: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    padding: theme.spacing(4, 1),
    ...theme.mixins.toolbar,
    '& .MuiIconButton-root': {
      color: '#fff',
    },
  },
  navWrapper: {
    flexGrow: 1,
    display: 'flex',
    justifyCenter: 'center',
    flexDirection: 'column',
    color: theme.palette.text.main,
    fontWeight: '200',
  },
  navGroupHeader: {
    padding: theme.spacing(2, 8),
    margin: '0px',
    fontSize: '11px',
  },
  list: {
    padding: '0px',
  },
  listItem: {
    padding: theme.spacing(0.8, 8),
    margin: '0px',
    fontSize: '11px',
    display: 'flex',
    '& .MuiTypography-root': {
      fontSize: '11px',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      '& .MuiListItemIcon-root': {
        minWidth: '20px',
        paddingRight: theme.spacing(2),
      },
    },
  },
  invoiceBtn: {
    background: theme.palette.button.special,
    color: theme.palette.aux.light,
    borderRadius: '30px',
    boxShadow: 'none',
    width: '160px',
  },
  drawer: {
    overflowX: 'hidden',
    width: drawerWidth,
    flexShrink: 0,
    whiteSpace: 'nowrap',
    height: '100%',
    top: 'auto',
    color: theme.palette.text.secondaryShade4,

    '& .MuiDrawer-paper': {
      color: theme.palette.text.secondaryShade4,
      position: 'inherit',
      background: theme.palette.aux.light,
    },
    '& .MuiListItem-root': {
      color: 'inherit',
      '&:hover': {
        color: theme.palette.text.white,
        background: theme.palette.primary.main,
      },
    },
    '& .MuiListItemIcon-root': {
      color: 'inherit',
    },
  },
  activeList: {
    color: theme.palette.text.secondaryShade4,
    background: 'rgba(24, 118, 240, 0.1)',
    display: 'flex',
    position: 'relative',
    justifyContent: 'space-between',
    '&::before': {
      background: theme.palette.primary.main,
      width: theme.spacing(0.5),
      height: '100%',
      content: "''",
      position: 'absolute',
      top: 0,
      left: 0,
    },
  },

  listIconWrapper: {
    fontSize: '1.5rem',
    paddingLeft: '5px',
  },
  listText: {
    fontSize: '1rem',
  },
}));

export default useStyles;
