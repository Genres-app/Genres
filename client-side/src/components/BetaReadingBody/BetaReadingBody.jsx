// https://www.npmjs.com/package/react-material-ui-carousel

import React from 'react';
import Carousel from 'react-material-ui-carousel'
import { Paper, Button, Typography, Grid } from '@material-ui/core'
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
        paddingLeft: '5%'
    },
    bottomPadding: {
        paddingBottom: "75px"
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
                        height: '50px'
                    }}
                    ></div>
                </Grid>

                <Grid item xs={12} className={classes.bottomPadding}>
                    <Typography className={[classes.heading, classes.defaultSidePadding].join(' ')} variant="h1" >General Advising</Typography>
                    <div className={classes.smallSidePadding}>
                        <BookCarousel />
                    </div>
                    
                </Grid>

                <Grid item xs={12} className={classes.bottomPadding}>
                    <Typography className={[classes.heading, classes.defaultSidePadding].join(' ')} variant="h1">Plot Advising</Typography>
                    <div className={classes.smallSidePadding}>
                        <BookCarousel />
                    </div>
                </Grid>

                <Grid item xs={12} className={classes.bottomPadding}>
                    <Typography className={[classes.heading, classes.defaultSidePadding].join(' ')} variant="h1">Wording Advising</Typography>
                    <div className={classes.smallSidePadding}>
                        <BookCarousel />
                    </div>
                </Grid>

   
            </Grid>
        </Grid>
    )
}


function Item(props)
{
    const classes = useStyles();
    return (
        <Paper className={classes.carouselBody}
            style={{
                backgroundImage: `url(${props.item.image})`,
            }}>
            <Grid 
                container 
                spacing={8} 
                direction="column" 
                alignItems="center">
                <Grid item xs={12} >
                    <Typography className={classes.title} variant="h2" align="center">
                        {props.item.name}
                    </Typography>
                    <WhiteTypography variant = "h5" align="center" paragraph>
                        {props.item.description}
                    </WhiteTypography>
                </Grid>
                <Grid item xs={3}>
                    <Button 
                        className="CheckButton" 
                        variant="contained" 
                        color="primary">
                        Read now
                    </Button>
                </Grid>
            </Grid>
        </Paper>
    )
}

export default Body;