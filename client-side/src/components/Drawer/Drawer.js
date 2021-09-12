import React from 'react';
import clsx from 'clsx';
import useStyles from './styles';

/*Material-UI Components*/
import {
  Typography,
  Avatar,
  Button,
  Drawer,
  List,
  Divider,
  ListItem,
  ListItemIcon,
  ListItemText,
} from '@material-ui/core';

//Icons
import Icon from '@mdi/react';
import { mdiAccountCircleOutline, mdiLogoutVariant } from '@mdi/js';

import { ListItems } from '../Dashboard/listItems';


const GenresDrawer = ({ open, theme, toggleFunc, routeFunc, logoutFunc, user }) => {

  const classes = useStyles();

  console.log("open "+open)

  return (
    <Drawer
      variant="temporary"
      anchor="left"
      open={open}
      onClose={toggleFunc}
      className={classes.drawer}
      classes={{
        paper: classes.drawerPaper,
      }}
    >
      {
        user ? (
          <>
            <Avatar alt={user.result.username} className={classes.avatarOfDrawer} src={user.result.imageUrl}>{user.result.username.charAt(0)}</Avatar>
            <Typography className={classes.userName} variant="h6">{user.result.username}</Typography>
            {/* <div className={classes.profileBtnsOfDrawer}> */}
            <Button
              className={clsx(classes.widerBtn, classes.profileBtnOfDrawer)}
              onClick={() => routeFunc("/profile")}
              variant="text"
              color="primary"
              endIcon={<Icon path={mdiAccountCircleOutline} size={1} />}
            >
              Profile
            </Button>

            {/* </div> */}
            <Divider />
          </>
        ) : (
          <></>
        )
      }
      <List>
        {ListItems.map((item, index) => (
          <ListItem className={classes.listItem} button onClick={() => routeFunc(item.path)} key={index}>
            <ListItemIcon className={theme ? classes.listItemIcon_light : classes.listItemIcon_dark}>{item.icon}</ListItemIcon>
            <ListItemText className={classes.listItemText} primary={item.title} />
          </ListItem>
        ))}
      </List>

      <Button
        className={clsx(classes.widerBtn, classes.logoutBtnOfDrawer)}
        onClick={logoutFunc}
        variant='text'
        endIcon={<Icon path={mdiLogoutVariant} size={1} />}>
        Logout
      </Button>

    </Drawer>
  )
}

export default GenresDrawer
