import React, { forwardRef, useRef, useImperativeHandle, useState } from 'react';
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
import Stepper from '@material-ui/core/Stepper';
import Step from '@material-ui/core/Step';
import StepLabel from '@material-ui/core/StepLabel';
import { Typography, useTheme } from "@material-ui/core";

const CopyrightDialog = forwardRef((props, ref) => {

  const [open, setOpen] = React.useState(false);
  const theme = useTheme();

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

  /* Stepper */
  const [activeStep, setActiveStep] = useState(0);
  const steps = ["Select a copyright type", "Read the agreement", "Confirm and publish"];

  return (
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
        fullWidth={false}
        maxWidth="md"
      >
        <div style={{ backgroundColor: theme.palette.primary.bg }}>
          <Typography variant="h4" color="primary" style={{fontFamily: theme.typography.fontFamilyTitle, padding: "1.5rem", paddingBottom: 0}}>Publish Book</Typography>
          <Stepper activeStep={activeStep} style={{ backgroundColor: "transparent" }}>
          {steps.map((label, index) => {
            return (
              <Step key={label}>
                <StepLabel>{label}</StepLabel>
              </Step>
            )
          })}
        </Stepper>
        </div>
        
        <DialogTitle id="alert-dialog-title">{"Do you really want to publish this book?"}</DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            Please read and agree with the copyright agreement before publishing the book
          </DialogContentText>
        </DialogContent>


        <DialogContentText style={{ marginLeft: "25px", marginRight: "25px" }}>
          Do you allow fan works? please note that you can change to "Yes" if you choose "No" at this time, but you can not change to "No" if you choose "Yes" at this time.
        </DialogContentText>
        <FormControl component="fieldset">
          <RadioGroup
            onChange={handleChange}
            //value={this.Value}       
            row={true}

            /*onChange={this.handleChang}*/>
            <FormControlLabel style={{ marginLeft: "350px" }} value="Yes" control={<Radio />} label="Yes" />
            <FormControlLabel style={{ marginLeft: "20px" }} value="No" control={<Radio />} label="No" />
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
  );
})

export default CopyrightDialog;