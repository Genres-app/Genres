import React from 'react'
import {Dialog, DialogContent, makeStyles, Typography} from '@material-ui/core'
import ClosePageIcon from '@material-ui/icons/Close';

const useStyles = makeStyles(theme =>({
    dialogWrapper: {
        padding: theme.spacing(0),
        position: 'absolute',
        margin: '10px'
        
    },
    closeButton: {
        margin: '12px',
        '&:hover': {
            
        }
    }
}))

const Popup = (props) => {

    const {children, openPopup, setOpenPopup} = props;
    const classes = useStyles();

    return (
        <Dialog open ={openPopup} classes = {{paper : classes.dialogWrapper}} >
            
            <div style={{ display: 'flex' }}>
            <Typography variant="h6" component="div" style={{ flexGrow: 1 }}></Typography>
            <ClosePageIcon className = {classes.closeButton} onClick = {()=> {setOpenPopup(false)}}></ClosePageIcon>
            </div>
            <DialogContent>
                {children}
            </DialogContent>
        </Dialog>
    )
}

export default Popup
