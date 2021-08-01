import React from 'react'
import {Typography, Card, CardContent, Grid, Icon} from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles'
import AccessTimeIcon from '@material-ui/icons/AccessTime';
import corgi from '../Assets/corgi.jpg';
import { useDispatch } from 'react-redux';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';

import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';



const useStyles = makeStyles({
    root: {
        display: "block",
        height: "100%",
        minWidth: 250,
        padding: 0,
        borderRadius: "10px",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center center",
        backgroundSize: "cover",
        backgroundColor: '#e1e1e6'
    },
    title: {
        fontSize: 24,
        fontWeight: 500,
        paddingTop: '10px'
    },
    description: {
        fontSize: 18, 
    },
    align: {
        verticalAlign: 'right',
        display: 'inline-flex',
    },
    media: {
        height: '100%',
        width: '100%',
    }
  });

const Cards = () => {
    const classes = useStyles();
    return (
        <>
        <Grid
            container 
            spacing={8}
            >
            <Grid item xs={12} md={4}>
            <CardActionArea>
                <Card className={classes.root} onClick={() => GoToMPB(2)}>
                    <CardContent>
                        <Grid item xs={12}>
                            <img src={corgi} className={classes.media} />
                        </Grid>
                    
                        <Typography className={classes.title} gutterBottom>
                            Master Class
                        </Typography>
                        <Typography className={classes.description} gutterBottom>
                            Submit your original works and let the readers vote for their favorite! Winners will receive cash prize.
                        </Typography>
                        <Grid item xs={12} className={classes.align}>
                            <Icon component={AccessTimeIcon} style={{paddingRight: '5px'}}></Icon>
                            <Typography className={classes.description} >10 days left</Typography>
                        </Grid>
                    </CardContent>
                </Card>
                </CardActionArea>
            </Grid>


            <Grid item xs={12} md={4}>
            <CardActionArea>
                <Card className={classes.root} onClick={() => GoToMPB(3)} >
                    <CardContent>
                        <Grid item xs={12}>
                            <img src={corgi} className={classes.media} />
                        </Grid>
                    
                        <Typography className={classes.title} gutterBottom>
                            Publit
                        </Typography>
                        <Typography className={classes.description} gutterBottom>
                            Our annual rookie contest is dedicated to new writers and allowing them to be heard! Winners will receive cash prize and mentorship.
                        </Typography>
                        <Grid item xs={12} className={classes.align}>
                            <Icon component={AccessTimeIcon} style={{paddingRight: '5px'}}></Icon>
                            <Typography className={classes.description} >10 days left</Typography>
                        </Grid>
                    </CardContent>
                </Card>
            </CardActionArea>
            </Grid>


            <Grid item xs={12} md={4}>
            <CardActionArea>
                <Card className={classes.root} onClick={() => GoToMPB(1)} >
                    <CardContent>
                        <Grid item xs={12}>
                            <img src={corgi} className={classes.media} />
                        </Grid>
                    
                        <Typography className={classes.title} gutterBottom>
                            Beta Reading
                        </Typography>
                        <Typography className={classes.description} gutterBottom>
                            Challenge yourself by writing to our prompts and let readers vote for their favorite work!
                        </Typography>
                        <Grid item xs={12} className={classes.align}>
                            <Icon component={AccessTimeIcon} style={{paddingRight: '5px'}}></Icon>
                            <Typography className={classes.description} >10 days left</Typography>
                        </Grid>
                    </CardContent>
                </Card>
            </CardActionArea>
            </Grid>
        </Grid>
        </>
    )
    
}

export default Cards


function GoToMPB(t) {
    if (t == 1) {
        window.location.href = "/beta-reading";
    }
    else if (t == 2) {
        window.location.href = "/masterclass";
    }
    else if (t == 3) {
        window.location.href = "/publit";
    }
    else {
        console.log("Undefined!");
    }
}
