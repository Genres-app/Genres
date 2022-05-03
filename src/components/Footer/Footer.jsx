import React from 'react'
import { Typography, Link } from '@material-ui/core';
import useStyles from './styles';

const Footer = () => {
  const classes = useStyles();


  return (
    <>
      <footer className={classes.footer}>
        <Typography variant="h6" align="center" gutterBottom>
          Genres
        </Typography>
        <Typography variant="subtitle1" align="center" color="textSecondary">
          <Link href="#" color="inherit">
            Terms
          </Link>
        </Typography>
      </footer>
    </>
  )
}

export default Footer
