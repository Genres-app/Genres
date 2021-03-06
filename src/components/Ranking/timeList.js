import InboxIcon from '@material-ui/icons/Inbox';
import DraftsIcon from '@material-ui/icons/Drafts';
import React, {useState,useEffect} from 'react'

export const ListTimes = [
    {
    title: 'Action',
    icon: <InboxIcon/>,
    cName: 'nav-text'
    },
    {
    title: 'Fantasy',
    icon: <InboxIcon/>,
    cName: 'nav-text'
    },
    {
    title: 'Science-Fiction',
    icon: <InboxIcon/>,
    cName: 'nav-text'
    },
    {
    title: 'Romance',
    icon: <InboxIcon/>,
    cName: 'nav-text'
    },
    {
    title: 'Mystery',
    icon: <DraftsIcon/>,
    cName: 'nav-text'
    },
  ];