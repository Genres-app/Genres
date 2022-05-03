import React, { useEffect } from 'react'
import { makeStyles} from '@material-ui/core/styles';

// Here is a child element of RPReadingBar.js that tracks
// user progress on a given page.
const useStyles = makeStyles(() => ({
  progressContainer: {
    backgroundColor: '#C0C0C0',
    height: '5px',
    width: '100%',
    position: 'sticky',
    margin: '0 0 0 0',
    padding: '0 0 0 0',
    top: 0,
  },
  progressMain: {
    backgroundColor: '#58FDD0',
    margin: '0 0 0 0',
    padding: '0 0 0 0',
    height: '5px',
  }

}));

const RPProgressIndicator = () => {
  const classes = useStyles();

  // BELOW Scroll Indicator from https://www.youtube.com/watch?v=X1PI52QLanE
  const [scrollTop, setScrollTop] = React.useState(0)

  const onScroll = () => {
    const winScroll = document.documentElement.scrollTop;
    const height = document.documentElement.scrollHeight - document.documentElement.clientHeight;

    const scrolled = (winScroll / height) * 100;

    setScrollTop(scrolled)
  };

  useEffect(() => {
    window.addEventListener("scroll", onScroll)

    return () => window.removeEventListener("scroll", onScroll)
  
  }, []);
  // ABOVE Scroll Indicator from https://www.youtube.com/watch?v=X1PI52QLanE

  return (
    <div className={classes.progressContainer}>
      <div className={classes.progressMain} style={{ width: `${scrollTop}%` }}>
      </div>
    </div>
  )
}

export default RPProgressIndicator
