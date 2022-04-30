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
import { Slider, Typography, useTheme } from "@material-ui/core";
import { withStyles } from "@material-ui/styles";

const CopyrightSlider = withStyles({
  root: {
    // color: '#52af77',
    height: 8,
  }
})(Slider);

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
        setActiveStep(0);
        handleOpen();
      }
    }),
  )

  /* Stepper */
  const [activeStep, setActiveStep] = useState(0);
  const steps = ["Select a copyright type", "Read the agreement", "Confirm and publish"];

  const [selectedCopyright, setCopyright] = useState(0);
  const copyrightsList = [
    {
      value: 0,
      label: "All rights reserved",
      detail: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla turpis elit, pulvinar vel tellus ut, congue ultricies elit."
    },
    {
      value: 1,
      label: "CC1",
      detail: "Fusce tristique velit dolor, eget interdum risus dictum vitae. Nam sapien quam, vestibulum non viverra a, rhoncus id leo. Quisque feugiat est orci, nec mollis eros convallis ac."
    },
    {
      value: 2,
      label: "CC2",
      detail: "Aenean varius enim dolor, at consequat libero consequat id. Sed consequat, felis vel faucibus interdum, urna justo lobortis nulla, quis suscipit diam libero id nulla.",
    },
    {
      value: 3,
      label: "Open source",
      detail: "Duis eu purus ut tellus laoreet sollicitudin. Suspendisse id imperdiet lorem, tempor hendrerit tellus. Donec tincidunt mi quis neque vulputate, quis scelerisque metus rhoncus.",
    }
  ];
  const handleCopyrightSelect = (e) => {
    setCopyright(e.target.value);
  }

  function getStepContent(step) {
    switch (step) {
      case 0:
        return (
          <>
            <Typography>
              Please select a copyright type below. <span style={{ color: theme.palette.warning.main }}>Caution! After publishing the book with a copyright license, you can only change it to a looser one.</span>
            </Typography>
            <div
              style={{ padding: "0", height: "10rem", paddingTop: "2rem", display: "flex" }}
            >
              {/* <CopyrightSlider
                orientation="vertical"
                defaultValue={0}
                step={null}
                marks={copyrightsList}
                valueLabelDisplay="off"
                max={copyrightsList.length - 1}
                track={false}
                onChange={handleCopyrightSelect}
              /> */}
              <FormControl component="fieldset">
                <RadioGroup name="copyrightSel" value={selectedCopyright} onChange={handleCopyrightSelect}>
                  {copyrightsList.map(item => (
                    <FormControlLabel value={item.value} control={<Radio />} label={item.label} />
                  ))
                  }
                </RadioGroup>
              </FormControl>
              <Typography variant="body2" style={{ marginLeft: "1rem", paddingBottom: "1rem" }}>
                {copyrightsList[selectedCopyright].detail}
              </Typography>
            </div>


            <DialogActions style={{ padding: 0 }}>
              <Button onClick={handleClose} color="primary">
                Cancel
              </Button>
              <div>
                <Button onClick={() => setActiveStep((prevActiveStep) => prevActiveStep + 1)} color="primary" variant="contained" autoFocus>
                  Next
                </Button>
              </div>
            </DialogActions>
          </>
        );
      case 1:
        return (
          <>
            <Typography style={{ paddingBottom: "1rem" }}>
              Please read and agree with following agreement before publishing the book.
            </Typography>
            <Typography variant="body2" style={{ paddingBottom: "1rem" }}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla turpis elit, pulvinar vel tellus ut, congue ultricies elit. Fusce tristique velit dolor, eget interdum risus dictum vitae. Nam sapien quam, vestibulum non viverra a, rhoncus id leo. Quisque feugiat est orci, nec mollis eros convallis ac. Aenean varius enim dolor, at consequat libero consequat id. Sed consequat, felis vel faucibus interdum, urna justo lobortis nulla, quis suscipit diam libero id nulla. Duis eu purus ut tellus laoreet sollicitudin. Suspendisse id imperdiet lorem, tempor hendrerit tellus. Donec tincidunt mi quis neque vulputate, quis scelerisque metus rhoncus.
            </Typography>
            <DialogActions style={{ padding: 0 }}>
              <Button onClick={() => setActiveStep((prevActiveStep) => prevActiveStep - 1)} color="primary">
                Previous step
              </Button>
              <Button onClick={handleClose} variant="text" color="primary">
                Disagree
              </Button>
              <div>
                <Button onClick={() => setActiveStep((prevActiveStep) => prevActiveStep + 1)} color="primary" variant="contained">
                  Agree
                </Button>
              </div>
            </DialogActions>
          </>
        );
      case 2:
        return (
          <>
            <Typography style={{ paddingBottom: "1rem" }}>
              One step to go. Please confirm you are publishing this book.
            </Typography>
            <Typography style={{ paddingBottom: "1rem" }}>
              By clicking the Publish button, you will reveal your works to the public.
            </Typography>
            <DialogActions style={{ padding: 0 }}>
              <Button onClick={() => setActiveStep((prevActiveStep) => prevActiveStep - 1)} color="primary">
                Previous step
              </Button>
              <div>
                <Button onClick={handleClose} color="primary" variant="contained">
                  Publish to Genres
                </Button>
              </div>
            </DialogActions>
          </>
        );
      default:
        return "Unknown step";
    }
  }

  return (
    <Dialog
      open={open}
      onClose={handleClose}
      aria-labelledby="alert-dialog-title"
      aria-describedby="alert-dialog-description"
      fullWidth
      maxWidth="md"
    >
      <div style={{ backgroundColor: theme.palette.primary.bg }}>
        <Typography
          id="alert-dialog-title"
          variant="h4"
          color="primary"
          style={{
            fontFamily: theme.typography.fontFamilyTitle,
            padding: "1.5rem",
            paddingBottom: 0
          }}>
          Publish
        </Typography>
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

      <div style={{ padding: "1.5rem" }}>
        {getStepContent(activeStep)}
      </div>
    </Dialog>
  );
})

export default CopyrightDialog;