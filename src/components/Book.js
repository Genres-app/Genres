import React, { useState, useEffect, Component } from 'react';
import clsx from 'clsx';
import { makeStyles, withStyles } from '@material-ui/core/styles';
import cover from './Assets/bookcover5.jpg';
import { Translate } from '@material-ui/icons';
import { BookLib } from './BookLib';

const useStyles = makeStyles((theme) => ({
  mediaContainer: {
    display: 'block',
    position: 'relative',
    // overflow: 'hidden',
    margin: '20px',
    width: 200,
    height: 300,
    backgroundSize: '200px 300px',
    backgroundPosition: 'center',

    "&:hover": {
      "& div": {
        opacity: 1,
      }
    },

  },
  mediaBg:{
    height: 320,
    width: 220,
    display: 'block',
    position: 'absolute',
    transition: 'filter .2s',
    transform: 'Translate(-10px, -10px)',
    backgroundSize: '200px 300px',
    backgroundPosition: 'center',
    clipPath: 'inset(10px 10px)',
    filter: 'blur(10px) brightness(.5)',
  },
  media: {
    height: 320,
    width: 220,
    display: 'block',
    transition: 'filter .2s',
    transform: 'Translate(-10px, -10px)',
    backgroundSize: '200px 300px',
    backgroundPosition: 'center',
    clipPath: 'inset(10px 10px)',

    "&:hover": {
      filter: 'blur(10px) brightness(.5)',
    },
    
    // "&:before": {
    //   pointerEvents: 'none', // To Make Text Not Affect Hovering
    //   content: '""',
    //   position: 'absolute',
    //   top:0,
    //   left:0,
    //   right:0,
    //   bottom:0,
    //   backgroundImage: `url(${cover})`,
    //   backgroundSize: '200px 300px',
    //   backgroundPosition: 'center',
    //   filter: 'blur(10px) brightness(.5)',
    // }
  },
  
  text: {
    pointerEvents: 'none', // To Make Text Not Affect Hovering
    fontSize: "20px",
    color: "#fff",
    position: 'absolute',
    marginTop: "-160px",
    marginLeft: "80px",
    transition: "opacity .2s",
    opacity: 0,
    display: "block",
  },
}));

export default function Book({ id }) {
  const classes = useStyles();
  return (
    <a href='/novel' className={classes.mediaContainer}>
    <div style={{backgroundImage: `url(${BookLib[id].cover})`}} className={classes.mediaBg} />
      <div style={{backgroundImage: `url(${BookLib[id].cover})`}} className={classes.media} />
      <div className={classes.text}>{BookLib[id].title}</div>
    </a>
  )
}