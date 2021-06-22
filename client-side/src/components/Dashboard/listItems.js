import React from 'react';
import HomeOutlinedIcon from '@material-ui/icons/HomeOutlined';
import ExploreOutlinedIcon from '@material-ui/icons/ExploreOutlined';
import TrendingUpOutlinedIcon from '@material-ui/icons/TrendingUpOutlined';
import PollOutlinedIcon from '@material-ui/icons/PollOutlined';
import HistoryOutlinedIcon from '@material-ui/icons/HistoryOutlined';
import CreateOutlinedIcon from '@material-ui/icons/CreateOutlined';
import ClassOutlinedIcon from '@material-ui/icons/ClassOutlined';
import ForumOutlinedIcon from '@material-ui/icons/ForumOutlined';


export const ListItems = [
  
  {
  title: 'Home',
  path: '/',
  icon: <HomeOutlinedIcon/>,
  cName: 'nav-text'
  },
  {
  title: 'Browse',
  path : '/browse',
  icon: <ExploreOutlinedIcon/>,
  cName: 'nav-text'
  },
  {
  title: 'Rankings',
  path : '/rankings',
  icon: <TrendingUpOutlinedIcon/>,
  cName: 'nav-text'
  },
  {
  title: 'Contest',
  path: '/contest',
  icon: <PollOutlinedIcon/>,
  cName: 'nav-text'
  },
  {
  title: 'History',
  path: '/history',
  icon: <HistoryOutlinedIcon/>,
  cName: 'nav-text'
  },
  {
  title: 'Write',
  path: '/writing',
  icon: <CreateOutlinedIcon/>,
  cName: 'nav-text'
  },
  {
  title: 'Masterclass',
  path: '/masterclass',
  icon: <ClassOutlinedIcon/>,
  cName: 'nav-text'
  },
  {
  title: 'Publit',
  path: '/publit',
  icon: <ForumOutlinedIcon/>,
  cName: 'nav-text'
  },
];

