import React from 'react';
import { makeStyles } from '@material-ui/core';
import { useLayoutEffect } from 'react';
import { useState } from 'react';

const useStyles = makeStyles((theme) => ({
  parallelogram: {
    position: 'fixed',
    zIndex: -100,
    backgroundColor: theme.palette.primary.main,
    opacity: .5,
    width: 300,
    height: 300,
    left: -100,
    top: 150,
    transform: "matrix(1.00,-0.60,0.00,0.20,0,0)",

  },
  circle: {
    position: 'fixed',
    zIndex: -100,
    backgroundColor: theme.palette.secondary.main,
    borderRadius: "50%",
    opacity: .5,
    width: 300,
    height: 300,
    right: -100,
    bottom: 100,
  }
}))

function useWindowSize() {
  const [size, setSize] = useState([0, 0]);
  useLayoutEffect(() => {
    function updateSize() {
      setSize([window.innerWidth, window.innerHeight]);
    }
    window.addEventListener('resize', updateSize);
    updateSize();
    return () => window.removeEventListener('resize', updateSize);
  }, []);
  return size;
}

const BackgroundDecoration = () => {
  const classes = useStyles();
  const [width, height] = useWindowSize();


  return (
    <>
      {
        width >= 1260 ?
          <>
            <div class={classes.parallelogram}></div>
            <div class={classes.parallelogram} style={{ top: 270 }}></div>
            <div class={classes.circle}></div>
          </>
          :
          <></>
      }
    </>
  )
}

export default BackgroundDecoration
