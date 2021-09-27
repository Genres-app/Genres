import React from 'react';
import { makeStyles, withStyles } from '@material-ui/core/styles';
import {
  Card,
  CardMedia,
  CardActionArea,
  CardContent,
  CardActions,
  IconButton,
  Menu,
  MenuItem,
  ListItemIcon,
  ListItemText,
  Container,
} from '@material-ui/core';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

// Icons
import MoreVertIcon from '@material-ui/icons/MoreVert';
import HistoryIcon from '@material-ui/icons/History';
import PublishIcon from '@material-ui/icons/Publish';
import DeleteForeverIcon from '@material-ui/icons/DeleteForever';
import AddIcon from '@material-ui/icons/Add';

// Data
import { BookLib } from '../BookLib';
import { writingDraftList } from './WritingTransitionData';
import { Typography } from '@material-ui/core';

// Page
import { NavLink } from 'react-router-dom';




const StyledMenu = withStyles({
  paper: {
    border: '1px solid #d3d4d5',
  },
})((props) => (
  <Menu
    elevation={0}
    getContentAnchorEl={null}
    anchorOrigin={{
      vertical: 'bottom',
      horizontal: 'center',
    }}
    transformOrigin={{
      vertical: 'top',
      horizontal: 'center',
    }}
    {...props}
  />
));

const StyledMenuItem = withStyles((theme) => ({
  root: {
    '&:focus': {
      backgroundColor: theme.palette.primary.main,
      '& .MuiListItemIcon-root, & .MuiListItemText-primary': {
        color: theme.palette.common.white,
      },
    },
  },
}))(MenuItem);


const useStyles = makeStyles((theme) => ({
  root: {
    minWidth: 250,
    width: 1266, // 6 in a row
    "@media (max-width: 1688px)": { // 5 in a row
      width: 1063,
    },
    "@media (max-width: 1417px)": { // 4 in a row
      width: 860,
    },
    "@media (max-width: 1147px)": { // 3 in a row
      width: 657,
    }
  },
  bookList: {
    display: "flex",
    flexWrap: "wrap",
    width: "100%",
    margin: "auto",
  },
  addNewCard: {
    display: "flex",
    flexDirection: "column",
    height: "100%",
    alignItems: "center",
  },
  customPlusIcon: {
    position: 'relative',
    width: 56, 
    height: 56,
    marginTop: theme.spacing(2),
    marginBottom: theme.spacing(2),
    backgroundImage: "linear-gradient(150deg, rgb(166 143 253), rgb(166 143 253) 20%, rgb(99, 255, 230) 80%, rgb(99, 255, 230))",
    "& > div": {
      position: "absolute",
      width: "42.86%",
      height: "42.86%",
      backgroundColor: "#fff"
    }
  },
  cardRoot: {
    margin: theme.spacing(1),
    width: 187,
    borderRadius: 0,
  },
  cardMedia: {
    height: 300,
    width: 187, //187.44
  },
  cardContent: {
    padding: theme.spacing(1),
    paddingTop: theme.spacing(1.5),
    paddingBottom: theme.spacing(.5),
  },
  cardActions: {
    paddingTop: theme.spacing(.5),

    "& > svg": {
      opacity: .75,
    }
  },
  lastChange: {
    paddingTop: theme.spacing(.25),
  },
  media: {
  },
}));

export default function Body() {
  const classes = useStyles();

  const SingleBook = ({ bookId }) => {
    const [anchorEl, setAnchorEl] = React.useState(null);
    const handleClick = (event) => {
      setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
      setAnchorEl(null);
    };

    return (
      <Card variant="outlined" className={classes.cardRoot}>

        <CardActionArea>
          <NavLink to="/NovelEditing">
            <CardMedia
              className={classes.cardMedia}
              image={BookLib[bookId].cover}
            />
          </NavLink>
        </CardActionArea>


        <CardContent className={classes.cardContent}>
          <Typography variant="subtitle2" noWrap>
            {BookLib[bookId].title}
          </Typography>
        </CardContent>
        <CardActions className={classes.cardActions}>
          <HistoryIcon fontSize="small" />
          <Typography variant="caption" noWrap className={classes.lastChange}>
            Sep.19 2021
          </Typography>
          <div style={{ flexGrow: 1 }}></div>
          <IconButton
            aria-label="more"
            onClick={handleClick}
            size="small"
          >
            <MoreVertIcon />
          </IconButton>
          <StyledMenu
            id="customized-menu"
            anchorEl={anchorEl}
            keepMounted
            open={Boolean(anchorEl)}
            onClose={handleClose}
          >
            <StyledMenuItem>
              <ListItemIcon>
                <PublishIcon fontSize="small" />
              </ListItemIcon>
              <ListItemText primary="Publish" />
            </StyledMenuItem>
            <StyledMenuItem>
              <ListItemIcon>
                <DeleteForeverIcon fontSize="small" />
              </ListItemIcon>
              <ListItemText primary="Delete" />
            </StyledMenuItem>
          </StyledMenu>
        </CardActions>
      </Card>
    );
  }

  return (
    <Container className={classes.root}>
      <div style={{ height: 100, display: "flex", alignItems: "center" }}>
        <Typography variant="h5">
          Unpublished
        </Typography>
      </div>
      <div className={classes.bookList}>

        <Card variant="outlined" className={classes.cardRoot}>
          <CardActionArea className={classes.addNewCard}>
            <div className={classes.customPlusIcon}>
              <div style={{left: 0}}></div>
              <div style={{right: 0}}></div>
              <div style={{bottom: 0}}></div>
              <div style={{bottom: 0, right: 0}}></div>
            </div>
            <Typography variant="button">Start New Book</Typography>
          </CardActionArea>
        </Card>
        {
          writingDraftList.map((item, index) => (
            <SingleBook bookId={item} />
          ))
        }
      </div>

      <div style={{ height: 100, display: "flex", alignItems: "center" }}>
        <Typography variant="h5">
          Published
        </Typography>
      </div>
      <div className={classes.bookList}>
        {
          writingDraftList.map((item, index) => (
            <SingleBook bookId={item} />
          ))
        }
      </div>
    </Container>
  );
}