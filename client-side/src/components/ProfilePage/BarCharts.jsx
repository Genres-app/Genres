import React from 'react'
import {Typography} from '@material-ui/core';
import {makeStyles} from '@material-ui/core/styles';

//ABOUT: barcharts displayed for mobile devices if on activity tab and viewport width <= 1024.
const BarCharts = (props) => {
    const progressPercent = (props.value/props.total)*100;

    const useStyles = makeStyles((theme) => ({
        chartContainer: {
            zIndex: 1,
            width: '100%',
            display: 'flex',
            marginBottom: '19px',
        },
        labelContainer: {
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            minWidth: '104px',
            minHeight: '104px',
            backgroundColor: '#293450',
            borderRadius: '100px',
            boxShadow: '3px 3px 5px rgba(0, 0, 0, 0.2)',
            border: 'solid 3px #fff',
        },
        label: {
            fontFamily: 'Helvetica, Arial, sans-serif',
            textAlign: 'center',
            width: '80px',
            fontSize: '10px',
            color: '#fff',
        },
        value: {
            fontFamily: 'Helvetica, Arial, sans-serif',
            textAlign: 'center',
            width: '80px',
            fontSize: '16px',
            fontWeight: '600',
            color: '#fff',
        },
        progressBar: {
            marginLeft: '10px',
            marginTop: '42px',
            width: '90%',
            height: '20px',
            borderRadius: '50px',
            backgroundColor: "rgba(255, 255, 255, 0.8)",
            boxShadow: '2px 2px 4px rgba(0, 0, 0, 0.2)',
        },
        filler: {
            height: '100%',
            width: `${progressPercent}%`,     
            borderRadius: 'inherit',
            textAlign: 'right',
            backgroundImage: 'linear-gradient(101deg, #63FFE6, #A1A6FF)',
        },
    }));

    const classes = useStyles();

    var unitLabel = 'TBD'; //unit to show depending on chart (e.g. mins/pages)

    if (props.readTime) {
        unitLabel = `${props.value} mins`;
    } else if (props.pagesRead) {
        unitLabel = `${props.value} pages`;
    } else if (props.eventUnit) {
        unitLabel = `${props.value} ${props.eventUnit}`;
    } else
        unitLabel = 'TBD';
    
    return (
        <div className={classes.chartContainer}>
            <div className={classes.labelContainer}>
                <Typography className={classes.label}>{props.label}</Typography>
                <Typography className={classes.value}>{unitLabel}</Typography>
            </div>
            <div className={classes.progressBar}>
                <div className={classes.filler}></div>
            </div>
        </div>         
    )
}

export default BarCharts
