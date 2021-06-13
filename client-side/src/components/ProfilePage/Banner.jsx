import React from 'react'
import {Typography, Button, Grid, Container} from '@material-ui/core';
import SettingsIcon from '@material-ui/icons/Settings';
import EditIcon from '@material-ui/icons/Edit';
import {makeStyles} from '@material-ui/core/styles';

import AboutBookmark from './AboutBookmark.jsx';
import AboutBanner from './AboutBanner.jsx';
import RadialCharts from './RadialCharts.jsx';
import BarCharts from './BarCharts.jsx';

import {useSelector, useDispatch} from 'react-redux';
import {changeBannerPic} from '../../actions/profile'

//ABOUT: The banner displayed if on profile page and viewport width > 1024.
const useStyles = makeStyles((theme) => ({
      container: {
        backgroundColor: theme.palette.background.paper,
        padding: '0px 0px 0px 0px',
      },
      banner: {
        paddingRight: '10%',
        paddingLeft: '10%',
        backgroundColor: 'white',
        height: '270px',
        '@media (max-width:1024px)': {
          padding: '10px 5% 0px 5%',
          height: '370px',
        },
      },
      bannerProfilePadding: {
        paddingTop: '20px',
      },
      bannerImg: {
        position: 'absolute',
        width: '100%',
        height: '270px',
        objectFit: 'cover',
        '@media (max-width:1024px)': {
          height: '370px',
        },
      },
      bannerContainer: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'flex-start',
      },
      placeHolder: {
        //placeHolder width should match aboutContainer width in About.jsx
        height: '1px',
        width: '286px',
        minWidth: '286px',
        '@media (max-width:1024px)': { 
          display: 'none',
        },
      },
      bannerItems: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'flex-end',
        flexWrap: 'wrap',
        width: '100%',
        minWidth: '150px',
        maxWidth: '1200px',
        maxHeight: '260px',
        zIndex: 1,
        '@media (max-width:1024px)': {
          display: 'none',
        },
      },
      icons: {
        paddingRight: '4px',
      },
      bannerButton: {
        color: 'white',
        width: '120px',
        fontSize: '10px',
        fontWeight: '400',
        borderRadius: '0px',
        paddingRight: '15px',
        paddingLeft: '15px',
        backgroundColor: 'rgba(31,41,40,0.6)',
        transition: 'all 0.2s ease 0s',
        cursor: 'pointer',
        "&:hover":{
          backgroundColor: 'rgba(31,41,40,0.8)',
        }
      },
      profileName: {
        fontSize: '32px',
        fontWeight: '100',
        color: theme.palette.background.paper,
        '@media (max-width:480px)': {
          fontSize: '24px',
        },
      },
      userName: {
        fontSize: '13px',
        fontWeight: '400',
        color: theme.palette.background.paper,
      },
      proTag: {
        backgroundColor: '#F2C94C',
        height: '18px',
        width: '40px',
        textAlign: 'center',
        color: '#F5F5F5',
        borderRadius: '2px',
        paddingTop: '2px',
        marginTop: '2px',
        marginLeft: '8px',
        fontSize: '11px',
        fontWeight: '500',
      },
      bannerButtonArea: {
        paddingTop: '15%',
        '@media (max-width:1200px)': {
          paddingTop: '8%',
        },
        '@media (max-width:1024px)': {
          paddingTop: '4%',
        },
        '@media (max-width:480px)': {
          paddingTop: '10%',
        },
      },
      ribbonContainer:{
        position: 'relative',
        paddingRight: '30px',
        '@media (max-width:1024px)': {
          paddingRight: '0px',
        },
      },
      nameContainer:{
        position: 'relative',
        backgroundColor: 'rgba(31,41,40,0.6)',
        padding: '10px 15px 12px 30px',
        '@media (max-width:1024px)': {
          borderRadius: '5px',
          paddingRight: '30px',
        },
      },
      ribbonTail:{
        position: 'absolute',
        backgroundColor: 'none',
        height: '100%',
        width: '30px',
        top: '0',
        right: '0',
        bottom: '0',
        borderRight: '30px solid transparent',
        borderTop: '41px solid rgba(31,41,40,0.6)',
        borderBottom: '41px solid rgba(31,41,40,0.6)',
        '@media (max-width:1024px)': {
          display: 'none',
        },
      },
      aboutBanner: {
        '@media (max-width:1024px)': {
          display: 'block',
        },
      },
      radialCharts: {
        display: 'flex',
        justifyContent: 'center',
        '@media (max-width:1024px)': {
          display: 'none',
        },
      },
      barCharts: {
        display: 'none',
        width: '100%',
        '@media (max-width:1024px)': {
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'flex-start',
        },
      },
}));

const Banner = (props) => {
    const classes = useStyles();

    const bannerPic = useSelector(state => state.bannerPic);

    const dispatch = useDispatch();

    const handleBannerPicChange = ({ target }) => {
      const reader = new FileReader();
      if(target.files[0]) {
      reader.readAsDataURL(target.files[0]);
      reader.onloadend = () => dispatch(changeBannerPic(reader.result));
      }
    };

    return (
        <Container className = {classes.container} maxWidth = "xl">
            {/* Banner image to be changed by user */}
            <img className = {classes.bannerImg} src={bannerPic} alt='banner'></img>
            <div className = {`${classes.banner} ${props.selectedTab === 0? classes.bannerProfilePadding: undefined}`}>

                {/* About/bookmark */}
                {props.selectedTab === 0 && 
                    <AboutBookmark user={props.user}></AboutBookmark>
                }

                {/* Container to organize banner items if width > 1024 */}
                {props.selectedTab === 0 && 
                <div className = {classes.bannerContainer}>
                    {/* Invisible div for bookmark so it doesn't go over other elements when viewport is scaled down */}
                    <div className = {classes.placeHolder}></div>

                    <div className = {classes.bannerItems}>

                        <div className={classes.ribbonContainer}>
                          <div className={classes.ribbonTail}></div>

                          <div className = {classes.nameContainer}>        
                              <div style={{display: 'flex'}}>
                                  {/*FIXME: change code to get user's name based on appropriate db schema of passed in user prop*/}
                                  <Typography className = {classes.profileName} variant = "h4" align="left">{props.user.result.name}</Typography>
                                  {/*FIXME:  dynamically display pro tag if user is a pro user, based on isPro bool in passed in user prop*/}
                                  <div className={classes.proTag}>PRO</div>
                              </div>
                              {/*FIXME: change code to get username based on appropriate db schema of passed in user prop*/}
                              <Typography className = {classes.userName} variant = "h6" align="left">@{props.user.result.username}</Typography>
                          </div>
                        </div>

                        <div className = {classes.bannerButtonArea}>
                            <Grid container spacing = {2} justify="center">
                                <Grid item>
                                    <input
                                        accept="image/*"
                                        style={{ display: 'none' }}
                                        id="bannerImage"
                                        multiple
                                        type="file"
                                        onChange={handleBannerPicChange}
                                    />
                                    <label htmlFor="bannerImage">
                                        <Button component="span" className = {classes.bannerButton}>
                                            <EditIcon className = {classes.icons} fontSize='small'></EditIcon>Edit Banner
                                        </Button>
                                    </label>
                                </Grid>
                                <Grid item>
                                    <Button className = {classes.bannerButton}>
                                        <SettingsIcon className = {classes.icons} fontSize='small'></SettingsIcon>Settings
                                    </Button>
                                </Grid>
                            </Grid>
                        </div>
                    </div>
                </div>
                }

                {/* Display About section in banner if width <= 1024 */}
                {props.selectedTab === 0 && 
                  <AboutBanner className={classes.aboutBanner} user={props.user}></AboutBanner>
                }

                {/* Display charts if on Activity page */}
                {props.selectedTab === 1 && 
                  <div>
                    {/* Display radial charts if width > 1024 */}
                    <div className={classes.radialCharts}>
                      {/*FIXME:  fetch readTime and readTotal from user's recorded values in db */}
                      <RadialCharts 
                        value={props.readTime} 
                        total={props.readTotal} 
                        readTime={true} 
                        label={'Weekly Read Time'}
                      ></RadialCharts>
                      {/*FIXME:  fetch pagesRead and pagesTotal from user's recorded values in db */}
                      <RadialCharts 
                        value={props.pagesRead} 
                        total={props.pagesTotal} 
                        pagesRead={true} 
                        label={'Pages Read'}
                      ></RadialCharts>
                      {/*FIXME:  if an ongoing event exists, fetch values from db */}
                      <RadialCharts 
                        value={props.chartEvent? props.eventValue:0} 
                        total={props.chartEvent? props.eventTotal:100} 
                        eventUnit={props.chartEvent? props.eventUnit: false}
                        label={'Current Event'}
                      ></RadialCharts>
                    </div>

                    {/* Display bar charts if width <= 1024 */}
                    <div className={classes.barCharts}>
                      {/*FIXME:  fetch readTime and readTotal from user's recorded values in db */}
                      <BarCharts
                        value={props.readTime} 
                        total={props.readTotal} 
                        readTime={true} 
                        label={'Weekly Read Time'}
                      ></BarCharts>
                       {/*FIXME:  fetch pagesRead and pagesTotal from user's recorded values in db */}
                      <BarCharts
                        value={props.pagesRead} 
                        total={props.pagesTotal} 
                        pagesRead={true} 
                        label={'Pages Read'}
                      ></BarCharts>
                      {/*FIXME:  if an ongoing event exists, fetch values from db */}
                      <BarCharts
                        value={props.chartEvent? props.eventValue:0} 
                        total={props.chartEvent? props.eventTotal:100} 
                        eventUnit={props.chartEvent? props.eventUnit: false}
                        label={'Current Event'}
                      ></BarCharts>
                    </div>
                  </div>
                }
            </div>
        </Container>
    )
}

export default Banner
