import React from 'react';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import Slide from '@material-ui/core/Slide';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from "@material-ui/core/styles";
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Grid from '@material-ui/core/Grid';
import useStyles from './../Auth/styles';
import Questionnaires from './Questionnaire.jsx'
import ArrowForwardIcon from '@material-ui/icons/ArrowForward';

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
        "&:hover":{
            filter: 'brightness(105%)',
        },
        "&:active":{
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
    "&:hover":{
        filter: 'brightness(105%)',
    },
    "&:active":{
        filter: 'brightness(95%)',
        boxShadow: '2px 2px 10px rgba(0, 0, 0, 0.2)',
    }
}

export default class ProceedToQ extends React.Component {
;
    constructor(props) {
      super(props);
      this.state = {open: false};
      this.child = React.createRef();
  }
  
  handleClickOpen = () => this.setState({open: !this.state.open});
  
  handleClose = () => this.setState({open: false});

  handleClick = () => {
    this.child.current.handleClickOpen();
  }

  handleContinue = () => {
      this.handleClick();
      this.handleClose();
  }

  render() {
    return (
        <div>
        <div>
          <Dialog 
            open={this.state.open}
            //TransitionComponent={Transition}
            keepMounted
            onClose={this.handleClose}
            aria-labelledby="alert-dialog-slide-title"
            aria-describedby="alert-dialog-slide-description"
            PaperProps={{
                style: {
                    borderRadius: 16
                },
              }}
          >

            <Card style = {{maxWidth: 550, margin: '24px 24px 0px 24px', marginTop:'1.5rem', backgroundColor:'#f2f2f2', borderRadius: 16}}>
                <CardContent style= {{paddingBottom: '16px'}}>
                    <Typography align="left" variant="subtitle2" color="textPrimary">
                        Author(s): <Typography component="span" display="inline" style={{color: '#686868'}} variant="body1">Lucas Lloyd</Typography>
                    </Typography>
                    <Typography align="left" variant="subtitle2" color="textPrimary">
                        Genre(s): <Typography display="inline" style={{color: '#686868'}} variant="body1">Educational, Sci-Fi, Thriller</Typography>
                    </Typography>
                    <Typography align="left" variant="subtitle2" color="textPrimary">
                        Status: <Typography display="inline" style={{color: '#686868'}} variant="body1">Ongoing</Typography>
                    </Typography>
                    <Typography align="left" variant="subtitle2" color="textPrimary">
                        Last Updated: <Typography display="inline" style={{color: '#686868'}} variant="body1" >April 12, 2021</Typography>
                    </Typography>
                    <Typography align="left" variant="subtitle2" color="textPrimary">
                        Synopsis: <Typography style={{color: '#686868'}} variant="body2">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</Typography>
                    </Typography>
                </CardContent>
            </Card>


            <Card style = {{margin: '24px 24px 0px 24px',maxWidth: 550, marginTop:'1.5rem', backgroundColor:'#f2f2f2', borderRadius: 16}}>
            <CardContent style= {{paddingBottom: '8px'}}>
                <DialogContent style = {{padding: '0'}}>
                    <DialogTitle id="alert-dialog-slide-title" style = {{marginleft:'0', fontSize: '24', padding: '0'}}>{"Proceed To Questionnaire?"}</DialogTitle>
                </DialogContent>
                <DialogContent style = {{padding: '0'}}>
                     <DialogContentText id="alert-dialog-slide-description" style = {{fontSize: 18, fontWeight: 'normal'}} >
                     By answering this questionnaire, you acknowledge and agree to keep this story confidential until its official release.
                    </DialogContentText>
                </DialogContent>
            </CardContent>
            </Card>

            <DialogActions>
              <Button onClick={this.handleClose} style = {bottomStylesDisagree}>
                Disagree
              </Button>
              <Button onClick={this.handleContinue} style = {bottomStylesAgree} >
                Agree and proceed to questionnaire
                <ArrowForwardIcon style = {{ verticalAlign: -7, display: 'inline-flex'}}/>
              </Button>
            </DialogActions>
          </Dialog>
        </div>
        <Questionnaires ref={this.child}/>
        </div>
      );
    }
  }