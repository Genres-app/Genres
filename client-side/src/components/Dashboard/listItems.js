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
  icon: <HomeOutlinedIcon sytle={{fontSize: '50px'}} />,
  cName: 'nav-text'
  },
  {
  title: 'Browse',
  path : '/browse',
  icon: <ExploreOutlinedIcon sytle={{fontSize: '50px'}} />,
  cName: 'nav-text'
  },
  {
  title: 'Rankings',
  path : '/rankings',
  icon: <TrendingUpOutlinedIcon sytle={{fontSize: '50px'}} />,
  cName: 'nav-text'
  },
  {
  title: 'Contest',
  path: '/contest',
  icon: <PollOutlinedIcon sytle={{fontSize: '50px'}} />,
  cName: 'nav-text'
  },
  {
  title: 'History',
  path: '/history',
  icon: <HistoryOutlinedIcon sytle={{fontSize: '50px'}} />,
  cName: 'nav-text'
  },
  {
  title: 'Write',
  path: '/writing',
  icon: <CreateOutlinedIcon sytle={{fontSize: '50px'}} />,
  cName: 'nav-text'
  },
  {
  title: 'Masterclass',
  path: '/masterclass',
  icon: <ClassOutlinedIcon sytle={{fontSize: '50px'}} />,
  cName: 'nav-text'
  },
  {
  title: 'Publit',
  path: '/publit',
  icon: <ForumOutlinedIcon sytle={{fontSize: '50px'}} />,
  cName: 'nav-text'
  },
];

