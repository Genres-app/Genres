import React from 'react';
import WPEditor from './components/WritingPage/WPEditor';

const WritingPage = ({theme, passTheme}) => {
  return (
    <div>
      <WPEditor theme={theme} passTheme={passTheme}/>
    </div>
  )
}

export default WritingPage
