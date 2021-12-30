import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import {
  Avatar,
  Chip,
} from '@material-ui/core/';
import MdiIcon from '@mdi/react'
import { UserData } from '../UserData';

const useStyles = makeStyles((theme) => ({
  chipAuthor: {
    margin: 0,
    marginRight: theme.spacing(1),
    height: theme.spacing(5),
    borderRadius: theme.spacing(2.5),
    border: 'none',
    fontSize: '1rem',
    fontFamily: "'Readex Pro', 'Roboto', 'Helvetica', 'Arial', sans-serif",

    "&:active": {
      boxShadow: 'none',
    },
    "&:last-child":{
      marginRight: 0,
    },
  },
  chipAuthorAvatar: {
    marginLeft: "0 !important",
    color: theme.palette.background.paper,
  }
}))

const AuthorChip = (userID, key, isEditing) => {
  const classes = useStyles()

  return (
    <Chip
      key={key}
      classes={{
        root: classes.chipAuthor,
        icon: classes.chipAuthorAvatar,
      }}
      icon={
        <Avatar alt={UserData[userID].userName} src={UserData[userID].userAvatar}>{UserData[userID].userName[0]}</Avatar>
      }
      label={UserData[userID].userName}
      variant="outlined"
      clickable
    />
  )
}

export default AuthorChip