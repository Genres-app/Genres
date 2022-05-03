import React from 'react'
import {Typography, Card, CardContent, Grid} from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles'


const useStyles = makeStyles({
    root: {
        display: "block",
        height: "100%",
        minWidth: 250,
        padding: 20,
        borderRadius: "10px",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center center",
        backgroundSize: "cover"
    },
    title: {
        fontSize: 24,
        textAlign: "center",
    },
    description: {
        fontSize: 18,
        textAlign: "center",
    },
  });


const Cards = () => {
    const classes = useStyles();

    return (
        <>
        <Grid
            container 
            spacing={8}>
            <Grid item xs={12} md={4}>
                <Card className={classes.root}
                style={{
                    // backgroundImage: `url(${gradient1})`,
                    backgroundColor: '#d5edf2'
                    
                }}>
                    <CardContent>
                        <Typography className={classes.title} gutterBottom>
                            Original Stories
                        </Typography>
                        <Typography className={classes.description} gutterBottom>
                             Web novels created by users like you
                        </Typography>
                    </CardContent>
                </Card>
            </Grid>

            <Grid item xs={12} md={4}>
                <Card className={classes.root}
                style={{
                    // backgroundImage: `url(${gradient2})`
                    backgroundColor: '#B2CEDE'
                }}>
                    <CardContent>
                        <Typography className={classes.title} gutterBottom>
                            Becoming an Author
                        </Typography>
                        <Typography className={classes.description} gutterBottom>
                             Learn techniques. Write novels. Get paid.
                        </Typography>
                    </CardContent>
                </Card>
            </Grid>

            <Grid item xs={12} md={4}>
                <Card className={classes.root}
                  style={{
                    // backgroundImage: `url(${gradient3})`,
                    backgroundColor: '#B4C5E4'
                }}>
                    <CardContent>
                        <Typography className={classes.title} gutterBottom>
                            Book of Authors
                        </Typography>
                        <Typography className={classes.description} gutterBottom>
                             A guide to becoming a successful author
                        </Typography>
                    </CardContent>
                </Card>
            </Grid>


        </Grid>
        </>
    )
}

export default Cards
