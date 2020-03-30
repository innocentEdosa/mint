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
    padding: theme.spacing(0.5, 8),
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

    '& .MuiDrawer-paper': {
      position: 'inherit',
      background: theme.palette.aux.light,
      color: theme.palette.text.inactive,
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
    '& .activeList': {
      color: theme.palette.text.white,
      background: theme.palette.primary.main,
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
