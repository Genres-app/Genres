import React from 'react';
import clsx from 'clsx';
import { makeStyles, withStyles } from '@material-ui/core/styles';

import { Container, Grid, Accordion, AccordionSummary, AccordionDetails, Typography } from '@material-ui/core';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';

import { BookLib } from '../BookLib';
import { generalList } from './BetaReadingGeneralList';


const useStyles = makeStyles((theme) => ({
  bg: {
    position: 'absolute',
    backgroundColor: '#855cde',
    height: 320,
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
  }
}));

const BetaReadingGeneral = ({ theme }) => {
  const classes = useStyles();
  console.log("general");
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
        {
          generalList.map((item, index) => (
            <Accordion>
              <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                <Typography>{BookLib[item].title}</Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Typography>{BookLib[item].info}</Typography>
              </AccordionDetails>
            </Accordion>
          ))
        }
      </Container>
    </>
  )
}

export default BetaReadingGeneral;