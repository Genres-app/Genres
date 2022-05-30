import React, { useEffect, useState } from 'react'
import useStyles from './styles';
import {Button,ButtonBase, Paper, Grid, Typography, Container} from '@material-ui/core'
import bookcover1 from '../Assets/bookcover1.jpg'
import ThumbUpAltIcon from '@material-ui/icons/ThumbUpAlt';
import Pagination from '@material-ui/lab/Pagination';
import { API } from 'aws-amplify';
import * as queries from '../../graphql/queries';

const SearchResults = () => {
    const [results,setResults] = useState([])
    const classes = useStyles();

    // Fetch Data from DB
    useEffect(()=>{
        API.graphql({ query: queries.listNovels }).then(allNovels=>{
            console.log(allNovels);
            setResults(allNovels.data.listNovels.items)
        })
    },[])

    return (
        <div className = {classes.root}>

            <Container maxWidth = 'lg' >
            <Grid container spacing={2} direction="column" alignItems="center" justify="center">

                <Grid item xs={3}>        
                <Typography className = {classes.searchResults}>Search results for "Hungry Bird"</Typography>
                </Grid>   

            </Grid> 
                
                
                
                <Grid container spacing = {3} >
                    
                            {results.map((result, index) => {
                                return (
                                    <Grid item key = {index} sm = {12} md = {6}>
                                    <Paper className = {classes.paper} elevation = {0}>
                                        <Grid container  spacing = {1} >
                                            <Grid item>
                                                <ButtonBase disableRipple className={classes.image}>
                                                    <img alt = "book" className = {classes.bookImage} src = {bookcover1}/>
                                                </ButtonBase>
                                
                                            </Grid>
                                    <Grid item xs ={12} sm container>
                                <Grid item xs container direction="column" spacing={2}>
                                    <Grid item xs>
                                    <span></span>
                                    <Typography display = "inline" variant="h6">
                                         {result.title}
                                        
                                         <Button className={classes.likeButton}>
                                            <ThumbUpAltIcon className={classes.icon}/>
                                             99%
                                         </Button>
                                        
                                    </Typography>
                                    <Typography display = "inline" className = {classes.upvotes}>of 100 votes</Typography>
                                    <Typography className = {classes.author}>
                                        Authors: Peter Anteater, Howard Gilman
                                    </Typography>
                                    <Typography className = {classes.status}>
                                        Status: Ongoing Last Updated: April 12, 2021
                                    </Typography>
                                    <Typography>
                                    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                                    </Typography>
                                    </Grid>
                                </Grid>
                            </Grid>
                        </Grid>

                        

                    </Paper>
                    </Grid>
                                );
                            })}
                            
                    

                        
                </Grid>
                <Grid container spacing={0} direction="column" alignItems="center" justify="center">

                <Grid item xs={4}>        
                <Pagination className = {classes.pagination} count={5}  size = "large"/>
                </Grid>   

            </Grid> 
                
            </Container>
           

            
        </div>
    )
}

export default SearchResults
