import React from 'react'
import {Typography, List, ListItem} from '@material-ui/core';
import {makeStyles} from '@material-ui/core/styles';

//smooth scrollbar: https://github.com/idiotWu/react-smooth-scrollbar
import Scrollbar from 'react-smooth-scrollbar';

// This page is dedicated to comments concerning a specific chapter page.
// FIXME: this page should be dynamically loaded based on the backend object.

// PLACEHOLDER COMMENT DATA
const comments = [1,2,3,4,5,6,7,8,9,10];

const useStyles = makeStyles(() => ({
    commentBoxContainer: {
        position: 'relative',
        marginBottom: '20px',
        margin: '30px auto',
        maxWidth: '1010px',
        height: '500px', 
        paddingLeft: '5px',
      },
      commentCutoff: {
        position: 'absolute',
        height: '60px',
        width: '98%',
        backgroundImage: 'linear-gradient( rgba(255,255,255, 0.1), rgba(255,255,255, 0.7), rgba(255,255,255, 0.9) )',
        marginTop: '440px',
        //borderBottom: 'solid 1px #F0F0F0',
        zIndex: 1,
      },
      scrollArea: {
        maxWidth: '900px', 
        maxHeight: '500px', 
      },
      commentAvatar: {
        marginTop: '20px',
        height: '60px',
        width: '60px',
        borderRadius: '50px',
      },
      comment: {
        alignItems: 'flex-start',
        margin: '5px 0px 0px 5px',
        paddingBottom: '0px',
        paddingTop: '0px',
        
      },
      commentBody: {
        margin: '15px 14px 14px 25px',
      },
      commentLabel: {
        display: 'flex',
        marginBottom: '6px',
        whiteSpace: 'nowrap',
      },
      bookTag: {
        marginLeft: '8px',
        height: '22px',
        padding: '3px 10px 2px 10px',
        backgroundColor: '#A1A6FF',
        borderRadius: '45px',
        fontSize: '12px',
        color: 'white',
        fontWeight: '500px',
      },
      commentDate: {
        color: '#ABABAB',
        fontWeight: '100',
        fontSize: '13px',
      },
      proTag: {
        backgroundColor: '#F2C94C',
        height: '19px',
        width: '40px',
        textAlign: 'center',
        color: '#F5F5F5',
        borderRadius: '2px',
        paddingTop: '2px',
        marginTop: '2px',
        marginLeft: '8px',
        fontSize: '11px',
        fontWeight: '500',
      },
}));


const RPChapterComments = () => {
    const classes = useStyles();

    return (
      <div className={classes.commentBoxContainer}>
        {/* Div to give fade effect at bottom of container to show that container affords scrolling */}
        <div className={classes.commentCutoff}></div>
        {/* Scrollable content with smooth scrollbar */}
        <Scrollbar>
          <div className={classes.scrollArea}>
            <List>
              <ListItem>
                <Typography style={{fontSize: '20px', fontWeight: '100'}} variant = "h6">Comments</Typography>
              </ListItem>

              {/* Code for when actually iterating through comments */}
              {comments.map((comment)=>(
              <ListItem key={comment} className = {classes.comment}>
                <img className = {classes.commentAvatar} src='null'></img>
                <div className = {classes.commentBody}>
                  <div className = {classes.commentLabel}>
                    <Typography style={{fontSize: '14px', font: 'helvetica'}} variant = "subtitle2"> Peter Anteater {comment}</Typography>
                    <div className = {classes.bookTag}><Typography style={{fontSize: '12px', font: 'helvetica', marginTop: '2px'}} variant = "subtitle2">The Arrivals - CH X</Typography></div>
                  </div>
                  <Typography style={{fontSize: '13px', font: 'helvetica'}} variant = "body1">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et.
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore.
                  </Typography>
                  <p className={classes.commentDate}>28 April, 2021</p>
                </div>
              </ListItem>
              ))}

              {/* Transparent div to add padding at end of comments */}
              <ListItem className = {classes.comment}>
                <div style={{height: '60px'}}></div>
              </ListItem>
            </List>
          </div>
        </Scrollbar> 
      </div>
    )
}

export default RPChapterComments
