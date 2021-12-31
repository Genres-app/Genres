import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import {
  Avatar,
  Dialog,
  DialogTitle,
  DialogContent,
  List,
  ListItem,
  ListItemAvatar,
  ListItemText,
  Tooltip,
} from '@material-ui/core/';
import { AvatarGroup } from '@material-ui/lab';
import AuthorChip from './AuthorChip';
import { UserData } from '../UserData';


const useStyles = makeStyles((theme) => ({
  AvatarInGroup: {
    borderColor: theme.palette.background.paper,
    color: theme.palette.background.paper,
    cursor: 'pointer',
    fontFamily: "'Readex Pro', 'Roboto', 'Helvetica', 'Arial', sans-serif",
  },
  LexendFont: {
    fontFamily: "'Readex Pro', 'Roboto', 'Helvetica', 'Arial', sans-serif",
    "& > h2": {
      fontFamily: "'Readex Pro', 'Roboto', 'Helvetica', 'Arial', sans-serif",
    },
    "& span": {
      fontFamily: "'Readex Pro', 'Roboto', 'Helvetica', 'Arial', sans-serif",
    },
  }
}))

const AuthorsRowShowFirst = (BookItem) => {
  const classes = useStyles()

  const [isFullListOpen, setFullListOpen] = React.useState(false)

  const toggleAllAuthorsList = () => {
    setFullListOpen(!isFullListOpen)
  }

  return (
    <div style={{ display: 'flex' }}>

      {AuthorChip(BookItem.author[0], false)}

      <Tooltip title="Show All Authors" placement="right">
        <AvatarGroup max={3} classes={{ avatar: classes.AvatarInGroup }} onClick={toggleAllAuthorsList}>
          {BookItem.author.slice(1).map((i, k) => (
            <Avatar alt={UserData[i].userName} src={UserData[i].userAvatar}>
              {UserData[i].userName[0]}
            </Avatar>
          ))}
        </AvatarGroup>
      </Tooltip>

      <Dialog
        open={isFullListOpen}
        onClose={toggleAllAuthorsList}
      >
        <DialogTitle className={classes.LexendFont}>All Authors</DialogTitle>
        <DialogContent style={{
          padding: 0,
        }}>
          <List className={classes.LexendFont}>
            {
              BookItem.author.map((userID, k) => (
                <ListItem button key={k}>
                  <ListItemAvatar>
                    <Avatar
                      alt={UserData[userID].userName}
                      src={UserData[userID].userAvatar}
                      className={classes.LexendFont}
                    >
                      {UserData[userID].userName[0]}
                    </Avatar>
                  </ListItemAvatar>
                  <ListItemText primary={UserData[userID].userName} />
                </ListItem>
              ))
            }
          </List>
        </DialogContent>
      </Dialog>

    </div>
  )
}

export default AuthorsRowShowFirst