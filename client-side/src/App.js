import React, {useState} from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Footer from './components/Footer/Footer';
import Dashboard from './components/Dashboard/Dashboard';
import SearchResults from './components/Search/SearchResults';

import Homepage from './Homepage';
import NovelLandingPage from './NovelLandingPage';
import ReadingPage from './ReadingPage';
import ProfilePage from './ProfilePage';
import WritingPage from './WritingPage';
import BrowsingPage from './BrowsingPage';
import RankingPage from './RankingPage';
import BetaReadingPage from './BetaReadingPage';
import PublitPage from './PublitPage';


import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles';
import {lightTheme, darkTheme} from './themes';

function App() {
  const [isThemeLight, setTheme] = useState(true);
  const handlePassedTheme = (t) => {
    console.log(t);
    setTheme(t);
  }
  
  const appliedTheme = createMuiTheme(isThemeLight ? lightTheme : darkTheme)
  return (
    <>
    
    <ThemeProvider theme={appliedTheme}>
      <BrowserRouter>
        <Switch>
          <Route exact path='/reading' component={ReadingPage} />
          <Route exact path='/writing' component={WritingPage} />
          <div>
            <Dashboard passTheme={handlePassedTheme}/>

            <Route exact path='/' component={Homepage} />
            <Route exact path="/search" component={SearchResults} />
            <Route exact path='/novel' component={NovelLandingPage} />
            <Route exact path='/profile' component={ProfilePage} />
            <Route exact path='/browse' component={BrowsingPage} />
            <Route exact path='/rankings' component={RankingPage} />
            <Route exact path='/beta-reading' component={BetaReadingPage} />
            <Route exact path='/publit' component={PublitPage} />
            <Footer />
          </div>
        </Switch>
      </BrowserRouter>
      </ThemeProvider>
    </>
  );
}



export default App;
