import ThumbUpOutlinedIcon from '@material-ui/icons/ThumbUpOutlined';
import TrendingUpOutlinedIcon from '@material-ui/icons/TrendingUpOutlined';
import StarBorderOutlinedIcon from '@material-ui/icons/StarBorderOutlined';
import PeopleAltOutlinedIcon from '@material-ui/icons/PeopleAltOutlined';
import UpdateOutlinedIcon from '@material-ui/icons/UpdateOutlined';
import WhatshotOutlinedIcon from '@material-ui/icons/WhatshotOutlined';

import React, {useState,useEffect} from 'react'

export const itemsSortData = [
    {
    title: 'Liked',
    icon: <ThumbUpOutlinedIcon/>,
    cName: 'nav-text'
    },
    {
    title: 'Trending',
    icon: <TrendingUpOutlinedIcon/>,
    cName: 'nav-text'
    },
    {
    title: 'Star',
    icon: <StarBorderOutlinedIcon/>,
    cName: 'nav-text'
    },
    {
    title: 'Popular',
    icon: <PeopleAltOutlinedIcon/>,
    cName: 'nav-text'
    },
    {
    title: 'Update',
    icon: <UpdateOutlinedIcon/>,
    cName: 'nav-text'
    },
    {
    title: 'Active',
    icon: <WhatshotOutlinedIcon/>,
    cName: 'nav-text'
    },
  ];