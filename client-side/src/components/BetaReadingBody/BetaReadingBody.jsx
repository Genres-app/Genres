// https://www.npmjs.com/package/react-material-ui-carousel

import React from 'react';
import Carousel from 'react-material-ui-carousel'
import { Paper, Button, Typography, Grid, CardContent,Card } from '@material-ui/core'
import Cards from '../Cards/Cards.jsx';
import BookCarousel from '../BookCarousel/BookCarousel.jsx';
import { makeStyles, withStyles } from '@material-ui/core/styles';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import corgi from '../Assets/corgi.jpg';
import CardMedia from '@material-ui/core/CardMedia';

const useStyles = makeStyles({
    root: {
        display: "block",
        minWidth: 250,
        // height: '100%',
        padding: 0,
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center center",
        backgroundSize: "cover",
    },
    body: {
        paddingTop: '75px',
        paddingBottom: '75px',
        paddingRight: '10%',
        paddingLeft: '10%',
    },
    heading: {
        fontSize: '180%', 
        fontWeight: '500',

    },
    carouselBody: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        height: '500px',
        borderRadius: 0,
    },
    defaultSidePadding: {
        paddingRight: '10%',
        paddingLeft: '6.5%',
        paddingBottom:'1.5%',
    },
    smallSidePadding: {
        paddingRight: '0%',
        paddingLeft: '0%',
        paddingBottom:'0%',
    },
    bottomPadding: {
        paddingBottom: "75px",
        paddingRight: '10%',
        paddingLeft: '10%', 
    },
    title: {
        fontSize: '70px',
        fontFamily: 'Georgia-Bold',
        fontWeight: '500',
        color: 'white',   
    },
    media: {
        height: '100%',
      },
    Card: {
        paddingRight: '5%',
        paddingLeft: '5%',
    },
    rootAction: {
        height: '100%',
        
      },
});


const WhiteTypography = withStyles({
    root: {
        color: '#FFFFFF',
        fontWeight: 300
    }
})(Typography);



const Body = () => {
    const classes = useStyles();

    return (
        <Grid container className={classes.root}>

            <Grid item container xs={12}>
                <Grid item xs={12} className={classes.body}>
                    <Cards />
                </Grid>
                
                <Grid item xs={12}>
                <div
                    style={{
                        height: '50px',
                    }}
                    ></div>
                </Grid>

                <Grid item xs={12} className={classes.bottomPadding}>    
                    <Card className={classes.smallSidePadding} style = {{backgroundColor:'#CCCCFF'}} >
                    <CardActionArea className={classes.rootAction}>
                     <CardMedia
                    className={classes.media}
                    />
                        <CardContent >
                        <Typography className={[classes.heading, classes.defaultSidePadding].join(' ')} variant="h1" >General Advising</Typography>
                        <Typography style={{marginLeft:"5vw", fontSize: 18}}>
                        Works in general advising are looking for feedback on the overall chapter or story. Authors would like to hear the experiences of readers.
                        </Typography>
                        <BookCarousel/>
                        </CardContent>
                        </CardActionArea>
                    </Card>
                </Grid>

                <Grid item xs={12} className={classes.bottomPadding}>
                    <Card className={classes.smallSidePadding}>
                    <CardActionArea className={classes.rootAction}>
                     <CardMedia
                    className={classes.media}
                    />
                        <CardContent>
                        <Typography className={[classes.heading, classes.defaultSidePadding].join(' ')} variant="h1">Plot Advising</Typography>
                        <Typography style={{marginLeft:"5vw", fontSize: 18}}>
                        Works in plot advising are looking to improve or confirm their current storyline with the help of reader feedback.
                        </Typography>
                        <BookCarousel />
                        </CardContent>
                        </CardActionArea>
                    </Card>
                </Grid>

                <Grid item xs={12} className={classes.bottomPadding}>
                    
                    <Card className={classes.smallSidePadding} style = {{backgroundColor:'#CCCCFF'}}>
                    <CardActionArea className={classes.rootAction}>
                     <CardMedia
                    className={classes.media}
                    />
                        <CardContent >
                        <Typography className={[classes.heading, classes.defaultSidePadding].join(' ')} variant="h1">Spelling and Grammar</Typography>
                        <Typography style={{marginLeft:"5vw", fontSize: 18}}>
                        Just like the category name, this category are for works that may need additional help with spotting spelling, grammar, and punctuation errors.
                        </Typography >
                        <BookCarousel />
                        </CardContent>
                        </CardActionArea>
                    </Card>
                </Grid>

   
            </Grid>
        </Grid>
    )
}

export default Body;