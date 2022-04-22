import React, {forwardRef, useRef, useImperativeHandle, useState} from 'react';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';

const CopyrightDialog = forwardRef((props, ref)  => {  

  const [open, setOpen] = React.useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };


  const [Value, setSelectedValue] = React.useState('long');

  const handleChange = (event) => {
    setSelectedValue(event.target.Value);
  };

  useImperativeHandle(
    ref,
    () => ({
      handleOpenDia() {
        handleOpen();
        }
    }),
  )

  return (
    <div>
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">{"Do you really want to publish this book?"}</DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
          Please read and agree with the copyright agreement before publishing the book
          </DialogContentText>
        </DialogContent>


            <DialogContentText style = {{marginLeft: "25px", marginRight: "25px"}}>
            Do you allow fan works? please note that you can change to "Yes" if you choose "No" at this time, but you can not change to "No" if you choose "Yes" at this time.
            </DialogContentText>
            <FormControl component="fieldset">
            <RadioGroup 
            onChange={handleChange}
            //value={this.Value}       
            row={true}

            /*onChange={this.handleChang}*/>
              <FormControlLabel  style = {{marginLeft: "350px"}} value="Yes" control={<Radio />} label="Yes" />
              <FormControlLabel  style = {{marginLeft: "20px"}} value="No" control={<Radio />} label="No" />
            </RadioGroup>
            </FormControl>



        <DialogActions>
          <Button onClick={handleClose} color="primary">
            CANCEL
          </Button>
          <Button onClick={handleClose} color="primary" autoFocus>
            AGREE AND PUBLISH
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
})

export default CopyrightDialog;