import React from 'react'
import {Typography, Button, Card, CardContent, CardMedia, Grid, Container } from '@material-ui/core';
import useStyles from './styles';
import HomeCarousel1 from '../Assets/HomeCarousel1.jpg'
import {cardItems} from './cardItems';
import BookCarousel from '../BookCarousel/BookCarousel.jsx';

const Body = () => {
    const classes = useStyles();
    return (
        <main>

        <div className = {classes.container} style = {{backgroundImage: `url(${HomeCarousel1})`}}>
        <Container className = {classes.gridPadding} maxWidth = 'md'>
                <Grid container spacing = {4} >
                    <Grid item md = {6}>
                    <Container className = {classes.gridPadding} maxWidth = "sm">
                        <Typography className = {classes.topMargin, classes.title}  gutterBottom>
                            Welcome to Genres
                        </Typography>
                        <Typography className = {classes.bodyText} variant = "h6"  color = "textSecondary" paragraph>
                        For users by users
                        </Typography>
                        <div className = {classes.buttons}>
                            <Grid container spacing = {2} >
                                <Grid item>
                                    <Button className = {classes.button} variant = "contained">
                                        Join Our Community
                                    </Button>

                                </Grid>
                                <Grid item>
                                    <Button className = {classes.button} variant = "contained">
                                        Start Browsing
                                    </Button>

                                </Grid>
                            </Grid>
                        </div>
                    </Container>
                    </Grid>

                </Grid>
            </Container>        
            
         </div>


            

            <Container className = {classes.topMargin} >
                <Grid container spacing = {4}>
                {cardItems.map((card, index)=>(
                    <Grid item key = {index} xs = {12} sm = {6} md = {4}>
                        <Card className = {classes.card}>
                            <CardMedia className = {classes.cardLandscapeImage} image = {card.image} title = {card.title} />
                            <CardContent className = {classes.cardContent}>
                                <Typography gutterBottom variant = "h5">
                                    {card.title}
                                </Typography>
                                <Typography>
                                    {card.description}
                                </Typography>
                            </CardContent>
                        </Card>
                    </Grid>
                    ))}
                </Grid>

                </Container>
                
            <Grid container className = {classes.topMargin}>
                <Grid item xs={12} className={classes.bottomPadding}>
                    <Typography className={[classes.heading, classes.defaultSidePadding].join(' ')} variant="h1" >Start Reading from our Top Selections</Typography>
                    <div className={classes.smallSidePadding}>
                        <BookCarousel />
                    </div>
                    
                </Grid>
            </Grid>
                   

                </main>
    )
}

export default Body
