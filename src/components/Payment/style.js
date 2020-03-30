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
}));

export default useStyles;