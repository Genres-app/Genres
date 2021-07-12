import React from 'react';
import { withStyles } from '@material-ui/core/styles'
import PrevArrow from '@material-ui/icons/ArrowBackIos';
import NextArrow from '@material-ui/icons/ArrowForwardIos';
import Button from '@material-ui/core/Button';
import Carousel, { consts } from 'react-elastic-carousel';
import cover1 from '../Assets/bookcover1.jpg';
import cover2 from '../Assets/bookcover2.jpg';
import cover3 from '../Assets/bookcover3.jpg';
import cover4 from '../Assets/bookcover4.jpg';
import cover5 from '../Assets/bookcover5.jpg';
import cover6 from '../Assets/bookcover6.jpg';
import cover7 from '../Assets/bookcover7.jpg';
import Grid from '@material-ui/core/Grid';
import FormLabel from '@material-ui/core/FormLabel';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import RadioGroup from '@material-ui/core/RadioGroup';
import Radio from '@material-ui/core/Radio';
import Paper from '@material-ui/core/Paper';


const useStyles = theme => ({
    root: {
        margin: 'auto',
        
    },
    mediaContainer: {
        overflow: 'hidden',
        margin: '20px',
        width: 40,

        "&:hover": {
            "& div": {
                opacity: 1,
            }
        }
    },

    text: {
        fontSize: "20px",
        color: "black",
        position: 'absolute',
        marginTop: "-160px",
        marginLeft: "80px",
        transition: "opacity .2s",
        opacity: 0,
        display:"block",
    },

    media: {
        height: '300px',
        width: '200px',
        display: 'block',
        transition: 'filter .2s',



        "&:hover": {
            filter: 'blur(2px) brightness(.5)',
        }
    },

});


class Shelf extends React.Component {
    /*myArrow({ type, onClick, isEdge }) {
        const pointer = type === consts.PREV ? <PrevArrow /> : <NextArrow />
        return (
            <Button disableRipple onClick={onClick} disabled={isEdge} style={{ background: 'transparent' }}>
                {pointer}
            </Button>
        )
    }*/

    render() {
        const { classes } = this.props;
        const breakpoints = [
            { width: 1, itemsToShow: 1},
            { width: 500, itemsToShow: 3},
            { width: 850, itemsToShow: 4 },
            { width: 1150, itemsToShow: 5 },
            { width: 1300, itemsToShow: 6 },
            //{ width: 1800, itemsToShow: 7/*, pagination: false*/ },

        ];

        //const handleDragStart = (e) => e.preventDefault();

        const items = [
            <a href='/novel' className={classes.mediaContainer}><img src={cover2} className={classes.media}/><div className={classes.text}>hello</div></a>,
            <a href='/novel' className={classes.mediaContainer}><img src={cover3} className={classes.media}/><div className={classes.text}>hello1</div></a>,
            <a href='/novel' className={classes.mediaContainer}><img src={cover4} className={classes.media}/><div className={classes.text}>hello2</div></a>,
            <a href='/novel' className={classes.mediaContainer}><img src={cover5} className={classes.media}/><div className={classes.text}>hello3</div></a>,
            <a href='/novel' className={classes.mediaContainer}><img src={cover6} className={classes.media}/><div className={classes.text}>hello4</div></a>,
            <a href='/novel' className={classes.mediaContainer}><img src={cover7} className={classes.media}/><div className={classes.text}>hello5</div></a>,
            //<a href='/novel' className={classes.mediaContainer}><img src={cover1} className={classes.media} onDragStart={handleDragStart} /><div className={classes.text}>hello6</div></a>,
        ];

        return (
            <Grid breakPoints={breakpoints} >

                {items}

            </Grid>
        )
    }
}

export default withStyles(useStyles)(Shelf);
