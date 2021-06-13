import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import MenuItem from '@material-ui/core/MenuItem';
import Menu from '@material-ui/core/Menu';
import IconButton from '@material-ui/core/IconButton';

import MoreHorizIcon from '@material-ui/icons/MoreHoriz';
import MonetizationOnIcon from '@material-ui/icons/MonetizationOn';
import BookmarkBorderIcon from '@material-ui/icons/BookmarkBorder';

import ThumbUpAltIcon from '@material-ui/icons/ThumbUpAlt';

import SciFi from './Copy of Sci-Fi Book Cover Template - Made with PosterMyWall.jpg';

import ContentsButtons from './NLPContentsButtons'

// Here are the topmost elements of the Novel Landing Page,
// which includes the cover image and text descriptions of a given novel.
// FIXME: the images and text used are STATIC as of now, and must be changed.
// FIXME: this page should be dynamically loaded based on the backend object.

// CSS for the elements of this page are BELOW:
// NOTE: To edit the Tip Author and Save buttons, you must go to
// NLPContentsButtons.js and its stylesheet there.
const useStyles = makeStyles(() => ({
  topContainer: {
    backgroundImage: 'linear-gradient(150deg, #e9fcf9, #eeeefc)',
    paddingTop:'40px',
    paddingBottom:'50px',
    marginTop: '2px',
  },
  divWholeInfoBox: {
    width: '75%',
    display: 'flex',
    '@media (max-width:615px)': { // resize text size when <615 px
      flexDirection: 'column',
      justifyContent: 'center',
    },
    margin: '0 auto',
    maxWidth: '1080px',
  },
  divCover: {
    '@media (max-width:768px)': { // resize text size when <767 px
      maxWidth: '100%',
      position: 'absolute',
      marginLeft: '433px',
      width: '100px',
      height: '100%',
      zIndex: 5,
    },
    '@media (max-width:615px)': { // resize text size when <615 px
      width: '90%',
      height: '100%',
      margin: '0 auto',
      marginBottom: '20px',
      position: 'relative',
    },
    flexDirection: 'column',
    width: '25%',
    height: '100%',
    marginLeft: 'auto',
  },
  divCoverPhoto: {
    maxWidth: '100%',
    maxHeight: '100%',
    margin: 'auto',
    display: 'block',
    filter: 'drop-shadow(2px 2px 2px #000000)',
  },
  divContents: {
    '@media (min-width:1024px)': { // resize text size when >1024 px
      maxWidth: '55%',
    },
    '@media (max-width:1024px)': { // resize text size when <1024 px
      maxWidth: '65%',
    },
    '@media (max-width:768px)': { // resize text size when <767 px
      maxWidth: '100%',
    },
    textAlign: 'left',
    marginRight: 'auto',
    marginLeft: '15px',
    paddingTop: '0px',
    padding:'10px',
  },
  divTitleButtons: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  divMoreButton: {
    '@media (min-width:768px)': { // resize text size when <767 px
      display: 'none',
    },
    color: '#505050',
  },
  text: {
    paddingTop: '5px',
  },
  likeButton: {
    marginTop: '3px',
    color: '#3bbf9b',
  },
  icon: {
    paddingRight: '5px',
  }
}));

export default function NLPContentsTopCard() {
  const classes = useStyles();
  const [anchorEl, setAnchorEl] = React.useState(null);
  const isMenuOpen = Boolean(anchorEl);

  const handleOptionsMenuOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
  };

  const menuId = 'primary-novel-options-menu';

  const renderMenu = (
    <Menu
      anchorEl={anchorEl}
      anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
      id={menuId}
      keepMounted
      transformOrigin={{ vertical: 'top', horizontal: 'right' }}
      open={isMenuOpen}
      onClose={handleMenuClose}
      className={classes.divMoreButton}
    >
      <MenuItem onClick={handleMenuClose}>
        <MonetizationOnIcon className={classes.icon} />Tip Author
      </MenuItem>
      <MenuItem onClick={handleMenuClose}>
        <BookmarkBorderIcon className={classes.icon} />Save
      </MenuItem>
    </Menu>
  );

  return (
    <div className={classes.topContainer}>
      <div className={classes.divWholeInfoBox}>
        <div className={classes.divCover}>
          <img className={classes.divCoverPhoto} src= {SciFi} alt="Book Cover"/>
        </div>
        <div className={classes.divContents}>
          <div className={classes.divTitleButtons}>
            <Typography className={classes.text} align="left" component="h5" variant="h5">
              The Arrivals
            </Typography>
            <ContentsButtons />
            {/* BELOW is the MORE ICONS BUTTON */}
            <IconButton
              edge="end"
              aria-label="bar options"
              aria-controls={menuId}
              onClick={handleOptionsMenuOpen}
              aria-haspopup="true"
              color="primary"
              className={classes.divMoreButton}
            >
            <MoreHorizIcon />
            </IconButton>
            {/* ABOVE is the MORE ICONS BUTTON */}
          </div>

          {/* BELOW is the LIKE BUTTON */}
          {/* FIXME: the like button as of now is only STATIC and
          needs to be fully implemented and connected to be a backend */}
          <Button className={classes.likeButton}>
            <ThumbUpAltIcon className={classes.icon}/>
            99 Thumbs Up
          </Button>
          {/* ABOVE is the LIKE BUTTON */}

          {/* Placeholder Text BELOW: */}
          <Typography align="left" variant="subtitle2" color="textPrimary">
            Author(s): <Typography component="span" display="inline" style={{color: '#686868'}} variant="body1">Lucas Lloyd</Typography>
          </Typography>
          <Typography align="left" variant="subtitle2" color="textPrimary">
            Genre(s): <Typography display="inline" style={{color: '#686868'}} variant="body1">Educational, Sci-Fi, Thriller</Typography>
          </Typography>
          <Typography align="left" variant="subtitle2" color="textPrimary">
            Status: <Typography display="inline" style={{color: '#686868'}} variant="body1">Ongoing</Typography>
          </Typography>
          <Typography align="left" variant="subtitle2" color="textPrimary">
            Last Updated: <Typography display="inline" style={{color: '#686868'}} variant="body1" >April 12, 2021</Typography>
          </Typography>
          <Typography align="left" variant="subtitle2" color="textPrimary">
            Synopsis: <Typography style={{color: '#686868'}} variant="body2">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</Typography>
          </Typography>
        </div>
      </div>
      {renderMenu}
    </div>
  );
}
