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
        background: '#ffff'
    },
    search: {
        width: 500,
        margin: '20px 0',
        background: '#ffff'
    },
    heading: {
        fontSize: '180%',
        fontWeight: '500',
    },
    smallSidePadding: {
        paddingRight: '5%',
        paddingLeft: '5%',
    },
    bottomPadding: {
        paddingBottom: "75px",
    },
    searchBarPadding: {
        padding: '20px 0',
        background: "#ffff",
    },
    image: {
        padding: '100px'
    },
    shelf: {
        width: '75vw',
        maxWidth: 1440,
        margin: '0 auto',
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
                            <Chip style={{ backgroundImage: 'linear-gradient(to right, #a6b2ff, #57f7e0)' }} {...getTagProps({ index })} label={option.genre} />
                        ));
                    }}
                />
            </Grid>

            <div className={classes.shelf}>
                <Shelf />
            </div>



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