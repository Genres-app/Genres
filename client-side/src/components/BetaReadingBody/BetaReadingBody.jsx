// https://www.npmjs.com/package/react-material-ui-carousel

import React from 'react';
import Carousel from 'react-material-ui-carousel'
import { Paper, Button, Typography, Grid, CardContent } from '@material-ui/core'
import Cards from '../Cards/Cards.jsx';
import BookCarousel from '../BookCarousel/BookCarousel.jsx';
import { makeStyles, withStyles } from '@material-ui/core/styles';


const useStyles = makeStyles({
    root: {
    
    },
    body: {
        paddingTop: '75px',
        paddingBottom: '75px',
        paddingRight: '10%',
        paddingLeft: '10%'
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
        borderRadius: 0
    },
    defaultSidePadding: {
        paddingRight: '10%',
        paddingLeft: '10%'
    },
    smallSidePadding: {
        paddingRight: '5%',
        paddingLeft: '5%',
        
    },
    bottomPadding: {
        paddingBottom: "75px",
    },
    title: {
        fontSize: '70px',
        fontFamily: 'Georgia-Bold',
        fontWeight: '500',
        color: 'white',
    }
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
                    <Typography className={[classes.heading, classes.defaultSidePadding].join(' ')} variant="h1" >General Advising</Typography>
                    <card className={classes.smallSidePadding}>
                        <CardContent style = {{backgroundColor:'#CCCCFF'}}>
                        <BookCarousel/>
                        </CardContent>
                    </card>
                </Grid>

                <Grid item xs={12} className={classes.bottomPadding}>
                    <Typography className={[classes.heading, classes.defaultSidePadding].join(' ')} variant="h1">Plot Advising</Typography>
                    <card className={classes.smallSidePadding}>
                        <CardContent style = {{backgroundColor:'#ffffff'}}>
                        <BookCarousel />
                        </CardContent>
                    </card>
                </Grid>

                <Grid item xs={12} className={classes.bottomPadding}>
                    <Typography className={[classes.heading, classes.defaultSidePadding].join(' ')} variant="h1">Spelling and Grammar</Typography>
                    <card className={classes.smallSidePadding}>
                        <CardContent style = {{backgroundColor:'#CCCCFF'}}>
                        <BookCarousel />
                        </CardContent>
                    </card>
                </Grid>

   
            </Grid>
        </Grid>
    )
}

export default Body;