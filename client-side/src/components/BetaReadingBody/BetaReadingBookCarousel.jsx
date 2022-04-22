import React, { useState, forwardRef, useRef, useImperativeHandle  } from 'react';
import { withStyles } from '@material-ui/core/styles'
import PrevArrow from '@material-ui/icons/ArrowBackIos';
import NextArrow from '@material-ui/icons/ArrowForwardIos';
import { Button, Dialog } from '@material-ui/core/';
import Carousel, { consts } from 'react-elastic-carousel';
import cover1 from '../Assets/bookcover1.jpg';
import cover2 from '../Assets/bookcover2.jpg';
import cover3 from '../Assets/bookcover3.jpg';
import cover4 from '../Assets/bookcover4.jpg';
import cover5 from '../Assets/bookcover5.jpg';
import cover6 from '../Assets/bookcover6.jpg';
import cover7 from '../Assets/bookcover7.jpg';

import ProceedToQ from './ProceedToQuestionnaire.jsx'
import { ButtonBase } from '@material-ui/core';
<link href="../BookCarousel/blur.css" type="text/css" rel="stylesheet" />


const useStyles = theme => ({
  root: {
    margin: 'auto',
  },
  media: {
    height: '400px',
    width: '275px',
    padding: '20px',
  },
});


class BetaReadingBookCarousel extends React.Component {

  constructor(props) {
    super(props);
    this.child = React.createRef();
  }

  state = {
    questOpen: false,
    questId: "0001",
  }


  handleClick = (bId) => {
    this.setState({questId: bId, questOpen: true})
  }
  

  myArrow({ type, onClick, isEdge }) {
    const pointer = type === consts.PREV ? <PrevArrow /> : <NextArrow />
    return (
      <Button disableRipple onClick={onClick} disabled={isEdge} style={{ background: 'transparent' }}>
        {pointer}
      </Button>
    )
  }

  state = {
    showBox: false
  };
  handleBoxToggle = () => this.setState({ showBox: !this.state.showBox });

  render() {

    const { classes } = this.props;
    const breakpoints = [
      { width: 1, itemsToShow: 1, pagination: false },
      { width: 500, itemsToShow: 2, pagination: false },
      { width: 850, itemsToShow: 3, pagination: false },
      { width: 1150, itemsToShow: 4, pagination: false },
      { width: 1300, itemsToShow: 5, pagination: false },
      { width: 1800, itemsToShow: 6, pagination: false },

    ];

    const handleDragStart = (e) => e.preventDefault();

    return (
      <div>
        <Carousel breakPoints={breakpoints} renderArrow={this.myArrow}>
          <img onClick={() => { this.handleClick('0001'); }} src={cover1} className={classes.media} onDragStart={handleDragStart} />
          <img onClick={() => { this.handleClick('0002'); }} src={cover2} className={classes.media} onDragStart={handleDragStart} />
          <img onClick={() => { this.handleClick('0003'); }} src={cover3} className={classes.media} onDragStart={handleDragStart} />
          <img onClick={() => { this.handleClick('0004'); }} src={cover4} className={classes.media} onDragStart={handleDragStart} />
          <img onClick={() => { this.handleClick('0005'); }} src={cover5} className={classes.media} onDragStart={handleDragStart} />
          <img onClick={() => { this.handleClick('0006'); }} src={cover6} className={classes.media} onDragStart={handleDragStart} />
          <img onClick={() => { this.handleClick('0007'); }} src={cover7} className={classes.media} onDragStart={handleDragStart} />
        </Carousel>

        <ProceedToQ open={this.state.questOpen} bookId={this.state.questId} handleClkFunc={this.handleClick}/>
      </div>
    )
  }
}

export default withStyles(useStyles)(BetaReadingBookCarousel);
