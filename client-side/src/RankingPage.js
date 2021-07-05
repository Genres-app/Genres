import React, { useState, useEffect, Component } from 'react';
import clsx from 'clsx';
import PropTypes from 'prop-types';
//Icons
import Icon from '@mdi/react';
import {
    mdiChevronLeft,
    mdiCircleSlice8,
    mdiCircleSlice4,
    mdiCircleSlice2,
    mdiCircleSlice1,
} from '@mdi/js';
import AllInclusiveOutlinedIcon from '@material-ui/icons/AllInclusiveOutlined';
// Material UI Components
import { makeStyles, createMuiTheme, ThemeProvider } from '@material-ui/core/styles';
import deepPurple from '@material-ui/core/colors/deepPurple';
import {
    AppBar,
    Tab,
    Tabs,
    Typography,
    Box,
    Container,
    Card,
    CardContent,
    withTheme,
    IconButton,
    List,
    ListItem,
    ListItemIcon,
    ListItemText,
} from '@material-ui/core';

import useStyles from './components/Ranking/styles';
import { itemsSortGenre } from './components/Ranking/itemsSortGenre';
import { ListAllTime } from './components/Ranking/allTime';
import { ListAnnual } from './components/Ranking/annual';
import { ListBiAnnual } from './components/Ranking/biAnnual';
import { ListSeason } from './components/Ranking/season';
import { ListMonthly } from './components/Ranking/monthly';


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

    const [open, setOpen] = React.useState(false);

    const ToggleLeftSideBar = () => {
        if (open) {
            setOpen(false);
        } else {
            setOpen(true);
        }
        console.log(open);
    }


    // Function for creating ranking list
    const createRankingList = (sortedList) => (

        <Container className={classes.RankingContainer}>
            {
                sortedList.map((item, index) => {
                    let decorator;
                    let cardClasses;
                    if (index == 0) {
                        cardClasses = clsx(classes.RankingCards, classes.Rank1);
                        decorator = (
                            <div className={clsx(classes.RankingDecorator, classes.RankingDeco1)}>
                                <Typography className={classes.RankingNum}>1</Typography>
                                <div></div>
                            </div>
                        );
                    } else if (index == 1) {
                        cardClasses = clsx(classes.RankingCards, classes.Rank2);
                        decorator = (
                            <div className={clsx(classes.RankingDecorator, classes.RankingDeco2)}>
                                <Typography className={classes.RankingNum}>2</Typography>
                                <div></div>
                            </div>
                        );
                    } else if (index == 2) {
                        cardClasses = clsx(classes.RankingCards, classes.Rank3);
                        decorator = (
                            <div className={clsx(classes.RankingDecorator, classes.RankingDeco3)}>
                                <Typography className={classes.RankingNum}>3</Typography>
                                <div></div>
                            </div>
                        );
                    } else {
                        cardClasses = classes.RankingCards;
                        decorator = <div className={classes.RankingDecorator}></div>;
                    }
                    return (
                        <Card className={cardClasses} alignItems="flex-start" key={index}>
                            {decorator}
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
                    )
                })}
            <ListItem style={{ clear: 'both' }}></ListItem>
        </Container>
    )


    return (

        <ThemeProvider theme={theme}>

            <div className={classes.sortByData}>
                <AppBar position="relative">
                    <Tabs
                        value={value}
                        onChange={handleChange}
                        aria-label="simple tabs example"
                        centered
                        indicatorColor="secondary"
                        textColor="secondary"
                    >
                        <Tab label="Likes" {...a11yProps(0)} />
                        <Tab label="Stars" {...a11yProps(1)} />
                        <Tab label="Comments" {...a11yProps(2)} />
                    </Tabs>
                </AppBar>
            </div>

            <div className={classes.sortByGenre}>
                <List component="nav">
                    {itemsSortGenre.map((item, index) => (
                        <ListItem button key={index}>
                            <ListItemText className={classes.sortByGenreText} primary={item.title} />
                            <ListItemIcon className={classes.sortByGenreIcon}>{item.icon}</ListItemIcon>
                        </ListItem>
                    ))}
                </List>
                <IconButton aria-label="filter" className={classes.sortByGenreSwitch} onClick={ToggleLeftSideBar}>
                    <Icon path={mdiChevronLeft} size={1} />
                </IconButton>
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
                            <Icon path={mdiCircleSlice8} size={1} />
                        </ListItemIcon>
                        <ListItemText primary="Annual" />
                    </ListItem>
                    <ListItem button onClick={() => switchTime(3)} >
                        <ListItemIcon>
                            <Icon path={mdiCircleSlice4} size={1} />
                        </ListItemIcon>
                        <ListItemText primary="Bi-annual" />
                    </ListItem>
                    <ListItem button onClick={() => switchTime(4)} >
                        <ListItemIcon>
                            <Icon path={mdiCircleSlice2} size={1} />
                        </ListItemIcon>
                        <ListItemText primary="Season" />
                    </ListItem>
                    <ListItem button onClick={() => switchTime(5)} >
                        <ListItemIcon>
                            <Icon path={mdiCircleSlice1} size={1} />
                        </ListItemIcon>
                        <ListItemText primary="Monthly" />
                    </ListItem>
                </List>
            </div>

            <div style={{ display: 'block' }} className="C1">
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

