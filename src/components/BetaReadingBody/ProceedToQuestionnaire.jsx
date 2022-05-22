import React, { useState, forwardRef, useRef, useImperativeHandle  } from 'react';
import {
  Button,
  Chip,
  Avatar,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  Slide,
  Typography,
} from '@material-ui/core/';
import { makeStyles } from "@material-ui/core/styles";
import Grid from '@material-ui/core/Grid';
import useStyles from './../Auth/styles';
import Questionnaires from './Questionnaire.jsx'
import ArrowForwardIcon from '@material-ui/icons/ArrowForward';
import { BookLib } from '../BookLib';
import { Divider } from '@material-ui/core';

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

let bottomStylesAgree = {
  margin: "16px 16px 16px 16px ",
  width: '300px',
  height: '36px',
  color: 'white',
  fontSize: '12px',
  fontWeight: '500',
  textAlign: 'center',
  borderRadius: '45px',
  backgroundImage: 'linear-gradient(101deg, #A1A6FF, #63FFE6)',
  transition: 'all 0.2s ease 0s',
  boxShadow: '0px 8px 15px rgba(0, 0, 0, 0.1)',
  cursor: 'pointer',
  "&:hover": {
    filter: 'brightness(105%)',
  },
  "&:active": {
    filter: 'brightness(95%)',
    boxShadow: '2px 2px 10px rgba(0, 0, 0, 0.2)',
  }
}

let bottomStylesDisagree = {
  margin: "16px 0px 16px 0px ",
  paddingTop: '8px',
  width: '100px',
  height: '36px',
  color: 'black',
  fontSize: '12px',
  fontWeight: '500',
  textAlign: 'center',
  borderRadius: '45px',
  // backgroundImage: 'linear-gradient(101deg, #A1A6FF, #63FFE6)',
  transition: 'all 0.2s ease 0s',
  boxShadow: '0px 8px 15px rgba(0, 0, 0, 0.1)',
  cursor: 'pointer',
  "&:hover": {
    filter: 'brightness(105%)',
  },
  "&:active": {
    filter: 'brightness(95%)',
    boxShadow: '2px 2px 10px rgba(0, 0, 0, 0.2)',
  }
}


const ProceedToQ = forwardRef((props, ref) => {

  const childRef = useRef();
  const [open, setOpen] = React.useState(false);
  const [bookId, setID] = useState(0);


  const handleClickOpen = () => {
    setOpen(true);
    //childRef.current.handleOpenDia();
    console.log(bookId);
  };

  useImperativeHandle(
    ref,
    () => ({
      handleOpenDia(ID) {
        setID(ID);
        handleClickOpen();
      }
    }),
  )


  const handleClose = () => {
    setOpen(false);
    console.log(bookId);
  };

  //console.log(bookId);
  return (
    <div>
      <div>
        <Dialog
          open={open}
          onClose={handleClose}
          //TransitionComponent={Transition}
          keepMounted
          aria-labelledby="alert-dialog-slide-title"
          aria-describedby="alert-dialog-slide-description"
          PaperProps={{
            style: {
              maxWidth: "none",
              height: "60vh",
              width: "60vw",
            }
          }}
        >
          <div
            style={{
              display: "flex",
              overflow: "hidden",
            }}>

            {BookLib[bookId] ?
              <div style={{
                backgroundImage: `url(${BookLib[bookId].cover})`,
                backgroundSize: "cover",
                height: '60vh',
                width: '37.5vh',
                padding: '20px',
                flexShrink: 0,
              }} />
              :
              <></>
            }
            <DialogContent
              style={{
                display: "flex",
                flexDirection: "column",
              }}
            >

              <div
                style={{
                  marginTop: 12,
                  marginBottom: 12,
                  overflowY: "auto",
                  flexGrow: 1,
                }}>
                <DialogTitle
                  style={{ paddingLeft: 0 }}>
                  {BookLib[bookId] ?
                    BookLib[bookId].title
                    :
                    "Title"
                  }
                </DialogTitle>
                <Typography align="left" variant="body1" color="textPrimary" style={{ fontWeight: 500 }}>
                  Author(s): <span style={{ color: '#686868', fontWeight: "normal" }}>
                    {BookLib[bookId] ?
                      BookLib[bookId].author.map(
                        (item, i) =>
                          <Chip
                            label={item}
                            avatar={<Avatar src="" />}
                            style={{
                              marginRight: 8,
                              "&:last-child":
                                { marginRight: 0, }
                            }}
                          // className={classes.authorChips}
                          />
                      )
                      :
                      "Author"
                    }</span><br />
                  Genre(s): <span style={{ color: '#686868', fontWeight: "normal" }}>
                    {BookLib[bookId] ?
                      BookLib[bookId].genres.map(
                        (item, i) =>
                          item + " "
                      )
                      :
                      "N/A"
                    }</span><br />
                  Status: <span style={{ color: '#686868', fontWeight: "normal" }}>Ongoing</span><br />
                  Last Updated: <span style={{ color: '#686868', fontWeight: "normal" }}>April 12, 2021</span><br />
                  Synopsis: <span style={{ color: '#686868', fontWeight: "normal" }}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  </span>
                </Typography>
              </div>

              <div
                style={{
                  flexShrink: 0,
                }}>
                <Divider />
                <DialogTitle
                  id="alert-dialog-slide-title"
                  style={{
                    paddingLeft: 0,
                  }}>
                  Proceed To Questionnaire?
                </DialogTitle>
                <DialogContentText
                  id="alert-dialog-slide-description"
                  style={{
                    fontSize: 18,
                    fontWeight: 'normal'
                  }} >
                  By answering this questionnaire, you acknowledge and agree to keep this story confidential until its official release.
                </DialogContentText>
                <DialogActions>
                  <Button style={bottomStylesDisagree} onClick={handleClose}>
                    Disagree
                  </Button>
                  <Button style={bottomStylesAgree} onClick={handleClickOpen}>
                    Agree and proceed to questionnaire
                    <ArrowForwardIcon style={{ verticalAlign: -7, display: 'inline-flex' }} />
                  </Button>
                </DialogActions>
              </div>

            </DialogContent>
          </div>
        </Dialog>
      </div>
      <Questionnaires ref={childRef}/>
    </div>
  );

})

export default ProceedToQ;