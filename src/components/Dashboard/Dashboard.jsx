import React, { useState, useEffect, useLayoutEffect } from 'react';
import { useDispatch } from 'react-redux';
import clsx from 'clsx';
import useStyles from './styles';
import { Authenticator, useAuthenticator } from '@aws-amplify/ui-react';

/*Material-UI Components*/
import {
  Avatar,
  Typography,
  AppBar,
  Button,
  CssBaseline,
  Toolbar,
  Divider,
  IconButton,
  InputBase,
  StylesProvider,
  useTheme
} from '@material-ui/core';

/*Material-UI Icons*/
import MenuIcon from '@material-ui/icons/Menu';
import SearchIcon from '@material-ui/icons/Search';
import Brightness4Icon from '@material-ui/icons/Brightness4';
import Brightness7Icon from '@material-ui/icons/Brightness7';
import CreateOutlinedIcon from '@material-ui/icons/CreateOutlined';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import { API } from 'aws-amplify';
import * as queries from '../../graphql/queries';
//Icons
import Icon from '@mdi/react';
import { mdiLoginVariant } from '@mdi/js';

import GenresLogo_new from '../Assets/logos/Genres_Redesign.png';
import GenresLogo_new_dark from '../Assets/logos/Genres_Redesign_dark.png';
import { useHistory, useLocation } from 'react-router-dom';
import decode from 'jwt-decode';
import Popup from '../Auth/Popup';
// import Auth from '../Auth/Auth';
// import Searchbar from '../Searchbar/Searchbar'

import GenresDrawer from '../Drawer/Drawer';
import { ListItems } from './listItems';


function useWindowSize() {
  const [size, setSize] = useState([0, 0]);
  useLayoutEffect(() => {
    function updateSize() {
      setSize([window.innerWidth, window.innerHeight]);
    }
    window.addEventListener('resize', updateSize);
    updateSize();
    return () => window.removeEventListener('resize', updateSize);
  }, []);
  return size;
}

const Dashboard = ({ passTheme, isMywritingPage, noShadowAtTop }) => {
  // useAuthenticator easy Sign Out method learned from AUTH documentation - Yining 
  const { user: mUser, signOut } = useAuthenticator((context) => [context.user]);
  const [user, setUser] = useState(JSON.parse(localStorage.getItem('profile')));
  const [openPopup, setOpenPopup] = useState(false);

  const [sidebar, setSidebar] = useState(false);
  const toggleSidebar = () => setSidebar(!sidebar);

  const dispatch = useDispatch();
  const history = useHistory();
  const location = useLocation();
  // const genres = ["Action", "Fantasy", "Science-Fiction", "Romance", "Mystery", "Horror", "Thriller", "Fiction", "Dystopian"];
  // If a user is logged in, disable the popup for login - Yining
  useEffect(() => {
    if (mUser && mUser.username) {
      setOpenPopup(false)
    }
  }, [mUser])
  const [width,] = useWindowSize();
  if (width >= 600) {
    document.body.style.margin = "64px 0 0 0";
  } else {
    document.body.style.margin = "56px 0 0 0";
  }

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

  // const [noShadow, setNoShadow] = useState(noShadowAtTop && window.pageYOffset <= 0);

  // Theme
  const [theme, setTheme] = useState(true);
  const [search,setSearch] = useState('')
  useEffect(()=>{
    const l = (key)=>{
      if(key.keyCode === 13){
        history.push(`/search/${search}`)
      }
    }
    document.addEventListener('keydown',l)
    return ()=>document.removeEventListener('keydown',l)
  },[search])
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


    // const onScroll = e => {
    //   if (noShadowAtTop) {
    //     if (window.pageYOffset <= 0) {
    //       setNoShadow(true);
    //     } else {
    //       setNoShadow(false);
    //     }
    //   }
    //   console.log(window.pageYOffset);
    // };
    // window.addEventListener("scroll", onScroll);

    // return () => window.removeEventListener("scroll", onScroll);

  }, [location]);


  const classes = useStyles();
  const themeStyle = useTheme();


  // Route to render new content
  const routeChange = (path) => {
    history.push(path);
    setSidebar(false);
  }


  // Load Theme when refresh
  if (localStorage.getItem('Theme') === 'false') {
    passTheme(false);
  } else { }

  // Func: Get Title of Current Page
  const getCurrentPageTitle = () => {
    let pathName = window.location.pathname;
    let majorPathName = "/" + pathName.split('/')[1];
    for (let i = 1; i < ListItems.length; i++) { // Ignore /Home
      if (majorPathName === ListItems[i].path) {
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
    <StylesProvider injectFirst>
      <CssBaseline />
      <div className={classes.root}>

        <AppBar
          position="fixed"
          className={clsx(classes.appBar, classes.noShadow)}
          id="Appbar"
        >
          <Toolbar>

            <div
              onClick={() => routeChange("/")}
              className={clsx(classes.appBarLogo, classes.hideWhenWidLessThan600)}
            >
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
                    userSelect: "none",
                    fontFamily: themeStyle.typography.fontFamilyTitle,
                    transform: 'translateY(-.5rem)',
                  }}>
                  Genres
                </Typography>
              </div>
            </div>
            {/* </Link> */}

            <IconButton
              color="primary"
              aria-label="open drawer"
              onClick={toggleSidebar}
              edge="start"
              className={classes.showWhenWidLessThan600}
            >
              <MenuIcon />
            </IconButton>
            <Typography variant="h6" color="primary"
              className={clsx(classes.appBarTitleMobile, classes.showWhenWidLessThan600)}>
              {getCurrentPageTitle() ?
                getCurrentPageTitle()
                :
                "Genres"
              }
            </Typography>

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
                    root: clsx(classes.drawerToggleBtn, classes.hideWhenWidLessThan600),
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
                  className={clsx(classes.menuButton, classes.hideWhenWidLessThan600)}
                >
                  <MenuIcon />
                </IconButton>
            }

            <Divider orientation='vertical' style={{ height: '2rem', marginLeft: '.5rem' }} className={classes.hideWhenWidLessThan1260} />


            { // Show Rankings
              // Check if current page is the same as shortcuts, if so show 'Browse'
              '/' + window.location.pathname.split('/')[1] !== ListItems[2].path
                ? ShortcutNavBtn(2)
                : ShortcutNavBtn(1)
            }
            { // Show Beta Reading
              '/' + window.location.pathname.split('/')[1] !== ListItems[6].path
                ? ShortcutNavBtn(6)
                : ShortcutNavBtn(1)
            }


            <div className={clsx(classes.search, classes.hideWhenWidLessThan900, theme ? classes.search_light : classes.search_dark)}>
              <div className={classes.searchIcon}>
                <SearchIcon />
              </div>
              <InputBase
                placeholder="Search???"
                classes={{
                  root: classes.inputRoot,
                  input: classes.inputInput,
                }}
                inputProps={{ 'aria-label': 'search' }}
                onChange={e=>{
                  setSearch(e.target.value)
                }}
                
              />
            </div>
            {/* <Searchbar items={genres} /> */}


            <div className={classes.grow} />

            <IconButton
              color="primary"
              // onClick={() => routeChange("/mywriting")}
              className={classes.showWhenWidLessThan900}
            >
              <SearchIcon />
            </IconButton>

            <IconButton id="ThemeToggle" aria-label="Toggle Theme" color="primary" onClick={() => {
              setTheme(!theme);
              passTheme(!theme);
              // localStorage.setItem('CurrentTheme', !theme);
            }}>
              {!theme ? <Brightness7Icon /> : <Brightness4Icon />}
            </IconButton>
            {
              mUser && mUser.username ? (
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
                      <Avatar alt={mUser.attributes.name} src={mUser.attributes.avatar} className={classes.appbarAvatar}>
                        {mUser.attributes.name.charAt(0)}
                        {/* I don't know how to have user choose a profile pic yet, so I just display the 1st name char right now - Yining */}
                      </Avatar>
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
              {/* <Auth value={openPopup} onChange={switchPopup} /> */}
              <Authenticator />
            </Popup>
          </Toolbar>
        </AppBar>


        <GenresDrawer open={sidebar} theme={theme} toggleFunc={toggleSidebar} user={user} isUserConfirmRequired={false} loginFunc={switchPopup} activePage={getCurrentPageTitle()} />
      </div>

    </StylesProvider>
  );
}

export default Dashboard;
