import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import { reducers } from './reducers';
import App from './App';
import { Authenticator } from '@aws-amplify/ui-react';


const store = createStore(reducers, compose(applyMiddleware(thunk)));

ReactDOM.render(
  <Provider store = {store}>
    <Authenticator.Provider>
    <App />
    </Authenticator.Provider>
  </Provider>
  ,
  document.getElementById('root')
);

