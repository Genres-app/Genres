import React from 'react'
import {Typography, Button, TextField,} from '@material-ui/core';
import {makeStyles} from '@material-ui/core/styles';

import {useSelector, useDispatch} from 'react-redux';
import {changeBio} from '../../actions/profile'

//ABOUT: The user's bio that is displayed in the body of the page rather than the banner if viewport width <= 1024.

const useStyles = makeStyles((theme) => ({
      //Changes to aboutContainer width should be reflected in placeHolder width in Banner.jsx
      aboutContainer: {
        backgroundColor: 'none',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        marginTop: '35px',
        marginBottom: '50px',
        '@media (min-width:1025px)': { 
          display: 'none',
        },
      },
      descriptionArea: {
        padding: '0px 5% 0 5%',
        width: '100%',
      },
      aboutLabel: {
        marginBottom: '10px',
        fontSize: '16px',
      },
      divider: {
        marginTop: '15px',
        height: '1px',
        width: '100%',
        borderTop: '1px solid #C0C0C0',
      },
      aboutStats: {
        display: 'flex',
        justifyContent: 'space-around',
        marginTop: '10px',
        '& div': {
        display: 'flex',
        justifyContent: 'space-between',
        width: '20%',
        margin: '12px 0px 12px 0px',
        flexWrap: 'wrap',
        }
      },
      editAbtButton: {
        height: '25px',
        display: 'block',
        padding: '0px 0px',
        fontSize: '12px',
        color: '#666666',
      },
      editCancelButton: {
        height: '25px',
        display: 'block',
        padding: '0px 0px',
        fontSize: '12px',
        color: '#666666',
      },
      buttonContainer: {
          marginTop: '20px',
          display: 'flex',
          justifyContent: 'space-between',
          width: '220px',
      },
      statsLabel: {
        fontSize: '12px', 
        fontWeight: '100',
      },
      statsNumber: {
        fontSize: '12px', 
        fontWeight: '500',
        marginLeft: '3px',
      },
      textField: {
        maxHeight: '100px',
        height: '100px',
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
        marginLeft: '5px',
        fontWeight: 100,
        color: '#757575',
      }
}));

const AboutBody = (props) => {
    const classes = useStyles();

    const bio = useSelector(state => state.profileBio);

    const [oldBio, setOldBio] = React.useState(bio);
    const [isEditting, setIsEditting] = React.useState(false);

    const dispatch = useDispatch();

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

    return (
      <div className = {classes.aboutContainer}> 
    
          <div className={classes.descriptionArea}>
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
              : <div style={{ height: '100px',}}>
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
              : <div style={{display: 'flex', justifyContent: 'space-between',}}>
                  <Typography className={classes.bioLength}>-</Typography>
                  <Button className={classes.editAbtButton} variant='text' size='small' onClick={enterEditMode}>Edit bio</Button>
              </div>
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
  )
}

export default AboutBody
