import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import {
  Menu,
  MenuItem,
  Button,
  IconButton,
  Typography,
  TextField,
} from '@material-ui/core/';

/*Material-UI Icons*/
import CreateOutlinedIcon from '@material-ui/icons/CreateOutlined';
import SaveIcon from '@material-ui/icons/Save';
import MoreHorizIcon from '@material-ui/icons/MoreHoriz';
import MonetizationOnIcon from '@material-ui/icons/MonetizationOn';
import BookmarkBorderIcon from '@material-ui/icons/BookmarkBorder';
import ThumbUpAltIcon from '@material-ui/icons/ThumbUpAlt';

import SciFi from './Copy of Sci-Fi Book Cover Template - Made with PosterMyWall.jpg';

import EditingContentsButtons from './NEPContentsButtons'
import Form from './Form.jsx'




const useStyles = makeStyles(() => ({
  topContainer: {
    // backgroundImage: `url(${SciFi})`,
    paddingTop: '40px',
    paddingBottom: '50px',
    marginTop: '2px',
    width: '100%',
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
      width: '55%',
    },
    '@media (max-width:1024px)': { // resize text size when <1024 px
      width: '65%',
    },
    '@media (max-width:768px)': { // resize text size when <767 px
      width: '100%',
    },
    textAlign: 'left',
    marginRight: 'auto',
    marginLeft: '15px',
    paddingTop: '0px',
    padding: '10px',
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
  },
}));



export default function NEPContentsTopCard() {
  const classes = useStyles();

  const [title, setTitle] = useState('The Arrivals');
  const [isEditing, setIsEditing] = useState(false);
  const [status, setStatus] = useState('Unpublished');
  const [synopsis, setSyno] = useState('Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.');
  const [author, setAuthor] = useState('Mike');
  const [genres, setGenres] = useState('Horror');

  const handleInput = () => {
    console.log("Saved!");
  }

  return (
    <div className={classes.topContainer}>
      <div className={classes.divWholeInfoBox}>
        <div className={classes.divCover}>
          <img className={classes.divCoverPhoto} src={SciFi} alt="Book Cover" />
        </div>
        <div className={classes.divContents}>
          <div className={classes.divTitleButtons}>
            <Typography className={classes.text} align="left" component="h5" variant="h5">
              {title}
            </Typography>
            {
              !isEditing ?
                <Button onClick={() => setIsEditing(true)} endIcon={<CreateOutlinedIcon />} color="primary" variant="contained">
                  Edit Info
                </Button>
                :
                <Button onClick={() => { handleInput(); setIsEditing(false) }} endIcon={<SaveIcon />} color="primary" variant="contained">
                  Save Info
                </Button>
            }
          </div>

          {/* BELOW is the LIKE BUTTON */}
          {/* FIXME: the like button as of now is only STATIC and
          needs to be fully implemented and connected to be a backend */}
          <Button className={classes.likeButton}>
            <ThumbUpAltIcon className={classes.icon} />
            99 Thumbs Up
          </Button>
          {/* ABOVE is the LIKE BUTTON */}

          {/* Placeholder Text BELOW: */}
          
            

            {
              !isEditing ?

                <>

                <Typography align="left" variant="subtitle2" color="textPrimary">
                  Author(s):
                </Typography>
                <Typography style={{ color: '#686868' }} variant="body2">{author}</Typography>

                <Typography align="left" variant="subtitle2" color="textPrimary">
                  Genre(s):
                </Typography>
                <Typography style={{ color: '#686868' }} variant="body2">{genres}</Typography>

                <Typography align="left" variant="subtitle2" color="textPrimary">
                  Status:
                </Typography>
                <Typography style={{ color: '#686868' }} variant="body2">{status}</Typography>

                <Typography align="left" variant="subtitle2" color="textPrimary">
                  Last Updated: <Typography display="inline" style={{ color: '#686868' }} variant="body1" >April 12, 2021</Typography>
                </Typography>

                  <Typography align="left" variant="subtitle2" color="textPrimary">
                    Synopsis:
                </Typography>
                  <Typography style={{ color: '#686868' }} variant="body2">{synopsis}</Typography>

                </>

                :
                
                <>

                  <TextField
                  name="title"
                  fullWidth
                  label="title"
                  multiline
                  variant="filled"
                  defaultValue={title}
                  onChange={e => setTitle(e.target.value)}
                />

                <TextField
                  name="author"
                  fullWidth
                  label="author"
                  multiline
                  variant="filled"
                  defaultValue={author}
                  onChange={e => setAuthor(e.target.value)}
                />

                <TextField
                  name="genres"
                  fullWidth
                  label="genres"
                  multiline
                  variant="filled"
                  defaultValue={genres}
                  onChange={e => setGenres(e.target.value)}
                />
                
                <TextField
                  name="status"
                  fullWidth
                  label="status"
                  multiline
                  variant="filled"
                  defaultValue={status}
                  onChange={e => setStatus(e.target.value)}
                />

                <TextField
                  name="synopsis"
                  fullWidth
                  label="Synopsis"
                  multiline
                  variant="filled"
                  defaultValue={synopsis}
                  onChange={e => setSyno(e.target.value)}
                />

                </>
                
            }
          
        </div>
      </div>
    </div>
  );
}
