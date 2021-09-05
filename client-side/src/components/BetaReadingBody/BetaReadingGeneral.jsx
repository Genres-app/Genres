import React from 'react';
import clsx from 'clsx';
import { makeStyles, withStyles } from '@material-ui/core/styles';

import { Container, Accordion, AccordionSummary, AccordionDetails, Typography } from '@material-ui/core';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';

import { BookLib } from '../BookLib';
import { generalList } from './BetaReadingGeneralList';


const useStyles = makeStyles((theme) => ({

}));

const BetaReadingGeneral = ({ theme }) => {
  const classes = useStyles();
  console.log("general");
  return (
    <>
    <Typography>General Advising</Typography>
      {generalList.map((item, index) => (
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
    </>
  )
}

export default BetaReadingGeneral;