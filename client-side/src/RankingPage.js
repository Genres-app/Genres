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
import { itemsSortData } from './components/Ranking/itemsSortData';
import { ListAllTime } from './components/Ranking/allTime';
import { ListAnnual } from './components/Ranking/annual';
import { ListBiAnnual } from './components/Ranking/biAnnual';
import { ListSeason } from './components/Ranking/season';
import { ListMonthly } from './components/Ranking/monthly';

// Material UI Icons
import InboxIcon from '@material-ui/icons/Inbox';
import DraftsIcon from '@material-ui/icons/Drafts';
import DateRangeOutlinedIcon from '@material-ui/icons/DateRangeOutlined';
import AllInclusiveOutlinedIcon from '@material-ui/icons/AllInclusiveOutlined';
import ScheduleOutlinedIcon from '@material-ui/icons/ScheduleOutlined';

<link href="./components/Ranking/switchT.css" type="text/css" rel="stylesheet" />


// Styles
const useStyles = makeStyles((theme) => ({
    tabForGenres: {
        position: 'fixed',
        flexGrow: 1,
        width: '100%',
        backgroundColor: theme.palette.background.paper,
        zIndex: 999,
    },
    sortByTime: {
        position: 'fixed',
        maxWidth: 280,
        top: '30vh',
        right: 0,
        backgroundColor: theme.palette.background.paper,
    },
    sortByData: {
        position: 'fixed',
        maxWidth: 280,
        top: "30vh",
        backgroundColor: theme.palette.background.paper,
    },
    // Ranking List
    RankingContainer: {
        width: '75vw',
        marginTop: "48px",
        padding: '0',
        backgroundColor: 'transparent',
    },
    RankingCards: {
        display: 'flex',
        float: 'left',
        width: 'calc(37vw - 32px - 2px)',
        maxWidth: 606,
        margin: 16,
        border: '1px solid #dfe1e5',
        boxShadow: 'none',

        "&:hover": {
            boxShadow: "0px 3px 5px -1px rgb(0 0 0 / 20%), 0px 1px 18px 0px rgb(0 0 0 / 12%)",
        }
    },
    bookCover: {
        height: '9.6vw',
        width: '6vw',
        maxHeight: 184.31,
        maxWidth: 115.19,
        margin: '24px 24px 24px 48px',
        borderRadius: 0,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        flexShrink: 0,
    },
    bookInfo: {
    },
    bookTitle: {
        marginLeft: 0,
        fontSize: '1.5rem',
        fontWeight: 'bold',
        cursor: 'pointer',

        "&:hover": {
            textDecoration: 'underline',
        }
    },
    bookAuthor: {
        color: '#651fff',
        cursor: 'pointer',
        
        "&:hover": {
            textDecoration: 'underline',
        }
    },
    bookDescrip: {
        display: 'inline',
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

export default function RankingPage() {

    const classes = useStyles();

    //tab1
    const [value, setValue] = React.useState(0);

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

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

    // Function for creating ranking list
    const createRankingList = (sortedList) => (

        <Container className={classes.RankingContainer}>
            {sortedList.map((item, index) => (
                <Card className={classes.RankingCards} alignItems="flex-start" key={index}>

                    <div className={classes.bookCover} style={{ backgroundImage: `url(${item.image})` }} />
                    <CardContent className={classes.bookInfo}>
                        <Typography className={classes.bookTitle}>
                            {item.title}
                        </Typography>
                        <Typography className={classes.bookAuthor}>
                            Author Name
                        </Typography>
                        <Typography
                            component="span"
                            variant="body2"
                            className={classes.bookDescrip}
                            color="textSecondary"
                        >
                            {/* {item.secondarytext} */}
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque et sagittis tortor. Nam efficitur vel lacus a commodo.
                        </Typography>
                    </CardContent>
                </Card>
            ))}
            <ListItem style={{ clear: 'both' }}></ListItem>
        </Container>
    )


    return (

        <ThemeProvider theme={theme}>

            <div className={classes.tabForGenres}>
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

            <div className={classes.sortByTime}>
                <List component="nav">
                    <ListItem button onClick={() => switchTime(1)} >
                        <ListItemIcon>
                            <AllInclusiveOutlinedIcon />
                        </ListItemIcon>
                        <ListItemText primary="All-time" />
                    </ListItem>
                    <ListItem button onClick={() => switchTime(2)} >
                        <ListItemIcon>
                            <ScheduleOutlinedIcon />
                        </ListItemIcon>
                        <ListItemText primary="Annual" />
                    </ListItem>
                    <ListItem button onClick={() => switchTime(3)} >
                        <ListItemIcon>
                            <ScheduleOutlinedIcon />
                        </ListItemIcon>
                        <ListItemText primary="Bi-annual" />
                    </ListItem>
                    <ListItem button onClick={() => switchTime(4)} >
                        <ListItemIcon>
                            <ScheduleOutlinedIcon />
                        </ListItemIcon>
                        <ListItemText primary="Season" />
                    </ListItem>
                    <ListItem button onClick={() => switchTime(5)} >
                        <ListItemIcon>
                            <DateRangeOutlinedIcon />
                        </ListItemIcon>
                        <ListItemText primary="Monthly" />
                    </ListItem>
                </List>
            </div>


            <div className={classes.sortByData}>
                <List component="nav">
                    {itemsSortData.map((item, index) => (
                        <ListItem button key={index}>
                            <ListItemIcon className={classes.sortByDataIcon}>{item.icon}</ListItemIcon>
                            <ListItemText className={classes.sortByDataText} primary={item.title} />
                        </ListItem>
                    ))}
                </List>
            </div>

            <div style={{ display: 'none' }} className="C1">
                {createRankingList(ListAllTime)}
            </div>

            <div style={{ display: 'none' }} className="C2">
                {createRankingList(ListAnnual)}
            </div>

            <div style={{ display: 'none' }} className="C3">
                {createRankingList(ListBiAnnual)}
            </div>

            <div style={{ display: 'none' }} className="C4">
                {createRankingList(ListSeason)}
            </div>

            <div style={{ display: 'none' }} className="C5">
                {createRankingList(ListMonthly)}
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