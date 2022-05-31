import React, { useState } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';


import { Authenticator } from '@aws-amplify/ui-react';
import '@aws-amplify/ui-react/styles.css';

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
import NovelEditingPage from './NovelEditingPage';
import NovelPageDistribution from './NovelPageDistribution';
import MessagePage from './MessagePage';

import { createTheme, ThemeProvider } from '@material-ui/core/styles';
import { lightTheme, darkTheme } from './themes';
import BackgroundDecoration from './components/Widgets/BackgroundDeco';
import {Amplify} from 'aws-amplify';
import awsconfig from './aws-exports';
Amplify.configure(awsconfig);
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
    console.log(t);
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

  const appliedTheme = createTheme(isThemeLight ? lightTheme : darkTheme)
  return (
      <>
      <ThemeProvider theme={appliedTheme}>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
        <link href="https://fonts.googleapis.com/css2?family=Readex+Pro:wght@200;300;400;500;600;700&display=swap" rel="stylesheet" />
        <BrowserRouter>
          <Switch>
            <Route exact path='/reading' component={ReadingPage} />
            <Route exact path='/writing' render={
              (props) => (<WritingPage {...props} theme={isThemeLight} passTheme={handlePassedTheme} />)
            } />

            <Route exact path="/mywriting">
              <Dashboard passTheme={handlePassedTheme} isMywritingPage={true} />
              <WritingTransitionPage />
              {/* <BackgroundDecoration /> */}
              <Footer />
            </Route>

            <Route exact path='/'>
              <Dashboard passTheme={handlePassedTheme} noShadowAtTop={true} />
              <Homepage />
              {/* <BackgroundDecoration /> */}
              <Footer />
            </Route>

            <div>
              <Dashboard passTheme={handlePassedTheme} />
              {/* <Route exact path='/' component={Homepage} /> */}
              <Route exact path="/search" component={SearchResults} />
              <Route exact path="/search/:search" component={SearchResults} />
              <Route exact path='/novel' component={NovelLandingPage} />
              <Route exact path='/profile' component={ProfilePage} />
              <Route exact path='/message' component={MessagePage} />
              <Route exact path='/browse' component={BrowsingPage} />
              <Route exact path='/rankings' render={
                (props) => (<RankingPage {...props} theme={isThemeLight} />)
              } />
              <Route path='/beta-reading' render={
                (props) => (<BetaReadingPage {...props} theme={isThemeLight} />)
              } />
              <Route exact path='/publit' component={PublitPage} />
              <Route exact path="/book/:bookId" component={NovelPageDistribution} />
              {/* <BackgroundDecoration /> */}
              <Footer />
            </div>
          </Switch>
        </BrowserRouter>
      </ThemeProvider>
      </>
  );
}



export default App;
