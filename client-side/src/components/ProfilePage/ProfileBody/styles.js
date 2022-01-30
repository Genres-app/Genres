import {makeStyles} from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({

  radialCharts: {
    display: 'flex',
    justifyContent: 'center',
    '@media (max-width:1024px)': {
      display: 'none',
    },
  },

  barCharts: {
    display: 'none',
    width: '100%',
    '@media (max-width:1024px)': {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'flex-start',
    },
  },


  content: {
    // backgroundColor: theme.palette.background.paper,
    paddingBottom: '10px',
  },
  container: {
    // backgroundColor: theme.palette.background.paper,
    padding: '0px 0px 0px 0px',
  },

  mainContainer: {
    maxWidth: 1256,
    width: "80%",
    margin: "0 auto",
  },
  profileBodyContainer: {
    // width: '60%',
    // marginLeft: 'clamp(410px, 32%, 32%)',
    // marginRight: '2%',
    paddingLeft: "calc(286px + 1.5rem)",
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
    maxWidth: '800px',
    marginTop: '10px',
    paddingLeft: "calc(260px + 3rem)",
    // marginLeft: 'clamp(410px, 32%, 32%)',
    '@media (max-width:1024px)': {
      maxWidth: '100%',
      marginLeft: '0px',
    },
  },
  activityTabStyles: {
    maxWidth: '610px',
    marginTop: '10px',
    // marginLeft: 'clamp(2px, 30%, 30%)',
    // marginRight: 'clamp(2px, 30%, 30%)',
    marginTop: '10px',
    '@media (max-width:1024px)': {
      maxWidth: '100%',
      marginLeft: '0px',
      marginRight: '0px',
    },
  },
}));

export default useStyles;