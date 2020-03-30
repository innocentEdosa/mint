import { fade, makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  header: {
    background: theme.palette.aux.light,
    color: theme.palette.text.main,
    padding: `0px ${theme.spacing(5.25)}px`,
    boxShadow: '0px 4px 10px rgba(79, 79, 79, 0.07)',
  },
  grow: {
    flexGrow: 1,
  },
  title: {
    display: 'block',
    color: theme.palette.primary.main,
    fontWeight: '900',
    cursor: 'pointer',
    paddingRight: theme.spacing(3),
  },
  search: {
    position: 'relative',
    borderRadius: theme.shape.borderRadius,
    backgroundColor: fade(theme.palette.common.white, 0.15),
    '&:hover': {
      backgroundColor: fade(theme.palette.common.white, 0.25),
    },
    marginRight: theme.spacing(2),
    marginLeft: theme.spacing(6),
    width: 'auto',
  },
  inputRoot: {
    color: 'inherit',
  },
  inputInput: {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: '1em',
    transition: theme.transitions.create('width'),
    width: '100%',
    [theme.breakpoints.up('md')]: {
      width: '20ch',
    },
  },
  navSection: {
    display: 'none',
    [theme.breakpoints.up('md')]: {
      display: 'flex',
    },
    '& > *': {
      marginRight: '2rem',
    },
    '& .topBarBtn': {
      textTransform: 'none',
      color: theme.palette.text.secondaryShade4,
      fontWeight: 'normal',
    },
  },
  profileContainer: {
    display: 'flex',
    '& .MuiButtonBase-root': {
      padding: '0px 2px',
    },
    '& .al-l': {
      textAlign: 'end',
    },
    '& .profileDetails': {
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignContent: 'end',
      '& > *': {
        margin: '0px 2px',
      },
    },

  },
}));

export default useStyles;
