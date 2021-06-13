import React, {useState, useEffect} from 'react'
import useStyles from './styles';
import {ListItems} from './listItems';
import {Typography, AppBar, Button,  CssBaseline, Toolbar} from '@material-ui/core';
import {useDispatch} from 'react-redux';
import MenuIcon from '@material-ui/icons/Menu';
import ClosePageIcon from '@material-ui/icons/Close';
import GenresLogo from '../Assets/logo-svg2.svg';
import {Link, useHistory, useLocation} from 'react-router-dom';
import decode from 'jwt-decode';
import styled from 'styled-components';
import Popup from '../Auth/Popup';
import Auth from '../Auth/Auth';
import AccountCircle from '@material-ui/icons/AccountCircle';
import CreateIcon from '@material-ui/icons/Create';
import Searchbar from '../Searchbar/Searchbar'


const SidebarLink = styled(Link)`
  display: flex;
  color: black;
  justify-content: left;
  align-items: center;
  padding: 15px;
  list-style: none;
  height: 55px;
  text-decoration: none;
  font-size: 16px;
  &:hover {
    background: lavender;
    border-left: 4px solid #55fccf;
    cursor: pointer;
  }
`;

const SidebarLabel = styled.span`
  margin-left: 40px;
`;

const SidebarIcon = styled.span`
  margin-top: 3px;
  margin-left: 10.5px;
`;

const NavIcon = styled(Link)`
  color: black;
  font-size: 2rem;
  margin-right: 15px;
  height: 80px;
  display: flex;
  justify-content: flex-start;
  align-items: center;
`;

const CloseIcon = styled(Link)`
  color: black;
  margin-left: 1.6rem;
  font-size: 2rem;
  height: 80px;
  display: flex;
  justify-content: flex-start;
  align-items: center;
`;

const SidebarNav = styled.nav`
  background: white;
  width: 240px;
  height: 100vh;
  display: flex;
  justify-content: center;
  position: fixed;
  top: 0;
  left: ${({ sidebar }) => (sidebar ? '0' : '-100%')};
  transition: 250ms;
  z-index: 10;
  filter: drop-shadow(0 0 5px #9999);
`;

const SidebarWrap = styled.div`
  width: 100%;
`;

const Dashboard = () => {
    const classes = useStyles();
    const [user, setUser] = useState(JSON.parse(localStorage.getItem('profile')));
    const [openPopup, setOpenPopup] = useState(false);
    const [sidebar, setSidebar] = useState(false);
    const showSidebar = () => setSidebar(!sidebar);    
    const dispatch = useDispatch();
    const history = useHistory();
    const location = useLocation();
    const genres = ["Action","Fantasy","Science-Fiction","Romance", "Mystery", "Horror", "Thriller", "Fiction", "Dystopian"];

    const logout = () => {
      dispatch({type: 'LOGOUT'});
      history.push('/');

      setUser(null);
    };

    const switchPopup = () => {
      setOpenPopup((openPopup) => !openPopup);
    };

    useEffect(() =>{
      const token = user?.token;
      //JWT
      
      if(token) {
        const decodedToken = decode(token);
        if (decodedToken.exp*1000 < new Date().getTime()) logout();
      }


      setUser(JSON.parse(localStorage.getItem('profile')));
      setOpenPopup(false);
    }, [location]);
  
  return (
    <div className={classes.root}>
      <CssBaseline />
      <AppBar position="relative" style = {{background: 'lavender'}}elevation = {0}>
        <Toolbar className={classes.toolbar}>
        {
                user ? (
                    <>
                    <NavIcon>
              <MenuIcon onClick = {showSidebar}/>
          </NavIcon>
          

          <SidebarNav sidebar = {sidebar}>
            <SidebarWrap>
            <CloseIcon>
                <ClosePageIcon onClick = {showSidebar}/>
            </CloseIcon>

            {ListItems.map((item, index) => {
              return (
                <SidebarLink to={item.path} key = {index}>
                  {/* <div> */}
                  <SidebarIcon>{item.icon}</SidebarIcon>
                  <SidebarLabel>{item.title}</SidebarLabel>
                  {/* </div> */}
                </SidebarLink>
              );
            })}
          
          </SidebarWrap>
        </SidebarNav>
                    </>
                ) : (
                    <></>
                )
          }


          
          <Link to = "/">
          <img src = {GenresLogo} height = '50px' alt = ""></img>
          </Link>

          
            
          <Typography variant="h6" className={classes.title}></Typography>  
          
          {
                user ? (
                    <>
                    <Searchbar items = {genres}/>
                    </>
                ) : (
                    <Typography></Typography>
                )
          }
            
            <Typography variant="h6" className={classes.title}>
            </Typography>
            {
                user ? (
                  /* <Avatar className = {classes.profile} alt ={user.result.username} src = {user.result.imageUrl}>{user.result.username.charAt(0)}</Avatar>
                   <Button variant = "contained" className={classes.button} onClick ={logout}>Logout</Button> */
                    <>
                        <Link to="/writing">
                        <CreateIcon fontSize ="large" className = {classes.accountCircle}/>
                        </Link>
                        <Link to= "/profile">
                        <AccountCircle fontSize = "large" className= {classes.accountCircle}/>
                        </Link>
                        <Button variant = "contained" className={classes.buttonOutline} onClick ={logout}>Logout</Button>
                        
                    </>


                ) : (
                    <Button onClick = {() => setOpenPopup(true)} className = {classes.buttonOutline} >Sign in</Button>
                )
            }
            <Popup openPopup = {openPopup}  setOpenPopup = {setOpenPopup}>
              <Auth  value = {openPopup} onChange = {switchPopup} />
            </Popup>
        </Toolbar>
      </AppBar>
    </div>
  );
}

export default Dashboard
