import React, { useState, useEffect } from 'react'
import { Link, useHistory, useLocation } from 'react-router-dom';
import Body from './components/HomePageBody/Body.jsx'
import WelcomePageBody from './components/WelcomePageBody/Body';
import { useAuthenticator } from '@aws-amplify/ui-react';

export default function HomePage() {

  const { user } = useAuthenticator(context => [context.user])
  const location = useLocation();
  useEffect(() => {
    // setUser(JSON.parse(localStorage.getItem('profile')));

  }, [location]);


  return (
    <>
      {user ? <Body /> : <WelcomePageBody />}

    </>
  )
}