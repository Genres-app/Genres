import React from 'react';
import { makeStyles } from '@material-ui/core/styles';

import NLPContentsTopCard from './components/NovelLandingPage/NLPContentsTopCard';
import NLPTabs from './components/NovelLandingPage/NLPTabs';

const useStyles = makeStyles({
  topMargin: {
    marginTop: '0px',
  },
});

export default function NovelLandingPage() {
  const classes = useStyles();

  return (
    <div className={classes.topMargin}>
      <NLPContentsTopCard/>
      <NLPTabs/>
    </div>
  );
}