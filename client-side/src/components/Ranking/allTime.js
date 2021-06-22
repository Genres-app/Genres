import React from 'react';
import HomeOutlinedIcon from '@material-ui/icons/HomeOutlined';
import ExploreOutlinedIcon from '@material-ui/icons/ExploreOutlined';
import TrendingUpOutlinedIcon from '@material-ui/icons/TrendingUpOutlined';
import PollOutlinedIcon from '@material-ui/icons/PollOutlined';
import HistoryOutlinedIcon from '@material-ui/icons/HistoryOutlined';
import CreateOutlinedIcon from '@material-ui/icons/CreateOutlined';
import ClassOutlinedIcon from '@material-ui/icons/ClassOutlined';
import ForumOutlinedIcon from '@material-ui/icons/ForumOutlined';
import { ListItemSecondaryAction } from '@material-ui/core';


import cover1 from '../Assets/bookcover1.jpg';
import cover2 from '../Assets/bookcover2.jpg';
import cover3 from '../Assets/bookcover3.jpg';
import cover4 from '../Assets/bookcover4.jpg';
import cover5 from '../Assets/bookcover5.jpg';
import cover6 from '../Assets/bookcover6.jpg';
import cover7 from '../Assets/bookcover7.jpg';



export const ListAllTime = [
    {
    title: 'The Arrivals',
    image: `url(${cover1})`,
    cName: 'nav-text',
    secondarytext: "one"
    },
    {
    title: 'Browse',
    image: <ExploreOutlinedIcon/>,
    cName: 'nav-text',
    secondarytext: "two"
    },
    {
    title: 'Rankings',
    image: <TrendingUpOutlinedIcon/>,
    cName: 'nav-text',
    secondarytext: "three"
    },
    {
    title: 'Contest',
    image: <PollOutlinedIcon/>,
    cName: 'nav-text',
    secondarytext: "four"
    },
    {
    title: 'History',
    image: <HistoryOutlinedIcon/>,
    cName: 'nav-text',
    secondarytext: "five"
    },
    {
    title: 'Write',
    image: <CreateOutlinedIcon/>,
    cName: 'nav-text',
    secondarytext: "six"
    },
    {
    title: 'Masterclass',
    image: <ClassOutlinedIcon/>,
    cName: 'nav-text',
    secondarytext: "seven"
    },
    {
    title: 'Publit',
    image: <ForumOutlinedIcon/>,
    cName: 'nav-text',
    secondarytext: "eight"
    },
  ];