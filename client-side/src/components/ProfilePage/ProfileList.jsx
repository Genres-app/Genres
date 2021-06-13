import React from 'react'
import {Typography, List, ListItem, Button} from '@material-ui/core';
import {makeStyles} from '@material-ui/core/styles';

// smooth scrollbar: https://github.com/idiotWu/react-smooth-scrollbar
import Scrollbar from 'react-smooth-scrollbar';

//ABOUT: list view display of items inside ProfileCarousel.jsx
const useStyles = makeStyles((theme) => ({
    scrollContent: {
        width: '100%',
        height: '260px',
    },
    book: {
        display: 'flex',
        justifyContent: 'space-between',
        borderBottom: 'solid #E6E6FA 1px',
        '&:hover': {
            backgroundColor: '#E6E6FA',
        },
    },
    name: {
        fontSize: '15px',
        width: '60%',
        whiteSpace: 'nowrap',
        overflow: 'hidden',
        textOverflow: 'ellipsis',
        '@media (max-width:480px)': {
            width: '100%',
        },
    },
    author: {
        color: '#757575',
        textAlign: 'right',
        fontSize: '15px',
        width: '30%',
        whiteSpace: 'nowrap',
        overflow: 'hidden',
        textOverflow: 'ellipsis',
        '@media (max-width:480px)': {
            display: 'none',
        },
    },
}));

const ProfileList = (props) => {
    const classes = useStyles();

    const [bookList, setBookList] = React.useState([...props.books]);

    //if option to delete from list, also change profileCarousel to update after delete. Maybe move book state to Redux?

    return (
        <Scrollbar>
            <div id='scrollbar' className={classes.scrollContent}>
                <List>
                    {bookList.map((book)=>(
                    <ListItem key={bookList.indexOf(book)} className={classes.book}>
                        <Typography className={classes.name}>{bookList.indexOf(book)+1} 
                            <span style={{marginLeft: '20px',}}>{book.name}</span>
                        </Typography>
                        <Typography className={classes.author}>{book.author}</Typography>
                    </ListItem>
                    ))}
                </List>
            </div>
        </Scrollbar>
    )
}

export default ProfileList
