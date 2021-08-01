import React, {useState,useEffect} from 'react'
import {Link, useHistory, useLocation} from 'react-router-dom';
import BetaReadingBody from './components/BetaReadingBody/BetaReadingBody.jsx'

export default function BetaReadingPage() {
  const [user, setUser] = useState(JSON.parse(localStorage.getItem('profile')));
  const location = useLocation();
  useEffect(() =>{
    setUser(JSON.parse(localStorage.getItem('profile')));
    
  }, [location]);
  
  
  return (
    <>
    <BetaReadingBody/> 
    
    </>
  )
}







