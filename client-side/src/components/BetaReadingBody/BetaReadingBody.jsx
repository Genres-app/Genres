// https://www.npmjs.com/package/react-material-ui-carousel

import React from 'react';
import clsx from 'clsx';
import Carousel from 'react-material-ui-carousel'
import { Paper, Button, Typography, Grid, CardContent, Card } from '@material-ui/core'
import Cards from '../Cards/Cards.jsx';
import BookCarousel from '../BookCarousel/BookCarousel.jsx';
import { makeStyles, withStyles } from '@material-ui/core/styles';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardMedia from '@material-ui/core/CardMedia';

const useStyles = makeStyles((theme) => ({
  root: {
    display: "block",
    minWidth: 250,
    // height: '100%',
    padding: 0,
    backgroundRepeat: "no-repeat",
    backgroundPosition: "center center",
    backgroundSize: "cover",
  },
  body: {
    paddingTop: '75px',
    paddingBottom: '75px',
    paddingRight: '10%',
    paddingLeft: '10%',
  },
  heading: {
    fontSize: '180%',
    fontWeight: '500',
    color: theme.palette.background.paper,
  },
  carouselBody: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    height: '500px',
    borderRadius: 0,
  },
  defaultSidePadding: {
    paddingRight: '10%',
    paddingLeft: '6%',
    paddingBottom: '1%',
    paddingTop: '1%',

  },
  CategoryShelfs: {
    paddingRight: '0%',
    paddingLeft: '0%',
    paddingBottom: '0%',
  },
  CategoryShelfs_light: {
    backgroundColor: '#855cde',
  },
  CategoryShelfs_dark: {
    backgroundColor: '#9e84f5',
  },
  bottomPadding: {
    paddingBottom: "75px",
    paddingRight: '10%',
    paddingLeft: '10%',
  },
  title: {
    fontSize: '70px',
    fontFamily: 'Georgia-Bold',
    fontWeight: '500',
  },
  media: {
    height: '100%',
  },
  bookShelf: {
    backgroundColor: theme.palette.background.paper,
  },

  rootAction: {
    height: '100%',
  },

  description: {
    paddingRight: '10%',
    paddingLeft: '6%',
    fontSize: 18,
    paddingBottom: '2%',
    color: theme.palette.background.paper,
  }
}));


const WhiteTypography = withStyles({
  root: {
    color: '#FFFFFF',
    fontWeight: 300
  }
})(Typography);


const Body = ({theme}) => {
  const classes = useStyles();
  console.log(theme);
  return (
    <Grid container className={classes.root}>

      <Grid item container xs={12}>
        <Grid item xs={12} className={classes.body}>
          <Cards />
        </Grid>

        <Grid item xs={12}>
          <div
            style={{
              height: '50px',
            }}
          ></div>
        </Grid>

        <Grid item xs={12} className={classes.bottomPadding}>
          <Card className={clsx(classes.CategoryShelfs, theme? classes.CategoryShelfs_light : classes.CategoryShelfs_dark)} >

            <CardMedia
              className={classes.media}
            />
            <CardContent style={{ paddingLeft: '0%', paddingRight: '0%', paddingTop: '0%' }}>
              <CardContent className={classes.bookShelf} >
                <BookCarousel />
              </CardContent>
            </CardContent>
            <Typography className={[classes.heading, classes.defaultSidePadding].join(' ')} variant="h1" >General Advising</Typography>
            <Typography className={classes.description}>
              Works in general advising are looking for feedback on the overall chapter or story. Authors would like to hear the experiences of readers.
            </Typography>

          </Card>
        </Grid>

        <Grid item xs={12} className={classes.bottomPadding}>
          <Card className={clsx(classes.CategoryShelfs, theme? classes.CategoryShelfs_light : classes.CategoryShelfs_dark)} >
            <CardMedia
              className={classes.media}
            />
            <CardContent style={{ paddingLeft: '0%', paddingRight: '0%', paddingTop: '0%' }}>
              <CardContent className={classes.bookShelf} >
                <BookCarousel />
              </CardContent>
            </CardContent>
            <Typography className={[classes.heading, classes.defaultSidePadding].join(' ')} variant="h1" >Plot Advising</Typography>
            <Typography className={classes.description}>
              Works in plot advising are looking to improve or confirm their current storyline with the help of reader feedback.
            </Typography>
          </Card>
        </Grid>

        <Grid item xs={12} className={classes.bottomPadding}>
          <Card className={clsx(classes.CategoryShelfs, theme? classes.CategoryShelfs_light : classes.CategoryShelfs_dark)}>
            <CardMedia
              className={classes.media}
            />
            <CardContent style={{ paddingLeft: '0%', paddingRight: '0%', paddingTop: '0%' }}>
              <CardContent className={classes.bookShelf} >
                <BookCarousel />
              </CardContent>
            </CardContent>
            <Typography className={[classes.heading, classes.defaultSidePadding].join(' ')} variant="h1" >Spelling and Grammar</Typography>
            <Typography className={classes.description}>
              Just like the category name, this category are for works that may need additional help with spotting spelling, grammar, and punctuation errors.
            </Typography>
          </Card>
        </Grid>


      </Grid>
    </Grid>
  )
}

export default Body;