import React from 'react';
import HomeIcon from '@material-ui/icons/Home';
import ExploreIcon from '@material-ui/icons/Explore';
import LibraryBooksIcon from '@material-ui/icons/LibraryBooks';
import HistoryIcon from '@material-ui/icons/History';
import CreateIcon from '@material-ui/icons/Create';
import BookIcon from '@material-ui/icons/Book';
import ChatIcon from '@material-ui/icons/Chat';
import TrendingUpIcon from '@material-ui/icons/TrendingUp';


export const ListItems = [
  {
  title: 'Home',
  path: '/',
  icon: <HomeIcon/>,
  cName: 'nav-text'
  },
  {
  title: 'Browse',
  path : '/browse',
  icon: <ExploreIcon/>,
  cName: 'nav-text'
  },
  {
  title: 'Rankings',
  path : '/rankings',
  icon: <TrendingUpIcon/>,
  cName: 'nav-text'
  },
  {
  title: 'Library',
  path: '/library',
  icon: <LibraryBooksIcon/>,
  cName: 'nav-text'
  },
  {
  title: 'History',
  path: '/history',
  icon: <HistoryIcon/>,
  cName: 'nav-text'
  },
  {
  title: 'Write',
  path: '/writing',
  icon: <CreateIcon/>,
  cName: 'nav-text'
  },
  {
  title: 'Masterclass',
  path: '/masterclass',
  icon: <BookIcon/>,
  cName: 'nav-text'
  },
  {
  title: 'FANDOM',
  path: '/fandom',
  icon: <ChatIcon/>,
  cName: 'nav-text'
  },
];

