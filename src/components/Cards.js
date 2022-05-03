import React from 'react'
import {Typography, Card, CardActions, CardContent, Grid} from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles'


const useStyles = makeStyles({
    root: {
        display: "block",
        height: "100%",
        minWidth: 275,
        padding: 30,
        borderRadius: "20px"
    },
    // bullet: {
    //   display: 'inline-block',
    //   margin: '0 2px',
    //   transform: 'scale(0.8)',
    // },
    title: {
        fontSize: 24,
        textAlign: "center",
    },
    description: {
        fontSize: 18,
        textAlign: "center",
    },
    pos: {
        marginBottom: 12,
    },
  });


const Cards = () => {
    const classes = useStyles();

    return (
        <>
        <Grid
            container 
            spacing={8}>

            <Grid item xs={4}>
                <Card className={classes.root}>
                    <CardContent>
                        <Typography className={classes.title} gutterBottom>
                            Original Stories
                        </Typography>
                        <Typography className={classes.description} gutterBottom>
                             A Webnovel site for everyone
                        </Typography>
                    </CardContent>
                </Card>
            </Grid>

            <Grid item xs={4}>
                <Card className={classes.root}>
                    <CardContent>
                        <Typography className={classes.title} gutterBottom>
                            Becoming an Author
                        </Typography>
                        <Typography className={classes.description} gutterBottom>
                             Write novels. Get paid.
                        </Typography>
                    </CardContent>
                </Card>
            </Grid>

            <Grid item xs={4}>
                <Card className={classes.root}>
                    <CardContent>
                        <Typography className={classes.title} gutterBottom>
                            Book of Authors
                        </Typography>
                        <Typography className={classes.description} gutterBottom>
                             A guide on how to beome a popular author.
                        </Typography>
                    </CardContent>
                </Card>
            </Grid>


        </Grid>
        </>
    )
}

export default Cards
