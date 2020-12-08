import React from 'react';
import { Provider } from 'react-redux'
import { store } from './redux/combinedStore'
import { LandingPage } from './components/landingPage/landingPage'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import { ProfilePage } from './components/ProfilePage/profilePage';
import { RenderProfilesList } from './components/RenderProfilesList';

import { Chat } from './components/Chat/chat';
import { Chats } from './components/Chats/chats';
import { Matches } from './components/Matches/matches';
import { Swiping } from './components/Swiping/swiping'


function App() {
  return (
    <Provider store={store}>
      <Router>
        <Switch>

          <Route path="/profile" component={ProfilePage} />

          <Route path="/swiping" component={Swiping} />

          <Route path="/matches" component={Matches} />

          <Route path="/chats" component={Chats} />

          <Route path="/chat" component={Chat} />

          <Route exact path="/">
            <LandingPage />
            <RenderProfilesList />
          </Route>

        </Switch>
      </Router>
    </Provider>
  );
}

export default App;
