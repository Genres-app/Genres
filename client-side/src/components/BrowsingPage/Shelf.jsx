import React from 'react';
import { withStyles } from '@material-ui/core/styles'
import PrevArrow from '@material-ui/icons/ArrowBackIos';
import NextArrow from '@material-ui/icons/ArrowForwardIos';
import Button from '@material-ui/core/Button';
import Carousel, { consts } from 'react-elastic-carousel';
import Card from '@material-ui/core/Card';
import cover1 from '../Assets/bookcover1.jpg';
import cover2 from '../Assets/bookcover2.jpg';
import cover3 from '../Assets/bookcover3.jpg';
import cover4 from '../Assets/bookcover4.jpg';
import cover5 from '../Assets/bookcover5.jpg';
import cover6 from '../Assets/bookcover6.jpg';
import cover7 from '../Assets/bookcover7.jpg';


const useStyles = theme => ({
    root: {
        margin: 'auto',
    },
    media: {
        height: '300px',
        width: '200px', 
        padding: '20px',
        display: 'block',
        filter: 'drop-shadow(0 3px 7px #a1b4bf)',
    },

});


class Shelf extends React.Component {
    myArrow({ type, onClick, isEdge }) {
        const pointer = type === consts.PREV ? <PrevArrow/> : <NextArrow/>
        return (
        <Button disableRipple onClick={onClick} disabled={isEdge} style={{background: 'transparent'}}>
            {pointer}
        </Button>
        )
    }

    render() {
        const {classes} = this.props;
        const breakpoints = [
            { width: 1, itemsToShow: 1, pagination: false },
            { width: 500, itemsToShow: 3, pagination: false},
            { width: 850, itemsToShow: 4, pagination: false },
            { width: 1150, itemsToShow: 5, pagination: false },
            { width: 1300, itemsToShow: 6, pagination: false },
            { width: 1800, itemsToShow: 7, pagination: false },
            
        ];

        const handleDragStart = (e) => e.preventDefault();

        const items = [
            <div ><a href='/novel'><img src={cover2} className={classes.media} onDragStart={handleDragStart} /></a></div>,
            <a href='/novel'><img src={cover3} className={classes.media} onDragStart={handleDragStart} /></a>,
            <a href='/novel'><img src={cover4} className={classes.media} onDragStart={handleDragStart} /></a>,
            <a href='/novel'><img src={cover5} className={classes.media} onDragStart={handleDragStart} /></a>,
            <a href='/novel'><img src={cover6} className={classes.media} onDragStart={handleDragStart} /></a>,
            <a href='/novel'><img src={cover7} className={classes.media} onDragStart={handleDragStart} /></a>,
            <a href='/novel'><img src={cover1} className={classes.media} onDragStart={handleDragStart} /></a>,
    ];
            
        return (
        <Carousel breakPoints={breakpoints} renderArrow={this.myArrow}>
            {items}
        </Carousel>
        )
    }
}

export default withStyles(useStyles)(Shelf);
