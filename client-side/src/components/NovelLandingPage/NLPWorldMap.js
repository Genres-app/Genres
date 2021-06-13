import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';

import WorldMapSample from './CWorldMapSample.jpg';

// This page displays the world map associated with a given Book.
// FIXME: this page should be dynamically loaded based on the backend object.

// CSS for this page's elements are BELOW:
const useStyles = makeStyles(() => ({
  root: {
    '@media (min-width:700px)': { // resize text size when <375 px
      display: 'flex',
      justifyContent: 'space-between',
    },
    '@media (max-width:700px)': { }, // resize text size when <375 px
    marginTop: '5px',
    width: '100%',
  },
  map: {
    display: 'flex',
    minWidth: '50%',
    maxWidth: '1200px',
    filter: 'drop-shadow(1px 3px 4px #000000)',
  },
  text: {
    width: '480px',
    marginTop: '0px',
    marginRight: '25px',
    marginBottom: '10px',
    paddingLeft: '20px',
    paddingRight: '20px',
    paddingTop: '20px',
    paddingBottom: '10px',
  }
}));

// FIXME: The elements below are still STATIC
export default function SimplePaper() {
  const classes = useStyles();

  return (
    <div>
      <div className={classes.root}>
        <Paper className={classes.text}>
          <Typography align="left" component="h5" variant="h5">
            A Map of Everything
          </Typography>
          <Typography style={{marginTop: '10px'}} variant = "body2">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et.
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
            Lorem ipsum dolor sit amet, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
          </Typography>
        </Paper>
        <img className={classes.map} src={WorldMapSample} alt='World Map' />
      </div>
    </div>
  );
}
