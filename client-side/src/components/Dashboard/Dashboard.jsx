import React, { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import clsx from 'clsx';
import useStyles from './styles';
import { ListItems } from './listItems';

/*Material-UI Components*/
import { makeStyles, createMuiTheme, ThemeProvider } from '@material-ui/core/styles';
import deepPurple from '@material-ui/core/colors/deepPurple';
import {
  Typography,
  AppBar,
  Avatar,
  Button,
  CssBaseline,
  Toolbar,
  Drawer,
  List,
  Divider,
  IconButton,
  ListItem,
  ListItemIcon,
  ListItemText,
  InputBase
} from '@material-ui/core';

/*Material-UI Icons*/
import MenuIcon from '@material-ui/icons/Menu';
import SearchIcon from '@material-ui/icons/Search';
import ClosePageIcon from '@material-ui/icons/Close';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import InboxIcon from '@material-ui/icons/MoveToInbox';
import MailIcon from '@material-ui/icons/Mail';
import AccountCircle from '@material-ui/icons/AccountCircle';
import CreateIcon from '@material-ui/icons/Create';
import AddIcon from '@material-ui/icons/Add';

import GenresLogo from '../Assets/logo-svg2.svg';
import { Link, useHistory, useLocation } from 'react-router-dom';
import decode from 'jwt-decode';
import styled from 'styled-components';
import Popup from '../Auth/Popup';
import Auth from '../Auth/Auth';
// import Searchbar from '../Searchbar/Searchbar'

/* */
// const SidebarLink = styled(Link)`
//   display: flex;
//   color: black;
//   justify-content: left;
//   align-items: center;
//   padding: 15px;
//   list-style: none;
//   height: 55px;
//   text-decoration: none;
//   font-size: 16px;
//   &:hover {
//     background: lavender;
//     border-left: 4px solid #55fccf;
//     cursor: pointer;
//   }
// `;

// const SidebarLabel = styled.span`
//   margin-left: 40px;
// `;

// const SidebarIcon = styled.span`
//   margin-top: 3px;
//   margin-left: 10.5px;
// `;

// const NavIcon = styled(Link)`
//   color: black;
//   font-size: 2rem;
//   margin-right: 15px;
//   height: 80px;
//   display: flex;
//   justify-content: flex-start;
//   align-items: center;
// `;

// const CloseIcon = styled(Link)`
//   color: black;
//   margin-left: 1.6rem;
//   font-size: 2rem;
//   height: 80px;
//   display: flex;
//   justify-content: flex-start;
//   align-items: center;
// `;

// const SidebarNav = styled.nav`
//   background: white;
//   width: 240px;
//   height: 100vh;
//   display: flex;
//   justify-content: center;
//   position: fixed;
//   top: 0;
//   left: ${({ sidebar }) => (sidebar ? '0' : '-100%')};
//   transition: 250ms;
//   z-index: 10;
//   filter: drop-shadow(0 0 5px #9999);
// `;

// const SidebarWrap = styled.div`
//   width: 100%;
// `;

const Dashboard = () => {
  const classes = useStyles();
  const [user, setUser] = useState(JSON.parse(localStorage.getItem('profile')));
  const [openPopup, setOpenPopup] = useState(false);
  const [sidebar, setSidebar] = useState(false);
  const showSidebar = () => setSidebar(!sidebar);
  const dispatch = useDispatch();
  const history = useHistory();
  const location = useLocation();
  const genres = ["Action", "Fantasy", "Science-Fiction", "Romance", "Mystery", "Horror", "Thriller", "Fiction", "Dystopian"];

  const logout = () => {
    handleDrawerClose();
    dispatch({ type: 'LOGOUT' });
    history.push('/');

    setUser(null);
  };

  const switchPopup = () => {
    setOpenPopup((openPopup) => !openPopup);
  };

  useEffect(() => {
    const token = user?.token;
    //JWT

    if (token) {
      const decodedToken = decode(token);
      if (decodedToken.exp * 1000 < new Date().getTime()) logout();
    }


    setUser(JSON.parse(localStorage.getItem('profile')));
    setOpenPopup(false);
  }, [location]);

  document.body.style.margin = "0";

  const [open, setOpen] = React.useState(false);

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  const theme = createMuiTheme({
    palette: {
      primary: {
        main: '#ffffff',
      },
      secondary: deepPurple,
      alert: '#ff1744',
    },
  });

  return (
    <ThemeProvider theme={theme}>
    <div className = {classes.root}>
      <CssBaseline />
      <AppBar
        position = "fixed"
        className = {clsx(classes.appBar, {
          [classes.appBarShift]: open,
        })}
      >
        <Toolbar>
          {
            user ? (
              <>
                <IconButton
                  color = "inherit"
                  aria-label = "open drawer"
                  onClick = {handleDrawerOpen}
                  edge = "start"
                  className = {clsx(classes.menuButton, open && classes.hide)}
                >
                  <MenuIcon />
                </IconButton>
              </>
            ) : (
              <></>
            )
          }

          {/* <Typography variant = "h6" className = {classes.title}>
            Genres
          </Typography> */}
          <Link to = "/">
            <img src = {GenresLogo} height = '50px' alt = ""></img>
          </Link>

          <div className = {classes.grow} />

          {
            user ? (
              <>
                <div className = {classes.search}>
                  <div className = {classes.searchIcon}>
                    <SearchIcon />
                  </div>
                  <InputBase
                    placeholder = "Search…"
                    classes = {{
                      root: classes.inputRoot,
                      input: classes.inputInput,
                    }}
                    inputProps = {{ 'aria-label': 'search' }}
                  />
                </div>
              </>
            ) : (
              <Typography></Typography>
            )
          }

          <div className = {classes.grow} />

          {
            user ? (
              <>
                <Button
                  href = "/writing"
                  variant = "contain"
                  color = "inherit"
                  endIcon = {<AddIcon />}
                  className = {classes.button}
                >
                  Create
                </Button>
              </>
            ) : (
              <Button onClick = {() => setOpenPopup(true)} color = "inherit">Login</Button>
            )
          }

          <Popup openPopup = {openPopup} setOpenPopup = {setOpenPopup}>
            <Auth value = {openPopup} onChange = {switchPopup} />
          </Popup>
        </Toolbar>
      </AppBar>

      <Drawer
        variant = "temporary"
        anchor = "left"
        open = {open} onClose = {handleDrawerClose}
        className = {classes.drawer}
        classes = {{
          paper: classes.drawerPaper,
        }}
      >
        <div
          className = {clsx(classes.list, {
            [classes.fullList]: false,
          })}
          role = "presentation"
          onClick = {handleDrawerClose}
          onKeyDown = {handleDrawerClose}
        ></div>
        <Avatar alt = "Remy Sharp" src = "/static/media/corgi.bcb4248a.jpg" className = {classes.avatarOfDrawer} />
          <Typography className = {classes.userName} variant = "subtitle1">User Name</Typography>
          <Typography className = {classes.userEmail} variant = "subtitle2">example@email.com</Typography>
        <div className = {classes.profileBtnsOfDrawer}>
          <Button className = {classes.profileBtnOfDrawer} variant="contained" color = "secondary" disableElevation>Profile</Button>
          <Button className = {classes.signOutBtnOfDrawer} onClick ={logout} variant="outlined">Sign out</Button>
        </div>
        <Divider />
        <List>
          {ListItems.map((item, index) => (
          <Link to = {item.path}>
            <ListItem button key = {index}>
              <ListItemIcon>{item.icon}</ListItemIcon>
              <ListItemText primary = {item.title}/>
            </ListItem>
            </Link>
          ))}
        </List>
      </Drawer>
    </div>
    </ThemeProvider>
  );
}

export default Dashboard
