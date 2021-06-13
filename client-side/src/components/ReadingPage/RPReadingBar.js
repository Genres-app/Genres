import React, { useState } from 'react';
import { makeStyles} from '@material-ui/core/styles';
import PropTypes from 'prop-types';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import useScrollTrigger from '@material-ui/core/useScrollTrigger';
import Slide from '@material-ui/core/Slide';
import IconButton from '@material-ui/core/IconButton';
import MenuItem from '@material-ui/core/MenuItem';
import Menu from '@material-ui/core/Menu';

import MoreHorizIcon from '@material-ui/icons/MoreHoriz';
import TitleIcon from '@material-ui/icons/Title';
import TextFieldsIcon from '@material-ui/icons/TextFields';
import FullscreenIcon from '@material-ui/icons/Fullscreen';
import ArrowBackIcon from '@material-ui/icons/ArrowBack';
import MoreIcon from '@material-ui/icons/More';

import RPProgressIndicator from './RPProgressIndicator'

// The appbar here goes at the top of every chapter pg. for a given book.
// FIXME: the title and chapter of this page are currently STATIC.
// FIXME: many of the buttons of this page still need full functionality.

// BELOW: handle appbar hiding on scroll
function HideOnScroll(props) {
  const { children, window } = props;
  const trigger = useScrollTrigger({ target: window ? window() : undefined });

  return (
    <Slide appear={false} direction="down" in={!trigger}>
      {children}
    </Slide>
  );
}
HideOnScroll.propTypes = {
  children: PropTypes.element.isRequired,
  window: PropTypes.func,
};
// ABOVE: handle appbar hiding on scroll

// CSS BELOW:
const useStyles = makeStyles(() => ({
  // SHOULD START TO APPLY MEDIA QUERIES AFTER <1120px
  grow: {
    flexGrow: 1,
  },
  readBar: {
    backgroundColor: 'white',
    position: 'fixed',
    zIndex: 2,
  },
  container: {
    backgroundColor: 'white',
    display: 'flex',
    minWidth: '375px',
    '@media (min-width:1120px)': { // eslint-disable-line no-useless-computed-key
      minWidth: '1080px',
    },
    margin: '0 auto',
  },
  back: {
    maxWidth: '375px',
    margin: 'auto',
    color: '#505050', 
  },
  options: {
    color: '#505050',
  },
  title: {
    margin: 'auto',
    color: '#505050',
    paddingRight: '65px',
    '@media (max-width:3675px)': { // hide buttons when <800 px
      paddingRight: '120px',
    },
  },
  toggle: {
    color: '#a0a0a0',
    '&:hover': {
      color: "#707371",
    },
    margin: 'auto',
    visibility: 'visible',
    width: '50px',
  },
  toggleOnBar: {
    position: 'fixed',
    zIndex: 0,
    height: '25px',
    marginTop: '60px',
    width: '0%',
    '@media (min-width:1024px)': { // resize text size when >1024 px
      marginLeft: '75px',
    },
    '@media (max-width:1024px)': { // resize text size when <1024 px
      marginLeft: '10px',
    },
  },
  up: {
    color: '#505050',
  },
  icon:{
    paddingRight: '10px',
  },
  chapter: {
    paddingLeft: '5px'
  },
  behind: {
    position: 'fixed',
    zIndex: 1,
  },
}));

export default function HideAppBar(props) {
  const classes = useStyles();
  const [anchorEl, setAnchorEl] = React.useState(null);

  const [showBar, setShowBar] = useState(true)

  // BELOW: handle menu rendering
  const isMenuOpen = Boolean(anchorEl);
  const handleOptionsMenuOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
  };

  const handleFullscreen = () => {
    setAnchorEl(null);
    setShowBar(!showBar);
  };

  const menuId = 'primary-reading-settings-menu';

  const renderMenu = (
    <Menu
      anchorEl={anchorEl}
      anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
      id={menuId}
      keepMounted
      transformOrigin={{ vertical: 'top', horizontal: 'right' }}
      open={isMenuOpen}
      onClose={handleMenuClose}
    >
      <MenuItem onClick={handleMenuClose}>
        <TitleIcon className={classes.icon} />Font Style
      </MenuItem>
      <MenuItem onClick={handleMenuClose}>
        <TextFieldsIcon className={classes.icon} />Font Size
      </MenuItem>
      <MenuItem onClick={handleFullscreen}>
        <FullscreenIcon className={classes.icon} />Toggle Appbar
      </MenuItem>
    </Menu>
  );
  // ABOVE: handle menu rendering

  return (
    <React.Fragment>
      <HideOnScroll {...props}>
        <AppBar className={classes.readBar}>
          {showBar?<Toolbar>

            <IconButton
              href="/novel"
              edge="end"
              aria-label="go back to contents"
              color="primary"
            >
              <ArrowBackIcon className={classes.back} />
            </IconButton>


            <div className={classes.container}>
              <IconButton
                edge="end"
                aria-label="bar options"
                aria-controls={menuId}
                aria-haspopup="true"
                onClick={handleOptionsMenuOpen}
                color="primary"
              >
                <MoreHorizIcon className={classes.options} />
              </IconButton>
              
              <Typography 
                className={classes.title}
                align="center" 
                component="h6" 
                variant="h6"
              >
                The Arrivals
                <Typography 
                  className={classes.chapter} 
                  component="span" 
                  display="inline" 
                  color="textPrimary" 
                  variant="body1"
                >
                  Chapter X
                </Typography>
              </Typography>
            </div>
          !</Toolbar>
          :
            <IconButton
              edge="end"
              aria-label="hide app bar"
              onClick={handleOptionsMenuOpen}
              color="primary"
              className={classes.toggleOnBar}
            >
              <MoreIcon className={classes.toggle} />
            </IconButton>
          }
          <RPProgressIndicator />
        </AppBar>
      </HideOnScroll>
      <AppBar className={classes.behind}>
        <RPProgressIndicator />
      </AppBar>
      {renderMenu}
    </React.Fragment>
  );
}