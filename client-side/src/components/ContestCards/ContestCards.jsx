import React from 'react'
import { Typography, Card, CardContent, Grid, Icon } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles'
import AccessTimeIcon from '@material-ui/icons/AccessTime';
import corgi from '../Assets/corgi.jpg';
import { useDispatch } from 'react-redux';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';

import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';



const useStyles = makeStyles({
  root: {
    display: "block",
    minWidth: 250,
    // height: '100%',
    padding: 0,
    backgroundRepeat: "no-repeat",
    backgroundPosition: "center center",
    backgroundSize: "cover",
    height: "100%",
  },
  rootAction: {
    height: '100%',
    "& > div": {
      height: "100%",
    }
  },
  title: {
    fontSize: 24,
    fontWeight: 500,
    paddingTop: '10px'
  },
  description: {
    fontSize: 18,
  },
  align: {
    verticalAlign: 'right',
    display: 'inline-flex',
  },
  media: {
    height: 140,
  }
});

const Cards = () => {
  const classes = useStyles();
  return (
    <>
      <Grid
        container
        spacing={8}
      >
        <Grid item xs={12} md={4}>
          <Card className={classes.root} onClick={() => {window.location.href = "/masterclass"}}>
            <CardActionArea className={classes.rootAction}>
              <div>
              <CardMedia
                className={classes.media}
                image={corgi}
                title="pic"
              />
              <CardContent>
                {/* <Grid item xs={12}>
                  <img src={corgi} className={classes.media} />
                </Grid> */}

                <Typography className={classes.title} gutterBottom>
                  Master Class
                </Typography>
                <Typography className={classes.description} gutterBottom>
                Want to improve your writing? Visit our Masterclass page to find instructional videos and interviews with renowned authors.
                </Typography>
                {/* <Grid item xs={12} className={classes.align}>
                  <Icon component={AccessTimeIcon} style={{ paddingRight: '5px' }}></Icon>
                  <Typography className={classes.description} >10 days left</Typography>
                </Grid> */}
              </CardContent>
              </div>
            </CardActionArea>
          </Card>
        </Grid>


        <Grid item xs={12} md={4}>
          <Card className={classes.root} onClick={() => {window.location.href = "/cafe"}} >
            <CardActionArea className={classes.rootAction}>
              <div>
              <CardMedia
                className={classes.media}
                image={corgi}
                title="pic"
              />
              <CardContent>
                {/* <Grid item xs={12}>
                  <img src={corgi} className={classes.media} />
                </Grid> */}

                <Typography className={classes.title} gutterBottom>
                  Cafe
                </Typography>
                <Typography className={classes.description} gutterBottom>
                Be a part of the Genres community and join the conversation! Publit is our discussion forum for our Genres members to discuss works, create fandoms, find collaborators, meet new friends and more.
                </Typography>
                {/* <Grid item xs={12} className={classes.align}>
                  <Icon component={AccessTimeIcon} style={{ paddingRight: '5px' }}></Icon>
                  <Typography className={classes.description} >10 days left</Typography>
                </Grid> */}
              </CardContent>
              </div>
            </CardActionArea>
          </Card>
        </Grid>


        <Grid item xs={12} md={4}>
          <Card className={classes.root} onClick={() => {window.location.href = "/masterclass"}} >
            <CardActionArea className={classes.rootAction}>
              <div>
              <CardMedia
                className={classes.media}
                image={corgi}
                title="pic"
              />
              <CardContent>
                {/* <Grid item xs={12}>
                  <img src={corgi} className={classes.media} />
                </Grid> */}
                <Typography className={classes.title} gutterBottom>
                  Mentoring
                </Typography>
                <Typography className={classes.description} gutterBottom>
                  Join our mentoring program and learn more about writing process!
                </Typography>
                {/* <Grid item xs={12} className={classes.align}>
                  <Icon component={AccessTimeIcon} style={{ paddingRight: '5px' }}></Icon>
                  <Typography className={classes.description} >10 days left</Typography>
                </Grid> */}
              </CardContent>
              </div>
            </CardActionArea>
          </Card>
        </Grid>
      </Grid>
    </>
  )

}

export default Cards
