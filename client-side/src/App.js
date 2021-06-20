import React from 'react';
import {BrowserRouter, Switch, Route} from 'react-router-dom';

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

function App() {
  return (
    <>
      <BrowserRouter>
          <Switch>
            <Route exact path = '/reading' component = {ReadingPage} />
            <Route exact path = '/writing' component = {WritingPage} />
            <div>
              <Dashboard/>
              
              <Route exact path = '/' component = {Homepage} />
              <Route exact path = "/search" component = {SearchResults}/>
              <Route exact path = '/novel' component = {NovelLandingPage} />
              <Route exact path = '/profile' component = {ProfilePage}/>
              <Route exact path = '/browse' component = {BrowsingPage}/>
              <Route exact path = '/rankings' component = {RankingPage}/>
              <Footer/>
            </div>
          </Switch>
      </BrowserRouter>
    </>
  );
}

export default App;
