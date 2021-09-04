// https://www.npmjs.com/package/react-material-ui-carousel

import React from 'react';
import clsx from 'clsx';
import { Paper, Button, Typography, Grid, CardContent, Card, CardActions, Container, Divider } from '@material-ui/core'
import BetaReadingBookCarousel from './BetaReadingBookCarousel.jsx';
import { makeStyles, withStyles } from '@material-ui/core/styles';
import CardMedia from '@material-ui/core/CardMedia';
import ArrowForwardIcon from '@material-ui/icons/ArrowForward';

import Book from '../Book';
import { Translate } from '@material-ui/icons';

const useStyles = makeStyles((theme) => ({
  banner: {
    position: "relative",
    width: "100%",
    maxWidth: "none",
    height: 500,
    paddingTop: 110,
    marginBottom: 75,
    backgroundImage: "linear-gradient(30deg, rgb(166 143 253), rgb(99, 255, 230))",
    color: theme.palette.background.paper,
    overflow: "hidden",

    "& > *": {
      position: 'relative',
      zIndex: 99,
    }
  },
  banner_beta: {
    position: 'absolute',
    left: '50%',
    top: '40%',
    color: 'initial',
    transform: "Translate(-50%, -50%)",
    opacity: .05,
    fontSize: '40rem',
    fontWeight: "bold",
    // textShadow: '0px 2px 4px #0000006b',
    zIndex: 98,
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
    // borderRadius: 8,
  },
  bookShelf: {
    paddingTop: theme.spacing(2),
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

const AdvisingSectionList = [
  {
    title: 'General Advising',
    description: 'Works in general advising are looking for feedback on the overall chapter or story. Authors would like to hear the experiences of readers.',
  },
  {
    title: 'Plot Advising',
    description: 'Works in plot advising are looking to improve or confirm their current storyline with the help of reader feedback.',
  },
  {
    title: 'Spelling and Grammar',
    description: 'Just like the category name, this category are for works that may need additional help with spotting spelling, grammar, and punctuation errors.',
  },
]


const Body = ({ theme }) => {
  const classes = useStyles();
  console.log(theme);
  return (
    <>
      <Container className={classes.banner}>
        <Typography variant='h1' align='center' className={classes.banner_beta}>β</Typography>
        <Typography variant="h2" align='center' style={{
          fontSize: "3.375rem",
          fontWeight: "bold",
          lineHeight: "200%",
        }}>Beta-Reading</Typography>
        <Typography variant='h5' align='center'>
          A space specially created for writers to share drafts of their writing with readers
          <br /> and receive constructive feedback before it officially releases.
        </Typography>
        <Typography variant='subtitle1' align='center' style={{ paddingTop: 12 }}>
          *To help match writers with readers that can address their needs and to protect the writer’s work,
          <br />readers may have to answer a questionnaire prior to unlocking the story.
        </Typography>
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

          {AdvisingSectionList.map((item, index) => (
            <Grid item xs={12} className={classes.AdvisingSection}>
              <Card className={classes.CategoryShelfs} >

                <CardContent className={clsx(classes.CategoryInfo, theme ? classes.CategoryInfo_light : classes.CategoryInfo_dark)}>
                  <div style={{ display: 'flex', padding: "0 5% 0 5%" }}>
                    <div style={{ flexGrow: 1 }}>
                      <Typography className={classes.heading} variant="h1" >{item.title}</Typography>
                      <Typography className={classes.description} >
                        {item.description}
                      </Typography>
                    </div>
                    <div style={{ display: 'flex', flexDirection: 'column-reverse', flexShrink: 0 }}>
                      <Button
                        variant='contained'
                        color="primary"
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
          ))
          }

          {/* <Book id={'0002'} /> */}
        </Grid>

      </Grid>
    </>
  )
}

export default Body;