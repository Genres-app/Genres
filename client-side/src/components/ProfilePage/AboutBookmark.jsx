import React from 'react'
import {Typography, Button, TextField,} from '@material-ui/core';
import PhotoCameraIcon from '@material-ui/icons/PhotoCamera';
import BookmarkString from '../Assets/bookmark_string.svg'
import {makeStyles} from '@material-ui/core/styles';

import {useSelector, useDispatch} from 'react-redux';
import {changeProfilePic, changeBio} from '../../actions/profile'

//ABOUT: The bookmark containing the user's profile picture and bio that is displayed when viewport width > 1024.
const useStyles = makeStyles((theme) => ({
      //Changes to aboutContainer width should be reflected in placeHolder width in Banner.jsx
      aboutContainer: {
        position: 'absolute',
        backgroundColor: 'none',
        height: '650px',
        width: '286px',
        '@media (max-width:1024px)': { 
          display: 'none',
        },
      },
      aboutImg: {
        width: '100%',
        height: '50%',
        objectFit: 'cover',
      },
      aboutLabel: {
        marginBottom: '10px',
        fontSize: '12px',
      },
      divider: {
        marginTop: '15px',
        height: '1px',
        width: '100%',
        borderTop: '1px solid #C0C0C0',
      },
      aboutStats: {
        padding: '12px 10px 0px 10px',
        '& div': {
        display: 'flex',
        justifyContent: 'space-between',
        width: '100%',
        margin: '12px 0px 12px 0px',
        }
      },
      followButton: {
        position: 'absolute',
        width: '135px',
        color: 'white',
        letterSpacing: '2px',
        fontSize: '11px',
        fontWeight: '500px',
        backgroundImage: 'linear-gradient(101deg, #A1A6FF, #63FFE6)',
        borderRadius: '50px',
        padding: '6px 40px 6px 40px',  
        margin: '280px 0px 0px 10px',
        zIndex: 2,
        transition: 'all 0.3s ease 0s',
        boxShadow: '0px 8px 15px rgba(0, 0, 0, 0.1)',
        cursor: 'pointer',
        "&:hover":{
          width: '140px',
          filter: 'brightness(105%)',
          transform: 'translateY(-4px)',
          fontSize: '12px',
          boxShadow: '5px 5px 20px rgba(99, 255, 230, 0.4)',
        },
        "&:active":{
          width: '140px',
          filter: 'brightness(95%)',
          boxShadow: 'none',
        }
      },
      unfollowButton: {
        position: 'absolute',
        width: '135px',
        color: 'white',
        letterSpacing: '2px',
        fontSize: '11px',
        fontWeight: '500px',
        backgroundImage: 'linear-gradient(101deg, #A1A6FF, #A1A6FF)',
        borderRadius: '50px',
        padding: '6px 40px 6px 40px',  
        margin: '280px 0px 0px 10px',
        zIndex: 2,
        transition: 'all 0.3s ease 0s',
        boxShadow: '0px 8px 15px rgba(0, 0, 0, 0.1)',
        cursor: 'pointer',
        "&:hover":{
          width: '140px',
          filter: 'brightness(105%)',
          transform: 'translateY(-4px)',
          fontSize: '12px',
          boxShadow: '5px 5px 20px rgba(99, 255, 230, 0.4)',
        },
        "&:active":{
          width: '140px',
          filter: 'brightness(95%)',
          boxShadow: 'none',
        }
      },
      editPicButton: {
        position: 'absolute',
        borderRadius: '50px',
        height: '32px',
        margin: '280px 0px 0px 185px',
        boxShadow: '2px 2px 5px rgba(0, 0, 0, 0.1)',
        zIndex: 2,
        backgroundColor: theme.palette.background.paper,
        "&:hover":{
          backgroundColor: theme.palette.background.paper,
          boxShadow: '2px 2px 10px rgba(0, 0, 0, 0.3)',
        },
        
      },
      editAbtButton: {
        display: 'block',
        padding: '0px 0px',
        fontSize: '12px',
        marginLeft: '165px',
        color: '#666666'
      },
      editCancelButton: {
        display: 'block',
        padding: '0px 0px',
        fontSize: '12px',
        color: '#666666'
      },
      statsLabel: {
        fontSize: '13px', 
        fontWeight: '100',
      },
      statsNumber: {
        fontSize: '13px', 
        fontWeight: '500',
      },
      bookmarkString: {
        position: 'absolute',
      },
      bio: {
        marginLeft: '26px',
        width: '260px',
        height: '100%',
        backgroundColor: theme.palette.background.paper,
        boxShadow: '0 6px 20px 0 rgba(0, 0, 0, 0.19)',
      },
      textField: {
        maxHeight: '110px',
        height: '110px',
      },
      resize: {
        fontSize: '13px',
        color: '#757575'
      },
      bioText: {
        fontSize: '13px', 
        wordWrap: 'break-word'
      },
      bioLength: {
        fontSize: '13px',
        marginTop: '2px',
        marginLeft: '10px',
        fontWeight: 100,
        color: '#757575',
      }
}));


const AboutBookmark = (props) => {
    const classes = useStyles();

    const profilePic = useSelector(state => state.profilePic);
    const bio = useSelector(state => state.profileBio);

    const [isFollowing, setIsFollowing] = React.useState(false);
    const [oldBio, setOldBio] = React.useState(bio);
    const [isEditting, setIsEditting] = React.useState(false);

    const dispatch = useDispatch();

    const handleProfilePicChange = ({ target }) => {
      const reader = new FileReader();
      if(target.files[0]) {
        reader.readAsDataURL(target.files[0]);
        reader.onloadend = () => dispatch(changeProfilePic(reader.result));
      }
    };

    const saveEdit = (event) => {
      setIsEditting(false);
    };

    const cancelEdit = (event) => {
      dispatch(changeBio(oldBio));
      setIsEditting(false);
    };

    const enterEditMode = (event) => {
      setOldBio(bio);
      setIsEditting(true);
    };

    const handleFollowChange = (event) => {
      setIsFollowing(!isFollowing);
    };

    return (
        <div className = {classes.aboutContainer}> 
            <img className={classes.bookmarkString} src={BookmarkString} alt='bookmark string'></img>
            <div className = {classes.bio}>
              {/* FIXME: Include actual functionality for button to follow/unfollow user*/}
              { isFollowing? <Button disableRipple className = {classes.unfollowButton} onClick={handleFollowChange}size='medium'>Unfollow</Button> 
              : <Button disableRipple className = {classes.followButton} onClick={handleFollowChange} size='medium'>Follow</Button>
              }

              <input
                  accept="image/*"
                  style={{ display: 'none' }}
                  id="profileImage"
                  type="file"
                  onChange={handleProfilePicChange}
              />
              <label htmlFor="profileImage">
                  <Button component="span" className = {classes.editPicButton} size='medium'><PhotoCameraIcon></PhotoCameraIcon></Button>
              </label>

              {/* Profile picture to be changed by user */}
              <img className = {classes.aboutImg} src={profilePic} alt='profile picture'></img>
              <div style={{padding: '10px 15px',}}>
                  <Typography className={classes.aboutLabel} variant="h6">ABOUT</Typography>
                  
                  
                  {/* About biography/description to be changed by user */}
                  { isEditting ? <TextField className={classes.textField} 
                                    InputProps={{
                                      classes: {input: classes.resize,},
                                      disableUnderline: true,
                                    }}
                                    inputProps={{
                                      maxLength: 150,
                                    }}
                                    value={bio}
                                    autoFocus
                                    fullWidth
                                    multiline
                                    rows={5} 
                                    rowsMax={5}
                                    variant="standard" 
                                    onChange={(event) => dispatch(changeBio(event.target.value))}
                                  />
                  : <div style={{ height: '110px',}}>
                        <Typography className={classes.bioText} variant = "body1" color = "textSecondary">
                          { bio? bio: `${props.user.result.name} hasn't added a bio yet.`}
                        </Typography>
                    </div> 
                  }

                  { isEditting? <div style={{display: 'flex', justifyContent: 'space-between',}}>
                      <Typography className={classes.bioLength}>{bio.length}/150</Typography>
                      <div style={{display: 'flex'}}>
                        <Button className={classes.editCancelButton} variant='text' size='small' onClick={cancelEdit}>Cancel</Button>
                        <Button className={classes.editCancelButton} variant='text' size='small' onClick={saveEdit}>Save</Button>
                      </div>
                  </div>
                  : <Button className={classes.editAbtButton} variant='text' size='small' onClick={enterEditMode}>Edit bio</Button>
                  }

                  <div className={classes.divider}></div>
                  
                  {/*FIXME: Numbers should be fetched from database */}
                  <div className={classes.aboutStats}>
                      <div>
                          <Typography className={classes.statsLabel} variant="subtitle1" >FOLLOWERS</Typography>
                          <Typography className={classes.statsNumber} variant="subtitle1">100</Typography>
                      </div>
                      <div>
                          <Typography className={classes.statsLabel} variant="subtitle1">FOLLOWING</Typography>
                          <Typography className={classes.statsNumber} variant="subtitle1">100</Typography>
                      </div>
                      <div> 
                          <Typography className={classes.statsLabel} variant="subtitle1">FRIENDS</Typography>
                          <Typography className={classes.statsNumber} variant="subtitle1">100</Typography>
                      </div>
                  </div>
              </div>
            </div>
        </div>
    )
}

export default AboutBookmark
