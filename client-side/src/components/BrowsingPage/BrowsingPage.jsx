import React from 'react';
//Icons
import Icon from '@mdi/react';
import {
    mdiChevronLeft,
    mdiChevronRight,
} from '@mdi/js';
// Material UI Components
import { makeStyles, createMuiTheme, ThemeProvider, withStyles } from '@material-ui/core/styles';
import deepPurple from '@material-ui/core/colors/deepPurple';
import Autocomplete from '@material-ui/lab/Autocomplete';
import TextField from '@material-ui/core/TextField';
import { Typography, Grid, Container, Button, IconButton } from '@material-ui/core'
import BookCarousel from '../BookCarousel/BookCarousel.jsx';
import Shelf from './Shelf.jsx'
import shelfSVG from '../Assets/shelf.svg'
import Chip from '@material-ui/core/Chip';
import ToggleButton from '@material-ui/lab/ToggleButton';
import ToggleButtonGroup from '@material-ui/lab/ToggleButtonGroup';


const useStyles = makeStyles((theme) => ({
    root: {
        background: '#ffff'
    },
    search: {
        width: 500,
        margin: '20px 20px',
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
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
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
    },
    pageSelector: {
        width: "max-content",
    },
    pageSelItem: {

    }
}
));

export default function Body() {
    const classes = useStyles();

    // Theme
    const theme = createMuiTheme({
        palette: {
            primary: {
                main: '#ffffff',
            },
            secondary: deepPurple,
            alert: '#ff1744',
        },
    });

    const pageSelector = () => (
        <Container className={classes.pageSelector}>
            <IconButton aria-label="last page">
                <Icon path={mdiChevronLeft} size={1} />
            </IconButton>
            <Button className={classes.pageSelItem} color="secondary">1</Button>
            <Button className={classes.pageSelItem} color="secondary">2</Button>
            <Button className={classes.pageSelItem} color="secondary" disabled>...</Button>
            <Button className={classes.pageSelItem} color="secondary">128</Button>
            <IconButton aria-label="next page">
                <Icon path={mdiChevronRight} size={1} />
            </IconButton>
        </Container>
    );


    const [alignment, setAlignment] = React.useState('24');

    const handleChangeOfShowAmount = (event, newAlignment) => {
        setAlignment(newAlignment);
    };

    return (
        <ThemeProvider theme={theme}>
            <Grid container className={classes.root}>
                <Container className={classes.searchBarPadding}>
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

                    <ToggleButtonGroup size="small" value={alignment} exclusive onChange={handleChangeOfShowAmount}>
                        <ToggleButton value="24">
                            <Typography>24</Typography>
                        </ToggleButton>
                        <ToggleButton value="36">
                            <Typography>36</Typography>
                        </ToggleButton>
                        <ToggleButton value="48">
                            <Typography>48</Typography>
                        </ToggleButton>
                    </ToggleButtonGroup>
                </Container>

                <div className={classes.shelf}>
                    <Shelf />
                </div>

            </Grid>

            <Container className={classes.pageSelectorContainer}>
                {pageSelector()}
            </Container>
        </ThemeProvider>
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