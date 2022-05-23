import React from 'react'
import { Typography, Button, TextField, IconButton, } from '@material-ui/core';

import BookmarkString from '../Assets/bookmark_string.svg';
import { makeStyles } from '@material-ui/core/styles';

import { useSelector, useDispatch } from 'react-redux';
import { changeProfilePic, changeBio } from '../../actions/profile';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import Avatar from '@material-ui/core/Avatar';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import ListItemText from '@material-ui/core/ListItemText';

// Icons
import PhotoCameraIcon from '@material-ui/icons/PhotoCamera';
import EditIcon from '@material-ui/icons/Edit';
import CloseIcon from '@material-ui/icons/Close';
import SaveIcon from '@material-ui/icons/Save';
import PortraitIcon from '@material-ui/icons/Portrait';
import PersonIcon from '@material-ui/icons/Person';

//ABOUT: The bookmark containing the user's profile picture and bio that is displayed when viewport width > 1024.
const useStyles = makeStyles((theme) => ({
  //Changes to aboutContainer width should be reflected in placeHolder width in Banner.jsx
  aboutContainer: {
    position: 'sticky',
    float: "left",
    top: 80,
    backgroundColor: 'none',
    height: 'auto',
    width: '286px',
    '@media (max-width:1024px)': {
      display: 'none',
    },
  },
  bio: {
    marginLeft: '26px',
    width: '260px',
    height: '100%',
    backgroundColor: theme.palette.background.paper,
    borderRadius: theme.shape.borderRadius,
    overflow: "hidden",
    boxShadow: theme.shadows[5],
    // boxShadow: '0 6px 20px 0 rgba(0, 0, 0, 0.19)',
  },
  aboutImg: {
    width: 260,
    height: 260,
    objectFit: 'cover',
  },
  profileName: {
    fontFamily: theme.typography.fontFamilyTitle,
    fontWeight: "bold",
  },
  buttonSections: {
    margin: "1rem 0 1rem 0",
    display: "flex",
    justifyContent: "center",

    "& > *:not(:last-child)": {
      marginRight: "1rem",
    }
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
    width: '135px',
    color: 'white',
    letterSpacing: '2px',
    fontSize: '11px',
    fontWeight: '500px',
    backgroundImage: 'linear-gradient(101deg, #A1A6FF, #63FFE6)',
    borderRadius: '50px',
    padding: '6px 40px 6px 40px',
    margin: 0,
    zIndex: 2,
    transition: 'all 0.3s ease 0s',
    boxShadow: '0px 8px 15px rgba(0, 0, 0, 0.1)',
    cursor: 'pointer',
    "&:hover": {
      width: '140px',
      filter: 'brightness(105%)',
      transform: 'translateY(-4px)',
      fontSize: '12px',
      boxShadow: '5px 5px 20px rgba(99, 255, 230, 0.4)',
    },
    "&:active": {
      width: '140px',
      filter: 'brightness(95%)',
      boxShadow: 'none',
    }
  },
  unfollowButton: {
    width: '135px',
    color: 'white',
    letterSpacing: '2px',
    fontSize: '11px',
    fontWeight: '500px',
    backgroundImage: 'linear-gradient(101deg, #A1A6FF, #A1A6FF)',
    borderRadius: '50px',
    padding: '6px 40px 6px 40px',
    margin: 0,
    zIndex: 2,
    transition: 'all 0.3s ease 0s',
    boxShadow: '0px 8px 15px rgba(0, 0, 0, 0.1)',
    cursor: 'pointer',
    "&:hover": {
      width: '140px',
      filter: 'brightness(105%)',
      transform: 'translateY(-4px)',
      fontSize: '12px',
      boxShadow: '5px 5px 20px rgba(99, 255, 230, 0.4)',
    },
    "&:active": {
      width: '140px',
      filter: 'brightness(95%)',
      boxShadow: 'none',
    }
  },
  // editPicButton: {
  //   borderRadius: '50px',
  //   height: '32px',
  //   margin: 0,
  //   boxShadow: '2px 2px 5px rgba(0, 0, 0, 0.1)',
  //   zIndex: 2,
  //   backgroundColor: theme.palette.background.paper,
  //   "&:hover": {
  //     backgroundColor: theme.palette.background.paper,
  //     boxShadow: '2px 2px 10px rgba(0, 0, 0, 0.3)',
  //   },
  // },
  btnBigRoundedCorner: {
    borderRadius: 90,
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
  followStatsTitle: {
    cursor: 'pointer',
    "&:hover": {
      color: theme.palette.primary.main,
    }
  },
  statsLabel: {
    fontSize: '1rem',
    fontFamily: theme.typography.fontFamilyTitle,
  },
  statsNumber: {
    fontSize: '1rem',
    fontFamily: theme.typography.fontFamilyTitle,
    fontWeight: '600',
  },
  bookmarkString: {
    position: 'absolute',
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
  },

  FollowerDialogTitle: {
    color: theme.palette.primary.main,
    "& > h2": {
      fontFamily: theme.typography.fontFamilyTitle,
    }
  }
}));


const AboutBookmark = (props) => {
  const classes = useStyles();

  const profilePic = useSelector(state => state.profilePic);
  const bio = useSelector(state => state.profileBio);

  const [isFollowing, setIsFollowing] = React.useState(false);
  const [oldBio, setOldBio] = React.useState(bio);
  const [isEditting, setIsEditting] = React.useState(false);

  const [isSelf, setIsSelf] = React.useState(true); // FIXME: Change to actual detection.

  var followNums = [114, 514, 233]; // FIXME: Change to actual data

  const [followDialogState, setFollowDialog] = React.useState(0);

  const FollowDialog = ({ state }) => {
    let userList = [];
    for (let i = 0; i < followNums[state - 1]; i++) {
      userList.push(i + 1);
    }

    return (
      <Dialog
        open={state}
        onClose={() => setFollowDialog(0)}
        aria-labelledby="dialog-title"
        aria-describedby="dialog-description"
      >
        <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", paddingRight: ".5rem" }}>
          <DialogTitle id="simple-dialog-title" className={classes.FollowerDialogTitle}>
            {followNums[state - 1]} {state == 1? "Followers": state == 2? "Following" : "Friends"}
            </DialogTitle>
          <IconButton color="primary" onClick={() => setFollowDialog(0)}><CloseIcon /></IconButton>
        </div>
        <div style={{padding: "0 1rem 1rem 1rem", display: "flex", justifyContent: "stretch"}}>
        <TextField label="Search..." variant="filled" size="small" style={{width: "100%"}}/>
        </div>
        <List style={{ overflowX: "scroll", width: '20rem' }}>
          {userList.map((item, i) => (
            <ListItem button onClick={() => setFollowDialog(0)} key={i}>
              <ListItemAvatar>
                <Avatar className={classes.avatar}>
                  <PersonIcon />
                </Avatar>
              </ListItemAvatar>
              <ListItemText primary={`User ${item}`} />
            </ListItem>
          ))}
        </List>
      </Dialog>
    )
  }

  const dispatch = useDispatch();

  const handleProfilePicChange = ({ target }) => {
    const reader = new FileReader();
    if (target.files[0]) {
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
    <div className={classes.aboutContainer}>
      <img className={classes.bookmarkString} src={BookmarkString} alt='bookmark string'></img>
      <div className={classes.bio}>


        <input
          accept="image/*"
          style={{ display: 'none' }}
          id="profileImage"
          type="file"
          onChange={handleProfilePicChange}
        />

        {/* Profile picture to be changed by user */}
        <img className={classes.aboutImg} src={profilePic} alt='profile picture'></img>
        <div style={{ padding: '10px 15px', }}>
          <Typography className={classes.profileName} variant="h5">{props.user.attributes.name}</Typography>
          {/* <Typography className={classes.userName} variant="subtitle1" color="primary">@{props.user.result.username}</Typography> */}

          {/* About biography/description to be changed by user */}
          {isEditting ?
            <TextField className={classes.textField}
              InputProps={{
                classes: { input: classes.resize, },
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
            :
            <div style={{ height: 'auto', }}>
              <Typography className={classes.bioText} variant="body1" color="textSecondary">
                {bio ? bio : `${props.user.attributes.name} hasn't added a bio yet.`}
              </Typography>
            </div>
          }

          {
            isEditting ?
              <div style={{ display: 'flex', justifyContent: 'space-between', }}>
                <Typography className={classes.bioLength}>{bio.length}/150</Typography>
              </div>
              :
              <></>
          }

          <div className={classes.buttonSections}>
            {
              isSelf ?

                isEditting ?
                  <>
                    <Button onClick={cancelEdit} className={classes.btnBigRoundedCorner} variant="outlined" color="primary" endIcon={<CloseIcon />}>Cancel</Button>
                    <Button onClick={saveEdit} className={classes.btnBigRoundedCorner} variant="outlined" color="primary" endIcon={<SaveIcon />}>Save</Button>
                  </>
                  :
                  <>
                    <label htmlFor="profileImage">
                      <Button component="span" className={classes.btnBigRoundedCorner} variant="outlined" color="primary">Edit Pic</Button>
                    </label>
                    <Button onClick={enterEditMode} className={classes.btnBigRoundedCorner} variant="outlined" color="primary" endIcon={<EditIcon />}>Edit Bio</Button>
                  </>

                :

                <>
                  {/* FIXME: Include actual functionality for button to follow/unfollow user*/
                    isFollowing ?
                      <Button disableRipple className={classes.unfollowButton} onClick={handleFollowChange} size='medium'>Unfollow</Button>
                      :
                      <Button disableRipple className={classes.followButton} onClick={handleFollowChange} size='medium'>Follow</Button>}

                  <Button disableRipple className={classes.followButton}>Donate</Button>
                </>
            }
          </div>

          {/*FIXME: Numbers should be fetched from database */}
          <div className={classes.aboutStats}>
            <div onClick={() => setFollowDialog(1)} className={classes.followStatsTitle}>
              <Typography className={classes.statsLabel} variant="subtitle1" >Followers</Typography>
              <Typography className={classes.statsNumber} variant="subtitle1">{followNums[0]}</Typography>
            </div>
            <div onClick={() => setFollowDialog(2)} className={classes.followStatsTitle}>
              <Typography className={classes.statsLabel} variant="subtitle1">Following</Typography>
              <Typography className={classes.statsNumber} variant="subtitle1">{followNums[1]}</Typography>
            </div>
            <div onClick={() => setFollowDialog(3)} className={classes.followStatsTitle}>
              <Typography className={classes.statsLabel} variant="subtitle1">Friends</Typography>
              <Typography className={classes.statsNumber} variant="subtitle1">{followNums[2]}</Typography>
            </div>
          </div>

          <FollowDialog state={followDialogState}/>
        </div>
      </div>
    </div>
  )
}

export default AboutBookmark
