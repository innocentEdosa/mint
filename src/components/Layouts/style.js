import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  wrapper: {
    flexGrow: 1,
    display: 'flex',
    height: 'calc(100vh - 64px)',
  },
  grow: {
    flexGrow: 1,
  },
  showSection: {
    flexGrow: 1,
    padding: theme.spacing(5, 10, 5, 8),
    background: theme.palette.aux.lightShade2,
    height: '100%',
    overflowY: 'scroll',
  },
  setupLoader: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'start',
    alignItems: 'center',
    alignSelf: 'top',
    padding: theme.spacing(3),
    width: '100%',
  },
}));

export default useStyles;
