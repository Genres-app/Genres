import React from 'react';
import { useAuthenticator } from '@aws-amplify/ui-react';

import ProfileBody from './components/ProfilePage/ProfileBody/ProfileBody.jsx';

export default function ProfilePage() {
  //FIXME: should fetch user object from db which contains information on logged in user
  const {user} = useAuthenticator(context=>[context.user])
  return (
    <>
      {user? <ProfileBody user={user}/> : undefined}
    </>
  )

  console.log(user)
  // Basic Profile Page with some user information
  // can be changed once we have a design - Yining
  return (
    <>
      {user? <div>
        <div>name:{user.attributes.name}</div>
        <div>email:{user.attributes.email}</div>
        <div>birthdate:{user.attributes.birthdate}</div>
      </div> : undefined}
    </>
  )
}
