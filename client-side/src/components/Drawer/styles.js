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
    backgroundColor: theme.palette.background.paper,
  },

  avatarOfDrawer: {
    width: theme.spacing(12),
    height: theme.spacing(12),
    margin: 'auto',
    marginTop: theme.spacing(4),
    marginBottom: theme.spacing(1),
    fontSize: '3rem',
    fontFamily: theme.typography.fontFamilyTitle,
  },

  userName: {
    margin: '0 auto',
    marginBottom: theme.spacing(1),
    fontFamily: theme.typography.fontFamilyTitle,
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
    backgroundColor: theme.palette.background.paper,
    marginLeft: "1rem",
    borderRadius: ".5rem",

    "& > div": {
      width: "calc(66% - 4px)",
      height: "calc(1rem - 4px)",
      marginLeft: 2,
      backgroundColor: theme.palette.secondary.main + "c0",
      borderRadius: "calc((1rem - 4px) / 2)",
    }
  },

  profileBtnsOfDrawer: {
    display: 'flex',
    flexDirection: 'row',
    width: '100%',
    marginBottom: ".5rem",
    marginTop: "1rem",
  },

  profileBtnOfDrawer: {
    flexGrow: 0,
    margin: '0',
    marginLeft: ".5rem",
    marginBottom: theme.spacing(1),
    fontFamily: theme.typography.fontFamilyTitle,
    "&:last-child": {
      marginRight: ".5rem",
    }
  },

  logoutBtnOfDrawer: {
    flexGrow: 0,
    position: 'absolute',
    bottom: theme.spacing(2),
    left: '50%',
    transform: 'translateX(-50%)',
    color: theme.palette.warning.main,
    fontFamily: theme.typography.fontFamilyTitle,

    "&:hover": {
      backgroundColor: theme.palette.warning.main + "0a",
    }
  },

  listItemIcon: {
    color: theme.palette.primary.main,
  },

  listItemText: {
    color: theme.palette.primary.main,
    "& > span": {
      fontFamily: theme.typography.fontFamilyTitle,
    }
  },
}))

export default useStyles;
