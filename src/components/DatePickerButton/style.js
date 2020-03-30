import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  datePicker: {
    marginRight: theme.spacing(1),
    display: 'flex',
    justifyContent: 'space-around',
    minWidth: '150px',
    border: ' 1px solid #CED0DA',
    color: theme.palette.text.secondaryShade3,
  },
}));

export default useStyles;
