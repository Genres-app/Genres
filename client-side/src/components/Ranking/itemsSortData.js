import ThumbUpOutlinedIcon from '@material-ui/icons/ThumbUpOutlined';
import TrendingUpOutlinedIcon from '@material-ui/icons/TrendingUpOutlined';
import StarBorderOutlinedIcon from '@material-ui/icons/StarBorderOutlined';
import PeopleAltOutlinedIcon from '@material-ui/icons/PeopleAltOutlined';
import UpdateOutlinedIcon from '@material-ui/icons/UpdateOutlined';
import WhatshotOutlinedIcon from '@material-ui/icons/WhatshotOutlined';

import React, { useState, useEffect, Component  } from 'react';
import Icon from '@mdi/react';
import {
  mdiRun,
  mdiDeathlyHallows,
  mdiDeathStar,
  mdiHeartOutline,
  mdiHelpBox,
  mdiGhostOutline,
  mdiEmoticonFrown,
  mdiCassette,
  mdiEye,
} from '@mdi/js';


export const itemsSortData = [
    {
    title: 'Action',
    icon: <Icon path={mdiRun} size={1}/>,
    cName: 'nav-text'
    },
    {
    title: 'Fantasy',
    icon: <Icon path={mdiDeathlyHallows} size={1}/>,
    cName: 'nav-text'
    },
    {
    title: 'Sci-Fi',
    icon: <Icon path={mdiDeathStar} size={1}/>,
    cName: 'nav-text'
    },
    {
    title: 'Romance',
    icon: <Icon path={mdiHeartOutline} size={1}/>,
    cName: 'nav-text'
    },
    {
    title: 'Mystery',
    icon: <Icon path={mdiHelpBox} size={1}/>,
    cName: 'nav-text'
    },
    {
    title: 'Horror',
    icon: <Icon path={mdiGhostOutline} size={1}/>,
    cName: 'nav-text'
    },
    {
    title: 'Thriller',
    icon: <Icon path={mdiEmoticonFrown} size={1}/>,
    cName: 'nav-text'
    },
    {
    title: 'Non-fiction',
    icon: <Icon path={mdiCassette} size={1}/>,
    cName: 'nav-text'
    },
    {
    title: 'Dystopian',
    icon: <Icon path={mdiEye} size={1}/>,
    cName: 'nav-text'
    },
  ];