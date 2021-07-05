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


<link href="show.css" type="text/css" rel="stylesheet"/>

const useStyles = theme => ({
    root: {
        margin: 'auto',
    },
    mediaContainer: {
        overflow: 'hidden',
        margin: '20px',
    },

    text: {
        fontSize: "20px",
        color: "white",
        position: 'absolute',
        marginTop: "-160px",
        marginLeft: "80px",
    },

    media: {
        height: '300px',
        width: '200px', 
        display: 'block',
        transition: 'filter .2s',

        "&:hover": {
            filter: 'blur(10px)',
        }
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
            <a href='/novel' className={classes.mediaContainer} onMouseEnter={ () => showText(1) } onMouseLeave={ () => hideText(1) }><img src={cover2} className={classes.media} onDragStart={handleDragStart} /><div className={classes.text}><div  style ={{display: "none"}} className="show">hello</div></div></a>,
            <a href='/novel' className={classes.mediaContainer} onMouseEnter={ () => showText(2) } onMouseLeave={ () => hideText(2) }><img src={cover3} className={classes.media} onDragStart={handleDragStart} /><div className={classes.text}><div  style ={{display: "none"}} className="show">hello1</div></div></a>,
            <a href='/novel' className={classes.mediaContainer} onMouseEnter={ () => showText(3) } onMouseLeave={ () => hideText(3) }><img src={cover4} className={classes.media} onDragStart={handleDragStart} /><div className={classes.text}><div  style ={{display: "none"}} className="show">hello2</div></div></a>,
            <a href='/novel' className={classes.mediaContainer} onMouseEnter={ () => showText(4) } onMouseLeave={ () => hideText(4) }><img src={cover5} className={classes.media} onDragStart={handleDragStart} /><div className={classes.text}><div  style ={{display: "none"}} className="show">hello3</div></div></a>,
            <a href='/novel' className={classes.mediaContainer} onMouseEnter={ () => showText(5) } onMouseLeave={ () => hideText(5) }><img src={cover6} className={classes.media} onDragStart={handleDragStart} /><div className={classes.text}><div  style ={{display: "none"}} className="show">hello4</div></div></a>,
            <a href='/novel' className={classes.mediaContainer} onMouseEnter={ () => showText(6) } onMouseLeave={ () => hideText(6) }><img src={cover7} className={classes.media} onDragStart={handleDragStart} /><div className={classes.text}><div  style ={{display: "none"}} className="show">hello5</div></div></a>,
            <a href='/novel' className={classes.mediaContainer} onMouseEnter={ () => showText(7) } onMouseLeave={ () => hideText(7) }><img src={cover1} className={classes.media} onDragStart={handleDragStart} /><div className={classes.text}><div  style ={{display: "none"}} className="show">hello6</div></div></a>,
    ];
            
        return (
        <Carousel breakPoints={breakpoints} renderArrow={this.myArrow}>
            {items}
        </Carousel>
        )
    }
}

export default withStyles(useStyles)(Shelf);


var x;
function showText(x){
    if(x == 1){
    document.getElementsByClassName('show')[0].style.display = 'block';}
    if(x == 2){
    document.getElementsByClassName('show')[1].style.display = 'block';}
    if(x == 3){
    document.getElementsByClassName('show')[2].style.display = 'block';}
    if(x == 4){
    document.getElementsByClassName('show')[3].style.display = 'block';}
    if(x == 5){
    document.getElementsByClassName('show')[4].style.display = 'block';}
    if(x == 6){
    document.getElementsByClassName('show')[5].style.display = 'block';}
    if(x == 7){
    document.getElementsByClassName('show')[6].style.display = 'block';}

}

var y
function hideText( y){
    if(y == 1){
    document.getElementsByClassName('show')[0].style.display = 'none';}
    if(y == 2){
    document.getElementsByClassName('show')[1].style.display = 'none';}
    if(y == 3){
    document.getElementsByClassName('show')[2].style.display = 'none';}
    if(y == 4){
    document.getElementsByClassName('show')[3].style.display = 'none';}
    if(y == 5){
    document.getElementsByClassName('show')[4].style.display = 'none';}
    if(y == 6){
    document.getElementsByClassName('show')[5].style.display = 'none';}
    if(y == 7){
    document.getElementsByClassName('show')[6].style.display = 'none';}
}
