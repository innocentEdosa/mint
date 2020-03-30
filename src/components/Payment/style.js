import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  paymentWrapper: {
    background: theme.palette.aux.light1,
    paddingBottom: theme.spacing(4),
    '& .title': {
      fontSize: '36px',
      fontWeight: 'normal',
      lineHeight: '48px',
    },
  },
  tableWrapper: {
    borderRadius: 2,
    margin: '2rem 0rem',
    boxShadow: 'none',
  },
  specialCell: {
    display: 'flex',
    alignItems: 'center',
    '& .MuiAvatar-root': {
      marginRight: '26px',
      height: '36px',
      width: '36px',
      background: theme.palette.text.secondaryShade3,
      fontWeight: 'normal',
    },
  },
  statusButton: {
    width: '120px',
    textTransform: 'none',
    borderRadius: '30px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-around',
    '& .circle': {
      width: '9px',
      height: '9px',
      borderRadius: '50%',
      background: 'red',
    },
  },
}));

export default useStyles;
