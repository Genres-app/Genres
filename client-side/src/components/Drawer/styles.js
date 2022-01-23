import { fade, makeStyles } from '@material-ui/core/styles';


const useStyles = makeStyles((theme) => ({

  widerBtn: {
    paddingLeft: theme.spacing(2),
    paddingRight: theme.spacing(2),
  },

  drawer: {
    width: 250,
  },

  drawerPaper: {
    width: 250,
  },

  avatarOfDrawer: {
    width: theme.spacing(12),
    height: theme.spacing(12),
    margin: 'auto',
    marginTop: theme.spacing(4),
    marginBottom: theme.spacing(1),
    fontSize: '3rem',
  },

  userName: {
    margin: '0 auto',
    marginBottom: theme.spacing(1),
  },
  userEmail: {
    marginLeft: theme.spacing(2),
  },

  LevelContainer: {
    display: "flex",
    alignItems: "center",
    marginLeft: "3rem",
    marginRight: "3rem",
    marginBottom: ".5rem",
  },

  lvl: {
    fontWeight: 'bold',
  },

  expBar: {
    display: "flex",
    alignItems: "center",
    height: "1rem",
    width: "100%",
    backgroundColor: "#88888855",
    marginLeft: "1rem",
    borderRadius: ".5rem",

    "& > div": {
      width: "calc(66% - 4px)",
      height: "calc(1rem - 4px)",
      marginLeft: 2,
      backgroundColor: theme.palette.primary.main,
      borderRadius: "calc((1rem - 4px) / 2)",
    }
  },

  profileBtnsOfDrawer: {
    display: 'flex',
    flexDirection: 'row',
    width: '100%',
  },

  profileBtnOfDrawer: {
    flexGrow: 0,
    margin: '0 .5rem',
    marginBottom: theme.spacing(1),
    // width: 'initial',
  },

  logoutBtnOfDrawer: {
    flexGrow: 0,
    position: 'absolute',
    bottom: theme.spacing(2),
    left: '50%',
    transform: 'translateX(-50%)',
    color: 'rgb(255, 23, 68)',

    "&:hover": {
      backgroundColor: 'rgb(255, 23, 68, 0.04)',
    }
  },

  listItemIcon_light: {
    color: '#855cde',
  },

  listItemIcon_dark: {
    color: '#9e84f5',
  },
}))

export default useStyles;
