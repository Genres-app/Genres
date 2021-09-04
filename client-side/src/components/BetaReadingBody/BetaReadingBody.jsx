// https://www.npmjs.com/package/react-material-ui-carousel

import React from 'react';
import clsx from 'clsx';
import { Paper, Button, Typography, Grid, CardContent, Card, CardActions, Container, Divider } from '@material-ui/core'
import BetaReadingBookCarousel from './BetaReadingBookCarousel.jsx';
import { makeStyles, withStyles } from '@material-ui/core/styles';
import CardMedia from '@material-ui/core/CardMedia';
import ArrowForwardIcon from '@material-ui/icons/ArrowForward';

import Book from '../Book';

const useStyles = makeStyles((theme) => ({
  banner: {
    width: "100%",
    maxWidth: "none",
    height: 500,
    paddingTop: 100,
    marginBottom: 75,
    backgroundImage: "linear-gradient(30deg, rgb(166 143 253), rgb(99, 255, 230))",
    color: theme.palette.background.paper,
  },
  banner_beta: {
    opacity: .5,
    fontWeight: "400",
    textShadow: '0px 2px 4px #0000006b',

    "& + *": {
      fontWeight: "bold",
      lineHeight: "200%",
    }
  },
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

  AdvisingSection: {
    paddingBottom: "75px",
    paddingRight: '10%',
    paddingLeft: '10%',
  },
  CategoryShelfs: {
    paddingRight: '0%',
    paddingLeft: '0%',
    paddingBottom: '0%',
    borderRadius: 16,
  },
  bookShelf: {
    paddingBottom: theme.spacing(2),
  },
  CategoryInfo: {
    margin: theme.spacing(1),
    marginBottom: theme.spacing(2),
    // borderRadius: 8,
  },
  CategoryInfo_light: {
    color: '#855cde',
  },
  CategoryInfo_dark: {
    color: '#9e84f5',
  },

  heading: {
    paddingBottom: 0,
    paddingTop: theme.spacing(1),
    fontSize: "2rem",
    fontWeight: 'bold',
    // color: theme.palette.background.paper,
  },
  description: {
    paddingTop: theme.spacing(1),
    paddingRight: theme.spacing(1),
    // paddingLeft: '6%',
    fontSize: 18,
    // color: theme.palette.background.paper,
  },
  
  rootAction: {
    height: '100%',
  },
}));


const WhiteTypography = withStyles({
  root: {
    color: '#FFFFFF',
    fontWeight: 300
  }
})(Typography);


const Body = ({ theme }) => {
  const classes = useStyles();
  console.log(theme);
  return (
    <>
      <Container className={classes.banner}>
        <Typography variant='h1' align='center' className={classes.banner_beta}>β</Typography>
        <Typography variant="h3" align='center'>Beta-Reading</Typography>
        <Typography variant='subtitle1' align='center'>Beta-Reading's description.</Typography>
      </Container>

      <Grid container className={classes.root}>

        <Grid item container xs={12}>
          {/* <Grid item xs={12} className={classes.body}>
          <Cards />
        </Grid> */}

          <Grid item xs={12}>
            <div
              style={{
                height: '50px',
              }}
            ></div>
          </Grid>

          <Grid item xs={12} className={classes.AdvisingSection}>
            <Card className={classes.CategoryShelfs} >

              <CardContent className={clsx(classes.CategoryInfo, theme ? classes.CategoryInfo_light : classes.CategoryInfo_dark)}>
                <div style={{ display: 'flex', padding: "0 5% 0 5%" }}>
                  <div style={{ flexGrow: 1 }}>
                    <Typography className={classes.heading} variant="h1" >General Advising</Typography>
                    <Typography className={classes.description} >
                      Works in general advising are looking for feedback on the overall chapter or story. Authors would like to hear the experiences of readers.
                    </Typography>
                  </div>
                  <div style={{ display: 'flex', flexDirection: 'column-reverse', flexShrink: 0 }}>
                    <Button
                      variant='contained'
                      color="secondary"
                      className={classes.button}
                      endIcon={<ArrowForwardIcon />}
                    >Show More</Button>
                  </div>
                </div>
              </CardContent>
              <Divider variant='middle'></Divider>
              <CardMedia className={classes.bookShelf}>
                <BetaReadingBookCarousel />
              </CardMedia>
            </Card>
          </Grid>

          <Grid item xs={12} className={classes.AdvisingSection}>
            <Card className={classes.CategoryShelfs} >

              <CardContent className={clsx(classes.CategoryInfo, theme ? classes.CategoryInfo_light : classes.CategoryInfo_dark)}>
                <div style={{ display: 'flex' }}>
                  <div style={{ flexGrow: 1 }}>
                    <Typography className={[classes.heading, classes.defaultSidePadding].join(' ')} variant="h1" >Plot Advising</Typography>
                    <Typography className={classes.description}>
                      Works in plot advising are looking to improve or confirm their current storyline with the help of reader feedback.
                    </Typography>
                  </div>
                  <div style={{ display: 'flex', flexDirection: 'column-reverse', flexShrink: 0 }}>
                    <Button
                      color="primary"
                      className={classes.button}
                      endIcon={<ArrowForwardIcon />}
                    >Show More</Button>
                  </div>
                </div>
              </CardContent>

              <CardMedia className={classes.bookShelf} >
                <BetaReadingBookCarousel />
              </CardMedia>
            </Card>
          </Grid>

          <Grid item xs={12} className={classes.AdvisingSection}>
            <Card className={classes.CategoryShelfs}>

              <CardContent className={clsx(classes.CategoryInfo, theme ? classes.CategoryInfo_light : classes.CategoryInfo_dark)}>
                <div style={{ display: 'flex' }}>
                  <div style={{ flexGrow: 1 }}>
                    <Typography className={[classes.heading, classes.defaultSidePadding].join(' ')} variant="h1" >Spelling and Grammar</Typography>
                    <Typography className={classes.description}>
                      Just like the category name, this category are for works that may need additional help with spotting spelling, grammar, and punctuation errors.
                    </Typography>
                  </div>
                  <div style={{ display: 'flex', flexDirection: 'column-reverse', flexShrink: 0 }}>
                    <Button
                      color="primary"
                      className={classes.button}
                      endIcon={<ArrowForwardIcon />}
                    >Show More</Button>
                  </div>
                </div>
              </CardContent>

              <CardMedia className={classes.bookShelf} >
                <BetaReadingBookCarousel />
              </CardMedia>
            </Card>
          </Grid>

          <Book id={'0002'} />
        </Grid>

      </Grid>
    </>
  )
}

export default Body;