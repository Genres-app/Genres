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
  mdiThumbUpOutline,
  mdiStarOutline,
  mdiCommentMultipleOutline,
} from '@mdi/js';
import AllInclusiveOutlinedIcon from '@material-ui/icons/AllInclusiveOutlined';
// Material UI Components
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
  Chip,
} from '@material-ui/core';

import useStyles from './components/Ranking/styles';
import { itemsSortGenre } from './components/Ranking/itemsSortGenre';
import { ListAllTime } from './components/Ranking/allTime';
import { ListAnnual } from './components/Ranking/annual';
import { ListBiAnnual } from './components/Ranking/biAnnual';
import { ListSeason } from './components/Ranking/season';
import { ListMonthly } from './components/Ranking/monthly';
import ThumbUpOutlined from '@material-ui/icons/ThumbUpOutlined';


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

export default function RankingPage({ theme }) {

  const classes = useStyles();

  // Top Tab
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  // Left Tab
  const [valueL, setValueL] = React.useState(0);

  const handleChangeLeft = (event, newValue) => {
    setValueL(newValue);
  };

  // Left Tab
  const [valueR, setValueR] = React.useState(0);

  const handleChangeRight = (event, newValue) => {
    setValueR(newValue);
  };

  // Theme
  // const theme = createMuiTheme({
  //     palette: {
  //         primary: {
  //             main: '#ffffff',
  //         },
  //         primary: deepPurple,
  //         alert: '#ff1744',
  //     },
  // });

  // Left side bar control
  const [leftOpen, setOpenL] = React.useState(false);

  const ToggleLeftSideBar = () => {
    if (leftOpen) {
      setOpenL(false);
    } else {
      setOpenL(true);
    }
  }

  // Right side bar control
  const [rightOpen, setOpenR] = React.useState(false);

  const ToggleRightSideBar = () => {
    if (rightOpen) {
      setOpenR(false);
    } else {
      setOpenR(true);
    }
  }


  // Function for creating ranking list
  const createRankingList = (sortedList) => (

    <Container className={classes.RankingContainer}>
      {
        sortedList.map((item, index) => {
          let decorator;
          let cardClasses;
          if (index == 0) {
            cardClasses = clsx(classes.RankingCards, theme ? classes.Rank1 : classes.Rank1Dark);
            decorator = (
              <div className={clsx(classes.RankingDecorator, theme ? classes.RankingDeco1 : classes.RankingDeco1Dark)}>
                <Typography className={classes.RankingNum}>1</Typography>
                <div></div>
              </div>
            );
          } else if (index == 1) {
            cardClasses = clsx(classes.RankingCards, theme ? classes.Rank2 : classes.Rank2Dark);
            decorator = (
              <div className={clsx(classes.RankingDecorator, theme ? classes.RankingDeco2 : classes.RankingDeco2Dark)}>
                <Typography className={classes.RankingNum}>2</Typography>
                <div></div>
              </div>
            );
          } else if (index == 2) {
            cardClasses = clsx(classes.RankingCards, theme ? classes.Rank3 : classes.Rank3Dark);
            decorator = (
              <div className={clsx(classes.RankingDecorator, theme ? classes.RankingDeco3 : classes.RankingDeco3Dark)}>
                <Typography className={classes.RankingNum}>3</Typography>
                <div></div>
              </div>
            );
          } else {
            cardClasses = classes.RankingCards;
            decorator = <div className={classes.RankingDecorator}></div>;
          }
          return (
            <Card className={cardClasses} alignItems="flex-start" variant="outlined" key={index}>
              {decorator}
              <div className={classes.bookCover} style={{ backgroundImage: `url(${item.image})` }} />
              <CardContent className={classes.bookInfo}>
                <Typography className={classes.bookTitle}>
                  {item.title}
                </Typography>
                <Typography className={classes.bookAuthor} color="primary">
                  Author Name
                </Typography>
                <div className={classes.chipContainer}>
                  <Chip size="small" label="Tag0" clickable className={classes.chip} />
                  <Chip size="small" label="Tag1" clickable className={classes.chip} />
                  <Chip size="small" label="Tag2" clickable className={classes.chip} />
                </div>
                <div className={clsx(classes.bookData, theme ? classes.bookDataLight : classes.bookDataDark)}>
                  <div>
                    <div><Icon path={mdiThumbUpOutline} size={1} /><p>3.5k</p></div>
                    <div><Icon path={mdiStarOutline} size={1} /><p>6.0k</p></div>
                    <div><Icon path={mdiCommentMultipleOutline} size={1} /><p>1.2k</p></div>
                  </div>
                </div>
              </CardContent>
            </Card>
          )
        })}
      <ListItem style={{ clear: 'both' }}></ListItem>
    </Container>
  )

  // Func for creating ranking body
  const createRankingBody = (ftrData, ftrGenres, ftrTime) => {
    return (
      <>
        {
          (ftrData != 0) ?
            <>
              <div className={classes.sortByGenreTitle}>
                <Typography variant="overline">Filter by Genres</Typography>
              </div>
              <div className={clsx(
                leftOpen
                  ? classes.sortByGenre
                  : clsx(classes.sortByGenre, classes.leftRetracted),
                theme
                  ? classes.sortByGenreLight
                  : classes.sortByGenreDark
              )}>
                <Tabs
                  orientation="vertical"
                  variant="scrollable"
                  value={valueL}
                  onChange={handleChangeLeft}
                  aria-label="Sort by genre"
                  indicatorColor="secondary"
                >
                  {itemsSortGenre.map((item, index) => (
                    <Tab key={index} label={item.title} icon={item.icon}
                      classes={{
                        labelIcon: classes.sideTabsWithIconL,
                        wrapper: classes.sideTabsLeft,
                      }} />
                  ))}
                </Tabs>
                <IconButton aria-label="filter" className={classes.sortByGenreSwitch} onClick={ToggleLeftSideBar} color="secondary">
                  <Icon path={mdiChevronLeft} size={1} />
                </IconButton>
              </div>

              <div className={classes.sortByTimeTitle}>
                <Typography variant="overline">Filter by Time</Typography>
              </div>
              <div className={clsx(
                rightOpen
                  ? classes.sortByTime
                  : clsx(classes.sortByTime, classes.rightRetracted),
                theme
                  ? classes.sortByTimeLight
                  : classes.sortByTimeDark
              )}>
                <Tabs
                  orientation="vertical"
                  variant="scrollable"
                  value={valueR}
                  onChange={handleChangeRight}
                  aria-label="Sort by Time"
                  indicatorColor="secondary"
                  classes={{ indicator: classes.rightTabIndicator }}
                >

                  <Tab label="All-time" icon={<AllInclusiveOutlinedIcon />}
                    classes={{
                      labelIcon: classes.sideTabsWithIconR,
                      wrapper: classes.sideTabsRight,
                    }}
                    onClick={() => switchTime(1)} />
                  <Tab label="Annual" icon={<Icon path={mdiCircleSlice8} size={1} />}
                    classes={{
                      labelIcon: classes.sideTabsWithIconR,
                      wrapper: classes.sideTabsRight,
                    }}
                    onClick={() => switchTime(2)} />
                  <Tab label="Bi-annual" icon={<Icon path={mdiCircleSlice4} size={1} />}
                    classes={{
                      labelIcon: classes.sideTabsWithIconR,
                      wrapper: classes.sideTabsRight,
                    }}
                    onClick={() => switchTime(3)} />
                  <Tab label="Season" icon={<Icon path={mdiCircleSlice2} size={1} />}
                    classes={{
                      labelIcon: classes.sideTabsWithIconR,
                      wrapper: classes.sideTabsRight,
                    }}
                    onClick={() => switchTime(4)} />
                  <Tab label="Monthly" icon={<Icon path={mdiCircleSlice1} size={1} />}
                    classes={{
                      labelIcon: classes.sideTabsWithIconR,
                      wrapper: classes.sideTabsRight,
                    }}
                    onClick={() => switchTime(5)} />

                </Tabs>

                <IconButton aria-label="filter" className={classes.sortByTimeSwitch} onClick={ToggleRightSideBar} color="secondary">
                  <Icon path={mdiChevronLeft} size={1} />
                </IconButton>
              </div>
            </>
            :
            <>
            </>
        }


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
      </>
    )
  }

  return (

    <>
      <AppBar position="relative" className={classes.sortByData}>
        <Tabs
          value={value}
          onChange={handleChange}
          aria-label="Sort by data"
          centered
          indicatorColor="primary"
          textColor="primary"
        >
          <Tab label="Trending" {...a11yProps(0)} />
          <Tab label="Likes" {...a11yProps(1)} />
          <Tab label="Stars" {...a11yProps(1)} />
          <Tab label="Comments" {...a11yProps(1)} />
        </Tabs>
      </AppBar>
      <TabPanel value={value} index={0} className={classes.tabPanel}>
        {createRankingBody(0, 0, 0)}
      </TabPanel>
      <TabPanel value={value} index={1} className={classes.tabPanel}>
        {createRankingBody(1, 0, 0)}
      </TabPanel>
      <TabPanel value={value} index={2} className={classes.tabPanel}>
        {createRankingBody(2, 0, 0)}
      </TabPanel>
      <TabPanel value={value} index={3} className={classes.tabPanel}>
        {createRankingBody(3, 0, 0)}
      </TabPanel>



    </>

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

