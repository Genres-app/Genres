import React, { useState, useEffect } from 'react'
import PropTypes from 'prop-types';
import { makeStyles, createMuiTheme, ThemeProvider } from '@material-ui/core/styles';
import deepPurple from '@material-ui/core/colors/deepPurple';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import { ListAllTime } from './components/Ranking/allTime';
import { ListGenres } from './components/Ranking/genre';
import { ListAnnual } from './components/Ranking/annual';
import { ListBiAnnual } from './components/Ranking/biAnnual';
import { ListSeason } from './components/Ranking/season';
import { ListMonthly } from './components/Ranking/monthly';
<link href="./components/Ranking/switchT.css" type="text/css" rel="stylesheet" />

//List
const ListStyles = makeStyles((theme) => ({
    root: {
        width: '100%',
        maxWidth: 280,
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
        width: '100%',
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

//list for ranking(all time)
const useStyles3 = makeStyles((theme) => ({
    root: {
        width: '100%',
        maxWidth: '36ch',
        backgroundColor: theme.palette.background.paper,
    },
    inline: {
        display: 'inline',
    },
    allTime: {
        height: 240,
        width: 160,
        borderRadius: 0,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
    },
    display: "block",
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

    //list for ranking
    const classes3 = useStyles3();

    // Theme
    const theme = createMuiTheme({
        palette: {
            primary: {
                main: '#ffffff',
            },
            secondary: deepPurple,
            alert: '#ff1744',
        },
    });

    /*function concise(){
      return(
        <ListItem alignItems="flex-start" key={index}>
          <ListItemAvatar >
              <div className={classes3.allTime} style={{ backgroundImage: `url(${item.image})` }} />
          </ListItemAvatar>
          <ListItemText style={{ marginLeft: "1vw" }}
              className={classes3.listItemText} primary={item.title}
              secondary={
                  <React.Fragment>
                      <Typography
                          component="span"
                          variant="body2"
                          className={classes3.inline}
                          color="textSecondary"
                      >
                          {item.secondarytext}
                      </Typography>
                  </React.Fragment>
              }
          />
      </ListItem>
    )
    }*/
    
    return (

        <ThemeProvider theme={theme}>

            <div className={classes.root} style={{ position: 'fixed', zIndex: 999 }} >
                <AppBar position="relative">
                    <Tabs
                        value={value}
                        onChange={handleChange}
                        aria-label="simple tabs example"
                        centered
                        indicatorColor="secondary"
                        textColor="secondary"
                    >
                        <Tab label="Novels" {...a11yProps(0)} />
                        <Tab label="Fan-fic" {...a11yProps(1)} />
                        <Tab label="Comics" {...a11yProps(2)} />
                    </Tabs>
                </AppBar>
            </div>


            <div className={listclasses.root} style={{ position: 'fixed', marginTop: "10vw",marginLeft: "10vw" }} >
                <List component="nav">
                    {ListGenres.map((item, index) => (
                        <ListItem button key={index}>
                            <ListItemIcon className={listclasses.listItemIcon}>{item.icon}</ListItemIcon>
                            <ListItemText className={listclasses.listItemText} primary={item.title} />
                        </ListItem>
                    ))}
                </List>
            </div>

            <div className="C1">
                <List style={{ marginRight: "-50vw", marginLeft: "50vw", marginTop: "3vw", transform: "translateX(-50%)" }} className={classes3.root}>
                    {ListAllTime.map((item, index) => (
                <ListItem alignItems="flex-start" key={index}>
                <ListItemAvatar >
                  <div className={classes3.allTime} style={{ backgroundImage: `url(${item.image})` }} />
                </ListItemAvatar>
                <ListItemText style={{ marginLeft: "1vw" }}
                  className={classes3.listItemText} primary={item.title}
                  secondary={
                      <React.Fragment>
                          <Typography
                              component="span"
                              variant="body2"
                              className={classes3.inline}
                              color="textSecondary"
                          >
                              {item.secondarytext}
                          </Typography>
                      </React.Fragment>
                  }
                />
                </ListItem>
                    ))}
                </List>
            </div>

            <div style={{ display: 'none' }} className="C2">
                <List style={{ marginRight: "-50vw", marginLeft: "50vw", marginTop: "3vw", transform: "translateX(-50%)" }} className={classes3.root}>
                    {ListAnnual.map((item, index) => (
                        <ListItem alignItems="flex-start" key={index}>
                            <ListItemAvatar >
                                <div className={classes3.allTime} style={{ backgroundImage: `url(${item.image})` }} />
                            </ListItemAvatar>
                            <ListItemText style={{ marginLeft: "1vw" }}
                                className={classes3.listItemText} primary={item.title}
                                secondary={
                                    <React.Fragment>
                                        <Typography
                                            component="span"
                                            variant="body2"
                                            className={classes3.inline}
                                            color="textSecondary"
                                        >
                                            {item.secondarytext}
                                        </Typography>
                                    </React.Fragment>
                                }
                            />
                        </ListItem>
                    ))}
                </List>
            </div>

            <div style={{ display: 'none' }} className="C3">
                <List style={{ marginRight: "-50vw", marginLeft: "50vw", marginTop: "3vw", transform: "translateX(-50%)" }} className={classes3.root}>
                    {ListBiAnnual.map((item, index) => (
                        <ListItem alignItems="flex-start" key={index}>
                            <ListItemAvatar >
                                <div className={classes3.allTime} style={{ backgroundImage: `url(${item.image})` }} />
                            </ListItemAvatar>
                            <ListItemText style={{ marginLeft: "1vw" }}
                                className={classes3.listItemText} primary={item.title}
                                secondary={
                                    <React.Fragment>
                                        <Typography
                                            component="span"
                                            variant="body2"
                                            className={classes3.inline}
                                            color="textSecondary"
                                        >
                                            {item.secondarytext}
                                        </Typography>
                                    </React.Fragment>
                                }
                            />
                        </ListItem>
                    ))}
                </List>
            </div>

            <div style={{ display: 'none' }} className="C4">
                <List style={{ marginRight: "-50vw", marginLeft: "50vw", marginTop: "3vw", transform: "translateX(-50%)" }} className={classes3.root}>
                    {ListSeason.map((item, index) => (
                        <ListItem alignItems="flex-start" key={index}>
                            <ListItemAvatar >
                                <div className={classes3.allTime} style={{ backgroundImage: `url(${item.image})` }} />
                            </ListItemAvatar>
                            <ListItemText style={{ marginLeft: "1vw" }}
                                className={classes3.listItemText} primary={item.title}
                                secondary={
                                    <React.Fragment>
                                        <Typography
                                            component="span"
                                            variant="body2"
                                            className={classes3.inline}
                                            color="textSecondary"
                                        >
                                            {item.secondarytext}
                                        </Typography>
                                    </React.Fragment>
                                }
                            />
                        </ListItem>
                    ))}
                </List>
            </div>

            <div style={{ display: 'none' }} className="C5">
                <List style={{ marginRight: "-50vw", marginLeft: "50vw", marginTop: "3vw", transform: "translateX(-50%)" }} className={classes3.root}>
                    {ListMonthly.map((item, index) => (
                        <ListItem alignItems="flex-start" key={index}>
                            <ListItemAvatar >
                                <div className={classes3.allTime} style={{ backgroundImage: `url(${item.image})` }} />
                            </ListItemAvatar>
                            <ListItemText style={{ marginLeft: "1vw" }}
                                className={classes3.listItemText} primary={item.title}
                                secondary={
                                    <React.Fragment>
                                        <Typography
                                            component="span"
                                            variant="body2"
                                            className={classes3.inline}
                                            color="textSecondary"
                                        >
                                            {item.secondarytext}
                                        </Typography>
                                    </React.Fragment>
                                }
                            />
                        </ListItem>
                    ))}
                </List>
            </div>



            <div className={classes2.root} style={{ position: 'fixed', bottom: "20px" }} >
                <AppBar position="static" style={{ marginRight: "-50vw", marginLeft: "50vw", transform: "translateX(-50%)" }} >
                    <Tabs
                        value={value2}
                        onChange={handleChange2}
                        aria-label="simple tabs example"
                        indicatorColor="secondary"
                        textColor="secondary"
                    >
                        <Tab onClick={() => switchTime(1)} label="All-time" {...a11yProps(0)} />
                        <Tab onClick={() => switchTime(2)} label="Annual" {...a11yProps(1)} />
                        <Tab onClick={() => switchTime(3)} label="Bi-annual" {...a11yProps(2)} />
                        <Tab onClick={() => switchTime(4)} label="Season" {...a11yProps(3)} />
                        <Tab onClick={() => switchTime(5)} label="Monthly" {...a11yProps(4)} />
                    </Tabs>
                </AppBar>
            </div>

        </ThemeProvider>

    )
}


//var list3 = document.getElementsByClassName("hstext3");
function switchTime(t) {
    if (t == 1) {
      document.getElementsByClassName('C2')[0].style.display = 'none';
      document.getElementsByClassName('C3')[0].style.display = 'none';
      document.getElementsByClassName('C4')[0].style.display = 'none';
      document.getElementsByClassName('C5')[0].style.display = 'none';
      document.getElementsByClassName('C1')[0].style.display = 'block';
    }
    else if (t == 2) {
      document.getElementsByClassName('C2')[0].style.display = 'none';
      document.getElementsByClassName('C3')[0].style.display = 'none';
      document.getElementsByClassName('C4')[0].style.display = 'none';
      document.getElementsByClassName('C1')[0].style.display = 'none';
      document.getElementsByClassName('C2')[0].style.display = 'block';
    }
    else if (t == 3) {
      document.getElementsByClassName('C1')[0].style.display = 'none';
      document.getElementsByClassName('C2')[0].style.display = 'none';
      document.getElementsByClassName('C4')[0].style.display = 'none';
      document.getElementsByClassName('C5')[0].style.display = 'none';
      document.getElementsByClassName('C3')[0].style.display = 'block';
    }
    else if (t == 4) {
      document.getElementsByClassName('C1')[0].style.display = 'none';
      document.getElementsByClassName('C2')[0].style.display = 'none';
      document.getElementsByClassName('C3')[0].style.display = 'none';
      document.getElementsByClassName('C5')[0].style.display = 'none';
      document.getElementsByClassName('C4')[0].style.display = 'block';
    }
    else if (t == 5) {
      document.getElementsByClassName('C2')[0].style.display = 'none';
      document.getElementsByClassName('C3')[0].style.display = 'none';
      document.getElementsByClassName('C4')[0].style.display = 'none';
      document.getElementsByClassName('C1')[0].style.display = 'none';
      document.getElementsByClassName('C5')[0].style.display = 'block';
    }

    else {
        console.log("Undefined!");
    }
}