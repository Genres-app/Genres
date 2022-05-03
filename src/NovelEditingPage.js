import React from 'react';
import { makeStyles } from '@material-ui/core/styles';

import NEPContentsTopCard from './components/NovelEditingPage/NEPContentsTopCard';
import NEPTabs from './components/NovelEditingPage/NEPTabs';

const useStyles = makeStyles({
  topMargin: {
    marginTop: '0px',
  },
});

export default function NovelEditingPage() {
  const classes = useStyles();

  return (
    <div className={classes.topMargin}>
      <NEPContentsTopCard/>
      <NEPTabs/>
    </div>
  );
}