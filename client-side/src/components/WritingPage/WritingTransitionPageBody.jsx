import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';

import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import cover1 from '../Assets/bookcover1.jpg';
import cover2 from '../Assets/bookcover2.jpg';
import cover3 from '../Assets/bookcover3.jpg';
import cover4 from '../Assets/bookcover4.jpg';
import cover5 from '../Assets/bookcover5.jpg';
import cover6 from '../Assets/bookcover6.jpg';
import cover7 from '../Assets/bookcover7.jpg';
import { withStyles } from '@material-ui/core/styles';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import InboxIcon from '@material-ui/icons/MoveToInbox';
import DraftsIcon from '@material-ui/icons/Drafts';
import SendIcon from '@material-ui/icons/Send';

const StyledMenu = withStyles({
  paper: {
    border: '1px solid #d3d4d5',
  },
})((props) => (
  <Menu
    elevation={0}
    getContentAnchorEl={null}
    left= '50%'
    transform= 'translateX(10px) translateY(50px)'
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
    flexGrow: 1,
    margin: "auto",

  },
  cardRoot: {
    maxWidth: '673px',

  },
  cardMedia: {
    height: '22vh',

  },
  paper: {
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },
  media: {
    height: '300px',
    width: '200px',
    display: 'block',
    transition: 'filter .2s',
    margin: 0,
    paddingRight: 0,
    // "&:hover": {
    //     filter: 'blur(10px) brightness(.5)',
    // }
},
}));

export default function NestedGrid() {
  const classes = useStyles();

  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };


  function SingleBook() {
    return (
      <div style = {{}}>
        <Card className={classes.cardRoot}>

        <CardMedia
          className={classes.cardMedia}
          image={cover1}
        />

      <CardActions>
        <Button size="small" 
        color="primary" 
        style={{marginLeft:'5vw'}}         
        onClick={handleClick}>
        <MoreVertIcon/>
        </Button>
        <StyledMenu
        id="customized-menu"
        getContentAnchorEl={null}
        anchorEl={anchorEl}
        keepMounted
        open={Boolean(anchorEl)}
        onClose={handleClose}
      >
        <StyledMenuItem>
          <ListItemIcon>
            <SendIcon fontSize="small" />
          </ListItemIcon>
          <ListItemText primary="Edit" />
        </StyledMenuItem>
        <StyledMenuItem>
          <ListItemIcon>
            <DraftsIcon fontSize="small" />
          </ListItemIcon>
          <ListItemText primary="Save As" />
        </StyledMenuItem>
        <StyledMenuItem>
          <ListItemIcon>
            <InboxIcon fontSize="small" />
          </ListItemIcon>
          <ListItemText primary="Delete" />
        </StyledMenuItem>
      </StyledMenu>
      </CardActions>
    </Card>
      </div>
    );
  }

  return (
    <div className={classes.root} style={{marginTop:100}} >

      <Grid container item xs={12} spacing={3} justify = "center" >
        <Grid container item xs={1} style={{marginRight:'3.5vw'}}>
          <SingleBook />
        </Grid>
        <Grid container item xs={1} style={{marginRight:'3.5vw'}}>
          <SingleBook />
        </Grid>
        <Grid container item xs={1} style={{marginRight:'3.5vw'}}>
          <SingleBook />
        </Grid>
        <Grid container item xs={1} style={{marginRight:'3.5vw'}}>
          <SingleBook />
        </Grid>
        <Grid container item xs={1} style={{marginRight:'3.5vw'}}>
          <SingleBook />
        </Grid>
        <Grid container item xs={1} style={{marginRight:'3.5vw'}}>
          <SingleBook />
        </Grid>
      </Grid>

    </div>
  );
}