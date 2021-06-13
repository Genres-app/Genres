import React from 'react';

import RPReadingBar from './components/ReadingPage/RPReadingBar';
import RPChapterSample from './components/ReadingPage/RPChapterSample';
import RPChapterComments from './components/ReadingPage/RPChapterComments.jsx';

export default function ReadingPage() {
  return (
    <>
      <RPReadingBar />
      <RPChapterSample />
      <div id='comments'>
        <RPChapterComments />
      </div>
    </>
  )
}