import React, { useEffect, useState } from 'react'
import useStyles from './styles';
import {Button,ButtonBase, Paper, Grid, Typography, Container} from '@material-ui/core'
import bookcover1 from '../Assets/bookcover1.jpg'
import ThumbUpAltIcon from '@material-ui/icons/ThumbUpAlt';
import Pagination from '@material-ui/lab/Pagination';
import { API } from 'aws-amplify';
import * as queries from '../../graphql/queries';
import { useParams } from 'react-router-dom';

const SearchResults = () => {
    const params = useParams()
    const [results,setResults] = useState([])
    const classes = useStyles();

    // Fetch Data from DB
    useEffect(()=>{
        let filter = {
            title: {
                eq: params.search
            }
        };
        API.graphql({ query: queries.listNovels ,variables:{ filter } }).then(allNovels=>{
            console.log(allNovels);
            setResults(allNovels.data.listNovels.items)
        })
    },[params.search])

    return (
        <div className = {classes.root}>

            <Container maxWidth = 'lg' >
            <Grid container spacing={2} direction="column" alignItems="center" justify="center">

                <Grid item xs={3}>        
                <Typography className = {classes.searchResults}>Search results for "{params.search}"</Typography>
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
                                             {result.num_likes}%
                                         </Button>
                                        
                                    </Typography>
                                    <Typography display = "inline" className = {classes.upvotes}>of 100 votes</Typography>
                                    <Typography className = {classes.author}>
                                        Authors: {result.author}
                                    </Typography>
                                    <Typography className = {classes.status}>
                                        Concluded: {result.status} Last Updated: {result.publication_timestamp}
                                    </Typography>
                                    <Typography>
                                    {result.description}
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
