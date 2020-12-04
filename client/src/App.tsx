import React from 'react';
import { Provider } from 'react-redux'
import  { store } from './redux/combinedStore'
import { LandingPage } from './components/landingPage/landingPage'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import { ProfilePage } from './components/ProfilePage/profilePage';
import { RenderProfilesList } from './components/RenderProfilesList';

function App() {
  return (
    <Provider store={store}>
    <Router>

        <Switch>

          <Route exact path="/">
            <LandingPage />
            <RenderProfilesList/>
          </Route>

          <Route path="/profile" component={ProfilePage}>
            <ProfilePage />
          </Route>

        </Switch>
    </Router>
    </Provider>
  );
}

export default App;
