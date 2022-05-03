import React from 'react';
import { withStyles, makeStyles } from '@material-ui/core/styles';
import MuiAccordion from '@material-ui/core/Accordion';
import MuiAccordionSummary from '@material-ui/core/AccordionSummary';
import MuiAccordionDetails from '@material-ui/core/AccordionDetails';
import Typography from '@material-ui/core/Typography';
import Avatar from '@material-ui/core/Avatar';

import ExpandMoreIcon from '@material-ui/icons/ExpandMore';

// This page displays the character profiles for a given Book.
// FIXME: this page should be dynamically loaded based on the backend object.

// BELOW: PLACEHOLDERS
// FIXME: these need to be replaced with an actual backend implementation.
function createData(Name, Title, Description) {
  return { Name, Title, Description };
}

const rows = [
  createData('Apolinario', 'Astronaut Captain', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex,sit amet blandit leo lobortis eget. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex, sit amet blandit leo lobortis eget.'),
  createData('Lydia', 'Galactic Officer', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex,sit amet blandit leo lobortis eget. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex, sit amet blandit leo lobortis eget.'),
  createData('Jamie', 'Chef', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex,sit amet blandit leo lobortis eget. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex, sit amet blandit leo lobortis eget.'),
  createData('Souji', 'Red Dust Worker', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex,sit amet blandit leo lobortis eget. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex, sit amet blandit leo lobortis eget.'),
];
// ABOVE: PLACEHOLDERS

// CSS sheets BELOW:
const Accordion = withStyles({
  root: {
    border: '1px solid rgba(0, 0, 0, .125)',
    boxShadow: 'none',
    '&:not(:last-child)': {
      borderBottom: 0,
    },
    '&:before': {
      display: 'none',
    },
    '&$expanded': {
      margin: 'auto',
    },
    // Media queries BELOW:
    margin: 'auto',
    '@media (min-width:1024px)': { // resize text size when >1024 px
      maxWidth: '100%',
    },
    '@media (max-width:1024px)': { // resize text size when <1024 px
      maxWidth: 920,
    },
    '@media (max-width:768px)': { // resize text size when <768 px
      maxWidth: 600,
    },
    '@media (max-width:375px)': { // resize text size when <375 px
      maxWidth: 370,
    },
    '@media (max-width:360px)': { // resize text size when <360 px
      maxWidth: 355,
    },
  },
  expanded: {},
})(MuiAccordion);

const AccordionSummary = withStyles({
  root: {
    backgroundColor: 'rgba(0, 0, 0, .03)',
    borderBottom: '1px solid rgba(0, 0, 0, .125)',
    marginBottom: -1,
    minHeight: 56,
    '&$expanded': {
      minHeight: 56,
    },
  },
  content: {
    '&$expanded': {
      margin: '12px 0',
    },
  },
  expanded: {},

})(MuiAccordionSummary);

const AccordionDetails = withStyles((theme) => ({
  root: {
    padding: theme.spacing(2),
    display: 'flex',
    flexDirection: 'column',
  },
}))(MuiAccordionDetails);

const useStyles = makeStyles((theme) => ({
  photo: {
    width: '20%',
    height: '30%',
    '@media (max-width:375px)': { // resize text size when <767 px
      width: '40%',
      height: '50%',
    },
    margin: '0 auto',
    filter: 'drop-shadow(0px 0px 1px #000000)',
  },
  text: {
    paddingTop: '10px',
    paddingLeft: '20px',
    paddingRight: '20px',
    paddingBottom: '20px',
  },
  heading: {
    fontSize: theme.typography.pxToRem(15),
    flexBasis: '34.34%',
    flexShrink: 0,
  },
  secondaryHeading: {
    fontSize: theme.typography.pxToRem(14),
    color: theme.palette.text.secondary,
  },
}));
// CSS sheets ABOVE:

export default function CustomizedAccordions() {
  const classes = useStyles();

  return (
    <div>
      {/* FIXME: TEXT AND IMAGES BELOW ARE STATIC FOR NOW */}
      {rows.map((row) => (
      <Accordion>
        <AccordionSummary aria-controls="panel-content" id="panel-header" expandIcon={<ExpandMoreIcon />}>
          <Typography className={classes.heading}>{row.Name}</Typography>
          <Typography className={classes.secondaryHeading}>{row.Title}</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Avatar alt="Char1" className = {classes.photo} src='https://cdn.pixabay.com/photo/2011/12/13/17/09/astronaut-11050_1280.jpg' />
          <Typography className = {classes.text}>{row.Description}</Typography>
        </AccordionDetails>
      </Accordion>
      ))}
    </div>
  );
}
