import React from 'react';
import Autocomplete from '@material-ui/lab/Autocomplete';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import { Typography, Grid } from '@material-ui/core'
import BookCarousel from '../BookCarousel/BookCarousel.jsx';
import Shelf from './Shelf.jsx'
import shelfSVG from '../Assets/shelf.svg'
import Chip from '@material-ui/core/Chip';


const useStyles = makeStyles((theme) => ({
    root: {
        background: '#ebf7ff'
    },
    search: {
        width: 500,
        margin: '20px 0',
        background: '#f5fbff'
    },    
    heading: {
        fontSize: '180%', 
        fontWeight: '500',
    },
    smallSidePadding: {
        paddingRight: '5%',
        paddingLeft: '5%'
    },
    bottomPadding: {
        paddingBottom: "75px"
    },
    searchBarPadding: {
        padding: '20px 0'
    },
    image: {
        padding: '100px'
    },
    shelf: {
        filter: 'drop-shadow(1px 1px 10px #a9bcc7)',
        paddingRight: '10%',
        paddingLeft: '10%',
        paddingTop: '20px',
        paddingBottom: '35px'
    }
}
));

export default function Body() {
  const classes = useStyles();

  return (
        <Grid container className={classes.root}>
            <Grid item xs={12} className={classes.searchBarPadding} align='center' justify='center' alignItems='center'>
            <Autocomplete
                className={classes.search}
                multiple
                id="tags-outlined"
                options={genres}
                getOptionLabel={(option) => option.genre}
                filterSelectedOptions
                renderInput={(params) => (
                <TextField
                    {...params}
                    variant="outlined"
                    label="Filter by Genres"
                    placeholder="Genres"
                />
                )}
                renderTags={(tagValue, getTagProps) => {
                    return tagValue.map((option, index) => (
                      <Chip style={{backgroundImage: 'linear-gradient(to right, #a6b2ff, #57f7e0)'}} {...getTagProps({ index })} label={option.genre} />
                    ));
                  }}
            />
        </Grid>
            <Grid item xs={12} className={classes.bottomPadding} align='center' justify='center' alignItems='center'>
                    <div 
                        className={classes.shelf}
                        style={{ backgroundImage: `url(${shelfSVG})`, 
                                backgroundRepeat: 'repeat-y',
                                backgroundRepeat: 'no-repeat',
                                backgroundOrigin: 'content-box',
                                backgroundPosition: '0 260px',
                                }}>
                        <Shelf/>
                    </div>

                    <div 
                        className={classes.shelf}
                        style={{ backgroundImage: `url(${shelfSVG})`, 
                                backgroundRepeat: 'repeat-y',
                                backgroundRepeat: 'no-repeat',
                                backgroundOrigin: 'content-box',
                                backgroundPosition: '0 260px',
                                }}>
                        <Shelf/>
                    </div>
{/* 
                    <div 
                        className={classes.shelf}
                        style={{ backgroundImage: `url(${shelfSVG})`, 
                                backgroundRepeat: 'repeat-y',
                                backgroundRepeat: 'no-repeat',
                                backgroundOrigin: 'content-box',
                                // backgroundPosition: 'center bottom'
                                backgroundPosition: '0 260px',
                                // backgroundSize: '100% auto'
                                }}>
                        <Shelf/>
                    </div> */}

                </Grid>
            

        </Grid>
  );
}


const genres = [
  { genre: 'Fiction' },
  { genre: 'Fantasy' },
  { genre: 'Science Fiction' },
  { genre: 'Dystopian' },
  { genre: 'Action' },
  { genre: 'Adventure' },
  { genre: 'Mystery' },
  { genre: 'Horror' },
  { genre: 'Thriller' },
  { genre: 'Historical Fiction' },
  { genre: 'Romance' },
  { genre: 'Contemporary Fiction' },
  { genre: 'Literary Fiction' },
  { genre: 'Graphic Novel' },
  { genre: 'Short Story' },
  { genre: 'Young Adult' },
  { genre: 'Children\'s' },
  { genre: 'Nonfiction' },
  { genre: 'Autobiography' },
  { genre: 'Biography' },
  { genre: 'Food & Drink' },
  { genre: 'Art & Photography' },
  { genre: 'Self-help' },
  { genre: 'History' },
  { genre: 'Travel' },
  { genre: 'True Crime' },
  { genre: 'Humor' },

];