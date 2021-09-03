import React from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';

let bottomStylesSubmit = {
  margin: "16px 16px 16px 16px ",
  width: '100px',
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

let bottomStylesCancel = {
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


export default class Questionnaires extends React.Component {

  constructor(props) {
    super(props);
    this.state = {open: false};
    
}

handleClickOpen = () => this.setState({open: !this.state.open});

handleClose = () => this.setState({open: false});

handleChange = (event) => this.setValue({
  setValue: event.value
});


render() {
    return (
      <div>
        <Dialog PaperProps={{
                style: {
                    borderRadius: 16
                },
              }}
                open={this.state.open} 
                onClose={this.handleClose} 
                aria-labelledby="form-dialog-title">
          <DialogTitle id="form-dialog-title" >Questionnaire</DialogTitle>
          <DialogContent>
            <DialogContentText>
              Do you prefer long novels or short novels?
            </DialogContentText>
            <FormControl component="fieldset">
            <RadioGroup 
            value={this.value}       
            row={true}
            /*onChange={this.handleChang}*/>
              <FormControlLabel value="long" control={<Radio />} label="long novels" />
              <FormControlLabel value="short" control={<Radio />} label="short novels" />
              <FormControlLabel value="no preference" control={<Radio />} label="no preference" />
            </RadioGroup>
            </FormControl>

            <DialogContentText>
              Do you like reading fast paced or slow burn type of novels? 
            </DialogContentText>
            <FormControl component="fieldset">
            <RadioGroup 
            value={this.value}       
            row={true}
            /*onChange={this.handleChang}*/>
              <FormControlLabel value="fast" control={<Radio />} label="fast paced" />
              <FormControlLabel value="slow" control={<Radio />} label="slow burn" />
            </RadioGroup>
            </FormControl>

            <DialogContentText>
              What is your age range? 
            </DialogContentText>
            <FormControl component="fieldset">
            <RadioGroup 
            value={this.value}       
            row={true}
            /*onChange={this.handleChang}*/>
              <FormControlLabel value="12" control={<Radio />} label="12 - 18" />
              <FormControlLabel value="18" control={<Radio />} label="18 - 30" />
              <FormControlLabel value="30" control={<Radio />} label="30 - 49" />
              <FormControlLabel value="49" control={<Radio />} label="49 - 65" />
              <FormControlLabel value="65+" control={<Radio />} label="65 +" />
            </RadioGroup>
            </FormControl>

            <DialogContentText>
              True or false: I like to take chances
            </DialogContentText>
            <FormControl component="fieldset">
            <RadioGroup 
            value={this.value}       
            row={true}
            /*onChange={this.handleChang}*/>
              <FormControlLabel value="true" control={<Radio />} label="True" />
              <FormControlLabel value="false" control={<Radio />} label="False" />
            </RadioGroup>
            </FormControl>
            
            <TextField
              autoFocus
              margin="dense"
              id="name"
              label="Who’s your favorite author?"
              type="name"
              fullWidth
              color="secondary"
            />

            <DialogContentText>
              Does this statement represent you? I am patient and treat things seriously even if it is something unfamiliar to me.
            </DialogContentText>
            <FormControl component="fieldset">
            <RadioGroup 
            value={this.value}       
            row={true}
            /*onChange={this.handleChang}*/>
              <FormControlLabel value="Yes" control={<Radio />} label="Yes" />
              <FormControlLabel value="No" control={<Radio />} label="No" />
            </RadioGroup>
            </FormControl>

          </DialogContent>
          <DialogActions>
            <Button onClick={this.handleClose} style = {bottomStylesCancel}>
              Cancel
            </Button>
            <a href="/reading" style={{ textDecoration: 'none'}}>
            <Button onClick={this.handleClose} style = {bottomStylesSubmit}>
              Submit
            </Button>
            </a>
          </DialogActions>
        </Dialog>
      </div>
    );
  }
}
