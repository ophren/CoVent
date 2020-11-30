import React from 'react';
import './App.css';
import { Provider } from 'react-redux'
import { store } from './redux/combinedStore'
import { LandingPage } from './components/landingPage/landingPage'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'

function App() {
    return (
      <Provider store={store}>
        <Router>
          <Switch>
            <Route path="/">
              <LandingPage />
            </Route>
          </Switch>
        </Router>
      </Provider>
    );
  }

export default App;
