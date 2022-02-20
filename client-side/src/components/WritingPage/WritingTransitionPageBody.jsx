import React,  { useState }from 'react';
import { makeStyles, withStyles } from '@material-ui/core/styles';
import {
  AppBar,
  Avatar,
  Tab,
  Tabs,
  Card,
  CardMedia,
  CardActionArea,
  CardContent,
  CardActions,
  IconButton,
  Menu,
  MenuItem,
  ListItemIcon,
  ListItemText,
  Container,
  Button,
} from '@material-ui/core';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import clsx from 'clsx';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';

// Icons
import MoreVertIcon from '@material-ui/icons/MoreVert';
import HistoryIcon from '@material-ui/icons/History';
import PublishIcon from '@material-ui/icons/Publish';
import DeleteForeverIcon from '@material-ui/icons/DeleteForever';
import AddIcon from '@material-ui/icons/Add';
import Icon from '@mdi/react';
import { mdiAccountCircleOutline, mdiLogoutVariant, mdiLoginVariant } from '@mdi/js';

// Data
import { BookLib } from '../BookLib';
import { writingDraftList } from './WritingTransitionData';
import { Typography } from '@material-ui/core';


//Chart
import BarChartYear from './ChartYear';
import BarChartWeek from './ChartWeek';
import BarChartMonth from './ChartMonth';
// Page
import { NavLink } from 'react-router-dom';

import Box from '@material-ui/core/Box';

//copyright
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import { useTheme } from '@material-ui/core/styles';


function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
}

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box p={3}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

function TabPanel2(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel2-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box p={3}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

const StyledMenu = withStyles({
  paper: {
    border: '1px solid #d3d4d5',
  },
})((props) => (
  <Menu
    elevation={0}
    getContentAnchorEl={null}
    anchorOrigin={{
      vertical: 'bottom',
      horizontal: 'center',
    }}
    transformOrigin={{
      vertical: 'top',
      horizontal: 'center',
    }}
    {...props}
  />
));

const StyledMenuItem = withStyles((theme) => ({
  root: {
    '&:focus': {
      backgroundColor: theme.palette.primary.main,
      '& .MuiListItemIcon-root, & .MuiListItemText-primary': {
        color: theme.palette.common.white,
      },
    },
  },
}))(MenuItem);


const useStyles = makeStyles((theme) => ({
  root: {
    width: 1266, // 6 in a row
    "@media (max-width: 1688px)": { // 5 in a row
      width: 1063,
    },
    "@media (max-width: 1417px)": { // 4 in a row
      width: 860,
    },
    "@media (max-width: 1147px)": { // 3 in a row
      width: 657,
    }
  },
  tabPanel: {
    paddingTop: theme.spacing(10),
    "& > div": {
      padding: 0,
    }
  },
  tabPanel2: {
    
    width: "100%",
    "& > div": {
      padding: 0,
    },
  },
  bookList: {
    display: "flex",
    flexWrap: "wrap",
    width: "100%",
    margin: "auto",
  },
  addNewCard: {
    display: "flex",
    flexDirection: "column",
    height: "100%",
    alignItems: "center",
  },
  customPlusIcon: {
    position: 'relative',
    width: 56,
    height: 56,
    marginTop: theme.spacing(2),
    marginBottom: theme.spacing(2),
    backgroundImage: "linear-gradient(150deg, rgb(166 143 253), rgb(166 143 253) 20%, rgb(99, 255, 230) 80%, rgb(99, 255, 230))",
    "& > div": {
      position: "absolute",
      width: "42.86%",
      height: "42.86%",
      backgroundColor: theme.palette.background.paper,
    }
  },
  cardRoot: {
    margin: theme.spacing(1),
    width: 187,
    borderRadius: 0,
  },
  cardMedia: {
    height: 300,
    width: 187, //187.44
  },
  cardContent: {
    padding: theme.spacing(1),
    paddingTop: theme.spacing(1.5),
    paddingBottom: theme.spacing(.5),
  },
  cardActions: {
    paddingTop: theme.spacing(.5),

    "& > svg": {
      opacity: .75,
    }
  },
  lastChange: {
    paddingTop: theme.spacing(.25),
  },
  media: {
  },
  publishStateTabs: {
    position: 'absolute',
    margin: '160px 0 0 0',
    flexGrow: 1,
    width: '100%',
    backgroundColor: theme.palette.background.paper,
    zIndex: 999,
    paddingTop: '3.5vh',
  },
  avatarOfDrawer: {
    position: 'relative',
    width: theme.spacing(12),
    height: theme.spacing(12),
    margin: '0 0 0 400px',
    marginTop: '0vh',
    marginBottom: theme.spacing(1),
    fontSize: '3rem',
    border: '3.5px solid white',
    zIndex: 1000,
    transform: 'translateY(50%)',
  },
  userName: {
    position: 'relative',
    margin: '0 0 0 525px',
    marginTop: '0vh',
    marginBottom: theme.spacing(1),
    zIndex: 1000,
  },
  widerBtn: {
    paddingLeft: theme.spacing(2),
    paddingRight: theme.spacing(2),
  },
  profileBtnOfWriting: {
    flexGrow: 0,
    margin: '0 auto',
    marginBottom: theme.spacing(1),
    left: '50%',
    transform: 'translate(-50%)',
  },
}));

export default function Body() {
  const classes = useStyles();

  const SingleBook = ({ bookId }) => {
    const [anchorEl, setAnchorEl] = React.useState(null);
    const handleClick = (event) => {
      setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
      setAnchorEl(null);
      //handleClickOpen();
    };

    const [open, setOpen] = React.useState(false);
    const theme = useTheme();
    const fullScreen = useMediaQuery(theme.breakpoints.down('sm'));
  
    const handleClickOpen = () => {
      setOpen(true);
      handleClose();
    };
  
    const handleClickClose = () => {
      setOpen(false);
      handleClose();
    };

    //console.log(bookId)

    return (
      <Card variant="outlined" className={classes.cardRoot}>

        <CardActionArea onClick={() => routeChange(`/book/${bookId}`)}>
          <NavLink to="/NovelEditing">
            <CardMedia
              className={classes.cardMedia}
              image={BookLib[bookId].cover}
            />
          </NavLink>
        </CardActionArea>


        <CardContent className={classes.cardContent}>
          <Typography variant="subtitle2" noWrap>
            {BookLib[bookId].title}
          </Typography>
        </CardContent>
        <CardActions className={classes.cardActions}>
          <HistoryIcon fontSize="small" />
          <Typography variant="caption" noWrap className={classes.lastChange}>
            Sep.19 2021
          </Typography>
          <div style={{ flexGrow: 1 }}></div>
          <IconButton
            aria-label="more"
            onClick={handleClick}
            size="small"
          >
          <MoreVertIcon />
          </IconButton>


          <StyledMenu
            id="customized-menu"
            anchorEl={anchorEl}
            keepMounted
            open={Boolean(anchorEl)}
            onClose={handleClose}
          >
            <StyledMenuItem onClick={() => handleClickOpen()} >
              <ListItemIcon>
                <PublishIcon fontSize="small" />
              </ListItemIcon>
              <ListItemText primary="Publish" />
            </StyledMenuItem>

            <Dialog
              fullScreen={fullScreen}
              open={open}
              onClose={handleClose}
              aria-labelledby="responsive-dialog-title"
            >
              <DialogTitle >{"Do you really want to publish the book?"}</DialogTitle>
              <DialogContent>
                <DialogContentText>
                  Please read and agree with the copyright agreement before publishing the book
                </DialogContentText>
              </DialogContent>
              <DialogActions>
                <Button autoFocus onClick={handleClickClose} color="primary">
                  Disagree
                </Button>
                <Button onClick={handleClickClose} color="primary" autoFocus>
                  Agree
                </Button>
              </DialogActions>
            </Dialog>


            <StyledMenuItem onClick={() => handleClose()}>
              <ListItemIcon>
                <DeleteForeverIcon fontSize="small" />
              </ListItemIcon>
              <ListItemText primary="Delete" />
            </StyledMenuItem>
          </StyledMenu>
        </CardActions>
      </Card>
    );
  }





  const [TopBarvalue, setTopBarValue] = React.useState(0);
  const [TimeSelectionVal, setTopBarValue2] = React.useState(0);

  const handleTopBar = (event, newValue) => {
    setTopBarValue(newValue);
  };

  const handleTopBar2 = (event, newValue2) => {
    setTopBarValue2(newValue2);
  };

  const [user, setUser] = useState(JSON.parse(localStorage.getItem('profile')));
  const dispatch = useDispatch();
  const history = useHistory();
  const routeChange = (path) => {
      history.push(path);
  }
  return (
    <>
      <div style={{  backgroundColor: "#855cde", margin: '0 0 0 0', paddding: 0, paddingTop: '0vh'}}>
      <Avatar alt={user.result.username} className={classes.avatarOfDrawer} src={user.result.imageUrl}>{user.result.username.charAt(0)}</Avatar>
            <Typography className={classes.userName} variant="h6">{user.result.username}</Typography>
            </div>


      <AppBar className={classes.publishStateTabs}>
        <Tabs
          value={TopBarvalue}
          centered
          indicatorColor="primary"
          textColor="primary"
          onChange={handleTopBar}
        >
          <Tab label="Unpublished"  {...a11yProps(0)} />
          <Tab label="Published"  {...a11yProps(1)} />
          <Tab label="Statistics"  {...a11yProps(2)} />
        </Tabs>
      </AppBar>

      <Container className={classes.root}>
        <TabPanel value={TopBarvalue} index={0} className={classes.tabPanel}>

          <div className={classes.bookList} >

            <Card variant="outlined" className={classes.cardRoot} >
              <CardActionArea className={classes.addNewCard}>
                <div className={classes.customPlusIcon}>
                  <div style={{ left: 0 }}></div>
                  <div style={{ right: 0 }}></div>
                  <div style={{ bottom: 0 }}></div>
                  <div style={{ bottom: 0, right: 0 }}></div>
                </div>
                <Typography variant="button">Start New Book</Typography>
              </CardActionArea>
            </Card>
            {
              writingDraftList.map((item, index) => (
                <SingleBook bookId={item} />
              ))
            }
          </div>
        </TabPanel>
        <TabPanel value={TopBarvalue} index={1} className={classes.tabPanel}>
          <div className={classes.bookList}>
            {
              writingDraftList.map((item, index) => (
                <SingleBook bookId={item} />
              ))
            }
          </div>
        </TabPanel>


        {/* Display Readinglist + Master class carousels if on Statistics tab */}

      <TabPanel value={TopBarvalue} index={2} className={classes.tabPanel} >
        <div style = {{ position:"absolute", marginLeft:"52vw", marginTop:"20vh", marginBottom:"0",marginRight:"0",padding:"0"}}>
      <Tabs
          value={TimeSelectionVal}
          orientation="vertical"
          indicatorColor="primary"
          textColor="primary"
          onChange={handleTopBar2}
          
        >
          <Tab label="1w"  {...a11yProps(0)} />
          <Tab label="1m"  {...a11yProps(1)} />
          <Tab label="12m"  {...a11yProps(2)} />
        </Tabs>
        </div>
        <div >
        <TabPanel2 value={TimeSelectionVal} index={0} className={classes.tabPanel2}>
        <div>
          <BarChartWeek/>
        </div>
      </TabPanel2>
      <TabPanel2 value={TimeSelectionVal} index={1} className={classes.tabPanel2}>
      <div >
        <BarChartMonth/>
      </div>
      </TabPanel2>
      <TabPanel2 value={TimeSelectionVal} index={2} className={classes.tabPanel2}>
      <div >
        <BarChartYear/>
      </div>
      </TabPanel2>
      </div>
        </TabPanel>

      </Container>
    </>
  );
}