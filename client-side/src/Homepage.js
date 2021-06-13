import React, {useState,useEffect} from 'react'
import {Link, useHistory, useLocation} from 'react-router-dom';
import Body from './components/HomePageBody/Body.jsx'
import WelcomePageBody from './components/WelcomePageBody/Body';

export default function HomePage() {
  const [user, setUser] = useState(JSON.parse(localStorage.getItem('profile')));
  const location = useLocation();
  useEffect(() =>{
    setUser(JSON.parse(localStorage.getItem('profile')));
    
  }, [location]);
  
  
  return (
    <>
    {user? <Body/> : <WelcomePageBody/>}
    
    </>
  )
}