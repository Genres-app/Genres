import { Button, IconButton, makeStyles, TextField, Typography } from "@material-ui/core";
import Delete from "@material-ui/icons/Delete";
import SaveIcon from '@material-ui/icons/Save';
import EditIcon from '@material-ui/icons/Edit';
import React, { useState } from "react";

const useStyles = makeStyles((theme) => ({
  main: {
    display: "flex",
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
  }
}))

export default function StickyNote({ p, index, funcDeleteSelf, funcChangeSelf }) {
  const [Editing, setEditing] = useState(false)
  const classes = useStyles();
  return (
    <div className={classes.main}>
      {Editing ?
        <TextField className={classes.textfield} id={`list ${index}`} label="" variant="outlined" defaultValue={p} multiline />
        :
        <div style={{ padding: "1rem" }}>
          <Typography>{p}</Typography>
        </div>
      }
      <div className={classes.stickyNoteButtonContainer}>
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
    </div>
  )
}