import {makeStyles} from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  content: {
    backgroundColor: theme.palette.background.paper,
    paddingBottom: '10px',
  },
  container: {
    backgroundColor: theme.palette.background.paper,
    padding: '0px 0px 0px 0px',
  },
  profileBodyContainer: {
    width: '60%',
    marginLeft: 'clamp(410px, 32%, 32%)',
    marginRight: '2%',
    '@media (max-width:1024px)': {
      width: '100%',
      marginLeft: '0px',
      marginRight: '0px',
    },
  },
  activityBodyContainer: {
    paddingLeft: '2%',
    paddingRight: '2%',
    '@media (max-width:480px)': {
      paddingLeft: '0px',
      paddingRight: '0px',
    },
  },
  flexColumn: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    
  },
  profileTabStyles: {
    maxWidth: '610px',
    marginTop: '10px',
    marginLeft: 'clamp(410px, 30%, 30%)',
    '@media (max-width:1024px)': {
      maxWidth: '100%',
      marginLeft: '0px',
    },
  },
  activityTabStyles: {
    maxWidth: '610px',
    marginTop: '10px',
    marginLeft: 'clamp(2px, 30%, 30%)',
    marginRight: 'clamp(2px, 30%, 30%)',
    marginTop: '10px',
    '@media (max-width:1024px)': {
      maxWidth: '100%',
      marginLeft: '0px',
      marginRight: '0px',
    },
  },
}));

export default useStyles;