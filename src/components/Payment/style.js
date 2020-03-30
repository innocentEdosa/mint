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
    fontSize: '12px',
    '& .circle': {
      width: '9px',
      height: '9px',
      borderRadius: '50%',
      background: 'red',
    },
  },
  pending: {
    color: '#EBC315',
    '& .circle': {
      background: '#EBC315',
    },
  },
  reconciled: {
    color: '#27AE60',
    '& .circle': {
      background: '#27AE60',
    },

  },
  unreconciled: {
    color: '#7F8FA4',
    '& .circle': {
      background: '#7F8FA4',
    },

  },
  loader: {
    display: 'flex',
    justifyContent: 'center',
  }
}));

export default useStyles;
