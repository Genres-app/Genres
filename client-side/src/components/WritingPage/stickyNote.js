import React, { useState } from "react";
import { Button, IconButton, makeStyles, TextField, Typography } from "@material-ui/core";
// Icons
import Delete from "@material-ui/icons/Delete";
import SaveIcon from '@material-ui/icons/Save';
import EditIcon from '@material-ui/icons/Edit';
import PaletteIcon from '@material-ui/icons/Palette';
import ArrowBackIcon from '@material-ui/icons/ArrowBack';
import FiberManualRecordIcon from '@material-ui/icons/FiberManualRecord';

const useStyles = makeStyles((theme) => ({
  main: {
    display: "flex",
    position: "relative",
    flexDirection: "column",
    width: "calc(100% - 2rem)",
    height: "max-content",
    margin: "1rem",
    backgroundColor: theme.palette.divider,
    borderRadius: theme.shape.borderRadius,
    borderTop: ".25rem solid " + theme.palette.primary.main,
  },
  textfield: {
    // flexGrow: 1,
    "& > div": {
      padding: 0,
    }
  },
  stickyNoteButtonContainer: {
    display: "flex",
    justifyContent: "right",
    opacity: .5,
    "&:hover": {
      opacity: 1
    }
  },
  colorSelectorContainer: {
    display: "flex",
    position: "absolute",
    width: "100%",
    bottom: 0,
    overflowX: "scroll",
  }
}))

export default function StickyNote({ p, color, index, funcDeleteSelf, funcChangeSelf, funcChangeColor }) {
  const [Editing, setEditing] = useState(false);
  const [ColorSetting, setColorSetting] = useState(false);
  const classes = useStyles();

  const noteColor = {
    "purple": "#855cde",
    "red": "#e53935",
    "orange": "#ff9800",
    "yellow": "#ffc107",
    "green": "#4caf50",
    "teal": "#009688",
    "blue": "#2196f3",
    "grey": "#9e9e9e",
  };

  const noteColorList = [
    "purple",
    "red",
    "orange",
    "yellow",
    "green",
    "teal",
    "blue",
    "grey"
  ];

  const cycleColor = () => {
    let i = color ? noteColorList.indexOf(color) : 0;
    if (i < noteColorList.length - 1) {
      funcChangeColor(index, noteColorList[i + 1])
    } else {
      funcChangeColor(index, noteColorList[0])
    }
  }

  return (
    <div className={classes.main} style={{ borderTopColor: noteColor[color] }}>
      {Editing ?
        <TextField className={classes.textfield} id={`list ${index}`} label="" variant="outlined" defaultValue={p} multiline />
        :
        <div style={{ padding: "1rem" }}>
          <Typography>{p}</Typography>
        </div>
      }
      <div className={classes.stickyNoteButtonContainer}
      // style={ColorSetting ? {opacity: 0} : {}}
      >
        <IconButton onClick={() => cycleColor()} size="medium"><PaletteIcon fontSize="inherit" /></IconButton>
        {Editing ?
          <IconButton onClick={() => {
            funcChangeSelf(index, document.getElementById(`list ${index}`).value);
            setEditing(false);
          }}><SaveIcon fontSize="inherit" /></IconButton>
          :
          <IconButton onClick={() => setEditing(true)} size="medium">
            <EditIcon fontSize="inherit" />
          </IconButton>
        }
        <IconButton onClick={() => funcDeleteSelf(index)} size="medium"><Delete fontSize="inherit" /></IconButton>
      </div>
      {/* <div className={classes.colorSelectorContainer} style={ColorSetting ? { visibility: "visible" } : { visibility: "hidden" }}>
        <IconButton onClick={() => setColorSetting(false)} size="medium"><ArrowBackIcon fontSize="inherit" /></IconButton>
        {
          noteColorList.map((key, index) => (
            <IconButton onClick={() => setColorSetting(false)} size="medium" style={{color: noteColor[key]}}><FiberManualRecordIcon fontSize="inherit" /></IconButton>
          ))
        }
      </div> */}
    </div>
  )
}