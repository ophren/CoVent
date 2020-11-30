import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Provider } from 'react-redux'
import { store } from './redux/combinedStore'
import { LandingPage } from './components/landingPage/landingPage'

function App() {
  return (
    <Provider store={store}>

      <LandingPage/>
    </Provider>
  );
}

export default App;
