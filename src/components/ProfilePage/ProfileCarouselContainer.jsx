import React from 'react'
import {Typography, Paper, Button} from '@material-ui/core';
import {makeStyles} from '@material-ui/core/styles';
import ViewColumnIcon from '@material-ui/icons/ViewColumn';
import ViewListIcon from '@material-ui/icons/ViewList';

import ProfileCarousel from './ProfileCarousel.jsx'
import ProfileList from './ProfileList.jsx'

//ABOUT: Carousel container that renders and allows for switching between carousel and list view.
const ProfileCarouselContainer = (props) => {
    const [carouselView, setCarouselView] = React.useState(true);

    const [height, setHeight] = React.useState('300px');

    const useStyles = makeStyles((theme) => ({
        carouselContainer: {
            marginTop: '40px',
            marginBottom: '20px',
            height: height,
            width: '100%',
            padding: '20px',
        },
        title: {
            fontSize: '20px', 
            fontWeight: '100', 
            paddingBottom: '2px',
        },
        subtitle: {
            fontSize: '13px', 
            color: '#ABABAB', 
            marginBottom: '20px'
        },
    }));

    const changeToListView = () => {
        setHeight('400px');
        setCarouselView(false);
    };

    const changeToCarouselView = () => {
        setHeight('300px');
        setCarouselView(true);
    };

    const classes = useStyles();

    return (
        <Paper className={classes.carouselContainer}>
            <div style={{display: 'flex', justifyContent: 'space-between',}}>
                <Typography className={classes.title} variant = "h6">{props.title}</Typography>
                <div>
                    <Button style={{minWidth: '50px',}} onClick={changeToCarouselView}><ViewColumnIcon></ViewColumnIcon></Button>
                    <Button style={{minWidth: '50px',}} onClick={changeToListView}><ViewListIcon></ViewListIcon></Button>
                </div>
            </div>
            <Typography className={classes.subtitle} variant = "subtitle1">{props.subtitle}</Typography>
            {carouselView? <ProfileCarousel books={props.books}></ProfileCarousel>
            : <ProfileList books={props.books}></ProfileList>
            }
        </Paper>
    )
}

export default ProfileCarouselContainer
