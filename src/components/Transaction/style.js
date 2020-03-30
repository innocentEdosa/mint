import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  paper: {
    padding: theme.spacing(2),
    color: theme.palette.text.secondary,
    borderRadius: '2px',
    boxShadow: 'none',
    display: 'flex',
    justifyContent: 'space-around',
  },
  transactionList: {
    display: 'flex',
  },
  listWrapper: {
    flexGrow: 1,
  },
  marginRight: {
    marginRight: '4rem',
  },
  listDescription: {
    '& > *': {
      margin: '0px',
    },
    '& .header': {
      fontSize: '16px',
      lineHeight: '18px',
    },
    '& .value': {
      fontSize: '18px',
      color: theme.palette.text.dark,
    },
  },
  transactionSummary: {
    padding: theme.spacing(4, 0),
    display: 'flex',
    '& .chartSummary': {
      flexGrow: 1,
      overflow: 'hidden',
      background: theme.palette.aux.light,
      marginRight: theme.spacing(0.5),
      '& .topTab': {
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: theme.spacing(0, 4),
        '& .date': {
          fontWeight: 'bold',
          fontSize: '18px',
        },
        '& .topTabBtns': {
          flexBasis: '30%',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',

          '& .arrBtnWrapper': {
            display: 'flex',

          },
        },
      },
      '& .chart': {
        paddingTop: theme.spacing(2.5),
        height: '100%',
      },
    },
    '& .summary': {
      flexBasis: '30%',
      color: theme.palette.text.secondary,
      '& .mb1': {
        marginBottom: theme.spacing(0.5),
      },
      '& .summarySection': {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-around',
        padding: theme.spacing(1, 8, 1, 3),
        background: theme.palette.aux.light,
      },
      '& .summaryHeader': {
        fontWeight: 'bold',
      },
      '& .summaryEntry': {
        margin: theme.spacing(0.9, 0),
        fontWeight: 'normal',

      },
    },
  },
  datePicker: {
    marginRight: theme.spacing(1),
    display: 'flex',
    justifyContent: 'space-around',
    minWidth: '150px',
    border: ' 1px solid #CED0DA',
    color: theme.palette.text.secondaryShade3,
  },
  arrBtn: {
    minWidth: theme.spacing(1),
    padding: '1px 4px',
    margin: theme.spacing(0, 1),
    background: 'linear-gradient(0deg, #F2F4F7 0%, #FFFFFF 100%)',
    color: theme.palette.aux.lightShade4,
  },
}));

export default useStyles;
