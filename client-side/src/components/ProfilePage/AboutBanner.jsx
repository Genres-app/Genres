import React from 'react'
import {Typography, Button, Menu, MenuItem} from '@material-ui/core';
import {makeStyles} from '@material-ui/core/styles';

import PhotoCameraIcon from '@material-ui/icons/PhotoCamera';
import SettingsIcon from '@material-ui/icons/Settings';
import EditIcon from '@material-ui/icons/Edit';
import MoreVertIcon from '@material-ui/icons/MoreVert';

import {useSelector, useDispatch} from 'react-redux';
import {changeProfilePic, changeBannerPic} from '../../actions/profile'


//ABOUT: Mobile view banner displayed in the profile page if on the profile tab, and viewport width <= 1024.

const useStyles = makeStyles((theme) => ({
      aboutContainer: {
        backgroundColor: 'none',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        '@media (min-width:1025px)': { 
          display: 'none',
        },
      },
      aboutImg: {
        width: '180px',
        height: '180px',
        borderRadius: '100px',
        objectFit: 'cover',
        zIndex: '1',
      },
      followButton: {
        width: '140px',
        color: 'white',
        letterSpacing: '2px',
        fontSize: '12px',
        fontWeight: '500px',
        backgroundImage: 'linear-gradient(101deg, #A1A6FF, #63FFE6)',
        borderRadius: '50px',
        padding: '6px 40px 6px 40px',  
        transition: 'all 0.3s ease 0s',
        boxShadow: '0px 8px 15px rgba(0, 0, 0, 0.1)',
        cursor: 'pointer',
        marginLeft: '20px',
        "&:hover":{
          width: '150px',
          filter: 'brightness(105%)',
          transform: 'translateY(-4px)',
          fontSize: '13px',
          boxShadow: '5px 5px 20px rgba(99, 255, 230, 0.4)',
          marginLeft: '15px',
        },
        "&:active":{
          width: '150px',
          filter: 'brightness(95%)',
          boxShadow: 'none',
          marginLeft: '15px',
        }
      },
      unfollowButton: {
        width: '140px',
        color: 'white',
        letterSpacing: '2px',
        fontSize: '12px',
        fontWeight: '500px',
        backgroundImage: 'linear-gradient(101deg, #A1A6FF, #A1A6FF)',
        borderRadius: '50px',
        padding: '6px 40px 6px 40px',  
        transition: 'all 0.3s ease 0s',
        boxShadow: '0px 8px 15px rgba(0, 0, 0, 0.1)',
        cursor: 'pointer',
        marginLeft: '20px',
        "&:hover":{
          width: '150px',
          filter: 'brightness(105%)',
          transform: 'translateY(-4px)',
          fontSize: '13px',
          boxShadow: '5px 5px 20px rgba(99, 255, 230, 0.4)',
          marginLeft: '15px',
        },
        "&:active":{
          width: '150px',
          filter: 'brightness(95%)',
          boxShadow: 'none',
          marginLeft: '15px',
        }
      },
      buttonContainer: {
          position: 'absolute',
          zIndex: 2,
          marginTop: '140px',
      },
      moreButton: {
        minWidth: '40px',
        borderRadius: '100px',
        height: '40px',
        padding: '0px',
        backgroundColor: theme.palette.background.paper,
        boxShadow: '2px 2px 5px rgba(0, 0, 0, 0.1)',
        "&:hover":{
          backgroundColor: theme.palette.background.paper,
          boxShadow: '2px 2px 10px rgba(0, 0, 0, 0.3)',
        },
      },
      icons: {
        marginRight: '10px',
      },
      nameContainer:{
        marginTop: '15px',
        position: 'relative',
        backgroundColor: 'rgba(31,41,40,0.4)',
        padding: '10px 5% 12px 5%',
        borderRadius: '5px',
        '@media (max-width:480px)': {
            marginTop: '20px',
        },
      },
      profileName: {
        fontSize: '28px',
        fontWeight: '100',
        color: theme.palette.background.paper,
        '@media (max-width:480px)': {
          fontSize: '24px',
        },
      },
      userName: {
        fontSize: '13px',
        fontWeight: '400',
        color: theme.palette.background.paper,
      },
      proTag: {
        backgroundColor: '#F2C94C',
        height: '19px',
        width: '40px',
        textAlign: 'center',
        color: '#F5F5F5',
        borderRadius: '2px',
        paddingTop: '2px',
        marginTop: '2px',
        marginLeft: '8px',
        fontSize: '11px',
        fontWeight: '500',
      },
      flexEnd: {
        width: '100%', 
        display: 'flex', 
        justifyContent: 'flex-end'
      },
}));

const AboutBanner = (props) => {
    const classes = useStyles();

    const [isFollowing, setIsFollowing] = React.useState(false);

    const [anchorEl, setAnchorEl] = React.useState(null);

    const profilePic = useSelector(state => state.profilePic);

    const dispatch = useDispatch();

    const handleMenuClick = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleMenuClose = () => {
        setAnchorEl(null);
    };

    const handleFollowChange = (event) => {
      setIsFollowing(!isFollowing);
    };

    const handleProfilePicChange = ({ target }) => {
        const reader = new FileReader();
        if(target.files[0]) {
          reader.readAsDataURL(target.files[0]);
          reader.onloadend = () => dispatch(changeProfilePic(reader.result));
        }
    };

    const handleBannerPicChange = ({ target }) => {
        const reader = new FileReader();
        if(target.files[0]) {
        reader.readAsDataURL(target.files[0]);
        reader.onloadend = () => dispatch(changeBannerPic(reader.result));
        }
    };

    return (
        <div className = {classes.aboutContainer}> 
            <div className={classes.flexEnd}>
                <Button className={classes.moreButton} aria-controls="banner-menu" aria-haspopup="true" onClick={handleMenuClick}>
                    <MoreVertIcon></MoreVertIcon>
                </Button>
            </div>

            <Menu
                id="banner-menu"
                anchorEl={anchorEl}
                keepMounted
                open={Boolean(anchorEl)}
                onClose={handleMenuClose}
            >
                <input
                    accept="image/*"
                    style={{ display: 'none' }}
                    id="profileImage"
                    type="file"
                    onChange={handleProfilePicChange}
                />
                <label htmlFor="profileImage">
                    <MenuItem component="span" onClick={handleMenuClose}>
                        <PhotoCameraIcon className = {classes.icons} fontSize='small'></PhotoCameraIcon>
                        Edit Photo
                    </MenuItem>
                </label>

                <input
                    accept="image/*"
                    style={{ display: 'none' }}
                    id="bannerImage"
                    type="file"
                    onChange={handleBannerPicChange}
                />
                <label htmlFor="bannerImage">
                    <MenuItem component="span" onClick={handleMenuClose}>
                        <EditIcon className = {classes.icons} fontSize='small'></EditIcon>
                        Edit Banner
                    </MenuItem>
                </label>

                <MenuItem onClick={handleMenuClose}>
                    <SettingsIcon className = {classes.icons} fontSize='small'></SettingsIcon>
                    Settings
                </MenuItem>
            </Menu>
        
            <div style={{display: 'flex'}}>
                <img className={classes.aboutImg} src={profilePic} alt='profile picture'></img>

                <div className={classes.buttonContainer}>
                    { isFollowing? <Button disableRipple className = {classes.unfollowButton} onClick={handleFollowChange}size='medium'>Unfollow</Button> 
                    : <Button disableRipple className = {classes.followButton} onClick={handleFollowChange} size='medium'>Follow</Button>
                    }
                </div>
            </div>

            <div className = {classes.nameContainer}>        
                <div style={{display: 'flex'}}>
                    {/*FIXME: change code to get user's name based on appropriate db schema of passed in user prop*/}
                    <Typography className = {classes.profileName} variant = "h4" align="left">{props.user.result.name}</Typography>
                    {/*FIXME:  dynamically display pro tag if user is a pro user, based on isPro bool in passed in user prop*/}
                    <div className={classes.proTag}>PRO</div>
                </div>
                {/*FIXME: change code to get username based on appropriate db schema of passed in user prop*/}
                <Typography className = {classes.userName} variant = "h6" align="left">@{props.user.result.username}</Typography>
            </div>
        </div>
    )
}

export default AboutBanner
