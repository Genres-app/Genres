import React, { useState } from 'react';
import clsx from 'clsx';
import useStyles from './styles';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';

/*Material-UI*/
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
  useTheme,
  StylesProvider,
} from '@material-ui/core';

//Mdi Icons
import Icon from '@mdi/react';
import { mdiAccountCircleOutline, mdiLogoutVariant, mdiLoginVariant, mdiMessageTextOutline } from '@mdi/js';

import { ListItems } from '../Dashboard/listItems';


const GenresDrawer = ({ open, theme, toggleFunc, user, isUserConfirmRequired, loginFunc, activePage }) => {
  // const [user, setUser] = useState(JSON.parse(localStorage.getItem('profile')));
  const dispatch = useDispatch();
  const history = useHistory();
  const usedTheme = useTheme();
  const classes = useStyles();

  // Route to render new content
  const routeChange = (path) => {
    if (!(isUserConfirmRequired && !window.confirm("Unsaved Content in this page, Confirm leaving?"))) {
      history.push(path);
      toggleFunc();
    } else {
      toggleFunc();
    }
  }

  const login = () => {
    loginFunc(true);
    // setUser(user);
  }

  const logout = () => {
    dispatch({ type: 'LOGOUT' });
    history.push('/');

    // setUser(null);
    toggleFunc();
  };

  return (
    <StylesProvider injectFirst>
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
        <div style={{
          backgroundColor: usedTheme.palette.primary.bg,
          margin: ".5rem",
          borderRadius: "2rem"
        }}
        >
          {
            user ? (
              <>
                <Avatar alt={user.result.username} className={classes.avatarOfDrawer} src={user.result.imageUrl}>{user.result.username.charAt(0)}</Avatar>
                <Typography className={classes.userName} variant="h6" align="center">{user.result.username}</Typography>
                <div className={classes.LevelContainer}>
                  <Typography className={classes.lvl}>Lv.6</Typography>
                  <div className={classes.expBar}>
                    <div></div>
                  </div>
                </div>
                <div className={classes.profileBtnsOfDrawer}>
                  <Button
                    className={clsx(classes.widerBtn, classes.profileBtnOfDrawer)}
                    onClick={() => routeChange("/profile")}
                    variant="text"
                    color="primary"
                    endIcon={<Icon path={mdiAccountCircleOutline} size={1} />}
                  >
                    Profile
                  </Button>
                  <Button
                    className={clsx(classes.widerBtn, classes.profileBtnOfDrawer)}
                    onClick={() => routeChange("/message")}
                    variant="text"
                    color="primary"
                    endIcon={<Icon path={mdiMessageTextOutline} size={1} />}
                  >
                    Message
                  </Button>
                </div>
              </>
            ) : (
              <div style={{ height: 200, display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                <Button
                  onClick={login}
                  variant="contained"
                  color="primary"
                  endIcon={<Icon path={mdiLoginVariant} size={1} />}
                  className={clsx(classes.widerBtn, classes.appbarBtn)}
                >
                  Login
                </Button>
              </div>
            )
          }
        </div>

        <List>
          {ListItems.map((item, index) => (
            <ListItem className={classes.listItem} button onClick={() => routeChange(item.path)} key={index} style={!activePage && item.title === "Home" || activePage === item.title
              ? {
                backgroundColor: usedTheme.palette.primary.bg,
                color: usedTheme.palette.primary.main
              } : null}>
              <ListItemIcon className={classes.listItemIcon}>{item.icon}</ListItemIcon>
              <ListItemText className={classes.listItemText} primary={item.title} />
            </ListItem>
          ))}
        </List>

        <Button
          className={clsx(classes.widerBtn, classes.logoutBtnOfDrawer)}
          onClick={logout}
          variant='text'
          endIcon={<Icon path={mdiLogoutVariant} size={1} />}>
          Logout
        </Button>

      </Drawer>
    </StylesProvider>
  )
}

export default GenresDrawer
