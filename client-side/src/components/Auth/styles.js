import { makeStyles } from '@material-ui/core/styles';

export default makeStyles((theme) => ({
    paper: {
      marginTop: theme.spacing(0),
      display: 'flex',
      flexDirection: 'column',
      
      padding: theme.spacing(1),
    },
    root: {
      '& .MuiTextField-root': {
        margin: theme.spacing(5),
      },
    },
    logo: {
      height: '50px',
      paddingBottom: '5px',

    },
    form: {
      width: '100%', // Fix IE 11 issue.
      marginTop: theme.spacing(3),
    },
    paddingDown: {
      marginBottom: '8px',
    },
    forgotPassword: {
      marginTop: '4px',
      
    },
    submit: {
      marginTop: '15px',
      width: '100px',
      height: '36px',
      color: 'white',
      fontSize: '12px',
      fontWeight: '500',
      textAlign: 'center',
      borderRadius: '45px',
      backgroundImage: 'linear-gradient(101deg, #A1A6FF, #63FFE6)',
      // padding: '6px 40px 6px 40px',
      transition: 'all 0.2s ease 0s',
      boxShadow: '0px 8px 15px rgba(0, 0, 0, 0.1)',
      cursor: 'pointer',
      "&:hover":{
          filter: 'brightness(105%)',
      },
      "&:active":{
        filter: 'brightness(95%)',
        boxShadow: '2px 2px 10px rgba(0, 0, 0, 0.2)',
      }
    },
    buttonFilled: {
      width: '100px',
      height: '36px',
      color: 'white',
      fontSize: '12px',
      fontWeight: '500',
      textAlign: 'center',
      borderRadius: '45px',
      backgroundImage: 'linear-gradient(101deg, #A1A6FF, #63FFE6)',
      transition: 'all 0.2s ease 0s',
      boxShadow: '0px 8px 15px rgba(0, 0, 0, 0.1)',
      cursor: 'pointer',
      "&:hover":{
          filter: 'brightness(105%)',
      },
      "&:active":{
        filter: 'brightness(95%)',
        boxShadow: '2px 2px 10px rgba(0, 0, 0, 0.2)',
      }
    },
    buttonOutline: {
      width: '100px',
      height: '36px',
      color: '#72A4E3',
      fontSize: '12px',
      fontWeight: '600',
      textAlign: 'center',
      border: 'solid 3px transparent',
      backgroundImage: 'linear-gradient(rgba(255, 255, 255, 0), rgba(255, 255, 255, 0)), linear-gradient(101deg, #9494F1, #58FDD0)',
      backgroundOrigin: 'border-box',
      backgroundClip: 'content-box, border-box',
      //boxShadow color affects button's background color.
      boxShadow: '2px 1000px 1px lavender inset',
      borderRadius: '45px',
      cursor: 'pointer',
      "&:hover":{
        boxShadow: 'none',
        color: 'white',
      }
    },
    login: {
      color: '#a275f7',
    },
    terms: {
      marginTop: '10px',
      

    },
    error: {
      color: 'red',
    }
  }));