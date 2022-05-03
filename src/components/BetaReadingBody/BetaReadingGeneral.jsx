import React from 'react';
import clsx from 'clsx';
import { makeStyles, withStyles } from '@material-ui/core/styles';

import { Container, Grid, Accordion, AccordionSummary, AccordionDetails, Typography, Divider, Button, Chip, Avatar } from '@material-ui/core';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';

import { BookLib } from '../BookLib';
import { generalList } from './BetaReadingGeneralList';
import ArrowForward from '@material-ui/icons/ArrowForward';


const useStyles = makeStyles((theme) => ({
  bg: {
    position: 'absolute',
    backgroundColor: '#855cde',
    height: 350,
    width: '100%',
    zIndex: -1,
  },
  root: {
    display: "block",
    minWidth: 250,
    width: '75%',
    margin: '0 auto',
  },
  titleContainer: {
    display: 'flex',
    alignItems: 'center',
    height: 250,
    padding: 0,
    color: theme.palette.background.paper,
  },
  title: {
    paddingBottom: theme.spacing(1),
    fontWeight: 'bold',
  },
  accordion: {
    // borderRadius: theme.shape.borderRadius,
  },
  cover: {
    height: 180,
    width: 120,
    display: 'block',
    backgroundSize: 'cover',
    backgroundPosition: 'center',
  },
  bookInfos: {
    paddingLeft: theme.spacing(4),
  },
  authorChips: {
    margin: "4px 8px 4px 0",
    "&:last-child":
      { marginRight: 0, }
  },
  buttonGroup: {
    display: 'flex',
    flexDirection: 'row-reverse',
    paddingTop: theme.spacing(1)
  }
}));

const BetaReadingGeneral = ({ theme }) => {
  const classes = useStyles();
  return (
    <>
      <div className={classes.bg}></div>
      <Container className={classes.root}>
        <Container className={classes.titleContainer}>
          <div>
            <Typography variant='h5'>Beta-Reading /</Typography>
            <Typography variant='h3' className={classes.title}>General Advising</Typography>
            <Typography variant='body1'>Works in general advising are looking for feedback on the overall chapter or story. Authors would like to hear the experiences of readers.</Typography>
          </div>
        </Container>
        <div>
          {
            generalList.map((item, index) => (
              <Accordion classes={{expanded: classes.accordion}}>

                <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                  <div style={{ backgroundImage: `url(${BookLib[item].cover})` }} className={classes.cover} />
                  <div className={classes.bookInfos}>
                    <Typography variant="h5" style={{ fontWeight: "bold" }}>{BookLib[item].title}</Typography>
                    <Grid>
                      {
                        BookLib[item].author.map(
                          (item, i) =>
                            <Chip
                              label={item}
                              avatar={<Avatar src="" />}
                              className={classes.authorChips}
                            />
                        )
                      }
                    </Grid>
                    <Typography>Genre(s): Educational, Sci-Fi, Thriller</Typography>
                    <Typography>Status: Ongoing</Typography>
                    <Typography>Last Updated: April 12, 2021</Typography>
                  </div>
                </AccordionSummary>

                <AccordionDetails>
                  <Container style={{ padding: 0 }}>
                    <Typography variant="h6">
                      Synopsis:
                    </Typography>
                    <Typography>
                      {BookLib[item].info}
                    </Typography>
                    <Divider variant='middle' style={{ margin: "16px 0" }}></Divider>
                    <Typography variant="h6" color="primary">
                      Proceed To Questionnaire?
                    </Typography>
                    <Typography>
                      By answering this questionnaire, you acknowledge and agree to keep this story confidential until its official release.
                    </Typography>
                    <div className={classes.buttonGroup}>
                      <Button
                        variant="contained"
                        color="primary"
                        endIcon={<ArrowForward />}
                      >
                        Agree and continue
                      </Button>
                    </div>
                  </Container>
                </AccordionDetails>

              </Accordion>
            ))
          }
        </div>
      </Container>
    </>
  )
}

export default BetaReadingGeneral;