import React from 'react';
import { useState } from 'react';
import { useParams } from 'react-router';
import { BookLib } from './components/BookLib';
import NovelLandingPage from './NovelLandingPage';
import NovelEditingPage from './NovelEditingPage';


export default function NovelPageDistribution() {
  const [user, setUser] = useState(JSON.parse(localStorage.getItem('profile')));
  const { bookId } = useParams();

  /*For Testing*/
  let userId = 2

  return (
    <>
      {
        BookLib[bookId].author.includes(userId) ?
          <NovelEditingPage />
          :
          <NovelLandingPage />
      }
    </>
  );
}