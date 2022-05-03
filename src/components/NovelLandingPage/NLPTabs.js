import React from 'react';
import Paper from '@material-ui/core/Paper';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';

// This elements switches between these BELOW:
import NLPTableContents from './NLPTableContents';
import NLPCommentsSmooth from './NLPCommentsSmooth.jsx'
import NLPProfiles from './NLPProfiles'
import NLPWorldMap from './NLPWorldMap'

// Here is the main bottom element of the Novel Landing Page.
// The Tabs switches between the different NLP imports as
// shown above.
function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`full-width-tabpanel-${index}`}
      aria-labelledby={`full-width-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box p={3}>
          <Typography component="span">{children}</Typography>
        </Box>
      )}
    </div>
  );
}

// CSS: Style the classNames here
const useStyles = makeStyles({
  root: {
    flexGrow: 1,
    paddingTop: '20px',
    justifyContent: 'center',
  },
  scroller: {
    flexGrow: '0',
  },
  tabToC: {
    color: '#181818',
    marginLeft: '20px',
  },
  tabCP: {
    color: '#181818',
    
    marginLeft: '25px',
  },
  tabWM: {
    color: '#181818',
    marginLeft: '5px',
  },
  tabC: {
    color: '#181818',
    paddingRight: '0px',
    paddingLeft: '0px',
  },
  // Media queries for resizing depending on resolution BELOW:
  tabContent: {
    '@media (min-width:1024px)': { // resize text size when >1024 px
      maxWidth: 1000,
    },
    '@media (max-width:1024px)': { // resize text size when <1024 px
      maxWidth: 920,
    },
    '@media (max-width:768px)': { // resize text size when <767 px
      maxWidth: 750,
    },
    '@media (max-width:375px)': { // resize text size when <767 px
      maxWidth: 380,
    },
    '@media (max-width:360px)': { // resize text size when <767 px
      maxWidth: 360,
    },
    margin: '0 auto', // How to center anything with CSS
  },
  indicator: {
    backgroundColor: '#58FDD0',
  }
});

export default function NLPTabs() {
  function a11yProps(index) {
    return {
      id: `scrollable-force-tab-${index}`,
      'aria-controls': `scrollable-force-tabpanel-${index}`,
    };
  }

  const classes = useStyles();
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  TabPanel.propTypes = {
    children: PropTypes.node,
    index: PropTypes.any.isRequired,
    value: PropTypes.any.isRequired,
  };
  
  return (
    <Paper className={classes.root}>
      <Tabs
        value={value}
        onChange={handleChange}
        classes={{
          indicator: classes.indicator, root: classes.root, scroller: classes.scroller
        }}
        variant={"scrollable"}
        scrollButtons={"on"}
      >
        {/* If you want to add more tabs, do it here */}
        <Tab className={classes.tabToC} label="Table of Contents" {...a11yProps(0)} />
        <Tab className={classes.tabCP} label="Character Profiles" {...a11yProps(1)} />
        <Tab className={classes.tabWM} label="World Map" {...a11yProps(2)} />
        <Tab className={classes.tabC} label="Comments" {...a11yProps(3)} />
      </Tabs>
      {/* MATCH the number of tabs according to the ABOVE and with the correct INDEX */}
      <TabPanel className={classes.tabContent} value={value} index={0}>
          <NLPTableContents />
      </TabPanel>
      <TabPanel className={classes.tabContent} value={value} index={1}>
        <NLPProfiles />
      </TabPanel>
      <TabPanel className={classes.tabContent} value={value} index={2}>
        <NLPWorldMap />
      </TabPanel>
      <TabPanel className={classes.tabContent} value={value} index={3}>
        <NLPCommentsSmooth />
      </TabPanel>
    </Paper>
  );
}
