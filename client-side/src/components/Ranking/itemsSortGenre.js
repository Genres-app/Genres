import React from 'react';
import Icon from '@mdi/react';
import {
  mdiAllInclusive,
  mdiRun,
  mdiDeathlyHallows,
  mdiDeathStar,
  mdiHeartOutline,
  mdiHelpBox,
  mdiGhostOutline,
  mdiEmoticonFrown,
  mdiCassette,
  mdiEye,
  mdiAccountGroupOutline,
} from '@mdi/js';


export const itemsSortGenre = [
  {
    title: 'Overall',
    icon: <Icon path={mdiAllInclusive} size={1} />,
    cName: 'nav-text'
  },
  {
    title: 'Action',
    icon: <Icon path={mdiRun} size={1} />,
    cName: 'nav-text'
  },
  {
    title: 'Fantasy',
    icon: <Icon path={mdiDeathlyHallows} size={1} />,
    cName: 'nav-text'
  },
  {
    title: 'Romance',
    icon: <Icon path={mdiHeartOutline} size={1} />,
    cName: 'nav-text'
  },
  {
    title: 'Sci-Fi',
    icon: <Icon path={mdiDeathStar} size={1} />,
    cName: 'nav-text'
  },
  {
    title: 'Dystopian',
    icon: <Icon path={mdiEye} size={1} />,
    cName: 'nav-text'
  },
  {
    title: 'Mystery',
    icon: <Icon path={mdiHelpBox} size={1} />,
    cName: 'nav-text'
  },
  {
    title: 'Horror',
    icon: <Icon path={mdiGhostOutline} size={1} />,
    cName: 'nav-text'
  },
  {
    title: 'Thriller',
    icon: <Icon path={mdiEmoticonFrown} size={1} />,
    cName: 'nav-text'
  },
  {
    title: 'Non-fiction',
    icon: <Icon path={mdiCassette} size={1} />,
    cName: 'nav-text'
  },
  {
    title: 'Fan-Fiction',
    icon: <Icon path={mdiAccountGroupOutline} size={1} />,
    cName: 'nav-text'
  },
];