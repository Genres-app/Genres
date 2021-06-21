import React, {useState,useEffect} from 'react'
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import InboxIcon from '@material-ui/icons/Inbox';
import DraftsIcon from '@material-ui/icons/Drafts';
import Paper from '@material-ui/core/Paper';

//List
const ListStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
    maxWidth: 360,
    backgroundColor: theme.palette.background.paper,
  },
}));

//Tab for genre
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

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.any.isRequired,
  value: PropTypes.any.isRequired,
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
}

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    backgroundColor: theme.palette.background.paper,
  },
}));


//tab for time
function TabPanel2(props) {
  const { children, value2, index2, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value2 !== index2}
      id={`simple-tabpanel-${index2}`}
      aria-labelledby={`simple-tab-${index2}`}
      {...other}
    >
      {value2 === index2 && (
        <Box p={3}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel2.propTypes = {
  children: PropTypes.node,
  index2: PropTypes.any.isRequired,
  value2: PropTypes.any.isRequired,
};

function a11yProps2(index2) {
  return {
    id: `simple-tab-${index2}`,
    'aria-controls': `simple-tabpanel-${index2}`,
  };
}

const useStyles2 = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    backgroundColor: theme.palette.background.paper,
  },
}));





export default function RankingPage() {
  //tab1
  const classes = useStyles();
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };


  //tab2
  const classes2 = useStyles2();
  const [value2, setValue2] = React.useState(0);

  const handleChange2 = (event, newValue2) => {
    setValue2(newValue2);
  };

  //list
  const listclasses = ListStyles();
  return (
    
    <>
    
    <div className={classes.root}  style={{marginTop:'64px'}}>
      <AppBar position="static">
        <Tabs style={{marginLeft:'1000px'}} value={value} onChange={handleChange} aria-label="simple tabs example">
          <Tab label="Item One" {...a11yProps(0)} />
          <Tab label="Item Two" {...a11yProps(1)} />
          <Tab label="Item Three" {...a11yProps(2)} />
        </Tabs>
      </AppBar>
    </div>
    
    
    <div className={listclasses.root} style={{marginTop:"200px", marginLeft:"250px"}} > 
      <List component="nav" aria-label="main mailbox folders">
        <ListItem button>
          <ListItemIcon>
            <InboxIcon />
          </ListItemIcon>
          <ListItemText primary="Inbox" />
        </ListItem>
        <ListItem button>
          <ListItemIcon>
            <DraftsIcon />
          </ListItemIcon>
          <ListItemText primary="Drafts" />
        </ListItem>
      </List>
      
    </div>

    <div className={classes2.root} style={{position:'absolute', bottom:"20px"}} >
    <AppBar position="static" style={{marginRight: "-1000px", marginLeft: "1000px"}} >
        <Tabs value={value2} onChange={handleChange2} aria-label="simple tabs example">
          <Tab label="Item One" {...a11yProps(0)} />
          <Tab label="Item Two" {...a11yProps(1)} />
          <Tab label="Item Three" {...a11yProps(2)} />
        </Tabs>
      </AppBar>
    </div>
  
    </>
    
  )
}