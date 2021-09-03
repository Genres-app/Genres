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
import Questionnaires from './Questionnaire.jsx'
import ArrowForwardIcon from '@material-ui/icons/ArrowForward';

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

let bodyStyles = {
    borderRadius: 16
  };


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
          >
            {/* <Card style = {{borderRadius:'16'}}> */}
            <Card style = {{maxWidth: 550, margin: '24px 24px 0px 24px', marginTop:'1.5rem', backgroundColor:'#e6ccff', borderRadius: 16}}>
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


            <Card style = {{margin: '24px 24px 0px 24px',maxWidth: 550, marginTop:'1.5rem', backgroundColor:'#d9b3ff', borderRadius: 16}}>
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
              <Button onClick={this.handleClose} >
                Disagree
              </Button>
              <Button onClick={this.handleClose} color="secondary">
                <div onClick={() => { this.handleClick(); }}>
                Agree and proceed to questionnaire
                <ArrowForwardIcon style = {{ verticalAlign: -7, display: 'inline-flex'}}/>
                </div>
              </Button>
            </DialogActions>

            {/* </Card> */}
          </Dialog>
        </div>
        <Questionnaires ref={this.child}/>
        </div>
      );
    }
  }