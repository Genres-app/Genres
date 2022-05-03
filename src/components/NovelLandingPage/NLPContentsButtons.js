import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Checkbox from '@material-ui/core/Checkbox';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import { MonetizationOn, BookmarkBorder, Bookmark } from '@material-ui/icons';

// The buttons for donating and saving are BELOW:
// FIXME: these buttons are currently only UI and do not function

// CSS for these button elements are BELOW:
const useStyles = makeStyles(() => ({
  root: {
    display: 'flex',
    '@media (max-width:800px)': { // hide buttons when <800 px
      display: 'none',
    },
    flexDirection: 'column',
  },
  tip: {
    color: 'white',
    backgroundColor: '#a0a0a0',
    '&:hover': {
      background: "#707371",
    },
  },
  save: {
    color: '#343836',
    marginLeft: '0.5rem',
  },
  icon:{
    marginRight: '10px',
  },
  container: {
    marginLeft: '7px',
    display: 'flex',
    flexDirection: 'row',
  }
}));

export default function BadgeVisibility() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <div className={classes.container}>
        {/* BELOW is a BUTTON for the tip feature */}
        <Button className={classes.tip}>
          <MonetizationOn className={classes.icon}/>
          Tip Author
        </Button>
        {/* BELOW is a CHECKBOX for the save feature */}
        <FormControlLabel
          control={<Checkbox icon={<BookmarkBorder />} checkedIcon={<Bookmark />} name="checkedH" />}
          label="SAVE"
          className={classes.save}
        />
      </div>
    </div>
  );
}
