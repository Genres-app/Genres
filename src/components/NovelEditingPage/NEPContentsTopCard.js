import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { useParams } from 'react-router';
import clsx from 'clsx';
import {
  Menu,
  MenuItem,
  Button,
  IconButton,
  Icon,
  Card,
  Chip,
  Typography,
  TextField,
  Divider,
  List,
  ListItem,
  ListItemIcon,
  Avatar,
  ListItemText,
  ListSubheader,
} from '@material-ui/core/';
import { ToggleButton, ToggleButtonGroup } from '@material-ui/lab/';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';

/*Material-UI Icons*/
import CreateOutlinedIcon from '@material-ui/icons/CreateOutlined';
import SaveIcon from '@material-ui/icons/Save';
import MoreHorizIcon from '@material-ui/icons/MoreHoriz';
import MonetizationOnIcon from '@material-ui/icons/MonetizationOn';
import BookmarkBorderIcon from '@material-ui/icons/BookmarkBorder';
import ThumbUpAltIcon from '@material-ui/icons/ThumbUpAlt';
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder';
import StarBorderIcon from '@material-ui/icons/StarBorder';
import ChatBubbleOutlineIcon from '@material-ui/icons/ChatBubbleOutline';
import AddIcon from '@material-ui/icons/Add';

import MdiIcon from '@mdi/react';
import { mdiPound } from '@mdi/js';

import EditingContentsButtons from './NEPContentsButtons'
import Form from './Form.jsx'
import hexToRgb from '../../utilities/HexToRgb';
import RgbBrightener from '../../utilities/RgbBrightener';

// Data
import { BookLib } from '../BookLib';
import { UserData } from '../UserData';
import GenresTag from '../Widgets/GenresTag';



const useStyles = makeStyles((theme) => ({
  topContainer: {
    // backgroundImage: `url(${SciFi})`,
    paddingTop: '40px',
    paddingBottom: '50px',
    marginTop: '2px',
    width: '100%',
    backgroundColor: () => {
      let rgb = hexToRgb(theme.palette.primary.main)
      return RgbBrightener(rgb.r, rgb.g, rgb.b, .92)
    },
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
    marginLeft: theme.spacing(3),
    display: 'flex',
    position: 'relative',
    flexDirection: 'column',
  },
  divTitleButtons: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },

  divTitleContents: {
    flexGrow: 1,
    display: 'flex',
    flexDirection: 'column',
    // marginRight: theme.spacing(2)
  },
  title: {
    paddingBottom: theme.spacing(1),
  },

  divNovelStatus: {
    display: 'block',
    fontSize: '.8rem',
    fontWeight: 'bold',
    padding: '.2rem .4rem',
    marginRight: theme.spacing(1),
    borderRadius: '.6rem',
    color: theme.palette.background.paper,
    textTransform: 'none',
  },
  statusComplete: {
    backgroundColor: theme.palette.primary.main,
  },
  statusIncomplete: {
    backgroundColor: theme.palette.primary.main,
  },
  statusUnpublished: {
    backgroundColor: theme.palette.primary.main,
  },
  divNovelStatus_Edit: {
    display: 'block',
    fontSize: '.8rem',
    fontWeight: 'bold',
    padding: '.2rem .4rem',
    // marginRight: theme.spacing(1),
    borderRadius: '.6rem',
    color: theme.palette.background.paper,
    textTransform: 'none',
  },

  divAuthorsContainer: {
    display: 'flex',
    alignItems: 'center',
    margin: `${theme.spacing(1)}px 0`,
  },
  divAuthorCard: {
    display: 'flex',
    alignItems: 'center',
    marginRight: theme.spacing(2),
  },
  avatarAuthorCard: {
    marginRight: theme.spacing(1),
  },

  divNovelDataContainer: {
    display: "flex",
    justifyContent: 'space-between',
    width: "100%",
    height: "auto",
    marginTop: theme.spacing(1),
    marginBottom: theme.spacing(1),
    "& > button": {
      width: `calc(33.3% - ${theme.spacing(.67)}px)`,
      // paddingBottom: theme.spacing(.25),
    },
  },
  NovelDataBtnLabel: {
    // '@media (min-width:1024px)': { // when >1024 px

    // },
    // '@media (max-width:1024px)': { // when <1024 px
    //   display: "block"
    // },
  },
  NovelDataBtnIcon: {
    display: "flex",
    marginRight: ".4rem",
    alignItems: 'center',
    justifyContent: 'center',
    "& > svg": {
      marginRight: theme.spacing(1),
    }
  },

  // cardAuthorContainer: {
  //   backgroundColor: theme.palette.background.paper,
  //   height: "9.5rem",
  //   Width: "max-content",
  //   maxWidth: "12rem",
  //   "& > ul > li": {
  //     paddingLeft: theme.spacing(1.5),
  //     paddingRight: theme.spacing(1.5),
  //   }
  // },
  // cardAuthorIcon: {
  //   minWidth: theme.spacing(6),
  // },

  divMoreButton: {
    '@media (min-width:768px)': { // resize text size when <767 px
      display: 'none',
    },
    color: '#505050',
  },
  likeButton: {
    color: '#3bbf9b',
  },
  icon: {
    paddingRight: '5px',
  },

  divBookInfo: {
    position: 'relative',
    paddingTop: theme.spacing(1),
  },
  chipGenres: {
    margin: theme.spacing(0.5),
    marginTop: 0,
    alignItems: 'center',
    fontWeight: 'bold',
    lineHeight: "100%",
  },
  infoEditingBtn: {
    // // position: 'absolute',
    // right: 0,
    // bottom: 0,
    backgroundColor: theme.palette.background.paper,
    "&:hover": {
      backgroundColor: () => {
        let rgb = hexToRgb(theme.palette.background.paper)
        return `rgba(${rgb.r}, ${rgb.g}, ${rgb.b}, .12)`
      },
    }
  },
}));

export default function NEPContentsTopCard() {
  const classes = useStyles();
  const { bookId } = useParams();

  const [isEditing, setIsEditing] = useState(false);


  const handleInput = () => {
    console.log("Saved!");
  }

  const handleChangeStatus = (event) => {
    // setStatus(event.target.value);
  };
  const [user, setUser] = useState(JSON.parse(localStorage.getItem('profile')));
  // handleChange = (event) => this.setValue({
  //   setValue: event.value
  // });

  return (
    <div className={classes.topContainer}>
      <div className={classes.divWholeInfoBox}>
        <div className={classes.divCover}>
          <img className={classes.divCoverPhoto} src={BookLib[bookId].cover} alt="Book Cover" />
        </div>
        <div className={classes.divContents}>
          <div className={classes.divTitleButtons}>
            <div className={classes.divTitleContents}>
              {
                !isEditing ?
                  <Typography className={classes.title} align="left" component="h4" variant="h4">
                    {BookLib[bookId].title}
                  </Typography>
                  :
                  <TextField
                    name="title"
                    label="Title"
                    multiline
                    variant="outlined"
                    defaultValue={BookLib[bookId].title}
                    // onChange={e => setTitle(e.target.value)}
                    style={{
                      marginBottom: ".5rem"
                    }}
                  />
              }
              <div style={{
                display: 'flex',
                flexDirection: 'row',
                // justifyContent: 'space-between',
                alignItems: 'center',
              }}>
                {
                  !isEditing ?
                    <>
                      {
                        BookLib[bookId].status == 1 ?
                          <div className={clsx(classes.divNovelStatus, classes.statusComplete)}>Complete</div>
                          : BookLib[bookId].status == 0 ?
                            <div className={clsx(classes.divNovelStatus, classes.statusIncomplete)}>Incomplete</div>
                            :
                            <div className={clsx(classes.divNovelStatus, classes.statusUnpublished)}>Unpublished</div>
                      }
                      < Typography align="left" variant="subtitle2" color="textPrimary">
                        Last Updated: <Typography display="inline" style={{ color: '#686868' }} variant="body1" >April 12, 2021</Typography>
                      </Typography>
                    </>
                    :
                    <>
                      <ToggleButtonGroup
                        size="small"
                        value={0}
                        exclusive
                        // onChange={}
                        aria-label="NovelStatus"
                      >
                        <ToggleButton value="1" aria-label="NovelStatus Complete" className={clsx(classes.divNovelStatus_Edit, classes.statusComplete)}>
                          Complete
                        </ToggleButton>
                        <ToggleButton value="0" aria-label="NovelStatus Incomplete" className={clsx(classes.divNovelStatus_Edit, classes.statusComplete)}>
                          Incomplete
                        </ToggleButton>
                        <ToggleButton value="2" aria-label="NovelStatus Unpublished" className={clsx(classes.divNovelStatus_Edit, classes.statusComplete)}>
                          Unpublished
                        </ToggleButton>
                      </ToggleButtonGroup>
                    </>
                }

              </div>

              <div className={classes.divAuthorsContainer}>
                {BookLib[bookId].author.map((item, index) => (
                  <div className={classes.divAuthorCard} key={index}>
                    <Avatar className={classes.avatarAuthorCard}>{UserData[item].userName[0]}</Avatar>
                    <Typography noWrap>{UserData[item].userName}</Typography>
                  </div>
                ))
                }
                <AddIcon />

              </div>

              <Divider />
              {
                !isEditing ?
                  <>
                    <div className={classes.divNovelDataContainer}>
                      <Button
                        variant="text"
                        color="primary"
                        startIcon={<><FavoriteBorderIcon />55</>}
                        classes={{
                          label: classes.NovelDataBtnLabel,
                          startIcon: classes.NovelDataBtnIcon,
                        }}
                      >
                        Likes
                      </Button>
                      <Button
                        variant="text"
                        color="primary"
                        startIcon={<><StarBorderIcon />20</>}
                        classes={{
                          label: classes.NovelDataBtnLabel,
                          startIcon: classes.NovelDataBtnIcon,
                        }}
                      >
                        Stars
                      </Button>
                      <Button
                        variant="text"
                        color="primary"
                        startIcon={<><ChatBubbleOutlineIcon />13</>}
                        classes={{
                          label: classes.NovelDataBtnLabel,
                          startIcon: classes.NovelDataBtnIcon,
                        }}
                      >
                        Comments
                      </Button>
                    </div>
                    <Divider />
                  </>
                  :
                  <></>
              }

            </div>

            {/* <Card className={classes.cardAuthorContainer} variant="outlined">
              <List
                subheader={
                  <ListSubheader style={{ height: '2rem', fontSize: '1rem', transform: "translateY(-.2rem)" }}>
                    Author
                  </ListSubheader>
                }
              >
                <ListItem>
                  <ListItemIcon className={classes.cardAuthorIcon}>
                    <Avatar></Avatar>
                  </ListItemIcon>
                  <ListItemText primary={<Typography noWrap>{UserData[BookLib[bookId].author[0]].userName}</Typography>} disableTypography />
                </ListItem>
                <ListItem>
                  <ListItemIcon className={classes.cardAuthorIcon}>
                    <Avatar><AddIcon /></Avatar>
                  </ListItemIcon>
                  <ListItemText primary={"Add..."} />
                </ListItem>
              </List>
            </Card> */}

          </div>

          <div className={classes.divBookInfo}>
            <li style={{ display: 'flex', marginBottom: ".5rem" }}>
              {
                BookLib[bookId].genres.map((item, index) => (
                  GenresTag(item, index, isEditing)
                ))
              }
            </li>

            {
              !isEditing ?
                <>
                  <Typography align="left" variant="subtitle2" color="textPrimary">
                    Synopsis:
                  </Typography>
                  <Typography style={{ color: '#686868' }} variant="body2">{BookLib[bookId].info}</Typography>
                </>
                :
                <>
                  {/* <div style={{}}>
                    <div style={{ marginLeft: '12px', paddingTop: '8px', display: "flex" }}>
                      <Typography style={{ opacity: .8, marginRight: "1rem", paddingTop: ".5rem" }} variant="body1">
                        Status
                      </Typography>

                      <RadioGroup value={
                        BookLib[bookId].status == 1 ?
                          "Complete"
                          : BookLib[bookId].status == 0 ?
                            "Incomplete"
                            :
                            "Unpublished"
                      } onChange={handleChangeStatus} row={true} >
                        <FormControlLabel value="Published" control={<Radio color="primary" />} label="Published" />
                        <FormControlLabel value="Unpublished" control={<Radio color="primary" />} label="UnPublished" />
                      </RadioGroup>
                    </div>
                  </div> */}

                  <TextField
                    name="synopsis"
                    fullWidth
                    label="Synopsis"
                    multiline
                    variant="outlined"
                    defaultValue={BookLib[bookId].info}
                  // onChange={e => setSyno(e.target.value)}
                  />

                </>

            }
          </div>

          <div style={{marginTop: '.5rem', display: 'flex', flexDirection: 'row-reverse'}}>
            {
              !isEditing ?
                <Button onClick={() => setIsEditing(true)} endIcon={<CreateOutlinedIcon />} color="primary" variant="outlined" className={classes.infoEditingBtn}>
                  Edit Info
                </Button>
                :
                <Button onClick={() => { handleInput(); setIsEditing(false) }} endIcon={<SaveIcon />} color="primary" variant="outlined" className={classes.infoEditingBtn}>
                  Save Info
                </Button>
            }
          </div>

        </div>
      </div>
    </div >
  );
}
