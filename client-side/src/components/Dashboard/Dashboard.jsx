import React, { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import clsx from 'clsx';
import useStyles from './styles';

/*Material-UI Components*/
import { makeStyles } from '@material-ui/core/styles';
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
import Brightness2Icon from '@material-ui/icons/Brightness2';
import Brightness7Icon from '@material-ui/icons/Brightness7';
import CreateOutlinedIcon from '@material-ui/icons/CreateOutlined';
import AddIcon from '@material-ui/icons/Add';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';

//Icons
import Icon from '@mdi/react';
import { mdiAccountCircleOutline, mdiLoginVariant, mdiLogoutVariant } from '@mdi/js';

import GenresLogo from '../Assets/logos/Genres_iconOnly_480x.png';
import GenresLogo_new from '../Assets/logos/Genres_Redesign.png';
import GenresLogo_new_dark from '../Assets/logos/Genres_Redesign_dark.png';
import { Link, useHistory, useLocation } from 'react-router-dom';
import decode from 'jwt-decode';
import styled from 'styled-components';
import Popup from '../Auth/Popup';
import Auth from '../Auth/Auth';
import Searchbar from '../Searchbar/Searchbar'

import GenresDrawer from '../Drawer/Drawer';
import { ListItems } from './listItems';

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

const Dashboard = ({ passTheme, isMywritingPage }) => {
  const [user, setUser] = useState(JSON.parse(localStorage.getItem('profile')));
  const [openPopup, setOpenPopup] = useState(false);

  const [sidebar, setSidebar] = useState(false);
  const toggleSidebar = () => setSidebar(!sidebar);

  const dispatch = useDispatch();
  const history = useHistory();
  const location = useLocation();
  const genres = ["Action", "Fantasy", "Science-Fiction", "Romance", "Mystery", "Horror", "Thriller", "Fiction", "Dystopian"];

  const logout = () => {
    dispatch({ type: 'LOGOUT' });
    history.push('/');

    setUser(null);
    setSidebar();
  };

  const switchPopup = () => {
    setOpenPopup((openPopup) => !openPopup);
    setSidebar(false);
  };

  // Theme
  const [theme, setTheme] = useState(true)


  useEffect(() => {
    const token = user?.token;
    //JWT

    if (token) {
      const decodedToken = decode(token);
      if (decodedToken.exp * 1000 < new Date().getTime()) logout();
    }


    setUser(JSON.parse(localStorage.getItem('profile')));
    setOpenPopup(false);


    if (localStorage.getItem('Theme') == 'false') {
      setTheme(false)
    } else {
      setTheme(true)
    }

  }, [location]);


  const classes = useStyles();
  document.body.style.margin = "64px 0 0 0";


  // Route to render new content
  const routeChange = (path) => {
    history.push(path);
    setSidebar(false);
  }


  // Remove BoxShadow of AppBar @rankings
  const setStyleOfAppbar1 = makeStyles((theme) => ({
    appBar: {
      backgroundColor: theme.palette.background.paper,
      color: theme.palette.text.primary,
      boxShadow: 'none',
    }
  }));
  const setStyleOfAppbar2 = makeStyles((theme) => ({
    appBar: {
      backgroundColor: theme.palette.background.paper,
      color: theme.palette.text.primary,
      //boxShadow: 'none',
    }
  }));

  // Change Style @ /rankings
  let classOfAppbar;
  if (window.location.pathname == "/rankings") {
    classOfAppbar = setStyleOfAppbar1();
  }
  else {
    classOfAppbar = setStyleOfAppbar2();
  }


  // Load Theme when refresh
  if (localStorage.getItem('Theme') == 'false') {
    passTheme(false);
  } else { }

  // Func: Get Title of Current Page
  const getCurrentPageTitle = () => {
    let pathName = window.location.pathname;
    let majorPathName = "/" + pathName.split('/')[1];
    for (let i = 1; i < ListItems.length; i++) { // Ignore /Home
      if (majorPathName == ListItems[i].path) {
        return ListItems[i].title
      }
    }
    return majorPathName.slice(1);
  }


  // Render Navigation Button ShortCut
  const ShortcutNavBtn = (indexOfList) => {
    return (
      <Button
        onClick={() => routeChange(ListItems[indexOfList].path)}
        variant="text"
        color="primary"
        startIcon={ListItems[indexOfList].icon}
        className={clsx(classes.appbarBtn, classes.hideWhenWidLessThan1260)}
      >
        {ListItems[indexOfList].title}
      </Button>
    )
  }

  return (
    <>
      <CssBaseline />
      <div className={classes.root}>

        <AppBar
          position="fixed"
          color="secondary"
          className={classOfAppbar.appBar}
        >
          <Toolbar>

            {/* <Typography variant = "h6" className = {classes.title}>
            Genres
          </Typography> */}
            {/* <Link to="/"> */}
            <div
              onClick={() => routeChange("/")}
              style={{
                height: "100%",
                display: "flex",
                alignItems: "center",
                cursor: "pointer",
              }}>
              <img src={theme ? GenresLogo_new : GenresLogo_new_dark} height='48px' alt="" />
              <div style={{ marginLeft: '.5rem', }}>
                <div style={theme ? {
                  width: 'calc(100% - .25rem)',
                  height: '.75rem',
                  backgroundColor: '#76eed9',

                  transform: 'translateY(1.3rem) translateX(.6rem)'
                }
                  :
                  {
                    width: 'calc(100% - .25rem)',
                    height: '.75rem',
                    backgroundColor: '#13edad',
                    opacity: .3,

                    transform: 'translateY(1.3rem) translateX(.6rem)'
                  }
                }></div>
                <Typography
                  variant="h5"
                  color="primary"
                  style={{
                    textDecorationLine: "none",
                    fontWeight: 600,
                    // opacity: .9,
                    userSelect: "none",
                    fontFamily: "'Readex Pro', 'Roboto', 'Helvetica', 'Arial', sans-serif",

                    transform: 'translateY(-.5rem)',
                  }}>
                  Genres
                </Typography>
              </div>
            </div>
            {/* </Link> */}

            {/* <div className={classes.grow} /> */}
            {/* <ChevronRightIcon style={{marginLeft: '.5rem'}}/> */}

            {
              getCurrentPageTitle() ?
                <Button
                  onClick={toggleSidebar}
                  variant="text"
                  color="primary"
                  startIcon={<ChevronRightIcon />}
                  endIcon={<MenuIcon />}
                  classes={{
                    root: classes.drawerToggleBtn,
                    startIcon: classes.drawerToggleIcon,
                    endIcon: classes.drawerToggleIcon,
                  }}
                  size="large"
                >
                  {getCurrentPageTitle()}
                </Button>
                :
                <IconButton
                  color="inherit"
                  aria-label="open drawer"
                  onClick={toggleSidebar}
                  // edge="start"
                  className={classes.menuButton}
                >
                  <MenuIcon />
                </IconButton>
            }

            <Divider orientation='vertical' style={{ height: '2rem', marginLeft: '.5rem' }} className={classes.hideWhenWidLessThan1260} />


            { // Show Rankings
              '/' + window.location.pathname.split('/')[1] != ListItems[2].path ?  // Check if current page is the same as shortcuts, if so show 'Browse'
                ShortcutNavBtn(2)
                :
                ShortcutNavBtn(1)
            }
            { // Show Beta Reading
              '/' + window.location.pathname.split('/')[1] != ListItems[6].path ?
                ShortcutNavBtn(6)
                :
                ShortcutNavBtn(1)
            }

            <div className={clsx(classes.search, theme ? classes.search_light : classes.search_dark)}>
              <div className={classes.searchIcon}>
                <SearchIcon />
              </div>
              <InputBase
                placeholder="Search…"
                classes={{
                  root: classes.inputRoot,
                  input: classes.inputInput,
                }}
                inputProps={{ 'aria-label': 'search' }}
              />
            </div>
            {/* <Searchbar items={genres} /> */}


            <div className={classes.grow} />
            <IconButton id="ThemeToggle" aria-label="Toggle Theme" color="primary" onClick={() => {
              setTheme(!theme);
              passTheme(!theme);
              // localStorage.setItem('CurrentTheme', !theme);
            }}>
              {!theme ? <Brightness7Icon /> : <Brightness2Icon />}
            </IconButton>
            {
              user ? (
                !isMywritingPage ? (
                  <>
                    <Button
                      onClick={() => routeChange("/mywriting")}
                      variant="text"
                      color="primary"
                      endIcon={<CreateOutlinedIcon />}
                      className={clsx(classes.appbarBtn, classes.hideWhenWidLessThan1260)}
                    >
                      Writing Space
                    </Button>
                    <IconButton
                      color="primary"
                      onClick={() => routeChange("/mywriting")}
                      className={classes.showWhenWidLessThan1260}
                    >
                      <CreateOutlinedIcon />
                    </IconButton>
                    <div className={classes.appbarAvatarContainer} onClick={() => routeChange("/profile")}>
                      <Avatar alt={user.result.username} src={user.result.imageUrl} className={classes.appbarAvatar} />
                    </div>
                  </>
                ) : (
                  <>
                  </>
                )
              ) : (
                <Button
                  onClick={() => setOpenPopup(true)}
                  variant="text"
                  color="primary"
                  endIcon={<Icon path={mdiLoginVariant} size={1} />}
                  className={classes.appbarBtn}
                >
                  Login
                </Button>
              )
            }

            <Popup openPopup={openPopup} setOpenPopup={setOpenPopup}>
              <Auth value={openPopup} onChange={switchPopup} />
            </Popup>
          </Toolbar>
        </AppBar>


        <GenresDrawer open={sidebar} theme={theme} toggleFunc={toggleSidebar} user={user} isUserConfirmRequired={false} loginFunc={switchPopup} />
      </div>
    </>
  );
}

export default Dashboard
