import React, { useState, useEffect } from 'react'
import PropTypes from 'prop-types';
import { makeStyles, createMuiTheme, ThemeProvider } from '@material-ui/core/styles';
import deepPurple from '@material-ui/core/colors/deepPurple';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import {
    Container,
    Card,
    CardContent
} from '@material-ui/core';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import { ListGenres } from './components/Ranking/genre';
import { ListAllTime } from './components/Ranking/allTime';
import { ListAnnual } from './components/Ranking/annual';
import { ListBiAnnual } from './components/Ranking/biAnnual';
import { ListSeason } from './components/Ranking/season';
import { ListMonthly } from './components/Ranking/monthly';
import InboxIcon from '@material-ui/icons/Inbox';
import DraftsIcon from '@material-ui/icons/Drafts';
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

//list for ranking(all time)
const useStyles3 = makeStyles((theme) => ({
    root: {
        width: '75vw',
        padding: '0',
        backgroundColor: 'transparent',
    },
    listItem: {
        float: 'left',
        width: 'calc(37vw - 32px)',
        margin: '16px',
        maxWidth: 608,
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

            <div className={listclasses.root} style={{ position: 'fixed', marginLeft: '88vw', marginTop: '30vh' }}>
                <List component="nav">
                    <ListItem button onClick={() => switchTime(1)} >
                        <ListItemIcon>
                            <InboxIcon />
                        </ListItemIcon>
                        <ListItemText primary="All-time" />
                    </ListItem>
                    <ListItem button onClick={() => switchTime(2)} >
                        <ListItemIcon>
                            <DraftsIcon />
                        </ListItemIcon>
                        <ListItemText primary="Annual" />
                    </ListItem>
                    <ListItem button onClick={() => switchTime(3)} >
                        <ListItemIcon>
                            <InboxIcon />
                        </ListItemIcon>
                        <ListItemText primary="Bi-annual" />
                    </ListItem>
                    <ListItem button onClick={() => switchTime(4)} >
                        <ListItemIcon>
                            <DraftsIcon />
                        </ListItemIcon>
                        <ListItemText primary="Season" />
                    </ListItem>
                    <ListItem button onClick={() => switchTime(5)} >
                        <ListItemIcon>
                            <InboxIcon />
                        </ListItemIcon>
                        <ListItemText primary="Monthly" />
                    </ListItem>
                </List>
            </div>


            <div className={listclasses.root} style={{ position: 'fixed', marginTop: "30vh"}} >
                <List component="nav">
                    {ListGenres.map((item, index) => (
                        <ListItem button key={index}>
                            <ListItemIcon className={listclasses.listItemIcon}>{item.icon}</ListItemIcon>
                            <ListItemText className={listclasses.listItemText} primary={item.title} />
                        </ListItem>
                    ))}
                </List>
            </div>

            <div style={{ display: 'none' }} className="C1">
                <Container style={{ marginLeft: "50vw", marginTop: "3vw", transform: "translateX(-50%)"}} className={classes3.root}>
                    {ListAllTime.map((item, index) => (
                        <Card className={classes3.listItem} alignItems="flex-start" key={index}>

                            <div className={classes3.allTime} style={{ backgroundImage: `url(${item.image})` }} />
                            <CardContent>
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
                            </CardContent>
                        </Card>
                    ))}
                    <ListItem style={{ clear: 'both' }}>

                    </ListItem>
                </Container>
            </div>

            <div style={{ display: 'none' }} className="C2">
                <Container style={{ marginLeft: "50vw", marginTop: "3vw", transform: "translateX(-50%)"}} className={classes3.root}>
                    {ListAnnual.map((item, index) => (
                        <Card className={classes3.listItem} alignItems="flex-start" key={index}>

                            <div className={classes3.allTime} style={{ backgroundImage: `url(${item.image})` }} />
                            <CardContent>
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
                            </CardContent>
                        </Card>
                    ))}
                    <ListItem style={{ clear: 'both' }}>

                    </ListItem>
                </Container>
            </div>

            <div style={{ display: 'none' }} className="C3">
                <Container style={{ marginLeft: "50vw", marginTop: "3vw", transform: "translateX(-50%)"}} className={classes3.root}>
                    {ListBiAnnual.map((item, index) => (
                        <Card className={classes3.listItem} alignItems="flex-start" key={index}>

                            <div className={classes3.allTime} style={{ backgroundImage: `url(${item.image})` }} />
                            <CardContent>
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
                            </CardContent>
                        </Card>
                    ))}
                    <ListItem style={{ clear: 'both' }}>

                    </ListItem>
                </Container>
            </div>

            <div style={{ display: 'none' }} className="C4">
                <Container style={{ marginLeft: "50vw", marginTop: "3vw", transform: "translateX(-50%)"}} className={classes3.root}>
                    {ListSeason.map((item, index) => (
                        <Card className={classes3.listItem} alignItems="flex-start" key={index}>

                            <div className={classes3.allTime} style={{ backgroundImage: `url(${item.image})` }} />
                            <CardContent>
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
                            </CardContent>
                        </Card>
                    ))}
                    <ListItem style={{ clear: 'both' }}>

                    </ListItem>
                </Container>
            </div>

            <div style={{ display: 'none' }} className="C5">
                <Container style={{ marginLeft: "50vw", marginTop: "3vw", transform: "translateX(-50%)"}} className={classes3.root}>
                    {ListMonthly.map((item, index) => (
                        <Card className={classes3.listItem} alignItems="flex-start" key={index}>

                            <div className={classes3.allTime} style={{ backgroundImage: `url(${item.image})` }} />
                            <CardContent>
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
                            </CardContent>
                        </Card>
                    ))}
                    <ListItem style={{ clear: 'both' }}>

                    </ListItem>
                </Container>
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