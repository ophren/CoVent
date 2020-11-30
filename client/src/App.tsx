import React from 'react';
import SignIn from './login/SignIn';
import SignUp from './login/SignUp';
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer } from "react-toastify";
import { useState } from 'react';
import './App.css';
import { Provider } from 'react-redux'
import { store } from './redux/combinedStore'
import { LandingPage } from './components/landingPage/landingPage'

function App () {

  const [isLoggedIn, setIsLoggedIn] = useState(false);

  return (
    <Provider store={store}>

      <LandingPage/>
    </Provider>
  );
}

export default App;
