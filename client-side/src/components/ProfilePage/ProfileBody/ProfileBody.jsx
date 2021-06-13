import React from 'react'
import {Container, Tab, Tabs} from '@material-ui/core';
import useStyles from './styles';

import {withStyles} from '@material-ui/core/styles';

import Banner from '../Banner.jsx'
import CommentBox from '../CommentBox.jsx'
import ProfileCarouselContainer from '../ProfileCarouselContainer.jsx'
import AboutBody from '../AboutBody.jsx'

//placeholders. Remove after implementing backend.
import bookcover1 from '../../Assets/bookcover1.jpg';
import bookcover2 from '../../Assets/bookcover2.jpg';
import bookcover3 from '../../Assets/bookcover3.jpg';
import bookcover4 from '../../Assets/bookcover4.jpg';
import bookcover5 from '../../Assets/bookcover5.jpg';
import bookcover6 from '../../Assets/bookcover6.jpg';
import bookcover7 from '../../Assets/bookcover7.jpg';

//ABOUT: This page displays the logged in user's profile from their perspectve.

/*FIXME: comments should be an array of comment objects fetched from database.
    A comment object should contain: 
    -profile picture of commenting user (img)
    -name of user (string)
    -whether user is a pro user (boolean)
    -book they commented on (string)
    -content of the actual comment (string)
    -date they made the comment (stringified date object)
*/
const comments = Array.from(Array(30).keys());

//FIXME: showCase should be an array of book objects to display in the author showcase carousel
const showCase = [
    {   
        'cover': bookcover1,
        'name': 'Hungry Bird',
        'author': 'Ernest McCartney',
    }, {
        'cover': bookcover2,
        'name': 'The Arrivals',
        'author': 'Lucas Lloyd',
    }, {
        'cover': bookcover3,
        'name': 'Mystic Emperors of the Deep',
        'author': 'Tom Douglas',
    }, {
        'cover': bookcover4,
        'name': 'Between Belief and Prayers',
        'author': 'H.W. Kishor',
    }, {
        'cover': bookcover5,
        'name': 'Over the Clouds',
        'author': 'Ken Adams',
    }, {
        'cover': bookcover6,
        'name': 'GLEO',
        'author': 'Arthur White',
    }, {
        'cover': bookcover7,
        'name': 'The Man From Nowhere',
        'author': 'Lucas Lloyd',
    },
]

//FIXME: readingList should be an array of book objects to display in the reading list carousel
const readingList = [
    {   
        'cover': bookcover1,
        'name': 'Hungry Bird',
        'author': 'Ernest McCartney',
    }, {
        'cover': bookcover2,
        'name': 'The Arrivals',
        'author': 'Lucas Lloyd',
    }, {
        'cover': bookcover3,
        'name': 'Mystic Emperors of the Deep',
        'author': 'Tom Douglas',
    }, {
        'cover': bookcover4,
        'name': 'Between Belief and Prayers',
        'author': 'H.W. Kishor',
    }, {
        'cover': bookcover5,
        'name': 'Over the Clouds',
        'author': 'Ken Adams',
    }, {
        'cover': bookcover6,
        'name': 'GLEO',
        'author': 'Arthur White',
    }, {
        'cover': bookcover7,
        'name': 'The Man From Nowhere',
        'author': 'Lucas Lloyd',
    },
]

//FIXME: masterClasses is currently an array of bookobjects to display in the master class carousel. Unsure what format masterclasses would be in.
const masterClasses = [
    {   
        'cover': bookcover1,
        'name': 'Hungry Bird',
        'author': 'Ernest McCartney',
    }, {
        'cover': bookcover2,
        'name': 'The Arrivals',
        'author': 'Lucas Lloyd',
    }, {
        'cover': bookcover3,
        'name': 'Mystic Emperors of the Deep',
        'author': 'Tom Douglas',
    }, {
        'cover': bookcover4,
        'name': 'Between Belief and Prayers',
        'author': 'H.W. Kishor',
    }, {
        'cover': bookcover5,
        'name': 'Over the Clouds',
        'author': 'Ken Adams',
    }, {
        'cover': bookcover6,
        'name': 'GLEO',
        'author': 'Arthur White',
    }, {
        'cover': bookcover7,
        'name': 'The Man From Nowhere',
        'author': 'Lucas Lloyd',
    },
]

const ProfileBody = (props) => {
    const classes = useStyles();

    const [selectedTab, setSelectedTab] = React.useState(0);

    const [chartEvent, setChartEvent] = React.useState(false);
    const [eventValue, setEventValue] = React.useState(0); //placeholder value
    const [eventTotal, setEventTotal] = React.useState(100); //placeholder value
    const [eventUnit, setEventUnit] = React.useState('mins'); //placeholder value

    const [readTime, setReadTime] = React.useState(60); //placeholder value
    const [readTotal, setReadTotal] = React.useState(100); //placeholder value

    const [pagesRead, setPagesRead] = React.useState(152); //placeholder value
    const [pagesTotal, setPagesTotal] = React.useState(190); //placeholder value

    const handleChange = (event, newValue) => {
        setSelectedTab(newValue);
    };

    const StyledTabs = withStyles({
        indicator: {
            backgroundColor: '#A1A6FF',
        },
    })(Tabs);
      
    const StyledTab = withStyles((theme) => ({
    root: {
        textTransform: 'none',
        fontWeight: theme.typography.fontWeightLight,
        fontSize: theme.typography.pxToRem(14),
        marginLeft: theme.spacing(4),
        "&:hover": {
        color: '#A1A6FF',
        },
        "&$selected": {
        color: '#A1A6FF',
        fontWeight: theme.typography.fontWeightRegular,
        },
        "&:focus": {
        color: '#A1A6FF',
        },
        '@media (max-width:1024px)': {
            marginLeft: '0px',
        },
    },
    selected: {}
    }))((props) => <Tab disableRipple {...props} />);
      
    return (
        <main className = {classes.content}>

            {/* Banner */}
            <Banner 
                user={props.user}
                selectedTab={selectedTab}
                chartEvent={chartEvent}
                eventValue={eventValue}
                eventTotal={eventTotal}
                eventUnit={eventUnit}
                readTime={readTime}
                readTotal={readTotal}
                pagesRead={pagesRead}
                pagesTotal={pagesTotal}
            ></Banner>

            {/* Tabs */}
            <div className={selectedTab===0? classes.profileTabStyles: classes.activityTabStyles}>
                <StyledTabs variant="fullWidth" value={selectedTab} onChange={handleChange}>
                    <StyledTab label="Profile"/>
                    <StyledTab label="Activity"/>
                </StyledTabs>
            </div>

            {/* Display AuthorShowcase carousel + comments if on Profile tab */}
            {selectedTab === 0 && 
            <Container className = {`${classes.container} ${classes.profileBodyContainer}`}>

                {/* Bio will be displayed inside body rather than banner if width <= 1024 */}
                <AboutBody user={props.user}></AboutBody>

                <ProfileCarouselContainer 
                    title={'Author Showcase'} 
                    subtitle={`${showCase.length} Published Stories - 1 Draft (only visible to you)`}
                    books={showCase}
                ></ProfileCarouselContainer>

                <CommentBox comments={comments}></CommentBox>

            </Container>
            }

            {/* Display Readinglist + Master class carousels if on Activity tab */}
            {selectedTab === 1 && 
            <Container className = {`${classes.container} ${classes.activityBodyContainer}`}>

                <div className={classes.flexColumn}>
                    <ProfileCarouselContainer 
                        title={'Reading List'} 
                        subtitle={`${readingList.length} Books`}
                        books={readingList}
                    ></ProfileCarouselContainer>
                    
                    <ProfileCarouselContainer 
                        title={'Followed Masterclasses'} 
                        subtitle={`${masterClasses.length} Classes`}
                        books={masterClasses}
                    ></ProfileCarouselContainer>
                </div>
            </Container>
            }
        </main>
    )
}

export default ProfileBody
