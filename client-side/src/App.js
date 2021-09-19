import React, { useState } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Footer from './components/Footer/Footer';
import Dashboard from './components/Dashboard/Dashboard';
import SearchResults from './components/Search/SearchResults';

import Homepage from './Homepage';
import NovelLandingPage from './NovelLandingPage';
import ReadingPage from './ReadingPage';
import ProfilePage from './ProfilePage';
import WritingPage from './WritingPage';
import WritingTransitionPage from './WritingTransitionPage';
import BrowsingPage from './BrowsingPage';
import RankingPage from './RankingPage';
import BetaReadingPage from './BetaReadingPage';
import PublitPage from './PublitPage';


import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles';
import { lightTheme, darkTheme } from './themes';

function App() {
  const [isThemeLight, setTheme] = useState(true);
  const handlePassedTheme = (t) => {

    if (!window.localStorage) {
      alert("The browser does not support localstorage");
      return false;
    } else {
      localStorage.setItem("Theme", t);
    }
    setTheme(t);
    // console.log(t);
    // let lt = localStorage.getItem("Theme");
    // if (lt) {
    //   setTheme(true);
    // } else {
    //   setTheme(false);
    // }
    // setTheme(lt);
    // console.log(lt);
  }
  // setTime(() => {localStorage.getItem("Theme");

  const appliedTheme = createMuiTheme(isThemeLight ? lightTheme : darkTheme)
  return (
    <>
      <ThemeProvider theme={appliedTheme}>
        <BrowserRouter>
          <Switch>
            <Route exact path='/reading' component={ReadingPage} />
            <Route exact path='/writing' render={
              (props) => (<WritingPage {...props} theme={isThemeLight} />)
            } />

            <Route exact path="/mywriting">
              <Dashboard passTheme={handlePassedTheme} isMywritingPage={true}/>
              <WritingTransitionPage />
              <Footer />
            </Route>

            <div>
              <Dashboard passTheme={handlePassedTheme} />
              <Route exact path='/' component={Homepage} />
              <Route exact path="/search" component={SearchResults} />
              <Route exact path='/novel' component={NovelLandingPage} />
              <Route exact path='/profile' component={ProfilePage} />
              <Route exact path='/browse' component={BrowsingPage} />
              <Route exact path='/rankings' render={
                (props) => (<RankingPage {...props} theme={isThemeLight} />)
              } />
              <Route path='/beta-reading' render={
                (props) => (<BetaReadingPage {...props} theme={isThemeLight} />)
              } />
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
