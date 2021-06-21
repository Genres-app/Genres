import { fade, makeStyles } from '@material-ui/core/styles';


const useStyles = makeStyles((theme) => ({

  // body: {
  //   marginTop: 100,
  // },

  root: {
    display: 'flex',
    flexGrow: 1,
  },

  grow: {
    flexGrow: 1,
  },

  toolbar: {
    paddingRight: 24, // keep right padding when drawer closed
  },

  toolbarIcon: {
    display: 'flex',

    ...theme.mixins.toolbar,
  },

  appBar: {
    zIndex: theme.zIndex.drawer + 1,
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
  },


  drawer: {
    width: 250,
  },

  drawerPaper: {
    width: 250,
  },

  avatarOfDrawer: {
    width: theme.spacing(8),
    height: theme.spacing(8),
    margin: theme.spacing(2),
  },

  userName: {
    marginLeft: theme.spacing(2),
  },
  userEmail: {
    marginLeft: theme.spacing(2),
  },

  profileBtnsOfDrawer: {
    display: 'flex',
    flexDirection: 'row',
    width: '100%',
  },

  profileBtnOfDrawer: {
    flex: 1,
    margin: theme.spacing(1),
  },

  logoutBtnOfDrawer: {
    flex: 1,
    margin: theme.spacing(1),
    color: 'rgb(255, 23, 68)',
    border: '1px solid rgba(255, 23, 68, 0.5)',

    "&:hover": {
      backgroundColor: 'rgb(255, 23, 68, 0.04)',
    }
  },


  menuButton: {
    marginRight: theme.spacing(2),
  },

  menuButtonHidden: {
    display: 'none',
  },

  title: {
    display: 'none',
    [theme.breakpoints.up('sm')]: {
      display: 'block',
    },
  },


  container: {
    paddingTop: theme.spacing(4),
    paddingBottom: theme.spacing(4),
  },

  paper: {
    padding: theme.spacing(2),
    display: 'flex',
    overflow: 'auto',
    flexDirection: 'column',
  },

  fixedHeight: {
    height: 240,
  },

  
  search: {
    position: 'relative',
    borderRadius: theme.shape.borderRadius,
    backgroundColor: fade(theme.palette.common.white, 0.15),
    '&:hover': {
      backgroundColor: fade(theme.palette.common.white, 0.25),
    },
    marginRight: theme.spacing(2),
    marginLeft: 0,
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      marginLeft: theme.spacing(3),
      width: 'auto',
    },
  },

  searchIcon: {
    padding: theme.spacing(0, 2),
    height: '100%',
    position: 'absolute',
    pointerEvents: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },

  inputRoot: {
    color: 'inherit',
  },

  inputInput: {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
    transition: theme.transitions.create('width'),
    width: '100%',
    [theme.breakpoints.up('md')]: {
      width: '20ch',
    },
  },

  profile: {
    marginRight: '12px',
  },

  accountCircle: {
    margin: '5px',
    color: 'gray',
  },

  button: {
    margin: theme.spacing(1),
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
    "&:hover": {
      boxShadow: 'none',
      color: 'white',
    }
  },

  navItem: {
    width: 'calc(60px * 0.8)',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',

  },

  iconButton: {
    width: '30px',
    height: '30px',
    backgroundColor: 'red',
    borderRadius: '50%',
    padding: '5px',
    margin: '2px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    transition: 'filter 300ms',

    "&:hover": {
      filter: 'brightness(1.2)',
    }
  }



}));

export default useStyles;