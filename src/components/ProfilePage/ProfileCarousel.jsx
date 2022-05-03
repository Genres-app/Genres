import React from 'react';
import { withStyles } from '@material-ui/core/styles'
import PrevArrow from '@material-ui/icons/ArrowBackIos';
import NextArrow from '@material-ui/icons/ArrowForwardIos';
import Button from '@material-ui/core/Button';
import Carousel, { consts } from 'react-elastic-carousel';

//ABOUT: carousel which displays books/masterclasses.
const useStyles = theme => ({
    root: {
        margin: 'auto',
    },
    media: {
        height: '160px',
        width: '120px', 
        padding: '5px',
    }
});


class ProfileCarousel extends React.Component {
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
            { width: 300, itemsToShow: 2, pagination: false},
            { width: 400, itemsToShow: 3, pagination: false},
            { width: 500, itemsToShow: 4, pagination: false},
            { width: 600, itemsToShow: 5, pagination: false},
            { width: 800, itemsToShow: 6, pagination: false },
            { width: 1000, itemsToShow: 7, pagination: false },
            { width: 1200, itemsToShow: 8, pagination: false },
            { width: 1400, itemsToShow: 9, pagination: false },
            { width: 1600, itemsToShow: 10, pagination: false },            
        ];

        const handleDragStart = (e) => e.preventDefault();

        return (
        <Carousel breakPoints={breakpoints} renderArrow={this.myArrow}>
            {this.props.books.map((book)=>(
                <img key={this.props.books.indexOf(book)} src={book.cover} alt={book.name} className={classes.media} onDragStart={handleDragStart}/>
            ))}
        </Carousel>
        )
    }
}

export default withStyles(useStyles)(ProfileCarousel);
