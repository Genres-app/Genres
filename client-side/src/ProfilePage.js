import React from 'react';

import ProfileBody from './components/ProfilePage/ProfileBody/ProfileBody.jsx';

export default function ProfilePage() {
  //FIXME: should fetch user object from db which contains information on logged in user
  const [user, setUser] = React.useState(JSON.parse(localStorage.getItem('profile')));

  return (
    <>
      {user? <ProfileBody user={user}/> : undefined}
    </>
  )
}
