import { fade, makeStyles } from '@material-ui/core/styles';


const useStyles = makeStyles((theme) => ({

  // body: {
  //   marginTop: 100,
  // },

  root: {
    display: 'flex',
    flexGrow: 1,
  },

  appBarLogo: {
    height: "100%",
    display: "flex",
    alignItems: "center",
    cursor: "pointer",
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

  // appBar: {
  //   zIndex: theme.zIndex.drawer + 1,
  //   transition: theme.transitions.create(['width', 'margin'], {
  //     easing: theme.transitions.easing.sharp,
  //     duration: theme.transitions.duration.leavingScreen,
  //   }),
  // },
  drawerToggleBtn: {
    margin: theme.spacing(1),
    marginLeft: theme.spacing(1.5),
    marginRight: 0,
    fontFamily: "'Readex Pro', 'Roboto', 'Helvetica', 'Arial', sans-serif",
    paddingLeft: theme.spacing(.5),
    paddingRight: theme.spacing(1.5),
  },

  drawerToggleIcon: {
    color: theme.palette.text.primary,
  },

  appbarBtn: {
    margin: theme.spacing(1),
    marginRight: 0,
    fontFamily: "'Readex Pro', 'Roboto', 'Helvetica', 'Arial', sans-serif",
    // fontSize: '1rem',
    paddingLeft: theme.spacing(1.5),
    paddingRight: theme.spacing(1.5),
  },

  hideWhenWidLessThan1260: {
    "@media (max-width: 1259px)": {
      display: "none",
    },
  },
  showWhenWidLessThan1260: {
    "@media (min-width: 1260px)": {
      display: "none",
    },
  },
  
  hideWhenWidLessThan900: {
    "@media (max-width: 899px)": {
      display: "none",
    },
  },
  showWhenWidLessThan900: {
    "@media (min-width: 900px)": {
      display: "none",
    },
  },

  hideWhenWidLessThan600: {
    "@media (max-width: 599px)": {
      display: "none",
    },
  },
  showWhenWidLessThan600: {
    "@media (min-width: 600px)": {
      display: "none",
    },
  },


  menuButton: {
    marginLeft: theme.spacing(2),
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

  appBarTitleMobile: {
    fontFamily: "'Readex Pro', 'Roboto', 'Helvetica', 'Arial', sans-serif",
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
    // borderRadius: theme.shape.borderRadius,
    borderRadius: 8,
    height: 48,
    marginRight: theme.spacing(2),
    marginLeft: 0,
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      marginLeft: theme.spacing(3),
      width: 'auto',
    },
    flexGrow: .3,
  },

  search_light: {
    backgroundColor: "#f1f3f4",
    '&:hover': {
      backgroundColor: '#ebeff1',
    },
  },

  search_dark: {
    backgroundColor: fade(theme.palette.common.white, 0.15),
    '&:hover': {
      backgroundColor: fade(theme.palette.common.white, 0.25),
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
    color: theme.palette.primary.main,
  },

  inputRoot: {
    color: theme.palette.primary.main,
  },

  inputInput: {
    padding: theme.spacing(1.9, 1, 1, 0),
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
  },

  appbarAvatarContainer: {
    display: 'flex',
    flexShrink: 0,
    alignItems: 'center',
    justifyContent: 'center',
    width: theme.spacing(5),
    height: theme.spacing(5),
    background: "linear-gradient(135deg, #7c5ecc, #8befd9)",
    borderRadius: "50%",
    marginLeft: theme.spacing(1),
    cursor: 'pointer',
  },
  appbarAvatar: {
    width: theme.spacing(4.5),
    height: theme.spacing(4.5),
    border: `${theme.spacing(.25)}px solid ${theme.palette.background.paper}`,
  }

}));

export default useStyles;