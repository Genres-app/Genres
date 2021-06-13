import React from 'react'
import {Typography, List, ListItem, Button} from '@material-ui/core';
import {makeStyles} from '@material-ui/core/styles';
import defaultComment from '../Assets/defaultprofile.svg';

// smooth scrollbar: https://github.com/idiotWu/react-smooth-scrollbar
import Scrollbar from 'react-smooth-scrollbar';
// read more button on comments: https://www.npmjs.com/package/react-show-more-text
import ShowMoreText from 'react-show-more-text';
// infinite scrolling: https://www.npmjs.com/package/react-infinite-scroll-component
import InfiniteScroll from 'react-infinite-scroll-component';

//ABOUT: the comments displayed when on the profile tab.
const useStyles = makeStyles((theme) => ({
    commentBoxContainer: {
        position: 'relative',
        marginTop: '30px',
        marginBottom: '20px',
        maxWidth: '1010px', 
        paddingLeft: '5px',
        '@media (min-width:1025px)': {
          height: '500px',
        },
      },
      scrollContent: {
        width: '97%',
        '@media (min-width:1025px)': {
          maxHeight: '500px', 
        }, 
      },
      commentAvatar: {
        marginTop: '20px',
        height: '55px',
        width: '55px',
        borderRadius: '100px',
        objectFit: 'cover',
        '@media (max-width:480px)': {
          height: '50px',
          width: '50px', 
        }, 
      },
      comment: {
        alignItems: 'flex-start',
        margin: '5px 0px 0px 5px',
        paddingBottom: '0px',
        paddingTop: '0px',
      },
      commentBody: {
        margin: '15px 14px 14px 25px',
        width: '80%',
        '@media (max-width:1024px)': {
          width: '70%',
        },
      },
      commentLabel: {
        display: 'flex',
        whiteSpace: 'nowrap',
        flexWrap: 'wrap-reverse',
      },
      name:{
        paddingTop: '2px',
        fontSize: '13px',
        marginRight: '8px',
        marginBottom: '7px',
      },
      bookTag: {
        height: '22px',
        padding: '4px 10px 2px 10px',
        backgroundColor: '#A1A6FF',
        borderRadius: '5px',
        fontSize: '11px',
        color: 'white',
        fontWeight: '500px',
        marginBottom: '7px',
      },
      commentDate: {
        color: '#808080',
        fontWeight: '100',
        fontSize: '13px',
      },
      proTag: {
        backgroundColor: '#F2C94C',
        height: '20px',
        width: '35px',
        textAlign: 'center',
        color: '#F5F5F5',
        borderRadius: '2px',
        paddingTop: '3px',
        marginBottom: '8px',
        marginRight: '8px',
        fontSize: '10px',
        fontWeight: '500',
      },
      commentMessage: {
        fontSize: '13px',
        wordWrap: 'break-word',    
      },
      messageHidden: {
        fontSize: '13px',
        whiteSpace: 'nowrap',
      },
      anchor: {
        marginTop: '5px',
        marginBottom: '5px',
        display: 'block',
        textDecoration: 'none'
      },
      showMoreButton: {
        padding: '0px',
        fontSize: '13px',
        textTransform: 'none',
        color: '#525252',
      },
      endMessage: {
        textAlign: 'center',
        fontSize: '16px',
        fontWeight: '500',
      },
}));


const CommentBox = (props) => {

    const commentsToShow = 10;

    const classes = useStyles();

    const [activeComments, setActiveComments] = React.useState([]);
    const [hasMore, setHasMore] = React.useState(props.comments.length < commentsToShow? false : true);
    const [commentsDisplayed, setCommentsDisplayed] = React.useState(hasMore? props.comments.slice(0, commentsToShow) : [...props.comments] );
    const [remainingComments, setRemainingComments] = React.useState(hasMore? props.comments.slice(commentsToShow) : []);
    
    const [width, setWidth] = React.useState(window.innerWidth);

    const expandComment = (comment) => {
      var newComments = [...activeComments];
      if (newComments.includes(comment)) {
        newComments.splice(newComments.indexOf(comment));
      } else {
        newComments.push(comment);
      }
      setActiveComments(newComments);
    };

    const fetchData = () => {
      if (remainingComments.length <= commentsToShow) {
        setCommentsDisplayed(commentsDisplayed.concat(remainingComments))
        setHasMore(false)   
      } else {
        setCommentsDisplayed(commentsDisplayed.concat(remainingComments.slice(0,10)))
        setRemainingComments(remainingComments.slice(commentsToShow))
      }
    };

    const updateWidth = () => {
      setWidth(window.innerWidth);
    };

    React.useEffect(() => {
      window.addEventListener("resize", updateWidth);
      return () => window.removeEventListener("resize", updateWidth);
    });

    return (
        <div className={classes.commentBoxContainer}>

        {/* Render infinite scrolling for tablets and mobile if width <= 1024*/}
        { width <= 1024? <div id='scrollbar' className={classes.scrollContent}>
          <InfiniteScroll
            style={{overflowX: 'hidden',}}
            dataLength={commentsDisplayed.length} 
            next={fetchData}
            hasMore={hasMore}
            loader={<h4>Loading...</h4>}
            endMessage={
              <p className={classes.endMessage}>No more comments to show</p>
            }
            scrollThreshold={0.9}
          >
            <List>
                <ListItem>
                    <Typography style={{fontSize: '20px', fontWeight: '100'}} variant = "h6">Comments</Typography>
                </ListItem>

                {commentsDisplayed.map((comment)=>(
                <ListItem key={comment} className = {classes.comment}>
                    {/*FIXME: fetch avatar/profile pic of user who made comment from db*/}
                    <img className = {classes.commentAvatar} src={defaultComment} alt='avatar'></img>
                    
                    <div className = {classes.commentBody}>
                        <div className = {classes.commentLabel}>
                            {/*FIXME: fetch name of user who made the comment*/}
                            <Typography className={classes.name} variant = "subtitle2"> Petra Anthony {comment}</Typography>
                            {/*FIXME: display pro tag if commenting user is a pro user */}
                            <div className = {classes.proTag}>PRO</div>
                            {/*FIXME: fetch name of book the comment was made on */}
                            <div className = {classes.bookTag}>Anteater's Survival Guide - CH 1</div>
                        </div>

                        <ShowMoreText
                            lines={3}
                            more={<Button disableRipple className={classes.showMoreButton} variant='text' size='small'>Read more</Button>}
                            less={<Button disableRipple className={classes.showMoreButton} variant='text' size='small'>Show less</Button>}
                            className={ activeComments.includes(comment) ? classes.commentMessage : classes.messageHidden}
                            anchorClass={classes.anchor}
                            onClick={() => expandComment(comment)}
                        >   
                          {/* fetch content of the user's comment from db */}
                          <Typography className={classes.commentMessage} variant="body1">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et.
                            Sed do eiusmod tempor incididunt ut labore et. 
                            Lorem ipsum dolor sit amet?
                            Lorem ipsum dolor sit amet, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                            Consectetur adipiscing elit, sed do eiusmod tempor incididuntIpsum dolor!
                          </Typography>
                        </ShowMoreText>
                        {/* fetch date comment was made from db */}
                        <p className={classes.commentDate}>28 April, 2021</p>
                    </div>
                </ListItem>
                ))}
              </List>
            </InfiniteScroll>
          </div>
        :
        // Fixed height container with See More button for devices with width > 1024
        <Scrollbar>
          <div id='scrollbar' className={classes.scrollContent}>
              <List>
                  <ListItem>
                      <Typography style={{fontSize: '20px', fontWeight: '100'}} variant = "h6">Comments</Typography>
                  </ListItem>

                  {/* FIXME: requires same fixes as the infinite scrolling counterpart above */}
                  {commentsDisplayed.map((comment)=>(
                  <ListItem key={comment} className = {classes.comment}>
                      <img className = {classes.commentAvatar} src={defaultComment} alt='avatar'></img>
                      
                      <div className = {classes.commentBody}>
                          <div className = {classes.commentLabel}>
                              <Typography className={classes.name} variant = "subtitle2"> Petra Anthony {comment}</Typography>
                              <div className = {classes.proTag}>PRO</div>
                              <div className = {classes.bookTag}>Anteater's Survival Guide - CH 1</div>
                          </div>

                          <ShowMoreText
                              lines={3}
                              more={<Button disableRipple className={classes.showMoreButton} variant='text' size='small'>Read more</Button>}
                              less={<Button disableRipple className={classes.showMoreButton} variant='text' size='small'>Show less</Button>}
                              className={ activeComments.includes(comment) ? classes.commentMessage : classes.messageHidden}
                              anchorClass={classes.anchor}
                              onClick={() => expandComment(comment)}
                          >   
                            <Typography className={classes.commentMessage} variant="body1">
                              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et.
                              Sed do eiusmod tempor incididunt ut labore et. 
                              Lorem ipsum dolor sit amet?
                              Lorem ipsum dolor sit amet, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                              Consectetur adipiscing elit, sed do eiusmod tempor incididuntIpsum dolor!
                            </Typography>
                          </ShowMoreText>

                          <p className={classes.commentDate}>28 April, 2021</p>
                      </div>
                  </ListItem>
                  ))}

                  {/* Render See More button if there are more comments to fetch */}
                  {hasMore? 
                    <Button disableRipple fullWidth onClick={fetchData}>See more</Button>
                    : 
                    <p className={classes.endMessage}>No more comments to show</p> 
                  }
                </List>
            </div>
        </Scrollbar>
        }
      </div>
    )
}

export default CommentBox
