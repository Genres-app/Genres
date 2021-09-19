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
    margin: "0 0 0 0",
    paddingRight: 0,
    // "&:hover": {
    //     filter: 'blur(10px) brightness(.5)',
    // }
},
}));

export default function NestedGrid() {
  const classes = useStyles();

  function SingleBook() {
    return (
      <div style = {{}}>
      <React.Fragment>
        <Grid >
        <Card className={classes.cardRoot}>
      <CardActionArea>
        <CardMedia
          className={classes.cardMedia}
          image={cover1}
        />
      </CardActionArea>
      <CardActions>
        <Button size="small" color="primary" style={{marginLeft:'5vw'}}>
        <MoreVertIcon/>
        </Button>
      </CardActions>
    </Card>
        </Grid>
      </React.Fragment>
      </div>
    );
  }

  return (
    <div className={classes.root} style={{marginTop:100}} >
      <div  >
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
    </div>
  );
}